import { useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";

function gealandiv() {
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

  const beschattung = [
   
    <ProductLink linktext="Vorsatz Raffstoren" href="/products/raf" opis="C80 oder Z90, Unterputz, Überputz" pic="/pics/producticons/raf.png"/>,
    <ProductLink linktext="Aufsatz Rollläden" href="/products/ael" opis="Aluminium Lamellen, Motorsteuerung" pic="/pics/producticons/ael.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SK" href="/products/sk" opis="Aluminium Lamellen, eckiger Kasten" pic="/pics/producticons/vsr_sk.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SKP" href="/products/skp" opis="Aluminium Lamellen, viertelrunder Kasten" pic="/pics/producticons/vsr_skp.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SKO" href="/products/sko" opis="Aluminium Lamellen, halbrunder Kasten" pic="/pics/producticons/vsr_sko.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SP" href="/products/sp" opis="Aluminium Lamellen, Unterputz Kasten" pic="/pics/producticons/vsr_sp.png"/>,
  
  ];

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">



      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/profiles/gealan_s8000.png"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Gealan S8000, 6 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Bautiefe 74 mm</li>
              <li>6-Kammer-Profil</li>
             
              <li>Verglasung: bis 48mm</li>
           
              <li>hervorragende Energieeinsparung und innovative Dichtungstechnologie</li>
             <li>Große Hauptkammer für die Aufnahme großer Stahlaussteifungen</li>
              <li>
              Einbruchhemmung: bis RC 2
              </li>
              <li>In zahlreichen Farben verfügbar</li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/profiles/gealan_s8000_tuer.png"></img>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
             style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/s8000.png"
          ></img>
        </div>
        <Carousel
          show={Math.floor((size.width - 50) / 186)}
          title="Beschattung:"
        >
          {beschattung}
        </Carousel>
      </div>



      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/profiles/gealan_s9000.png"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Gealan S9000, 6 Kammer, Mitteldichtung</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Bautiefe 82,5 mm</li>
              <li>6-Kammer-Profil</li>
              
              <li>Verglasung: bis 54mm</li>
              <li>Schallreduzierung um bis zu 46 dB</li>
              <li>umlaufendes Mitteldichtungssystem</li>
              <li>
              Einbruchhemmung: bis RC 2
              </li>
              <li>Schmale sichtbare Breite</li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/profiles/gealan_s9000_tuer.png"></img>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
             style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/s9000.png"
          ></img>
        </div>
        <Carousel
          show={Math.floor((size.width - 50) / 186)}
          title="Beschattung:"
        >
          {beschattung}
        </Carousel>
      </div>



  

     

      
    </div>
  );
}

export default gealandiv;
