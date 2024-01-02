import { Fragment } from "react";
import TuerenDiv from "../components/ui/tuerendiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';


function Tueren() {
    return (
        <Fragment>
      <Head>
        <title>Sie finden bestimmt passende Haustür bei uns. Größte Auswahl an Haustüren, egal ob mit Stoßgriff, E-Öffner oder Selbstschliesser. Alles aus einer Hand.</title>
        <meta
          name="description"
          content="Sie finden bestimmt passende Haustür bei uns. "
        />
      
      </Head>
      <HeaderDiv title="Eingangstüren aus Kunststoff und Aluminium" subtitle="Die beste Wahl für sichere und ansprechende Türen"/>
      <TuerenDiv />
    </Fragment>
    )
        
    
}

export default Tueren;