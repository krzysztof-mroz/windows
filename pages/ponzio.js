import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import PonzioDiv from "../components/ui/ponziodiv";
import Head from 'next/head';

function Ponzio() {
  return (
    <Fragment>
      <Head>
        <title>Ponzio Fenster aus Aluminium</title>
        <meta
          name="description"
          content="Aluminium Fenster Ponzio aus Polen"
        />
        <meta
          name="keywords"
          content="fenster, alumiiumfenster, fenster aus polen, alufenster, ponzio, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Ponzio Aluminium Fenster" subtitle="Qualität ohne Kompromisse: Unsere Lösungen"/>

      <PonzioDiv />

    </Fragment>
  );
}

export default Ponzio;
