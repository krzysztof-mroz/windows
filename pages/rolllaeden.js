import {useState, useEffect, Fragment } from "react";
import Carousel from "../components/ui/blocks/carousel";
import ProductLink from "../components/ui/blocks/productlink";
import RolllaedenDiv from "../components/ui/rolllaedendiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';




function Rolllaeden() {

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
        <Fragment>
      <Head>
        <title>Rollläden mit Aluminium Lamellen</title>
        <meta
          name="description"
          content="Aufsatzrollläden und Vorsatzrollläden aus Polen."
        />
        <meta
          name="keywords"
          content="rollladen, aufsatzrolllaeden, vorsatzrolllaeden"
        />
      </Head>
      <HeaderDiv title="Aufsatzrollläden und Vorsatzrollläden" subtitle="Diskrete Lösungen für Ihre Wohnbedürfnisse"/>
      <RolllaedenDiv />

      <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Beschattung:"
      >
        {beschattung}
      </Carousel>
    </Fragment>
    )
        
    
}

export default Rolllaeden;