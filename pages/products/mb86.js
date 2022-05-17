import { Fragment } from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import image1 from "../../public/mb86_db703.jpg";
import image2 from "../../public/mb86_mahagoni_2.jpg";
import image3 from "../../public/mb86_alu_3.jpg";
import image_querschnitt from "../../public/pics/sections/mb86.png";
import HeaderDiv from "../../components/ui/headerdiv";
import Visualisation from "../../components/ui/visualisation";
import Carousel from "../../components/ui/blocks/carousel";
import ProductLink from "../../components/ui/blocks/productlink";

function Mb86() {
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

  const similar = [
    <ProductLink linktext="Aluprof MB 70 HI" href="/products/mb70" opis="Aluminium Aluprof MB 70" pic="/pics/producticons/mb70.png"/>,
    <ProductLink linktext="Ponzio PE 68N" href="/products/pe68" opis="Aluminium Ponzio PE 68" pic="/pics/producticons/pe68.png"/>,
    <ProductLink linktext="Ponzio PE 78N" href="/products/pe78" opis="Aluminium Ponzio PE 78" pic="/pics/producticons/pe78.png"/>,
    <ProductLink linktext="Schüco AWS 75 SI" href="/products/aws75" opis="Aluminium Schüco AWS 75" pic="/pics/producticons/aws75.png"/>,
    <ProductLink linktext="Schüco AWS 90 SI" href="/products/aws90" opis="Aluminium Schüco AWS 90" pic="/pics/producticons/aws90.png"/>,
  ];

  const together = [
    <ProductLink linktext="Vorsatz Raffstoren" href="/products/raf" opis="C80 oder Z90, Unterputz, Überputz" pic="/pics/producticons/raf.png"/>,
    <ProductLink linktext="Aufsatz Rollläden" href="/products/ael" opis="Aluminium Lamellen, Motorsteuerung" pic="/pics/producticons/ael.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SK" href="/products/sk" opis="Aluminium Lamellen, eckiger Kasten" pic="/pics/producticons/vsr_sk.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SKP" href="/products/skp" opis="Aluminium Lamellen, viertelrunder Kasten" pic="/pics/producticons/vsr_skp.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SKO" href="/products/sko" opis="Aluminium Lamellen, halbrunder Kasten" pic="/pics/producticons/vsr_sko.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SP" href="/products/sp" opis="Aluminium Lamellen, Unterputz Kasten" pic="/pics/producticons/vsr_sp.png"/>,
  ]

  return (
    <Fragment>
      <Head>
        <title>Polnische Fenster Aluminium Aluprof MB 86 SI</title>
        <meta
          name="description"
          content="Aluminium Fenster Aluprof MB 86 SI. 3d Visualisierung"
        />
        <meta
          name="keywords"
          content="fenster, aluminium fenster, fenster aus polen, aluprof, mb 86 si"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Aluprof MB 86 SI Aluminium Fenster"/>
      <Visualisation profil="Aluprof MB 86 SI" showProfiles="no" />

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
          <h5 className="gray">Aluprof MB 86 SI Fenster</h5>

          <div className="gray f6 tl">
            <ul>
            <li>Wärmedämmung UW von 0,72 W(m2K)</li>
            <li>Bestens geeignet für energiesparenderen Konstruktionen</li>
            <li>In den Varianten ST, SI und AERO vefügbar</li>
            <li>Verwendet Kombination aus Silica-Aerogel und nicht gewobener Glasfaserfüllung</li>
            <li>Außergewöhnlich hohe Steifigkeit</li>
            <li>Größere und schwerere Fenster möglich.</li>
            <li>Neu geformte, hoch wärmedämmende thermische Trennungen.</li>
            <li>Mitteldichtung aus mehreren Komponenten</li>
            <li>Verglasung bis zu 67,5 mm Stärke.</li>
            <li>Geeignet für eine Vielzahl von Beschlägen, einschließlich verdeckt liegender Bänder.</li>
            <li>Schalldämmung: Klasse C5</li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-40-l ma2 silver">
          <Image src={image1} alt="Aluprof MB 86 SI" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image2} alt="Aluprof MB 86 SI" />
        </div>
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image3} alt="Aluprof MB 86 SI" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around mb3 mh4-l mt5 w-100 tc">
        <div className="w-100 w-50-l ma1 pa2 tc">
          <video width="100%" controls>
            <source src="../../movies/mb86.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-100 w-40-l ma1 pa2">
        <Image src={image_querschnitt} alt="Aluprof MB 86 SI" />
        </div>
      </div>

      <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Ähnliche Produkte:"
      >
        {similar}
      </Carousel>

      <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Beschattung:"
      >
        {together}
      </Carousel>

    </Fragment>
  );
}

export default Mb86;
