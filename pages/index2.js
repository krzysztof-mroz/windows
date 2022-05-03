import { Fragment } from "react";
import Head from "next/head";

import Description from "../components/ui/description";
import HeaderDiv from "../components/ui/headerdiv";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";
import Visualisation from "../components/ui/visualisation";
import ProductLink from "../components/ui/blocks/productlink";
import Carousel from "../components/ui/blocks/carousel"



import "react-multi-carousel/lib/styles.css";

function StartPage() {
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Kunststoff und Aluminium</title>
        <meta name='description'
              content='Schüco, Kömmerling, Ponzio und Aluprof Fenster aus Polen mit Montage. 3d Visualisierung'
        />
         <meta name='keywords'
              content='fenster, kunststofffenster, fenster aus polen, schüco, kömmerling, ponzio, aluprof, fenster konfigurator'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kunststoff und Aluminium Fenster aus Polen" />
      <Visualisation />

      <div className="flex tl flex-wrap justify-around mb1 w-100 ph4">
        <h4 className="justify-start">Ähnliche Produkte:</h4>

      <Carousel show={5}>
            <ProductLink tekscior="item 1" />
            <ProductLink tekscior="item 2" />
            <ProductLink tekscior="item 3" />
            <ProductLink tekscior="item 4" />  
            <ProductLink tekscior="item 5" />
            <ProductLink tekscior="item 6" />
            <ProductLink tekscior="item 7" />  
            <ProductLink tekscior="item 8" />
           
           
          
        </Carousel>
       
       
  </div>
  <Description />
      <WarumDiv />
      <ActionDiv />
    </Fragment>
  );
}

export default StartPage;
