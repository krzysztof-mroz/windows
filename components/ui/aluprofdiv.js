import { useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";

function aluprofdiv() {
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
    <ProductLink
      linktext="Aluprof MB 70 HI"
      href="/products/mb70"
      opis="Aluminium Aluprof MB 70"
      pic="/pics/producticons/mb70.png"
    />,
    <ProductLink
      linktext="Aluprof MB 86 SI"
      href="/products/mb86"
      opis="Aluminium Aluprof MB 86"
      pic="/pics/producticons/mb86.png"
    />,
    <ProductLink
      linktext="Ponzio PE 68N"
      href="/products/pe68"
      opis="Aluminium Ponzio PE 68"
      pic="/pics/producticons/pe68.png"
    />,
    <ProductLink
      linktext="Ponzio PE 78N"
      href="/products/pe78"
      opis="Aluminium Ponzio PE 78"
      pic="/pics/producticons/pe78.png"
    />,
    <ProductLink
      linktext="Schüco AWS 75 SI"
      href="/products/aws75"
      opis="Aluminium Schüco AWS 75"
      pic="/pics/producticons/aws75.png"
    />,
    <ProductLink
      linktext="Schüco AWS 90 SI"
      href="/products/aws90"
      opis="Aluminium Schüco AWS 90"
      pic="/pics/producticons/aws90.png"
    />,
  ];

  const family2 = [
    <ProductLink
      linktext="Aluprof MB 86 SI"
      href="/products/mb86"
      opis="Aluminium Aluprof MB 86"
      pic="/pics/producticons/mb86.png"
    />,
    <ProductLink
      linktext="Aluprof MB 70 HI"
      href="/products/mb70"
      opis="Aluminium Aluprof MB 70"
      pic="/pics/producticons/mb70.png"
    />,
    <ProductLink
      linktext="Ponzio PE 78N"
      href="/products/pe78"
      opis="Aluminium Ponzio PE 78"
      pic="/pics/producticons/pe78.png"
    />,
    <ProductLink
      linktext="Ponzio PE 68N"
      href="/products/pe68"
      opis="Aluminium Ponzio PE 68"
      pic="/pics/producticons/pe68.png"
    />,
    <ProductLink
      linktext="Schüco AWS 75 SI"
      href="/products/aws75"
      opis="Aluminium Schüco AWS 75"
      pic="/pics/producticons/aws75.png"
    />,
    <ProductLink
      linktext="Schüco AWS 90 SI"
      href="/products/aws90"
      opis="Aluminium Schüco AWS 90"
      pic="/pics/producticons/aws90.png"
    />,
  ];

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/mb_70_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Aluprof MB 70 HI</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Wärmedämmung UW von 1,5 W(m2K)</li>
              <li>Dreikammerprofil System</li>
              <li>
                Einbautiefe beträgt 70 mm (Blendrahmen) und 79 mm (Flügel){" "}
              </li>
              <li>
                profilierte Isolierstege in Omegaform mit der Breite von 34 mm
                aus dem mit Glasfasern verstärkten Polyamid
              </li>
              <li>
                Einsatz der Verglasung mit der Dicke von 21 mm bis 57 mm möglich
              </li>
              <li>Breite Farbpalette mit Standard-Farbtönen</li>
              <li>Dichtungen aus dem 2K-Kunstkautschuk EPDM hergestellt</li>
              <li>
                Für Fenster, Türen, Windfänge, Schaufenster und
                3D-Konstruktionen gut geeignet.
              </li>
              <li>Eindruck einer einheitlichen Oberfläche von außen</li>
            </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/mb70.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/mb70.png"
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
          <img src="./pics/mb_86_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Aluprof MB 86 SI</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Wärmedämmung UW von 0,72 W(m2K)</li>
              <li>Bestens geeignet für energiesparenderen Konstruktionen</li>
              <li>In den Varianten ST, SI und AERO vefügbar</li>
              <li>
                Verwendet Kombination aus Silica-Aerogel und nicht gewobener
                Glasfaserfüllung
              </li>
              <li>Außergewöhnlich hohe Steifigkeit</li>
              <li>Größere und schwerere Fenster möglich.</li>
              <li>Neu geformte, hoch wärmedämmende thermische Trennungen.</li>
              <li>Mitteldichtung aus mehreren Komponenten</li>
              <li>Verglasung bis zu 67,5 mm Stärke.</li>
              <li>
                Geeignet für eine Vielzahl von Beschlägen, einschließlich
                verdeckt liegender Bänder.
              </li>
              <li>Schalldämmung: Klasse C5</li>
            </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/mb86.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/mb86.png"
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

export default aluprofdiv;
