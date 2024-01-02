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
          content="fenster, aluminiumfenster, fenster aus polen, alufenster, aluprof, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Aluprof Aluminium Fenster" subtitle="Ein Hauch von Eleganz für Ihr Heim"/>

      <AluprofDiv />

    </Fragment>
  );
}

export default Aluprof;
