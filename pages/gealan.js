import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';
import Gealandiv from "../components/ui/gealandiv";

function Gealan() {
  return (
    <Fragment>
      <Head>
        <title>Gealan Fenster aus Kunststoff</title>
        <meta
          name="description"
          content="Kunststoff Fenster Gealan aus Polen"
        />
        <meta
          name="keywords"
          content="fenster, kunststofffenster, fenster aus polen, gealan, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Gealan Kunststoff Fenster" subtitle="Passivhaus Fenster zum guten Preis"/>

      <Gealandiv />

    </Fragment>
  );
}

export default Gealan;
