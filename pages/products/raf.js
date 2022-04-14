import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import rafImage from "../../public/raf1.jpg";
import rafImage2 from "../../public/raf2.jpg";
import rafImage3 from "../../public/raf3.jpg";
import rafImage4 from "../../public/raf_c80.jpg";
import rafImage5 from "../../public/raf_z90.jpg";
import HeaderDiv from "../../components/ui/headerdiv";
import Rollovisualisation from "../../components/ui/rollovisualisation";
import { SkinnedMesh } from "three";

function Raf() {
  return (
    <Fragment>
      <Head>
        <title>Polnische Fenster Unterputz Vorsatzrollladen SP</title>
        <meta
          name="description"
          content="Aluprof Unterputz Vorsatzrollladen SP. 3d Visualisierung"
        />
        <meta
          name="keywords"
          content="rollladen, vorsatzrollladen aus polen, aluprof, sp, unterputz"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Unterputz Vorsatzrollladen SP" />
      <Rollovisualisation
        product="raf"
        camera="220,220,220"
        productName="Raffstore"
      />

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage}
            alt="Raffstore"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage2}
            alt="Raffstore"
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
            src={rafImage3}
            alt="Raffstore"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage4}
            alt="Raffstore"
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
            src={rafImage5}
            alt="Raffstore"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          
        </div>
      </div>
    </Fragment>
  );
}

export default Raf;
