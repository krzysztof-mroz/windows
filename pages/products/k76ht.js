import { Fragment } from "react";
import Head from 'next/head';
import Image from 'next/image'
import k76htImage from "../../public/k76_ht_anthr.jpg"
import HeaderDiv from "../../components/ui/headerdiv";
import ProductVisualisation from "../../components/ui/productvisualisation"


function K76Ht() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Kömmerling 76 Haustür</title>
        <meta name='description'
              content='Kömmerling 76 Haustür Schwelle Visualisierung. 3d Visualisierung'
        />
         <meta name='keywords'
              content='tür, haustür, kömmerling, kömmerling 76, kunststoff haustür, tür aus polen'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kömmerling 76 Haustür" />
      <ProductVisualisation product="k76ht" camera="35,35,35" productName="Kömmerling 76 Haustür"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
        <h5 className="gray">Kömmerling 76 Haustür</h5>
         
        <ul className="gray f6 tl">
        <li>Text</li>
					   <li>Text</li>
             <li>Text</li>
             <li>Text</li>
				  </ul>
        
        
        </div>
        <div className="w-100 w-50-l  b--moon-gray pa2 silver">
        <Image
        src={k76htImage}
        alt="Kömmerling 76 Haustür"
      />
        </div>
      </div>

     
     
    </Fragment>
  );
}

export default K76Ht;
