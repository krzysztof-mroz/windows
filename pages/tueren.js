import { Fragment } from "react";
import TuerenDiv from "../components/ui/tuerendiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';

function Tueren() {
    return (
        <Fragment>
      <Head>
        <title>Haustüren aus Kunststoff und Aluminium</title>
        <meta
          name="description"
          content="Haustüren Schüco, Kömmerling, Ponzio und Aluprof aus Polen"
        />
        <meta
          name="keywords"
          content="türen, kunststoff, haustüren aus polen, schüco, kömmerling, ponzio, aluprof, türen konfigurator"
        />
      </Head>
      <HeaderDiv title="Haustüren aus Kunststoff und Aluminium"/>
      <TuerenDiv />
    </Fragment>
    )
        
    
}

export default Tueren;