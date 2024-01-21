import {useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";
import { useRouter } from 'next/router';



function fensterdiv() {

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

  const fenster = [
   
    <ProductLink linktext="Schüco CT 70 Classic" href="/products/ct70" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/ct70_classic.png"/>,
  <ProductLink linktext="Schüco CT 70 Rondo" href="/products/ct70rondo" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/ct70_rondo.png"/>,
  <ProductLink linktext="Schüco Living MD" href="/products/living" opis="Kunststoff 7 Kammer, 82 mm Einbautiefe" pic="/pics/producticons/living.png"/>,
  <ProductLink linktext="Kömmerling 70 AD" href="/products/k70" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/k70.png"/>,
  <ProductLink linktext="Kömmerling 76 AD" href="/products/k76ad" opis="Kunststoff 5 Kammer, 76 mm Einbautiefe" pic="/pics/producticons/k76_ad.png"/>,
  <ProductLink linktext="Kömmerling 76 MD" href="/products/k76md" opis="Kunststoff 6 Kammer, 76 mm Einbautiefe" pic="/pics/producticons/k76_md.png"/>,
  <ProductLink linktext="Kömmerling 88 MD" href="/products/k88" opis="Kunststoff 7 Kammer, 88 mm Einbautiefe" pic="/pics/producticons/k88.png"/>,
  <ProductLink linktext="Ponzio PE 68N" href="/products/pe68" opis="Aluminium Ponzio PE 68" pic="/pics/producticons/pe68.png"/>,
  <ProductLink linktext="Ponzio PE 78N" href="/products/pe78" opis="Aluminium Ponzio PE 78" pic="/pics/producticons/pe78.png"/>,
  <ProductLink linktext="Aluprof MB 70 HI" href="/products/mb70" opis="Aluminium Aluprof MB 70" pic="/pics/producticons/mb70.png"/>,
  <ProductLink linktext="Aluprof MB 86 SI" href="/products/mb86" opis="Aluminium Aluprof MB 86" pic="/pics/producticons/mb86.png"/>,
  <ProductLink linktext="Schüco AWS 75 SI" href="/products/aws75" opis="Aluminium Schüco AWS 75" pic="/pics/producticons/aws75.png"/>,
  <ProductLink linktext="Schüco AWS 90 SI" href="/products/aws90" opis="Aluminium Schüco AWS 90" pic="/pics/producticons/aws90.png"/>,
  
  ];

  const router = useRouter();

  function gotoSchuecoPvc(e) {
    router.push("./schuecopvc")
  }

  function gotoAluplast(e) {
    router.push("./aluplast")
  }

  function gotoSalamander(e) {
    router.push("./salamander")
  }

  function gotoGealan(e) {
    router.push("./gealan")
  }
  function gotoKoemmerling(e) {
    router.push("./koemmerling")
  }
  function gotoPonzio(e) {
    router.push("./ponzio")
  }
  function gotoAluprof(e) {
    router.push("./aluprof")
  }
  function gotoSchuecoAlu(e) {
    router.push("./schuecoalu")
  }

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoAluplast}>
        <img src="./pics/icons/aluplastfeather.png"></img>
        <h5>Aluplast Kunststoff Fenster</h5>
        <p className="gray f6">
          5 Kammer und 6 Kammer Kunststoff Fenster für gute Wärmedämmung. Breite Produktpalette.
        </p>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoSalamander}>
        <img src="./pics/icons/salamanderfeather.png"></img>
        <h5>Salamander Kunststoff Fenster</h5>
        <p className="gray f6">
          5 Kammer und 6 Kammer Kunststoff Fenster mit Vision, Innovation & Qualität.
        </p>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoGealan}>
        <img src="./pics/icons/gealanfeather.png"></img>
        <h5>Gealan Kunststoff Fenster</h5>
        <p className="gray f6">
          5 Kammer und 6 Kammer Kunststoff Fenster für jedes Budget. Auch für Passivhaus geeignet.
        </p>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoSchuecoPvc}>
        <img src="./pics/icons/livingfeather.png"></img>
        <h5>Schüco Kunststoff Fenster</h5>
        <p className="gray f6">
          5 Kammer und 7 Kammer Kunststoff Markenfenster mit Stahlverstärkung und Winkhaus activPilot Beschlag.
        </p>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoKoemmerling}>
        <img src="./pics/icons/k88feather.png"></img>
        <h5>Kömmerling Kunststoff Fenster</h5>
        <p className="gray f6">
          5- 6- und 7-Kammer Systeme zur Wahl. 2 oder 3 Dichtungen. Stahlverstärkung, Winkhaus activPilot Beschlag, kurze Lieferzeiten.
        </p>
      </div>
      
      <div className="dn db-l w-100 w-30-l b--moon-gray ma2 pa3"> 
      <img src="./pics/icons/childwindowfeather.png"></img>
      </div>
      
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoPonzio}>
        <img src="./pics/icons/pe78feather.png"></img>
        <h5>Ponzio Aluminium Fenster</h5>
        <p className="gray f6">
          Aluminium Fenster zum vernünftigen Preis mit 3 Dichtungen und mit thermischer Trennung.
        </p>
      </div>
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"  onMouseDown={gotoAluprof}>
        <img src="./pics/icons/mb86feather.png"></img>
        <h5>Aluprof Aluminium Fenster</h5>
        <p className="gray f6">
          Aluminium Fenster mit geringer Profilhöhe und hoher Gestaltungsfreiheit. 
        </p>
      </div>
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoSchuecoAlu}>
        <img src="./pics/icons/aws90feather.png"></img>
        <h5>Schüco Aluminium Fenster</h5>
        <p className="gray f6">
          Aluminium Fenster und Türen für die höchsten Ansprüche, ohne Kompromisse.
        </p>
      </div>
      <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Unsere Fensterprofile:"
      >
        {fenster}
      </Carousel>
    </div>
  );
}

export default fensterdiv
