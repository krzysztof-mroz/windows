import { Fragment } from "react";
import Head from 'next/head';

import HeaderDiv from "../../components/ui/headerdiv";
import ProductVisualisation from "../../components/ui/productvisualisation"


function K88Ht() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Kömmerling 88 Haustür</title>
        <meta name='description'
              content='Kömmerling 88 Haustür Schwelle visualisierung. 3d Visualisierung'
        />
         <meta name='keywords'
              content='tür, haustür, haustür aus polen, kömmerling, kömmerling 88, kunststoff haustür, tür aus polen'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kömmerling 88 Haustür" />
      <ProductVisualisation product="k88ht" camera="35,35,35" productName="Kömmerling 88 Haustür"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-33-l mt1 mt5-l">
        <h5 className="gray">Kömmerling 88 Haustür</h5>
         
        <ul className="gray f6 tl">
        <li>Text</li>
					   <li>Text</li>
             <li>Text</li>
             <li>Text</li>
				  </ul>
        
        
        </div>
        <div className="w-100 w-60-l  b--moon-gray pa2 silver">
          <img  src="/k88_ht_anthr.jpg"></img>
        </div>
      </div>

     
     
    </Fragment>
  );
}

export default K88Ht;