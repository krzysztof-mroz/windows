import { Fragment } from "react";
import Head from 'next/head';
import Image from 'next/image'
import Image from "../../public/ael3_big.jpg"
import aelImage2 from "../../public/ael1.jpg"
import HeaderDiv from "../../components/ui/headerdiv";
import Rollovisualisation from "../../components/ui/rollovisualisation";


function Ael() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Aufsatzrollladen</title>
        <meta name='description'
              content='Aluprof Opoterm Aufsatzrollladen. 3d Visualisierung'
        />
         <meta name='keywords'
              content='rollladen, aufsatzrolladen aus polen, aluprof, opoterm'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Aufsatzrollladen" />
      <Rollovisualisation product="ael" camera="220,220,220" productName="Aufsatzrollladen Aluprof SKT Opoterm"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
       
         
        <Image
        src={aelImage}
        alt="Aufsatzrollladen Opoterm"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        
        
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
        <Image
        src={aelImage2}
        alt="Aufsatzrollladen Opoterm"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        </div>

        <div className="w-100 w-60-l  b--moon-gray pa2 silver">
        
        </div>
      </div>

     
     
    </Fragment>
  );
}

export default Ael;
