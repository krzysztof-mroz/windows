import { useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";

function aluplastdiv() {
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
          <img src="./pics/profiles/aluplast_ideal_4000.png"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Aluplast Ideal 4000, 5 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Bautiefe 70 mm</li>
              <li>5-Kammer-System als Standardkombination</li>
              <li>
                Wärmedämmeigenschaften der Standardkombination Uf-Wert = 1,3
                W/m²K
              </li>
              <li>Verglasungsstärke bis 41 mm</li>
              <li>Schalldämmung bis 45 dB (bis Schallschutzklasse IV)</li>
              <li>
                2-fache Designvielfalt im Flügel (flächenversetzt |
                halbflächenversetzt)
              </li>
              <li>2-fache Verglasung 4/16/4 Ug=1,0 W/m2K im Standard,</li>
              <li>
                unterschiedliche Profilkonturen für ein individuelles Design
              </li>
              <li>umlaufendes Anschlagdichtungssystem in Rahmen und Flügel</li>
              <li>
                Verwendung entsprechender Sicherheitsbeschläge garantiert
                hervorragenden Einbruchschutz
              </li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/profiles/aluplast_ideal_4000_tuer.png"></img>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 450, maxHeight: 550 }}
            src="./pics/sections/aluplast4000.png"
          ></img>
        </div>
      </div>

      

     

      
    </div>
  );
}

export default aluplastdiv;
