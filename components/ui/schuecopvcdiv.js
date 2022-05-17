import {useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";

function schuecopvcdiv() {

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

  const familyCT70Classic = [
  <ProductLink linktext="Schüco CT 70 Classic" href="/products/ct70" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/ct70_classic.png"/>,
  <ProductLink linktext="Schüco CT 70 Nebeneingangstür" href="/products/ct70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_nt.png"/>,
  <ProductLink linktext="Schüco CT 70 Haustür" href="/products/ct70ht" opis="Kunststoff Haustür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_ht.png"/>,
  <ProductLink linktext="Schüco LivingSlide" href="/hs" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_ls_weiss.png"/>,
  ];

  const familyCT70Rondo = [
    <ProductLink linktext="Schüco CT 70 Rondo" href="/products/ct70rondo" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/ct70_rondo.png"/>,
    <ProductLink linktext="Schüco CT 70 Nebeneingangstür" href="/products/ct70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_nt.png"/>,
    <ProductLink linktext="Schüco CT 70 Haustür" href="/products/ct70ht" opis="Kunststoff Haustür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_ht.png"/>,
    <ProductLink linktext="Schüco LivingSlide" href="/hs" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_ls_weiss.png"/>,
  ];

  const familyLiving = [
    <ProductLink linktext="Schüco Living MD" href="/products/living" opis="Kunststoff 7 Kammer, 82 mm Einbautiefe" pic="/pics/producticons/living.png"/>,
    <ProductLink linktext="Schüco Living Nebeneingangstür" href="/products/livingnt" opis="Kunststoff Tür, 82 mm Einbautiefe" pic="/pics/producticons/living_nt.png"/>,
    <ProductLink linktext="Schüco Living Haustür" href="/products/livinght" opis="Kunststoff Haustür, 82 mm Einbautiefe" pic="/pics/producticons/living_ht.png"/>,
    <ProductLink linktext="Schüco LivingSlide" href="/hs" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_ls_weiss.png"/>,
  ];

  


  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/ct_70_classic_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Schüco Corona CT 70 Classic, 5 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Blendrahmen Einbautiefe 70mm,</li>
              <li>versetzte, klasische Optik,</li>
              <li>U-Wert 1,3 W/m2K, </li>
              <li>Schallschutz 47dB,</li>
              <li>2-fache Verglasung 4/16/4 Ug=1,0 W/m2K im Standard,</li>
              <li> 3 fache Verglasung Ug=0,7 W/m2K möglich,</li>
              <li>2 umlaufene EPDM Dichtungen,</li>
              <li>
                Winkhaus activPilot Beschlag mit 2 Schicherheitschließblechen im
                Standard,
              </li>
              <li>Pilzkopfverriegelungen im Standard,</li>
              <li>Fehlbedienungssperre,</li>
              <li>Mehrfachspaltlüftung und Flügelheber im Standard,</li>
              <li>
                sowie spezielle Einbruchschutz - Hoppe Sekustik Aluminium
                Griffe,
              </li>
              <li>mittige Griffposition für bessere Ästhetik.</li>
            </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/ct70C.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/ct70classic.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie:"
      >
        {familyCT70Classic}
      </Carousel>
      </div>

      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/ct_70_rondo_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Schüco Corona CT 70 Rondo, 5 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Blendrahmen Einbautiefe 70mm,</li>
              <li>Flügelrahmentiefe 78mm,</li>
              <li>
                halbversetzte Optik mit Rundung im Flügel von der Außenseite,
              </li>
              <li>U-Wert 1,3 W/m2K, </li>
              <li>Schallschutz 47dB,</li>
              <li>2-fache Verglasung 4/16/4 Ug=1,0 W/m2K im Standard,</li>
              <li> 3 fache Verglasung Ug=0,7 W/m2K möglich,</li>
              <li>2 umlaufene EPDM Dichtungen,</li>
              <li>
                Winkhaus activPilot Beschlag mit 2 Schicherheitschließblechen im
                Standard,
              </li>
              <li>Pilzkopfverriegelungen im Standard,</li>
              <li>Fehlbedienungssperre,</li>
              <li>Mehrfachspaltlüftung und Flügelheber im Standard,</li>
              <li>
                sowie spezielle Einbruchschutz - Hoppe Sekustik Aluminium
                Griffe,
              </li>
              <li>mittige Griffposition für bessere Ästhetik.</li>
            </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/ct70R.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/ct70rondo.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie:"
      >
        {familyCT70Rondo}
      </Carousel>
      </div>

      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/living_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Schüco Living MD, 7 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Blendrahmen Einbautiefe 82mm,</li>
              <li>versetzte, klasische Optik,</li>
              <li>Uf-Wert 0,96 W/m2K, </li>
              <li>Schallschutz 47dB,</li>
              <li> 3 fache Verglasung bis Ug=0,5 W/m2K möglich,</li>
              <li>3 umlaufene EPDM Dichtungen, inkusive Mitteldichtung,</li>
              <li>Grauer Profilkern bei grauer Farbe möglich,</li>
              <li>
                Winkhaus activPilot Beschlag mit 2 Schicherheitschließblechen im
                Standard,
              </li>
              <li>Pilzkopfverriegelungen im Standard,</li>
              <li>Fehlbedienungssperre,</li>
              <li>Mehrfachspaltlüftung und Flügelheber im Standard,</li>
              <li>
                sowie spezielle Einbruchschutz - Hoppe Sekustik Aluminium
                Griffe,
              </li>
              <li>mittige Griffposition für bessere Ästhetik.</li>
            </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/living.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/living.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie:"
      >
        {familyLiving}
      </Carousel>
      </div>
    </div>
  );
}

export default schuecopvcdiv;
