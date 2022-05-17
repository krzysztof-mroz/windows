import React from 'react'
import styles from './carousel.module.css' 
import { useState, useEffect } from "react";

const Carousel = (props) => {
    const {children, show} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            next()
        }
    
        if (diff < -5) {
            prev()
        }
    
        setTouchPosition(null)
    }



    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show +2)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }


    return (
        <div className="flex tl flex-wrap tl justify-start mb1 ma2 ma3-l w-100 ">
        <h4 className="mh2">{props.title}</h4>
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
            { currentIndex > 0 &&
            <button onClick={prev} className={styles.leftArrow}>
                &lt;
              </button>}
                <div className={styles.carouselContentWrapper} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className={styles.carouselContent}  style={{ transform: `translateX(-${currentIndex * (100 )}%)`,  width: `calc(100% / ${show})` }}>

                        {children}
                    </div>
                </div>
                {currentIndex < (length - show) &&
                <button onClick={next} className={styles.rightArrow}>
                &gt;
              </button>}
            </div>
        </div>
        </div>
    )
}

export default Carousel