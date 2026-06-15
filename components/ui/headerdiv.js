import { useState, useEffect } from "react";
import Link from "next/link";
import CTAButton from "./CTAButton";
import { useRouter } from 'next/router';
import HeaderContactBar from "./headercontactbar";

function Header(props) {
  const { title, subtitle, ifAnfrage, heroSlides = [], heroPlaceholder, ctaActions } = props;
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlideTransitionEnabled, setIsSlideTransitionEnabled] = useState(true);
  const hasHeroSlides = Array.isArray(heroSlides) && heroSlides.length > 0;

  const slides = [
    { src: "/pics/werbung_fensterpreis.jpg", alt: "Fenster Preise" },
    { src: "/pics/fenster_eigenschaften.jpg", alt: "Fenster Farben" },
    { src: "/pics/beschattung_werbung.jpg", alt: "Beschattung Rollläden, Raffstoren" },
    { src: "/pics/haustuer_werbung.jpg", alt: "Haustür Kunststoff und Alu" },
  ];

  const slidesMobile = [
    { src: "/pics/werbung_fensterpreis_mobile.jpg", alt: "Fenster Preise" },
    { src: "/pics/fenster_eigenschaften_mobile.jpg", alt: "Fenster Farben" },
    { src: "/pics/beschattung_werbung_mobile.jpg", alt: "Beschattung Rollläden, Raffstoren" },
    { src: "/pics/haustuer_werbung_mobile.jpg", alt: "Haustür Kunststoff und Alu" },
  ];

  const slideCount = hasHeroSlides ? heroSlides.length : slides.length;
  const heroSlidesWithLoop = hasHeroSlides
    ? [heroSlides[slideCount - 1], ...heroSlides, heroSlides[0]]
    : [];
  const activeHeroSlide = hasHeroSlides
    ? ((currentSlide % slideCount) + slideCount) % slideCount
    : currentSlide;

 useEffect(() => {
    if (slideCount < 2) {
      return undefined;
    }

    const interval = setInterval(() => {
      setIsSlideTransitionEnabled(true);
      setCurrentSlide((prevSlide) => (
        hasHeroSlides ? prevSlide + 1 : (prevSlide + 1) % slideCount
      ));
    }, 6000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [hasHeroSlides, slideCount]);

  useEffect(() => {
    if (!hasHeroSlides || (currentSlide !== slideCount && currentSlide !== -1)) {
      return undefined;
    }

    const resetLoop = setTimeout(() => {
      setIsSlideTransitionEnabled(false);
      setCurrentSlide(currentSlide === slideCount ? 0 : slideCount - 1);
    }, 700);

    return () => clearTimeout(resetLoop);
  }, [currentSlide, hasHeroSlides, slideCount]);

  const handlePrevSlide = () => {
    setIsSlideTransitionEnabled(true);
    setCurrentSlide((prevSlide) => (prevSlide <= -1 ? -1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setIsSlideTransitionEnabled(true);
    setCurrentSlide((prevSlide) => (prevSlide >= slideCount ? slideCount : prevSlide + 1));
  };

  const handleClick = () => {
    router.push('/kontakt/anfrage');
  };

  return (
    <div className="flex flex-wrap justify-center w-100">
      <HeaderContactBar />

      {/* IKONKI I TYTUL STRONY */}
      <div className="headerMainVisual w-100 fl tc mv1">
     {/* REKLAMY W SLAJDACH:
        <div className="dn db-l hover-w3-border-orange relative">
          <img 
            className="mr1 grow shadow-hover" 
            src={slides[currentSlide].src}
            onClick={handleClick}
            alt={slides[currentSlide].alt}
          />
          <button onClick={handlePrevSlide} className="arrow left-arrow">&#10094;</button>
          <button onClick={handleNextSlide} className="arrow right-arrow">&#10095;</button>
        </div>

        <div className="db dn-l hover-w3-border-orange relative">
          <img 
            className="mr1 grow shadow-hover" 
            src={slidesMobile[currentSlide].src}
            onClick={handleClick}
            alt={slidesMobile[currentSlide].alt}
          />
          <button onClick={handlePrevSlide} className="arrow left-arrow">&#10094;</button>
          <button onClick={handleNextSlide} className="arrow right-arrow">&#10095;</button>
        </div> */}
        {hasHeroSlides ? (
          <div className="doorHeroSlider relative">
            <div
              className="doorHeroTrack flex"
              style={{
                transform: `translateX(-${(currentSlide + 1) * 100}%)`,
                transition: isSlideTransitionEnabled ? undefined : "none",
              }}
            >
              {heroSlidesWithLoop.map((slide, index) => (
                <div className="doorHeroSlide relative" key={`${slide.src}-${index}`}>
                  <img className="doorHeroImage" src={slide.src} alt={slide.alt} />
                  {(slide.tag || slide.caption) && (
                    <div className="doorHeroOverlay">
                      {slide.tag && <span className="doorHeroTag">{slide.tag}</span>}
                      {slide.caption && <p className="doorHeroCaption">{slide.caption}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              aria-label="Vorheriges Türbild"
              className="doorHeroArrow doorHeroArrowLeft"
              onClick={handlePrevSlide}
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Nächstes Türbild"
              className="doorHeroArrow doorHeroArrowRight"
              onClick={handleNextSlide}
              type="button"
            >
              ›
            </button>
            <div className="doorHeroDots">
              {heroSlides.map((slide, index) => (
                <span
                  aria-label={`Türbild ${index + 1}`}
                  aria-current={index === activeHeroSlide ? "true" : undefined}
                  className={`doorHeroDot ${index === activeHeroSlide ? "doorHeroDotActive" : ""}`}
                  key={slide.src}
                />
              ))}
            </div>
          </div>
        ) : heroPlaceholder ? (
          <div className="headerHeroPlaceholder">
            <div className="headerHeroPlaceholderInner">
              <span className="headerHeroPlaceholderKicker">
                {heroPlaceholder.kicker || "Innentüren"}
              </span>
              <p>{heroPlaceholder.text || "Herofoto folgt"}</p>
            </div>
          </div>
        ) : (
          <div className={ifAnfrage === 'yes' ? 'dn db-l relative' : ''}>
          <video
          src="/movies/living.mp4" 
          autoPlay 
          loop 
          muted
          playsInline 
          controls={false} 
          style={{ width: "100%", height: "auto" }}
          type="video/mp4"/>
          </div>
        )}
           

        <h1 className="fl f2 ma1 mt3-l w-100 tc">{title}</h1>
        <h2 className="fl f4 ma1 w-100 tc">{subtitle}</h2>
      </div>

      <div className="flex justify-center w-100">
        {" "}
        {/* Center the row horizontally */}
        <div className="db dn-l tc w-100 b--moon-gray">
        <p className="mobileProfileLinks gray f6">
          <Link href="/aluplast">
            <a className="f6 fw4 no-underline db">Aluplast</a>
          </Link>
          <Link href="/schuecopvc">
            <a className="f6 fw4 no-underline db">Schüco</a>
          </Link>
          <Link href="/salamander">
            <a className="f6 fw4 no-underline db">Salamander</a>
          </Link>
          <Link href="/aluprof">
            <a className="f6 fw4 no-underline db">Aluprof</a>
          </Link>
          </p>
        </div>
      </div>
      {ifAnfrage != "yes" && <CTAButton actions={ctaActions} />}
     {/*  <AktionRabatt /> */}
      <style jsx>{`
        .headerMainVisual {
          max-width: 760px;
        }
        .doorHeroSlider {
          background: #f6f2ec;
          overflow: hidden;
          aspect-ratio: 3 / 2;
          margin-left: 0.75rem;
          margin-right: 0.75rem;
          width: calc(100% - 1.5rem);
        }
        .doorHeroTrack {
          height: 100%;
          transition: transform 0.65s ease;
          will-change: transform;
        }
        .doorHeroSlide {
          flex: 0 0 100%;
          height: 100%;
        }
        .doorHeroImage {
          display: block;
          height: 100%;
          object-fit: cover;
          width: 100%;
        }
        .doorHeroOverlay {
          bottom: 1rem;
          left: 1rem;
          max-width: calc(100% - 2rem);
          position: absolute;
          text-align: left;
        }
        .doorHeroTag {
          background: rgba(213, 119, 22, 0.94);
          color: #fff;
          display: inline-block;
          font-weight: 700;
          padding: 0.45rem 0.7rem;
        }
        .doorHeroCaption {
          background: rgba(255, 255, 255, 0.9);
          color: #222;
          display: inline-block;
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1.35;
          margin: 0.45rem 0 0;
          padding: 0.45rem 0.7rem;
        }
        .doorHeroArrow {
          align-items: center;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(0, 0, 0, 0.16);
          color: #222;
          cursor: pointer;
          display: flex;
          font-size: 1.8rem;
          height: 2.25rem;
          justify-content: center;
          line-height: 1;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 2.25rem;
          z-index: 2;
        }
        .doorHeroArrowLeft {
          left: 0.75rem;
        }
        .doorHeroArrowRight {
          right: 0.75rem;
        }
        .doorHeroDots {
          bottom: 0.65rem;
          display: flex;
          gap: 0.4rem;
          justify-content: center;
          left: 0;
          position: absolute;
          right: 0;
          z-index: 2;
        }
        .doorHeroDot {
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(0, 0, 0, 0.18);
          height: 0.55rem;
          padding: 0;
          width: 1.35rem;
        }
        .doorHeroDotActive {
          background: #d57716;
          border-color: #d57716;
        }
        .mobileProfileLinks {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem 0.8rem;
          justify-content: center;
          margin: 0.9rem 0 0;
          padding: 0 0.75rem;
        }
        .mobileProfileLinks a {
          white-space: nowrap;
        }
        .headerHeroPlaceholder {
          align-items: center;
          aspect-ratio: 3 / 2;
          background:
            linear-gradient(135deg, rgba(36, 42, 48, 0.88), rgba(70, 75, 80, 0.66)),
            repeating-linear-gradient(
              90deg,
              #f1ede7 0,
              #f1ede7 12px,
              #e2dbd2 12px,
              #e2dbd2 13px
            );
          color: #fff;
          display: flex;
          justify-content: center;
          margin-left: 0.75rem;
          margin-right: 0.75rem;
          text-align: center;
          width: calc(100% - 1.5rem);
        }
        .headerHeroPlaceholderInner {
          border: 1px solid rgba(255, 255, 255, 0.42);
          padding: 1rem 1.25rem;
        }
        .headerHeroPlaceholderKicker {
          display: block;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0;
        }
        .headerHeroPlaceholder p {
          margin: 0.35rem 0 0;
        }
        @media (min-width: 48rem) {
          .doorHeroSlider {
            margin-left: 0;
            margin-right: 0;
            width: 100%;
          }
          .headerHeroPlaceholder {
            margin-left: 0;
            margin-right: 0;
            width: 100%;
          }
        }
        @media (max-width: 48rem) {
          .doorHeroOverlay {
            bottom: 0.8rem;
            left: 0.8rem;
          }
          .doorHeroCaption {
            font-size: 0.85rem;
          }
          .doorHeroArrow {
            font-size: 1.55rem;
            height: 2rem;
            width: 2rem;
          }
          .doorHeroArrowLeft {
            left: 0.5rem;
          }
          .doorHeroArrowRight {
            right: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
