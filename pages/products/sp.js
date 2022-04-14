import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import spImage from "../../public/sp1.jpg";
import spImage2 from "../../public/sp2.jpg";
import spImage3 from "../../public/sp3.jpg";
import spImage4 from "../../public/sp4.jpg";
import HeaderDiv from "../../components/ui/headerdiv";
import Rollovisualisation from "../../components/ui/rollovisualisation";
import { SkinnedMesh } from "three";

function Sp() {
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
        product="sp"
        camera="220,220,220"
        productName="Unterputz Vorsatzrollladen Aluprof SP"
      />

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={spImage}
            alt="Unterputz Vorsatzrollladen Aluprof SP"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={spImage2}
            alt="Unterputz Vorsatzrollladen Aluprof SP"
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
            src={spImage3}
            alt="Unterputz Vorsatzrollladen Aluprof SP"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={spImage4}
            alt="Unterputz Vorsatzrollladen Aluprof SP"
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

export default Sp;
