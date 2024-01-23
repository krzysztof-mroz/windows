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
          <img src="./pics/profiles/bluevolution_82.png"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Salamander BluEvolution 82, 6 Kammer, Mitteldichtung</h5>
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
              <li>umlaufendes Mitteldichtungssystem</li>
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
             style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/bluevolution82.png"
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
             style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/bluevolution92.png"
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

export default salamanderdiv;
