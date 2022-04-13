import { Fragment } from "react";
import Head from 'next/head';
import Image from 'next/image'
import skImage from "../../public/sko3.jpg"
import skImage2 from "../../public/sko2.jpg"
import HeaderDiv from "../../components/ui/headerdiv";
import Rollovisualisation from "../../components/ui/rollovisualisation";
import { SkinnedMesh } from "three";


function Sko() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Vorsatzrollladen SKO</title>
        <meta name='description'
              content='Aluprof Vorsatzrollladen SKO. 3d Visualisierung'
        />
         <meta name='keywords'
              content='rollladen, vorsatzrollladen aus polen, aluprof, sko'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Vorsatzrollladen SKO" />
      <Rollovisualisation product="sko" camera="220,220,220" productName="Vorsatzrollladen Aluprof SKO halbrund"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
       
         
        <Image
        src={skImage}
        alt="Vorsatzrollladen Aluprof SKO"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        
        
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
        <Image
        src={skImage2}
        alt="Vorsatzrollladen SKO"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        </div>

      </div>
     
    </Fragment>
  );
}

export default Sko;
