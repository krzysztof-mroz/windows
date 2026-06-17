import {useState, useEffect, Fragment } from "react";
import Carousel from "../components/ui/blocks/carousel";
import ProductLink from "../components/ui/blocks/productlink";
import HeaderDiv from "../components/ui/headerdiv";
import RaffstoreFeatureGraphic from "../components/RaffstoreFeatureGraphic";
import RaffstoreCatalogSections from "../components/RaffstoreCatalogSections";
import Head from 'next/head';




function Raffstoren() { 

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
   
    <ProductLink key="raffstore-raf" linktext="Vorsatz Raffstoren" href="/products/raf" opis="C80 oder Z90, Unterputz, Überputz" pic="/pics/producticons/raf.png"/>,
    <ProductLink key="rollladen-ael" linktext="Aufsatz Rollläden" href="/products/ael" opis="Aluminium Lamellen, Motorsteuerung" pic="/pics/producticons/ael.png"/>,
    <ProductLink key="rollladen-sk" linktext="Vorsatz Rollläden SK" href="/products/sk" opis="Aluminium Lamellen, eckiger Kasten" pic="/pics/producticons/vsr_sk.png"/>,
    <ProductLink key="rollladen-skp" linktext="Vorsatz Rollläden SKP" href="/products/skp" opis="Aluminium Lamellen, viertelrunder Kasten" pic="/pics/producticons/vsr_skp.png"/>,
    <ProductLink key="rollladen-sko" linktext="Vorsatz Rollläden SKO" href="/products/sko" opis="Aluminium Lamellen, halbrunder Kasten" pic="/pics/producticons/vsr_sko.png"/>,
    <ProductLink key="rollladen-sp" linktext="Vorsatz Rollläden SP" href="/products/sp" opis="Aluminium Lamellen, Unterputz Kasten" pic="/pics/producticons/vsr_sp.png"/>,
  
  ];
    return (
        <Fragment>
      <Head>
        <title>Raffstoren mit C80 oder Z90 Aluminium Lamellen</title>
        <meta
          name="description"
          content="Aluminium Außen Raffstoren aus Polen."
        />
        <meta
          name="keywords"
          content="raffstoren, c80, z90"
        />
      </Head>
      <HeaderDiv
        title="Raffstoren mit Aluminium Lamellen"
        subtitle="Komfortable Lichtregulierung in jedem Raum"
        showDefaultVideo={false}
      />
      <RaffstoreFeatureGraphic />
      <RaffstoreCatalogSections />
      <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Beschattung:"
      >
        {beschattung}
      </Carousel>
      <RaffstoreProfileVideo />
    </Fragment>
    )
        
    
}

function RaffstoreProfileVideo() {
  return (
    <section className="raffstoreVideoWrap" aria-label="Fensterprofil im Schnitt">
      <div className="raffstoreVideoText">
        <p className="raffstoreEyebrow">Profiltechnik</p>
        <h2>Fensterprofil im Schnitt ansehen</h2>
        <p>
          Der Film bleibt als technische Ergänzung erhalten, steht aber jetzt
          weiter unten nach den Raffstoren- und Beschattungsprofilen.
        </p>
      </div>
      <div className="raffstoreVideoFrame">
        <video
          src="/movies/living.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
      </div>

      <style jsx>{`
        .raffstoreVideoWrap {
          align-items: center;
          background: #f5f1eb;
          display: grid;
          gap: 22px;
          grid-template-columns: 1fr;
          margin: 24px auto 20px;
          max-width: 1120px;
          padding: 22px 16px;
        }

        .raffstoreVideoText {
          color: #202020;
        }

        .raffstoreEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 7px;
          text-transform: uppercase;
        }

        .raffstoreVideoText h2 {
          font-size: 24px;
          line-height: 1.15;
          margin: 0;
        }

        .raffstoreVideoText p:last-child {
          color: #555;
          line-height: 1.5;
          margin: 10px 0 0;
        }

        .raffstoreVideoFrame {
          background: #222;
          overflow: hidden;
        }

        .raffstoreVideoFrame video {
          display: block;
          height: auto;
          width: 100%;
        }

        @media (min-width: 820px) {
          .raffstoreVideoWrap {
            grid-template-columns: minmax(230px, 0.7fr) minmax(420px, 1.3fr);
            padding: 28px 30px;
          }

          .raffstoreVideoText h2 {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}

export default Raffstoren;
