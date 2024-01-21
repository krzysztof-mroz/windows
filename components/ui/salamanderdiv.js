import { useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";

function salamanderdiv() {
  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: 1536 > window.innerWidth ? window.innerWidth : 1536,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">



      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/profiles/bluevolution_82.png"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Salamander BluEvolution 82, 6 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Bautiefe 82 mm</li>
              <li>6-Kammer-Profil</li>
              <li>
              bis zu Uw = 0,73 W/(m²K)
              </li>
              <li>Verglasung: bis 52mm</li>
              <li>Schallreduzierung um bis zu 47 dB</li>
              <li>hervorragende Energieeinsparung und innovative Dichtungstechnologie</li>
              <li>umlaufendes Anschlagdichtungssystem in Rahmen und Flügel</li>
              <li>
              Einbruchhemmung: bis RC 2
              </li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/profiles/bluevolution_82_tuer.png"></img>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 450, maxHeight: 550 }}
            src="./pics/sections/bluevolution82.png"
          ></img>
        </div>
      </div>



      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/profiles/bluevolution_92.png"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Salamander BluEvolution 92, 6 Kammer, Mitteldichtung</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Bautiefe 92 mm</li>
              <li>6-Kammer-Profil</li>
              <li>
              bis zu Uw = 0,70 W/(m²K)
              </li>
              <li>Verglasung: bis 60mm</li>
              <li>Schallreduzierung um bis zu 47 dB</li>
              <li>hervorragende Energieeinsparung und innovative Dichtungstechnologie</li>
              <li>umlaufendes Mitteldichtungssystem</li>
              <li>
              Einbruchhemmung: bis RC 3
              </li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/profiles/bluevolution_92_tuer.png"></img>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 450, maxHeight: 550 }}
            src="./pics/sections/bluevolution92.png"
          ></img>
        </div>
      </div>



  

     

      
    </div>
  );
}

export default salamanderdiv;
