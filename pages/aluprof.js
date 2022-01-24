import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import AluprofDiv from "../components/ui/aluprofdiv";
import Head from 'next/head';

function Aluprof() {
  return (
    <Fragment>
      <Head>
        <title>Aluprof Fenster aus Aluminium</title>
        <meta
          name="description"
          content="Aluminium Fenster Aluprof aus Polen"
        />
        <meta
          name="keywords"
          content="fenster, alumiiumfenster, fenster aus polen, alufenster, aluprof, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Aluprof Aluminium Fenster"/>

      <AluprofDiv />

    </Fragment>
  );
}

export default Aluprof;
