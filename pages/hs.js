import { Fragment, useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image'
import hsImage from "../public/HS_LS_concrete_goldenoak_logo.jpg"
import HeaderDiv from "../components/ui/headerdiv";
import ProductVisualisation from "../components/ui/productvisualisation"
import Carousel from "../components/ui/blocks/carousel";
import ProductLink from "../components/ui/blocks/productlink";


function Hs() {
    
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
  <ProductLink linktext="Kömmerling Premidoor 88" href="/hspd" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_pd.png"/>,
  <ProductLink linktext="Schüco CT 70 Nebeneingangstür" href="/products/ct70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_nt.png"/>,
  <ProductLink linktext="Schüco Living Nebeneingangstür" href="/products/livingnt" opis="Kunststoff Tür, 82 mm Einbautiefe" pic="/pics/producticons/living_nt.png"/>,
  <ProductLink linktext="Kömmerling 70 Nebeneingangstür" href="/products/k70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/k70_nt.png"/>,
  <ProductLink linktext="Kömmerling 76 Nebeneingangstür" href="/products/k76nt" opis="Kunststoff Tür, 76 mm Einbautiefe" pic="/pics/producticons/k76_nt.png"/>,
  <ProductLink linktext="Kömmerling 88 Nebeneingangstür" href="/products/k88nt" opis="Kunststoff Tür, 88 mm Einbautiefe" pic="/pics/producticons/k88_nt.png"/>,
  <ProductLink linktext="Schüco CT 70 Haustür" href="/products/ct70ht" opis="Kunststoff Haustür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_ht.png"/>,
  <ProductLink linktext="Schüco Living Haustür" href="/products/livinght" opis="Kunststoff Haustür, 82 mm Einbautiefe" pic="/pics/producticons/living_ht.png"/>,
  <ProductLink linktext="Kömmerling 76 Haustür" href="/products/k76ht" opis="Kunststoff Haustür, 76 mm Einbautiefe" pic="/pics/producticons/k76_ht.png"/>,
  <ProductLink linktext="Kömmerling 88 Haustür" href="/products/k88ht" opis="Kunststoff Haustür, 88 mm Einbautiefe" pic="/pics/producticons/k88_ht.png"/>,
  ];

  const together = [
    <ProductLink linktext="Schüco CT 70 Classic" href="/products/ct70" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/ct70_classic.png"/>,
    <ProductLink linktext="Schüco CT 70 Rondo" href="/products/ct70rondo" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/ct70_rondo.png"/>,
    <ProductLink linktext="Schüco Living MD" href="/products/living" opis="Kunststoff 7 Kammer, 82 mm Einbautiefe" pic="/pics/producticons/living.png"/>,
    <ProductLink linktext="Kömmerling 70 AD" href="/products/k70" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/k70.png"/>,
    <ProductLink linktext="Kömmerling 76 AD" href="/products/k76ad" opis="Kunststoff 5 Kammer, 76 mm Einbautiefe" pic="/pics/producticons/k76_ad.png"/>,
    <ProductLink linktext="Kömmerling 76 MD" href="/products/k76md" opis="Kunststoff 6 Kammer, 76 mm Einbautiefe" pic="/pics/producticons/k76_md.png"/>,
    <ProductLink linktext="Kömmerling 88 MD" href="/products/k88" opis="Kunststoff 7 Kammer, 88 mm Einbautiefe" pic="/pics/producticons/k88.png"/>,
    <ProductLink linktext="Ponzio PE 68N" href="/products/pe68" opis="Aluminium Ponzio PE 68" pic="/pics/producticons/pe68.png"/>,
    <ProductLink linktext="Ponzio PE 78N" href="/products/pe78" opis="Aluminium Ponzio PE 78" pic="/pics/producticons/pe78.png"/>,
    <ProductLink linktext="Aluprof MB 70 HI" href="/products/mb70" opis="Aluminium Aluprof MB 70" pic="/pics/producticons/mb70.png"/>,
    <ProductLink linktext="Aluprof MB 86 SI" href="/products/mb86" opis="Aluminium Aluprof MB 86" pic="/pics/producticons/mb86.png"/>,
    <ProductLink linktext="Schüco AWS 75 SI" href="/products/aws75" opis="Aluminium Schüco AWS 75" pic="/pics/producticons/aws75.png"/>,
    <ProductLink linktext="Schüco AWS 90 SI" href="/products/aws90" opis="Aluminium Schüco AWS 90" pic="/pics/producticons/aws90.png"/>,
  ];

  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Schüco Living Slide</title>
        <meta name='description'
              content='Schüco Hebe Schiebe Living Slide visualisierung. 3d Visualisierung'
        />
         <meta name='keywords'
              content='fenster, kunststofffenster, fenster aus polen, schüco, hebe schiebe, hs, living slide'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Schüco Hebe Schiebe Türen" subtitle="Robuste Schiebe-Türlösungen für barrierefreie Übergänge"/>
      <ProductVisualisation product="hsls" camera="48,48,48" productName="HS Schüco Living Slide"/>
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
        <h5 className="gray">Schüco Living Slide</h5>
         
        <ul className="gray f6 tl">
					   <li>Das innovative Hebeschiebesystem Schüco LivIngSlide ist mit einer 82 mm Grundbautiefe des Flügelrahmens auf Basis der Schüco LivIng Systemmaße konstruiert. Die einheitlichen Systemmaße gewährleisten eine einfache, flexible Planung und Ausführung von Anschlusssituationen.</li>
					   <li>EPDM Dichtungen im Standard, RC2 Ausführung möglich</li>
					   <li>3 fache Verglasungen bis Ug=0,5 W/m2K möglich</li>
					   <li>Großelemente mit Flügelgewichten bis 400 kg möglich.</li>
					    <li>Attraktive Optik. Das flächenbündige Design vermeidet sonst übliche Spaltmaße am Festteil und realisiert eine moderne Linienführung bei gleichzeitig leichter Reinigung. </li>
					    <li>Zargenbautiefe von 194 mm.</li>
					    <li>Besonders flache Bodenschwelle für bequemes Herein- und Herausgehen.</li>
					   <li>Verschiedene Farbvarianten.</li>
             <li>Weitere Informationen gerne auf Anfrage.</li>
				  </ul>
        
        
        </div>
        <div className="w-100 w-40-l b--moon-gray pa2 silver">
        <Image
        src={hsImage}
        alt="Schüco Living Slide Hebe Schiebe"
      />
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
        title="Unsere Fenster:"
      >
        {together}
      </Carousel>
     
    </Fragment>
  );
}

export default Hs;
