import { Fragment } from "react";
import Head from 'next/head';
import Image from 'next/image'
import skImage from "../../public/sk3.jpg"
import skImage2 from "../../public/sk_ohne.jpg"
import skImage3 from "../../public/sk1.jpg"
import skImage4 from "../../public/sk2.jpg"
import HeaderDiv from "../../components/ui/headerdiv";
import Rollovisualisation from "../../components/ui/rollovisualisation";
import { SkinnedMesh } from "three";


function Sk() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Vorsatzrollladen SK</title>
        <meta name='description'
              content='Aluprof Vorsatzrollladen SK. 3d Visualisierung'
        />
         <meta name='keywords'
              content='rollladen, vorsatzrollladen aus polen, aluprof, sk'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Vorsatzrollladen SK" />
      <Rollovisualisation product="sk" camera="220,220,220" productName="Vorsatzrollladen Aluprof SK eckig"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
       
         
        <Image
        src={skImage}
        alt="Vorsatzrollladen Aluprof SK"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        
        
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
        <Image
        src={skImage2}
        alt="Vorsatzrollladen SK"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        </div>

       
      </div>

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
       
         
        <Image
        src={skImage3}
        alt="Vorsatzrollladen SK"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        
        
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
        <Image
        src={skImage4}
        alt="Vorsatzrollladen SK"
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

export default Sk;
