import { Fragment } from "react";
import Head from 'next/head';

import HeaderDiv from "../../components/ui/headerdiv";
import ProductVisualisation from "../../components/ui/productvisualisation"


function Ct70Nt() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Schüco CT 70 Nebeneingangstür</title>
        <meta name='description'
              content='Schüco CT 70 Nebeneingangstür flache Schwelle visualisierung. 3d Visualisierung'
        />
         <meta name='keywords'
              content='tür, nebentür, nebeneingangstür aus polen, schüco, ct 70, kunststoff nebentür, tür aus polen'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Schüco CT 70 Nebeneingangstür" />
      <ProductVisualisation product="ct70nt" camera="35,35,35" productName="Schüco CT 70 Nebeneingangstür"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-33-l mt1 mt5-l">
        <h5 className="gray">Schüco CT 70 Nebeneingangstür</h5>
         
        <ul className="gray f6 tl">
        <li>Text</li>
					   <li>Text</li>
             <li>Text</li>
             <li>Text</li>
					 
				  </ul>
        
        
        </div>
        <div className="w-100 w-60-l  b--moon-gray pa2 silver">
          <img  src="/ct70_nt_moosgruen.jpg"></img>
        </div>
      </div>

     
     
    </Fragment>
  );
}

export default Ct70Nt;
