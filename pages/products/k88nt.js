import { Fragment } from "react";
import Head from 'next/head';
import Image from 'next/image'
import k88ntImage from "../../public/k88_nt_weiss.jpg"
import HeaderDiv from "../../components/ui/headerdiv";
import ProductVisualisation from "../../components/ui/productvisualisation"


function K88Nt() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Kömmerling 88 Nebeneingangstür</title>
        <meta name='description'
              content='Kömmerling 88 Nebeneinganstür Schwelle Visualisierung. 3d Visualisierung'
        />
         <meta name='keywords'
              content='tür, nebeneingangstür, nebentür, kömmerling, kömmerling 88, kunststoff haustür, tür aus polen'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kömmerling 88 Nebeneingangstür" />
      <ProductVisualisation product="k88nt" camera="35,35,35" productName="Kömmerling 88 Nebeneingangstür"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
        <h5 className="gray">Kömmerling 88 Nebeneingangstür</h5>
         
        <ul className="gray f6 tl">
        <li>Text</li>
					   <li>Text</li>
             <li>Text</li>
             <li>Text</li>
				  </ul>
        
        
        </div>
        <div className="w-100 w-50-l  b--moon-gray pa2 silver">
        <Image
        src={k88ntImage}
        alt="Kömmerling 88 Nebeneingangstür"
      />
        </div>
      </div>

     
     
    </Fragment>
  );
}

export default K88Nt;
