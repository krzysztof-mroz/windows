import { Fragment } from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import image1 from "../../public/living_moosgruen.jpg";
import image2 from "../../public/living_anthr_2.jpg";
import image3 from "../../public/living_weiss_3.jpg";
import image_querschnitt from "../../public/pics/sections/living.png";
import HeaderDiv from "../../components/ui/headerdiv";
import Visualisation from "../../components/ui/visualisation";
import Carousel from "../../components/ui/blocks/carousel";
import ProductLink from "../../components/ui/blocks/productlink";

function Living() {
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
    <ProductLink
    linktext="Schüco CT 70 Classic"
    href="/products/ct70"
    opis="Kunststoff 5 Kammer, 70 mm Einbautiefe"
    pic="/pics/producticons/ct70_classic.png"
  />,

    <ProductLink
      linktext="Schüco CT 70 Rondo"
      href="/products/ct70rondo"
      opis="Kunststoff 5 Kammer, 70 mm Einbautiefe"
      pic="/pics/producticons/ct70_rondo.png"
    />,

    <ProductLink linktext="Schüco Living Nebeneingangstür" href="/products/livingnt" opis="Kunststoff Tür, 82 mm Einbautiefe" pic="/pics/producticons/living_nt.png"/>,
    <ProductLink linktext="Schüco Living Haustür" href="/products/livinght" opis="Kunststoff Haustür, 82 mm Einbautiefe" pic="/pics/producticons/living_ht.png"/>,
    <ProductLink linktext="Schüco LivingSlide" href="/hs" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_ls_weiss.png"/>,
    
    <ProductLink
      linktext="Kömmerling 70"
      href="/products/k70"
      opis="Kunststoff 5 Kammer, 70 mm Einbautiefe"
      pic="/pics/producticons/k70.png"
    />,
    <ProductLink
      linktext="Kömmerling 76 AD"
      href="/products/k76ad"
      opis="Kunststoff 5 Kammer, 76 mm Einbautiefe"
      pic="/pics/producticons/k76_ad.png"
    />,
    <ProductLink
      linktext="Kömmerling 76 MD"
      href="/products/k76md"
      opis="Kunststoff 6 Kammer, 76 mm Einbautiefe"
      pic="/pics/producticons/k76_md.png"
    />,
    <ProductLink
      linktext="Kömmerling 88 MD"
      href="/products/k88"
      opis="Kunststoff 7 Kammer, 88 mm Einbautiefe"
      pic="/pics/producticons/k88.png"
    />,
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
        <title>Polnische Fenster Schüco Living MD</title>
        <meta
          name="description"
          content="Schüco Living MD Kunststoff Fenster. 3d Visualisierung"
        />
        <meta
          name="keywords"
          content="fenster, kunststoff fenster, fenster aus polen, schüco, living, si82"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Schüco Living MD Kunststofffenster" />
      <Visualisation profil="Schüco Living MD" showProfiles="no" />

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
          <h5 className="gray">Schüco Living MD Fenster</h5>

          <div className="gray f6 tl">
            <ul>
            <li>7 Luftkammer für exzellente Wärmedämmung,</li>
            <li>Blendrahmen Einbautiefe 82mm,</li>
              <li>versetzte, klasische Optik,</li>
              <li>Uf-Wert 0,96 W/m2K, </li>
              <li>Schallschutz 47dB,</li>
              <li> 3 fache Verglasung bis Ug=0,5 W/m2K möglich,</li>
              <li>3 umlaufene EPDM Dichtungen, inkusive Mitteldichtung,</li>
              <li>Grauer Profilkern bei grauer Farbe möglich,</li>
              <li>
                Winkhaus activPilot Beschlag mit 2 Schicherheitschließblechen im
                Standard,
              </li>
              <li>Pilzkopfverriegelungen im Standard,</li>
              <li>Fehlbedienungssperre,</li>
              <li>Mehrfachspaltlüftung und Flügelheber im Standard,</li>
              <li>
                sowie spezielle Einbruchschutz - Hoppe Sekustik Aluminium
                Griffe,
              </li>
              <li>mittige Griffposition für bessere Ästhetik.</li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-40-l ma2 silver">
          <Image src={image1} alt="Schüco Living MD" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image2} alt="Schüco Living MD" />
        </div>
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image3} alt="Schüco Living MD" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around mb3 mh4-l mt5 w-100 tc">
        <div className="w-100 w-50-l ma1 pa2 tc">
          <video width="100%" controls>
            <source src="../../movies/living.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-100 w-40-l ma1 pa2">
        <Image src={image_querschnitt} alt="Schüco Living MD" />
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

export default Living;
