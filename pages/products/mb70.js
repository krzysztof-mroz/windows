import { Fragment } from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import image1 from "../../public/mb70_oregon.jpg";
import image2 from "../../public/mb70_lachsrot_2.jpg";
import image3 from "../../public/mb70_weiss_3.jpg";
import image_querschnitt from "../../public/pics/sections/mb70.png";
import HeaderDiv from "../../components/ui/headerdiv";
import Visualisation from "../../components/ui/visualisation";
import Carousel from "../../components/ui/blocks/carousel";
import ProductLink from "../../components/ui/blocks/productlink";

function Mb70() {
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
    <ProductLink linktext="Aluprof MB 86 SI" href="/products/mb86" opis="Aluminium Aluprof MB 86" pic="/pics/producticons/mb86.png"/>,
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
        <title>Polnische Fenster Aluminium Aluprof MB 70 HI</title>
        <meta
          name="description"
          content="Aluminium Fenster Aluprof MB 70 HI. 3d Visualisierung"
        />
        <meta
          name="keywords"
          content="fenster, aluminium fenster, fenster aus polen, aluprof, mb 70 hi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Aluprof MB 70 HI Aluminium Fenster"/>
      <Visualisation profil="Aluprof MB 70 HI" showProfiles="no" />

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
          <h5 className="gray">Aluprof MB 70 HI Fenster</h5>

          <div className="gray f6 tl">
            <ul>
            <li>Wärmedämmung UW von 1,5 W(m2K)</li>
            <li>Dreikammerprofil System</li>
            <li>Einbautiefe beträgt 70 mm (Blendrahmen) und 79 mm (Flügel) </li>
            <li>profilierte Isolierstege in Omegaform mit der Breite von 34 mm aus dem mit Glasfasern verstärkten Polyamid</li>
            <li>Einsatz der Verglasung mit der Dicke von 21 mm bis 57 mm möglich</li>
            <li>Breite Farbpalette mit Standard-Farbtönen</li>
            <li>Dichtungen aus dem 2K-Kunstkautschuk EPDM hergestellt</li>
            <li>Für Fenster, Türen, Windfänge, Schaufenster und 3D-Konstruktionen gut geeignet.</li>
            <li>Eindruck einer einheitlichen Oberfläche von außen</li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-40-l ma2 silver">
          <Image src={image1} alt="Aluprof MB 70 HI" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image2} alt="Aluprof MB 70 HI" />
        </div>
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image3} alt="Aluprof MB 70 HI" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around mb3 mh4-l mt5 w-100 tc">
        <div className="w-100 w-50-l ma1 pa2 tc">
          <video width="100%" controls>
            <source src="../../movies/mb70.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-100 w-40-l ma1 pa2">
        <Image src={image_querschnitt} alt="Aluprof MB 70 HI" />
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

export default Mb70;
