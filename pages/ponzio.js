import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import PonzioDiv from "../components/ui/ponziodiv";
import Head from 'next/head';

function Ponzio() {
  return (
    <Fragment>
      <Head>
        <title>Kömmerling Fenster aus Kunststoff</title>
        <meta
          name="description"
          content="Aluminium Fenster Ponzio aus Polen"
        />
        <meta
          name="keywords"
          content="fenster, alumiiumfenster, fenster aus polen, alufenster, ponzio, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Ponzio Aluminium Fenster"/>

      <PonzioDiv />

    </Fragment>
  );
}

export default Ponzio;
