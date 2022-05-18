import {useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";

function koemmerlingdiv() {

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

  const familyK70 = [
    <ProductLink linktext="Kömmerling 70 AD" href="/products/k70" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/k70.png"/>,
    <ProductLink linktext="Kömmerling 70 Nebeneingangstür" href="/products/k70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/k70_nt.png"/>,
    <ProductLink linktext="Kömmerling Premidoor 88" href="/hspd" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_pd.png"/>,
  ];

  const familyK76AD = [
    <ProductLink linktext="Kömmerling 76 AD" href="/products/k76ad" opis="Kunststoff 5 Kammer, 76 mm Einbautiefe" pic="/pics/producticons/k76_ad.png"/>,
    <ProductLink linktext="Kömmerling 76 Nebeneingangstür" href="/products/k76nt" opis="Kunststoff Tür, 76 mm Einbautiefe" pic="/pics/producticons/k76_nt.png"/>,
    <ProductLink linktext="Kömmerling 76 Haustür" href="/products/k76ht" opis="Kunststoff Haustür, 76 mm Einbautiefe" pic="/pics/producticons/k76_ht.png"/>,
    <ProductLink linktext="Kömmerling Premidoor 88" href="/hspd" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_pd.png"/>,
  ];

  const familyK76MD = [
    <ProductLink linktext="Kömmerling 76 MD" href="/products/k76md" opis="Kunststoff 6 Kammer, 76 mm Einbautiefe" pic="/pics/producticons/k76_md.png"/>,
    <ProductLink linktext="Kömmerling 76 Nebeneingangstür" href="/products/k76nt" opis="Kunststoff Tür, 76 mm Einbautiefe" pic="/pics/producticons/k76_nt.png"/>,
    <ProductLink linktext="Kömmerling 76 Haustür" href="/products/k76ht" opis="Kunststoff Haustür, 76 mm Einbautiefe" pic="/pics/producticons/k76_ht.png"/>,
    <ProductLink linktext="Kömmerling Premidoor 88" href="/hspd" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_pd.png"/>,
  ];

  const familyK88 = [
    <ProductLink linktext="Kömmerling 88 MD" href="/products/k88" opis="Kunststoff 7 Kammer, 88 mm Einbautiefe" pic="/pics/producticons/k88.png"/>,
    <ProductLink linktext="Kömmerling 88 Nebeneingangstür" href="/products/k88nt" opis="Kunststoff Tür, 88 mm Einbautiefe" pic="/pics/producticons/k88_nt.png"/>,
    <ProductLink linktext="Kömmerling 88 Haustür" href="/products/k88ht" opis="Kunststoff Haustür, 88 mm Einbautiefe" pic="/pics/producticons/k88_ht.png"/>,
    <ProductLink linktext="Kömmerling Premidoor 88" href="/hspd" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_pd.png"/>,
  ];


  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/k_70_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Kömmerling 70 AD, 5 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>moderne Optik,</li>
              <li>2 versteckte Dichtungen und 70 mm Einbautiefe.</li>
              <li>5 Luftkammern für bessere Wärmedämmung von 1,2 W/m2K,</li>
              <li>stabile Stahlverstärkung,</li>
              <li>2-fache Verglasung 4/16/4 Ug=1,0 W/m2K im Standard,</li>
              <li>
                {" "}
                3 fache Verglasung Ug=0,7 W/m2K möglich (bis 44 mm Dicke),
              </li>
              <li>
                Bleifreies PVC mit „grünen“ Stabilisatoren auf Calcium/Zink
                Basis
              </li>
              <li>
                Winkhaus activPilot Beschlag mit 2 Schicherheitschließblechen im
                Standard,
              </li>
              <li>Pilzkopfverriegelungen, Fehlbedienungssperre im Standard,</li>   
              <li>Mehrfachspaltlüftung und Flügelheber im Standard,</li>
            </ul>
          </div>
         
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/k70.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/k70.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie:"
      >
        {familyK70}
      </Carousel>
      </div>

      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/k_76_ad_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Kömmerling 76 AD, 5 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Blendrahmen Einbautiefe 76mm,</li>
              <li>2 umlaufende EPDM Dichtungen im AD System, </li>
              <li>Uf-Wert 1,1 W/m2K, Hoher Schallschutz,</li>
              <li>
                3-fache Verglasung Ug=0,5 W/m2K (bis 50 mm Dicke) möglich,
              </li>
              <li>
                Bleifreies PVC mit „grünen“ Stabilisatoren auf Calcium/Zink
                Basis
              </li>
              <li>
                Winkhaus activPilot Beschlag mit 2 Schicherheitschließblechen im
                Standard,
              </li>
              <li>Pilzkopfverriegelungen, Fehlbedienungssperre im Standard,</li>   
              <li>Mehrfachspaltlüftung und Flügelheber im Standard,</li>
              <li>mittige Griffposition für bessere Ästhetik.</li>
            </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/k76ad.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/k76ad.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie:"
      >
        {familyK76AD}
      </Carousel>
      </div>

      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/k_76_md_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Kömmerling 76 MD, 6 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Blendrahmen Einbautiefe 76mm,</li>
              <li>3 umlaufende EPDM Dichtungen im MD System, </li>
              <li>Uf-Wert 1,0 W/m2K, Hoher Schallschutz,</li>
              <li>
                3-fache Verglasung Ug=0,5 W/m2K (bis 50 mm Dicke) möglich,
              </li>
              <li>
                Bleifreies PVC mit „grünen“ Stabilisatoren auf Calcium/Zink
                Basis
              </li>
              <li>
                Winkhaus activPilot Beschlag mit 2 Schicherheitschließblechen im
                Standard,
              </li>
              <li>Pilzkopfverriegelungen, Fehlbedienungssperre im Standard,</li>   
              <li>Mehrfachspaltlüftung und Flügelheber im Standard,</li>
              <li>mittige Griffposition für bessere Ästhetik.</li>
             
              <li>
                <b>AluClip Ausführung mit Aluminium Schale möglich</b>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/k76md.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/k76md.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie:"
      >
        {familyK76MD}
      </Carousel>
      </div>

      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/k_88_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Kömmerling 88 MD, 7 Kammer</h5>
          <div className="gray f6 tl">
            <ul>
              <li>Blendrahmen Einbautiefe 88 mm,</li>
              <li>3 umlaufende EPDM Dichtungen im MD System, </li>
              <li>Uf-Wert 0,95 W/m2K, </li>
              <li>Hoher Schallschutz von 48 dB,</li>
              <li>
                3-fache Verglasung Ug=0,5 W/m2K (bis 58 mm Dicke) im Standard,
              </li>
              <li>
                Bleifreies PVC mit „grünen“ Stabilisatoren auf Calcium/Zink
                Basis
              </li>
              <li>
                Winkhaus activPilot Beschlag mit 2 Schicherheitschließblechen im
                Standard,
              </li>
              <li>Pilzkopfverriegelungen, Fehlbedienungssperre im Standard,</li>   
              <li>Mehrfachspaltlüftung und Flügelheber im Standard,</li>
              <li>mittige Griffposition für bessere Ästhetik.</li>
              <li>
                <b>AluClip Ausführung mit Aluminium Schale möglich</b>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/k88.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/k88.png"
          ></img>
        </div>
        <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Produktfamilie:"
      >
        {familyK88}
      </Carousel>
      </div>
    </div>
  );
}

export default koemmerlingdiv;
