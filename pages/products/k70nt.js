import { Fragment, useState, useEffect, useMemo } from "react";
import Head from 'next/head';
import Image from 'next/image'
import HeaderDiv from "../../components/ui/headerdiv";
import NebeneingangLandingSection from "../../components/NebeneingangLandingSection";
import { getMinGrossPrice, formatEUR } from "../../components/data/nebeneingangPrices";
import ModelsGrid from "../../components/ModelsGrid";



function K70Nt() {
    
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

  
  
  return (


    <Fragment>
      <Head>
        <title>Nebeneingangstür aus Polen – Kunststoff oder Aluminium | Preise & Modelle</title>
        <meta name='description'
              content='Nebeneingangstür aus Polen – Verschiedene Modelle, Farben & Extras.'
        />
         
        <link rel="canonical" href="https://www.polnische-fenster.com/products/k70nt" />
         {/* Open Graph (lepszy CTR przy share) */}
        <meta property="og:title" content="Nebeneingangstür aus Polen – Kunststoff" />
        <meta property="og:description" content="Modelle, Preise, Farben & schnelle Angebotsanfrage." />
        <meta property="og:url" content="https://www.polnische-fenster.com/products/k70nt" />
        <meta property="og:type" content="product" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <HeaderDiv title="Nebeneingangstür aus Polen" subtitle="Unschlagbare Preise und Modellvielfalt"/>

      <NebeneingangLandingSection
        hingeImg="/drhahn.png"          
        lockImg="/gusecury.png"         
        drawingImg="/drawing.png"       
        minPriceText="ab 835 €"
      />
      
      <ModelsGrid initialCount={8} maxModel={40}/>
      
        
    </Fragment>
  );
}

export default K70Nt;
