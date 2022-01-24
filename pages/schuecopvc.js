import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import SchuecoPvcDiv from "../components/ui/schuecopvcdiv";
import Head from 'next/head';

function SchuecoPvc() {
  return (
    <Fragment>
      <Head>
        <title>Schüco Fenster aus Kunststoff</title>
        <meta
          name="description"
          content="Kunststoff Fenster Schüco aus Polen"
        />
        <meta
          name="keywords"
          content="fenster, kunststofffenster, fenster aus polen, schüco, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Schüco Kunststoff Fenster"/>

      <SchuecoPvcDiv />

    </Fragment>
  );
}

export default SchuecoPvc;
