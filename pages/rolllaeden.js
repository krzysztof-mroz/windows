import {useState, useEffect, Fragment } from "react";
import Carousel from "../components/ui/blocks/carousel";
import ProductLink from "../components/ui/blocks/productlink";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';
import RollladenFeatureGraphic from "../components/RollladenFeatureGraphic";
import RollladenCatalogSections from "../components/RollladenCatalogSections";


function RollladenProfileVideo() {
  return (
    <section className="rollladenVideoWrap" aria-label="Fensterprofil im Schnitt">
      <div className="rollladenVideoText">
        <p className="rollladenEyebrow">Profiltechnik</p>
        <h2>Fensterprofil im Schnitt ansehen</h2>
        <p>
          Der Film bleibt als technische Ergänzung erhalten, steht aber jetzt
          weiter unten nach den Rollladen- und Beschattungsprofilen.
        </p>
      </div>
      <div className="rollladenVideoFrame">
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
        .rollladenVideoWrap {
          align-items: center;
          background: #f6f2ec;
          display: grid;
          gap: 24px;
          margin: 22px auto 18px;
          max-width: 1120px;
          padding: 24px 16px;
        }

        .rollladenVideoText {
          max-width: 440px;
        }

        .rollladenEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .rollladenVideoText h2 {
          color: #171717;
          font-size: 28px;
          line-height: 1.12;
          margin: 0;
        }

        .rollladenVideoText p:last-child {
          color: #555;
          line-height: 1.5;
          margin: 10px 0 0;
        }

        .rollladenVideoFrame {
          background: #111;
          overflow: hidden;
        }

        .rollladenVideoFrame video {
          display: block;
          height: auto;
          width: 100%;
        }

        @media (min-width: 840px) {
          .rollladenVideoWrap {
            grid-template-columns: minmax(240px, 0.9fr) minmax(420px, 1.4fr);
            padding: 26px 28px;
          }

          .rollladenVideoText h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}



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
      <HeaderDiv
        title="Aufsatzrollläden und Vorsatzrollläden"
        subtitle="Diskrete Lösungen für Ihre Wohnbedürfnisse"
        showDefaultVideo={false}
      />
      <RollladenFeatureGraphic />
      <RollladenCatalogSections />

      <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Beschattung:"
      >
        {beschattung}
      </Carousel>
      <RollladenProfileVideo />
    </Fragment>
    )
        
    
}

export default Rolllaeden;
