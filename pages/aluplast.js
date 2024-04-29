import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';
import Aluplastdiv from "../components/ui/aluplastdiv";

function Aluplast() {
  return (
    <Fragment>
      <Head>
        <title>Aluplast Fenster aus Kunststoff</title>
        <meta
          name="description"
          content="Kunststoff Fenster Aluplast aus Polen"
        />
        <meta
          name="keywords"
          content="fenster, kunststofffenster, fenster aus polen, profine, aluplast, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Aluplast Kunststoff Fenster" subtitle="Versteckte Stärke der Technologie"/>

      <Aluplastdiv />

    </Fragment>
  );
}

export default Aluplast;
