import { Fragment } from "react";
import Head from "next/head";

import Description from "../components/ui/description";
import HeaderDiv from "../components/ui/headerdiv";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";
import Visualisation from "../components/ui/visualisation";
import ProductLink from "../components/ui/blocks/productlink";
import Carousel from "../components/ui/blocks/carousel";

function StartPage() {
  return (
    <Fragment>
      <Head>
        <title>Polnische Fenster Kunststoff und Aluminium</title>
        <meta
          name="description"
          content="Schüco, Kömmerling, Ponzio und Aluprof Fenster aus Polen mit Montage. 3d Visualisierung"
        />
        <meta
          name="keywords"
          content="fenster, kunststofffenster, fenster aus polen, schüco, kömmerling, ponzio, aluprof, fenster konfigurator"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kunststoff und Aluminium Fenster aus Polen" />
      <Visualisation />
      <div className="flex flex-wrap justify-around mb1 w-100">

      <div className="flex flex-wrap justify-center mv1 fl w-100 w-50-l  b--moon-gray pa4">
      <Carousel show={3}>
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
          
        </Carousel>
        </div>
        <div className="flex flex-wrap justify-center mv1 fl w-100 w-50-l  b--moon-gray pa4">
      <Carousel show={3}>
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
       
           
        </Carousel>
        </div>
      </div>
      {/** 
       <Carousel>
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />

       </Carousel>
            **/}

      <Description />
      <WarumDiv />
      <ActionDiv />
    </Fragment>
  );
}

export default StartPage;
