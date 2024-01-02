import { Fragment, useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image'
import hsImage from "../public/HS_PD_concrete_db703_logo.jpg"
import HeaderDiv from "../components/ui/headerdiv";
import ProductVisualisation from "../components/ui/productvisualisation"
import Carousel from "../components/ui/blocks/carousel";
import ProductLink from "../components/ui/blocks/productlink";


function HsPd() {
    
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
  <ProductLink linktext="Schüco LivingSlide" href="/hs" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_ls_weiss.png"/>,
  <ProductLink linktext="Kömmerling 70 Nebeneingangstür" href="/products/k70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/k70_nt.png"/>,
  <ProductLink linktext="Kömmerling 76 Nebeneingangstür" href="/products/k76nt" opis="Kunststoff Tür, 76 mm Einbautiefe" pic="/pics/producticons/k76_nt.png"/>,
  <ProductLink linktext="Kömmerling 88 Nebeneingangstür" href="/products/k88nt" opis="Kunststoff Tür, 88 mm Einbautiefe" pic="/pics/producticons/k88_nt.png"/>,
  <ProductLink linktext="Schüco CT 70 Nebeneingangstür" href="/products/ct70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_nt.png"/>,
  <ProductLink linktext="Schüco Living Nebeneingangstür" href="/products/livingnt" opis="Kunststoff Tür, 82 mm Einbautiefe" pic="/pics/producticons/living_nt.png"/>,
  <ProductLink linktext="Kömmerling 76 Haustür" href="/products/k76ht" opis="Kunststoff Haustür, 76 mm Einbautiefe" pic="/pics/producticons/k76_ht.png"/>,
  <ProductLink linktext="Kömmerling 88 Haustür" href="/products/k88ht" opis="Kunststoff Haustür, 88 mm Einbautiefe" pic="/pics/producticons/k88_ht.png"/>,
  <ProductLink linktext="Schüco CT 70 Haustür" href="/products/ct70ht" opis="Kunststoff Haustür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_ht.png"/>,
  <ProductLink linktext="Schüco Living Haustür" href="/products/livinght" opis="Kunststoff Haustür, 82 mm Einbautiefe" pic="/pics/producticons/living_ht.png"/>,
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
        <title>Polnische Fenster Kömmerling Premidoor 88</title>
        <meta name='description'
              content='Kömmerling Hebe Schiebe Premidoor 88 visualisierung. 3d Visualisierung'
        />
         <meta name='keywords'
              content='fenster, kunststofffenster, fenster aus polen, kömmerling, hebe schiebe, hs, preimdoor'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kömmerling Hebe Schiebe Türen" subtitle="Türsysteme, die Zugänglichkeit und Eleganz vereinen"/>
      <ProductVisualisation product="hspd" camera="48,48,48" productName="HS Kömmerling Preimdoor 88"/>
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
        <h5 className="gray">Kömmerling Premidoor 88</h5>
         
        <ul className="gray f6 tl">
					   <li>PremiDoor 88 ist eine komplett neu konstruierte Hebe-Schiebetür.</li>
             <li>Höchster Öffnungs- und Schließkomfort, mit exzellenten Dämmwerten und mit einer architektonisch eleganten Ästhetik. Schlagregenschutz, Winddichtigkeit und Schallschutz.</li>
					   <li>Eine neuartige Dichtungstechnologie, bei der drei Ebenen perfekt zusammenwirken.</li>
					   <li>Große Bautiefe, die eine hohe Stabilität und exzellente Dämmwerte sowie ein großes Verglasungsspektrum bis 56 mm </li>
					   <li>Alle Kunststoff-Profile werden im Frischmaterial ausschließlich mit bleifreien Stabilisatoren auf Calcium/Zink-Basis hergestellt.</li>
					    <li>Erstklassiger Wärmedurchgangskoeffizient von Uf - Mittelwert = 1,3 W/(m²K). </li>
					    <li>Zargenbautiefe von 207 mm.</li>
					    <li>Barrierefreier Übergang von innen nach außen - hochdämmende WPC Bodenschwelle.</li>
					   <li>Verschiedene Farbvarianten.</li>
             <li>Sichere Funktion, hoher Bedienungskomfort, schwebend leicht zu öffnen und schließen.</li>
				  </ul>
        
        
        </div>
        <div className="w-100 w-40-l b--moon-gray pa2 silver">
        <Image
        src={hsImage}
        alt="Kömmerling Premidoor 88 Hebe Schiebe"
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

export default HsPd;
