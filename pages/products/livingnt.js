import { Fragment } from "react";
import Head from 'next/head';
import Image from 'next/image'
import livingntImage from "../../public/living_nt_anthr.jpg"
import HeaderDiv from "../../components/ui/headerdiv";
import ProductVisualisation from "../../components/ui/productvisualisation"


function LivingNt() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Schüco Living Nebeneingangstür</title>
        <meta name='description'
              content='Schüco Living Nebeneingangstür flache Schwelle Visualisierung. 3d Visualisierung'
        />
         <meta name='keywords'
              content='tür, nebentür, nebeneingangstür aus polen, schüco, living, kunststoff nebentür, tür aus polen'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Schüco Living Nebeneingangstür" />
      <ProductVisualisation product="livingnt" camera="35,35,35" productName="Schüco Living Nebeneingangstür"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
        <h5 className="gray">Schüco Living Nebeneingangstür</h5>
         
        <ul className="gray f6 tl">
					   <li>Text</li>
					   <li>Text</li>
             <li>Text</li>
             <li>Text</li>
					 
				  </ul>
        
        
        </div>
        <div className="w-100 w-50-l b--moon-gray pa2 silver">
        <Image
        src={livingntImage}
        alt="Schüco Living Nebeneingangstür"
      />
        </div>
      </div>

     
     
    </Fragment>
  );
}

export default LivingNt;
