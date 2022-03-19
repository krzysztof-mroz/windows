import { Fragment } from "react";
import Head from 'next/head';

import HeaderDiv from "../../components/ui/headerdiv";
import ProductVisualisation from "../../components/ui/productvisualisation"


function LivingHt() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Schüco Living Haustür</title>
        <meta name='description'
              content='Schüco Living Haustür Schwelle visualisierung. 3d Visualisierung'
        />
         <meta name='keywords'
              content='tür, haustür, haustür aus polen, schüco, living, kunststoff haustür, tür aus polen'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Schüco Living Haustür" />
      <ProductVisualisation product="livinght" camera="35,35,35" productName="Schüco Living Haustür"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-33-l mt1 mt5-l">
        <h5 className="gray">Schüco Living Haustür</h5>
         
        <ul className="gray f6 tl">
        <li>Text</li>
					   <li>Text</li>
             <li>Text</li>
             <li>Text</li>
					 
				  </ul>
        
        
        </div>
        <div className="w-100 w-60-l ba b--moon-gray pa2 silver">
          <img  src="/living_ht_black.jpg"></img>
        </div>
      </div>

     
     
    </Fragment>
  );
}

export default LivingHt;
