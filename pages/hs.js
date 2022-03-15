import { Fragment } from "react";
import Head from 'next/head';


import Description from "../components/ui/description";
import HeaderDiv from "../components/ui/headerdiv";

import HSVisualisation from "../components/ui/hsvisualisation"


function StartPage() {
    
  
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
      <HSVisualisation />
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l">
          
        </div>
        <div className="w-100 w-40-l ba b--moon-gray pa4 silver">
          <img  src="HS_LS_concrete_goldenoak_logo_500.jpg"></img>
        </div>
      </div>

     
     
    </Fragment>
  );
}

export default StartPage;
