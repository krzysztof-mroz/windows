import { Fragment, useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image'
import k70ntImage from "../../public/k70_nt_golden_oak.jpg"
import HeaderDiv from "../../components/ui/headerdiv";
import ProductVisualisation from "../../components/ui/productvisualisation"


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
      <HeaderDiv title="Nebeneingangstür aus Polen" subtitle="Unschlagbare Preise und viele Modelle"/>
      <ProductVisualisation product="k70nt" camera="35,35,35" productName="Kömmerling 70 Nebeneingangstür"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
        <h5 className="gray">Kömmerling 70 Nebeneingangstür</h5>
         
        <ul className="gray f6 tl">
          <li>Flügelhöhe 110 mm,</li>
            <li>Einbautiefe von 70 mm,</li>
            <li><b>Empfohlen für breite Balkontüren, mit flacher Schwelle, oder ohne.</b></li>
            <li>Wärmedämmung mit Uf = 1,2 - 1,3 W/(m2K),</li>
            <li>2 versteckte Dichtungen</li>
            <li>Gute Grundsicherheit, Einbruschschutz bis RC2,</li>
             <li>Stabilität durch umlaufende Stahlverstärkung im Türflügel,</li>
             <li>Zahlreiche Farbvarianten sind möglich,</li>
             <li>Hochwertige Dichtungen aus EPDM,</li>
             <li>Barrierefreie Ausführung mit Schwellenhöhe von 20 mm,</li>
             <li>Individuelle Gestaltungsmöglichkeiten durch verschiedene Griffgarnituren, Beschläge und Füllungen.</li>
				  </ul>
        
        
        </div>
        <div className="w-100 w-50-l  b--moon-gray pa2 silver">
        <Image
        src={k70ntImage}
        alt="Kömmerling 70 Nebeneingangstür"
      />
        </div>
      </div>

      
     
    </Fragment>
  );
}

export default K70Nt;
