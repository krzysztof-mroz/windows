import {useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";

function schuecoaludiv() {

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

  const family1 = [
    <ProductLink linktext="Schüco AWS 75 SI" href="/products/aws75" opis="Aluminium Schüco AWS 75" pic="/pics/producticons/aws75.png"/>,
  <ProductLink linktext="Schüco AWS 90 SI" href="/products/aws90" opis="Aluminium Schüco AWS 90" pic="/pics/producticons/aws90.png"/>,
    <ProductLink linktext="Aluprof MB 70 HI" href="/products/mb70" opis="Aluminium Aluprof MB 70" pic="/pics/producticons/mb70.png"/>,
  <ProductLink linktext="Aluprof MB 86 SI" href="/products/mb86" opis="Aluminium Aluprof MB 86" pic="/pics/producticons/mb86.png"/>,
    <ProductLink linktext="Ponzio PE 68N" href="/products/pe68" opis="Aluminium Ponzio PE 68" pic="/pics/producticons/pe68.png"/>,
    <ProductLink linktext="Ponzio PE 78N" href="/products/pe78" opis="Aluminium Ponzio PE 78" pic="/pics/producticons/pe78.png"/>,
  
  ];

  const family2 = [
    <ProductLink linktext="Schüco AWS 90 SI" href="/products/aws90" opis="Aluminium Schüco AWS 90" pic="/pics/producticons/aws90.png"/>,
    <ProductLink linktext="Schüco AWS 75 SI" href="/products/aws75" opis="Aluminium Schüco AWS 75" pic="/pics/producticons/aws75.png"/>,
    <ProductLink linktext="Aluprof MB 86 SI" href="/products/mb86" opis="Aluminium Aluprof MB 86" pic="/pics/producticons/mb86.png"/>,
    <ProductLink linktext="Aluprof MB 70 HI" href="/products/mb70" opis="Aluminium Aluprof MB 70" pic="/pics/producticons/mb70.png"/>,
    <ProductLink linktext="Ponzio PE 78N" href="/products/pe78" opis="Aluminium Ponzio PE 78" pic="/pics/producticons/pe78.png"/>,
    <ProductLink linktext="Ponzio PE 68N" href="/products/pe68" opis="Aluminium Ponzio PE 68" pic="/pics/producticons/pe68.png"/>,
  
  ];

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/aws_75_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Schüco AWS 75 SI</h5>
          <div className="gray f6 tl">
          <ul>
					   <li>Einbautiefe von 75 mm</li>
					   <li>Hochwärmegedämmtes Aluminium-Fenstersystem mit umfangreichen Lösungsvarianten</li>
					   <li>Uf-Wert von 1,2 W/(m²K)</li>
					   <li>Eckpfosten, Statikpfosten, symmetrische und asymmetrische Pfosten verfügbar</li>
					   <li>Einbruchhemmung Klasse RC 2 ohne Riegelstangensicherung möglich</li>
					   <li>Umlaufende Mitteldichtung</li>
					   <li>Vielfältige Gestaltungsmöglichkeiten</li>
					   <li>Hohe Stabilität und Langlebigkeit</li>
					   <li>Fenster in großen Dimensionen möglich</li>
					   <li>Wertsteigerung der Immobilie</li>
					   <li>Leichtgängigkeit</li>
					   <li>Alle RAL Farben vefügbar</li>	   
				  </ul> 
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/aws75.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/aws75.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie und Alternativen:"
      >
        {family1}
      </Carousel>
      </div>

      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/aws_90_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Schüco AWS 90 SI</h5>
          <div className="gray f6 tl">
          
          <ul>
					   <li>Einbautiefe von 90 mm</li>
					   <li>Höhste Wärmedämmung im Aluminium, Passivhaus geeignet</li>
					   <li>Uf-Wert von ≥ 0,71 W/(m²K), optimale thermische Trennung</li>
					   <li>Eckpfosten, Statikpfosten, symmetrische und asymmetrische Pfosten verfügbar</li>
					   <li>Einbruchhemmung Klasse RC 2 ohne Riegelstangensicherung möglich</li>
					   <li>Umlaufende Mitteldichtung</li>
					   <li>Vielfältige Gestaltungsmöglichkeiten</li>
					   <li>Hohe Stabilität und Langlebigkeit</li>
					   <li>Fenster in großen Dimensionen möglich</li>
					   <li>Wertsteigerung der Immobilie</li>
					   <li>Leichtgängigkeit</li>
					   <li>Alle RAL Farben vefügbar</li>	   
				  </ul> 
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/aws90.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/aws90.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie und Alternativen:"
      >
        {family2}
      </Carousel>
      </div>

    </div>
  );
}

export default schuecoaludiv;
