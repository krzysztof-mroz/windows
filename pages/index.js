import { Fragment } from "react";
import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import image1 from "/public/living_black_2.jpg";
import image2 from "/public/aws90_rust.jpg";
import Description from "../components/ui/description";
import HeaderDiv from "../components/ui/headerdiv";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";
import Visualisation from "../components/ui/visualisation";
import ProductLink from "../components/ui/blocks/productlink";
import Carousel from "../components/ui/blocks/carousel"



import "react-multi-carousel/lib/styles.css";




function StartPage() {

  const size = useWindowSize();

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
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

const fenster = [
  <ProductLink linktext="Schüco CT 70 Classic" href="/products/ct70" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/ct70_classic.png"/>,
  <ProductLink linktext="Schüco CT 70 Rondo" href="/products/ct70rondo" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/ct70_rondo.png"/>,
  <ProductLink linktext="Schüco Living MD" href="/products/living" opis="Kunststoff 7 Kammer, 82 mm Einbautiefe" pic="/pics/producticons/living.png"/>,
  <ProductLink linktext="Kömmerling 70 AD" href="/products/k70" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/k70.png"/>,
  <ProductLink linktext="Kömmerling 76 MD" href="/products/k76md" opis="Kunststoff 6 Kammer, 76 mm Einbautiefe" pic="/pics/producticons/k76_md.png"/>,
  <ProductLink linktext="Kömmerling 88 MD" href="/products/k88" opis="Kunststoff 7 Kammer, 88 mm Einbautiefe" pic="/pics/producticons/k88.png"/>,
  <ProductLink linktext="Ponzio PE 68N" href="/products/pe68" opis="Aluminium Ponzio PE 68" pic="/pics/producticons/pe68.png"/>,
  <ProductLink linktext="Ponzio PE 78N" href="/products/pe78" opis="Aluminium Ponzio PE 78" pic="/pics/producticons/pe78.png"/>,
  <ProductLink linktext="Aluprof MB 86 SI" href="/products/mb86" opis="Aluminium Aluprof MB 86" pic="/pics/producticons/mb86.png"/>,
  <ProductLink linktext="Schüco AWS 75 SI" href="/products/aws75" opis="Aluminium Schüco AWS 75" pic="/pics/producticons/aws75.png"/>,
  <ProductLink linktext="Schüco AWS 90 SI" href="/products/aws90" opis="Aluminium Schüco AWS 90" pic="/pics/producticons/aws90.png"/>,
  <ProductLink linktext="Schüco Living Haustür" href="/products/livinght" opis="Kunststoff Haustür, 82 mm Einbautiefe" pic="/pics/producticons/living_ht.png"/>,
  <ProductLink linktext="Kömmerling 88 Haustür" href="/products/k88ht" opis="Kunststoff Haustür, 88 mm Einbautiefe" pic="/pics/producticons/k88_ht.png"/>,
  <ProductLink linktext="Schüco LivingSlide" href="/hs" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_ls_weiss.png"/>,
  <ProductLink linktext="Kömmerling Premidoor 88" href="/hspd" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_pd.png"/>,
  <ProductLink linktext="Vorsatz Raffstoren" href="/products/raf" opis="C80 oder Z90, Unterputz, Überputz" pic="/pics/producticons/raf.png"/>,
  <ProductLink linktext="Aufsatz Rollläden" href="/products/ael" opis="Aluminium Lamellen, Motorsteuerung" pic="/pics/producticons/ael.png"/>,
  <ProductLink linktext="Vorsatz Rollläden SK" href="/products/sk" opis="Aluminium Lamellen, eckiger Kasten" pic="/pics/producticons/vsr_sk.png"/>,
  <ProductLink linktext="Vorsatz Rollläden SKP" href="/products/skp" opis="Aluminium Lamellen, viertelrunder Kasten" pic="/pics/producticons/vsr_skp.png"/>,
  <ProductLink linktext="Vorsatz Rollläden SKO" href="/products/sko" opis="Aluminium Lamellen, halbrunder Kasten" pic="/pics/producticons/vsr_sko.png"/>,
  <ProductLink linktext="Vorsatz Rollläden SP" href="/products/sp" opis="Aluminium Lamellen, Unterputz Kasten" pic="/pics/producticons/vsr_sp.png"/>,
  
]

const tueren = [
  <ProductLink linktext="Schüco CT 70 Nebeneingangstür" href="/products/ct70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_nt.png"/>,
  <ProductLink linktext="Schüco Living Nebeneingangstür" href="/products/livingnt" opis="Kunststoff Tür, 82 mm Einbautiefe" pic="/pics/producticons/living_nt.png"/>,
  <ProductLink linktext="Kömmerling 70 Nebeneingangstür" href="/products/k70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/k70_nt.png"/>,
  <ProductLink linktext="Kömmerling 76 Nebeneingangstür" href="/products/k76nt" opis="Kunststoff Tür, 76 mm Einbautiefe" pic="/pics/producticons/k76_nt.png"/>,
  <ProductLink linktext="Kömmerling 88 Nebeneingangstür" href="/products/k88nt" opis="Kunststoff Tür, 88 mm Einbautiefe" pic="/pics/producticons/k88_nt.png"/>,
  <ProductLink linktext="Schüco CT 70 Haustür" href="/products/ct70ht" opis="Kunststoff Haustür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_ht.png"/>,
  <ProductLink linktext="Schüco Living Haustür" href="/products/livinght" opis="Kunststoff Haustür, 82 mm Einbautiefe" pic="/pics/producticons/living_ht.png"/>,
  <ProductLink linktext="Kömmerling 76 Haustür" href="/products/k76ht" opis="Kunststoff Haustür, 76 mm Einbautiefe" pic="/pics/producticons/k76_ht.png"/>,
  <ProductLink linktext="Kömmerling 88 Haustür" href="/products/k88ht" opis="Kunststoff Haustür, 88 mm Einbautiefe" pic="/pics/producticons/k88_ht.png"/>,
  <ProductLink linktext="Schüco LivingSlide" href="/hs" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_ls_weiss.png"/>,
  <ProductLink linktext="Kömmerling Premidoor 88" href="/hspd" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_pd.png"/>,
]



const hebeschiebe = [
  

]
 
  return (


    <Fragment>
      <Head>
        <title>Schüco / Kömmerling Fenster aus Polen kaufen, Kunststoff und Alu</title>
        <meta name='description'
              content='Erreichen Sie garantiert bis 70% bessere Wärmedämmung mit Schüco, Kömmerling, Ponzio und Aluprof Fenster / Türen aus Polen, mit Montage. Schöne 3d Modelle.'
        />
         
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kunststoff und Aluminium Fenster aus Polen" />
      <Visualisation profil = "Kömmerling 88 MD" showProfiles = "yes" />

     

       
  
  <Description />

  <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image1} alt="Kunststofffenster Schüco Living MD" />
        </div>
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image2} alt="Aluminium Fenster Schüco AWS 90" />
        </div>
      </div>

      <Carousel show={Math.floor((size.width-50)/186)} title="Unsere Produkte:">      
          {fenster}
      </Carousel>
      
     <WarumDiv />
      <ActionDiv /> 
    </Fragment>
  );
}

export default StartPage;
