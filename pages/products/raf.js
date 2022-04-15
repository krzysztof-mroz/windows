import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import rafImage from "../../public/raf1.jpg";
import rafImage2 from "../../public/raf2.jpg";
import rafImage3 from "../../public/raf3.jpg";
import rafImage4 from "../../public/raf_c80.jpg";
import rafImage5 from "../../public/raf_z90.jpg";
import rafImage6 from "../../public/raf_z90_2.jpg";
import HeaderDiv from "../../components/ui/headerdiv";
import Rollovisualisation from "../../components/ui/rollovisualisation";
import { SkinnedMesh } from "three";

function Raf() {
  return (
    <Fragment>
      <Head>
        <title>Polnische Fenster Raffstore Beschattung</title>
        <meta
          name="description"
          content="Raffstoren C80 und Z90. 3d Visualisierung"
        />
        <meta
          name="keywords"
          content="raffstoren, raffstoren aus polen, selt, vorsatzrafftoren, aufsatzraffstoren"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Vorsatz Raffstoren C80 und Z90"/>
      <Rollovisualisation
        product="raf"
        camera="220,220,220"
        productName="Unterputz und Überputz Raffstoren"
      />

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage}
            alt="Überputz Raffstore"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage2}
            alt="Unterputz Raffstore"
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
            alt="Unterputz Raffstore"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage4}
            alt="Überputz Raffstore C80"
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
            alt="Unterputz Raffstore Z90"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
        <Image
            src={rafImage6}
            alt="Unterputz Raffstore Z90 mit Dämmung"
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

export default Raf;
