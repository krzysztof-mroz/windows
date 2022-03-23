import { Fragment } from "react";
import Head from 'next/head';

import HeaderDiv from "../components/ui/headerdiv";

import BuildingVisualisation from "../components/ui/buildingvisualisation"


function Test() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Fenster Aufmaß</title>
        <meta name='description'
              content='Fenster Aufmaß'
        />
         <meta name='keywords'
              content='fenster, aufmass, messen, ausmessen'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Wie messe ich meine Fenster?" />
      <BuildingVisualisation product="band" camera="100,100,100" productName="Test"/>
      
     
     
    </Fragment>
  );
}
export default Test;
