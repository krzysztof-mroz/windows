import { Fragment } from "react";
import Head from 'next/head';
import Image from 'next/image'
import skImage from "../../public/skp3.jpg"
import skImage2 from "../../public/skp2.jpg"
import HeaderDiv from "../../components/ui/headerdiv";
import Rollovisualisation from "../../components/ui/rollovisualisation";
import { SkinnedMesh } from "three";


function Skp() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Vorsatzrollladen SKP</title>
        <meta name='description'
              content='Aluprof Vorsatzrollladen SKP Viertelrund. 3d Visualisierung'
        />
         <meta name='keywords'
              content='rollladen, vorsatzrollladen aus polen, aluprof, skp, viertelrund'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Vorsatzrollladen SKP" />
      <Rollovisualisation product="skp" camera="220,220,220" productName="Vorsatzrollladen Aluprof SKP viertelrund"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
       
         
        <Image
        src={skImage}
        alt="Vorsatzrollladen Aluprof SKP"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        
        
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
        <Image
        src={skImage2}
        alt="Vorsatzrollladen SKP"
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

export default Skp;
