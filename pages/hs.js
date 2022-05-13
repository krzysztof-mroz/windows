import { Fragment } from "react";
import Head from 'next/head';
import Image from 'next/image'
import hsImage from "../public/HS_LS_concrete_goldenoak_logo.jpg"
import HeaderDiv from "../components/ui/headerdiv";

import ProductVisualisation from "../components/ui/productvisualisation"


function Hs() {
    
  
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
      <HeaderDiv title="Schüco Hebe Schiebe Türen" />
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

     
     
    </Fragment>
  );
}

export default Hs;
