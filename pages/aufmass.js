import { Fragment } from "react";
import Head from 'next/head';
import HeaderDiv from "../components/ui/headerdiv";
import BuildingVisualisation from "../components/ui/buildingvisualisation"



function Aufmass() {
    
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
      <HeaderDiv title="Wie messe ich meine Fenster?" subtitle="Professionelle Anleitung für exakte Messungen" />
      <BuildingVisualisation product="wall" camera="220,220,220" productName="Aufmass"/>
      
      
     
     
    </Fragment>
  );
}
export default Aufmass;
