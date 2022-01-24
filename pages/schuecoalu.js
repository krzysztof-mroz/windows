import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import SchuecoAluDiv from "../components/ui/schuecoaludiv";
import Head from 'next/head';

function SchuecoAlu() {
  return (
    <Fragment>
      <Head>
        <title>Schüco Fenster aus Aluminium</title>
        <meta
          name="description"
          content="Aluminium Fenster Schüco aus Polen"
        />
        <meta
          name="keywords"
          content="fenster, kunststofffenster, fenster aus polen, schüco, aluminium fenster, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Schüco Aluminium Fenster"/>

      <SchuecoAluDiv />

    </Fragment>
  );
}

export default SchuecoAlu;
