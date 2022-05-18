import {useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";

function ponziodiv() {

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

  const familyPE68 = [
    <ProductLink linktext="Ponzio PE 68N" href="/products/pe68" opis="Aluminium Ponzio PE 68" pic="/pics/producticons/pe68.png"/>,
    <ProductLink linktext="Ponzio PE 78N" href="/products/pe78" opis="Aluminium Ponzio PE 78" pic="/pics/producticons/pe78.png"/>,
  <ProductLink linktext="Aluprof MB 70 HI" href="/products/mb70" opis="Aluminium Aluprof MB 70" pic="/pics/producticons/mb70.png"/>,
  <ProductLink linktext="Aluprof MB 86 SI" href="/products/mb86" opis="Aluminium Aluprof MB 86" pic="/pics/producticons/mb86.png"/>,
  <ProductLink linktext="Schüco AWS 75 SI" href="/products/aws75" opis="Aluminium Schüco AWS 75" pic="/pics/producticons/aws75.png"/>,
  <ProductLink linktext="Schüco AWS 90 SI" href="/products/aws90" opis="Aluminium Schüco AWS 90" pic="/pics/producticons/aws90.png"/>,
  ];

  const familyPE78 = [
    <ProductLink linktext="Ponzio PE 78N" href="/products/pe78" opis="Aluminium Ponzio PE 78" pic="/pics/producticons/pe78.png"/>,
    <ProductLink linktext="Ponzio PE 68N" href="/products/pe68" opis="Aluminium Ponzio PE 68" pic="/pics/producticons/pe68.png"/>,
    <ProductLink linktext="Aluprof MB 70 HI" href="/products/mb70" opis="Aluminium Aluprof MB 70" pic="/pics/producticons/mb70.png"/>,
  <ProductLink linktext="Aluprof MB 86 SI" href="/products/mb86" opis="Aluminium Aluprof MB 86" pic="/pics/producticons/mb86.png"/>,
  <ProductLink linktext="Schüco AWS 75 SI" href="/products/aws75" opis="Aluminium Schüco AWS 75" pic="/pics/producticons/aws75.png"/>,
  <ProductLink linktext="Schüco AWS 90 SI" href="/products/aws90" opis="Aluminium Schüco AWS 90" pic="/pics/producticons/aws90.png"/>,
  ];


  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/pe_68_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Ponzio PE 68 N</h5>
          <div className="gray f6 tl">
          <ul>   
            <li>Dreikammerprofilsystem mit der Euro-Nut und Beschlagnut.</li>
            <li>Einbautiefe Rahmen beträgt 68 mm und Flügel 76 mm.</li>
            <li>Thermische Trennung 32 mm</li>
            <li>Zwei-Komponenten-Zentraldichtung</li>
            <li>Wärmedurchgangskoeffizient 1,5 W/m2K</li>
            <li>Hohe Profilsteifheit für bessere Statik</li>
            <li>Flexibilität in Eckverbindervarianten</li>
            <li>Glasstärke 18-59 mm</li>
            <li>Ganze RAL Farbpalette verfügbar</li>
         </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/pe68.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/pe68.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie und Alternativen:"
      >
        {familyPE68}
      </Carousel>
      </div>

      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/pe_78n_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Ponzio PE 78N</h5>
          <div className="gray f6 tl">
          <ul>
            
            
          
            <li>Dreikammerprofilsystem mit der Euro-Nut und Beschlagnut.</li>
            <li>Für Fensterkonstruktionen mit hohen Wärmedämmansprüchen bestimmt</li>
            <li>Einbautiefe Rahmen beträgt 78 mm und Flügel 86 mm.</li>
            <li>Thermische Trennung 42 mm</li>
            <li>Zwei-Komponenten-Zentraldichtung</li>
            <li>Wärmedurchgangskoeffizient bei Variante PE78 N+ Uf = 1,3 W/ m²K </li>
            <li>Sehr gute statische Eigenschaften.</li>
            <li>Flexibilität in Eckverbindervarianten</li>
            <li>Glasstärke 23-61 mm</li>
            <li>Ganze RAL Farbpalette verfügbar</li>
       
        </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/pe78.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/pe78.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie und Alternativen:"
      >
        {familyPE78}
      </Carousel>
      </div>

    </div>
  );
}

export default ponziodiv;
