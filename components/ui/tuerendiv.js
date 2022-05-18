import {useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";
import { useRouter } from "next/router";

function tuerendiv() {

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

  const tueren = [
   
    <ProductLink linktext="Schüco CT 70 Haustür" href="/products/ct70ht" opis="Kunststoff Haustür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_ht.png"/>,
    <ProductLink linktext="Schüco Living Haustür" href="/products/livinght" opis="Kunststoff Haustür, 82 mm Einbautiefe" pic="/pics/producticons/living_ht.png"/>,
    <ProductLink linktext="Kömmerling 76 Haustür" href="/products/k76ht" opis="Kunststoff Haustür, 76 mm Einbautiefe" pic="/pics/producticons/k76_ht.png"/>,
    <ProductLink linktext="Kömmerling 88 Haustür" href="/products/k88ht" opis="Kunststoff Haustür, 88 mm Einbautiefe" pic="/pics/producticons/k88_ht.png"/>,
    <ProductLink linktext="Schüco CT 70 Nebeneingangstür" href="/products/ct70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_nt.png"/>,
    <ProductLink linktext="Schüco Living Nebeneingangstür" href="/products/livingnt" opis="Kunststoff Tür, 82 mm Einbautiefe" pic="/pics/producticons/living_nt.png"/>,
    <ProductLink linktext="Kömmerling 70 Nebeneingangstür" href="/products/k70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/k70_nt.png"/>,
    <ProductLink linktext="Kömmerling 76 Nebeneingangstür" href="/products/k76nt" opis="Kunststoff Tür, 76 mm Einbautiefe" pic="/pics/producticons/k76_nt.png"/>,
    <ProductLink linktext="Kömmerling 88 Nebeneingangstür" href="/products/k88nt" opis="Kunststoff Tür, 88 mm Einbautiefe" pic="/pics/producticons/k88_nt.png"/>,
  
  ];

  const router = useRouter();

  function gotoVeyna(e) {
    // router.push("./schuecopvc")
  }
  function gotoPerito(e) {}
  function gotoVeynaAlu(e) {}
  function gotoAluprof(e) {}

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoVeyna}
      >
        <img src="./pics/icons/veyna.jpg"></img>
        <h5>Veyna Kunststoff Türfüllungen</h5>
        <p className="gray f6">
          Kunststofffüllungen für Haustüren. Für Haustüren mit Kömmerling
          Profil.
        </p>
      </div>

      <div className="dn db-l w-100 w-30-l b--moon-gray ma2 pa3">
        <img src="./pics/icons/doorfeather.png"></img>
      </div>

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoPerito}
      >
        <img src="./pics/icons/perito.jpg"></img>
        <h5>Perito Kunststoff Türfüllungen</h5>
        <p className="gray f6">
          Kunststofffüllungen für Haustüren. Für Haustüren mit Schüco Profil.
        </p>
      </div>

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoVeynaAlu}
      >
        <img src="./pics/icons/veynaalu.png"></img>
        <h5>Veyna Aluminium Türfüllungen.</h5>
        <p className="gray f6">
          Aluminium Füllungen für Haustüren. Als Einsatzfüllungen und
          flügelüberdeckend. Für Ponzio Aluminium Haustüren.
        </p>
      </div>
      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoAluprof}
      >
        <img src="./pics/icons/aluprof.png"></img>
        <h5>Aluprof Aluminium Türfüllungen</h5>
        <p className="gray f6">
          Aluminium Füllungen für Haustüren. Als Einsatzfüllungen und
          flügelüberdeckend. Für Aluprof Aluminium Haustüren.
        </p>
      </div>
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim">
        <img src="./pics/icons/musterecke.png"></img>
        <h5>Parameter der Haustüren</h5>
        <p className="gray f6">
          Details zum Beschlag, Profil, Füllung, Wärmedämmung und weiteres.
        </p>
      </div>
      <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Unsere Türenprofile:"
      >
        {tueren}
      </Carousel>
    </div>
  );
}

export default tuerendiv;
