import { Fragment } from "react";
import FensterDiv from "../components/ui/fensterdiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';

function Fenster() {
  return (
    <Fragment>
      <Head>
        <title>Polnische Fenster Kunststoff und Aluminium</title>
        <meta
          name="description"
          content="Fenster Schüco, Kömmerling, Ponzio und Aluprof aus Polen"
        />
        <meta
          name="keywords"
          content="fenster, kunststofffenster, fenster aus polen, schüco, kömmerling, ponzio, aluprof, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Fenster aus Kunststoff und Aluminium"/>
      <FensterDiv />
    </Fragment>
  );
}

export default Fenster;
