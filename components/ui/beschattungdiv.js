import {useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";
import { useRouter } from "next/router";

function beschattungdiv() {


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


  const router = useRouter();

  
  function gotoRollos(e) {
    router.push("./rolllaeden")
  }
  function gotoRaf(e) {
    router.push("./raffstoren")
  }
  function gotoScreen(e) {
    router.push("./screenrolls")
  }

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoRollos}
      >
        <img src="./pics/icons/rollo.png"></img>
        <h5>Rollläden</h5>
        <p className="gray f6">
          Standard Beschattung mit Aluminium Lamellen. Mit Gurt oder Motor. Als Aufsatz- oder Vorsatzrollläden.
        </p>
      </div>

      

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoRaf}
      >
        <img src="./pics/icons/rafstore.png"></img>
        <h5>Außen Raffstoren</h5>
        <p className="gray f6">
        Raffstoren mit C-80 oder Z-90 Lamellen und Motorsteuerung. Für stufenlose Regulierung des Tageslichtes im Raum.
        </p>
      </div>

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoScreen}
      >
        <img src="./pics/icons/screenroll.png"></img>
        <h5>"Screen Roll" Rollläden</h5>
        <p className="gray f6">
        Moderne Lösung, jetzt auch für Außen. Kleine Kästen und effektive Beschattung.
        </p>
      </div>
      <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Beschattung:"
      >
        {beschattung}
      </Carousel>
    </div>
  );
}

export default beschattungdiv;
