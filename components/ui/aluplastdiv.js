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
             style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/aluplast4000.png"
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
          <img src="./pics/profiles/aluplast_ideal_5000.png"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Aluplast Ideal 5000, 5 Kammer, Mitteldichtung</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Bautiefe 70 mm</li>
              <li>5-Kammer-System als Standardkombination</li>
              <li>
              Wärmedämmeigenschaften der Profile Uf-Wert = 1,1 W/m²K (mit thermisch verbessertem Stahl)
              </li>
              <li>Verglasungsstärke bis 41 mm</li>
              <li>Schalldämmung bis 47 dB (bis Schallschutzklasse V)</li>
              <li>
                2-fache Designvielfalt im Flügel 
              </li>
              <li>Mitteldichtungssystem mit in zahlreichen Dekorvarianten verfügbar</li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-50-l ma1 pa2">
        <img src="./pics/profiles/aluplast_ideal_5000_tuer.png"></img>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
             style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/aluplast4000.png"
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
          <img src="./pics/profiles/aluplast_ideal_7000.png"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Aluplast Ideal 7000, 6 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>85mm Bautiefe</li>
              <li>Profil Uf=1,1 W/m²K</li>
              <li>6-Kammer-System</li>
              <li>
              Uw=0,86 W/m²K mit Standard-Dreifach-Verglasung mit Ug=0,6 und Psi=0,040 W/mK
              </li>
              <li>Verglasungsstärke bis 51 mm</li>
              <li>Schalldämmung bis 46 dB (bis Schallschutzklasse IV)</li>
              <li>
                <li>bis zu RC2 Einbruchschutz</li>
                mit zahlreichen Dekorfolien erhältlich
              </li>
              <li>nicht sichtbare Entwässerung möglich</li>
              <li>flächenversetzte Variante</li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-50-l ma1 pa2">
        <img src="./pics/profiles/aluplast_ideal_7000_2.png"></img>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
             style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/aluplast7000.png"
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
          <img src="./pics/profiles/aluplast_ideal_8000.png"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Aluplast Ideal 8000, 6 Kammer, Mitteldichtung</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Bautiefe 85 mm</li>
              <li>6-Kammer-System</li>
              <li>Profil Uf=1,0 W/m²K</li>
              <li>
              Uw von bis zu 0,67 W/m²K möglich
              </li>
              <li>Verglasungsstärke bis 51 mm</li>
              <li>Schalldämmung bis 47 dB (bis Schallschutzklasse V)</li>
              <li>Mitteldichtungssystem mit in zahlreichen Dekorvarianten verfügbar</li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-50-l ma1 pa2">
        <img src="./pics/profiles/aluplast_ideal_8000_tuer.png"></img>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
             style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/aluplast8000.png"
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

export default aluplastdiv;
