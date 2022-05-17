import { Fragment } from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import image1 from "../../public/k70_golden_oak.jpg";
import image2 from "../../public/k70_anthr_2.jpg";
import image3 from "../../public/k70_weiss_3.jpg";
import image_querschnitt from "../../public/pics/sections/k70.png";
import HeaderDiv from "../../components/ui/headerdiv";
import Visualisation from "../../components/ui/visualisation";
import Carousel from "../../components/ui/blocks/carousel";
import ProductLink from "../../components/ui/blocks/productlink";

function K70() {
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
    <ProductLink linktext="Kömmerling 70 Nebeneingangstür" href="/products/k70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/k70_nt.png"/>,
  <ProductLink linktext="Kömmerling 76 Nebeneingangstür" href="/products/k76nt" opis="Kunststoff Tür, 76 mm Einbautiefe" pic="/pics/producticons/k76_nt.png"/>,
  <ProductLink linktext="Kömmerling 76 Haustür" href="/products/k76ht" opis="Kunststoff Haustür, 76 mm Einbautiefe" pic="/pics/producticons/k76_ht.png"/>,
  <ProductLink linktext="Kömmerling Premidoor 88" href="/hspd" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_pd.png"/>,
  <ProductLink
      linktext="Kömmerling 88 MD"
      href="/products/k88"
      opis="Kunststoff 7 Kammer, 88 mm Einbautiefe"
      pic="/pics/producticons/k88.png"
    />,
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
   
    
   
    
    
    <ProductLink
      linktext="Schüco Living MD"
      href="/products/living"
      opis="Kunststoff 7 Kammer, 82 mm Einbautiefe"
      pic="/pics/producticons/living.png"
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
        <title>Polnische Fenster Kömmerling 70 AD</title>
        <meta
          name="description"
          content="Kömmerling 70 AD Kunststoff Fenster. 3d Visualisierung"
        />
        <meta
          name="keywords"
          content="fenster, kunststoff fenster, fenster aus polen, kömmerling, k 70"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kömmerling 70 AD Kunststofffenster" />
      <Visualisation profil="Kömmerling 70 AD" showProfiles="no" />

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
          <h5 className="gray">Kömmerling 70 AD Fenster</h5>

          <div className="gray f6 tl">
            <ul>
            <li>5 Luftkammer,</li>
            <li>moderne Optik,</li>
              <li>2 versteckte Dichtungen und 70 mm Einbautiefe.</li>
              <li>5 Luftkammern für bessere Wärmedämmung von 1,2 W/m2K,</li>
              <li>stabile Stahlverstärkung,</li>
              <li>2-fache Verglasung 4/16/4 Ug=1,0 W/m2K im Standard,</li>
              <li>
                {" "}
                3 fache Verglasung Ug=0,7 W/m2K möglich (bis 44 mm Dicke),
              </li>
              <li>
                Bleifreies PVC mit „grünen“ Stabilisatoren auf Calcium/Zink
                Basis
              </li>
              <li>
                Winkhaus activPilot Beschlag mit 2 Schicherheitschließblechen im
                Standard,
              </li>
              <li>Pilzkopfverriegelungen, Fehlbedienungssperre im Standard,</li>   
              <li>Mehrfachspaltlüftung und Flügelheber im Standard,</li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-40-l ma2 silver">
          <Image src={image1} alt="Kömmerling 70 AD" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image2} alt="Kömmerling 70 AD" />
        </div>
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image3} alt="Kömmerling 70 AD" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around mb3 mh4-l mt5 w-100 tc">
        <div className="w-100 w-50-l ma1 pa2 tc">
          <video width="100%" controls>
            <source src="../../movies/k70.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-100 w-40-l ma1 pa2">
        <Image src={image_querschnitt} alt="Kömmerling 70 AD" />
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

export default K70;
