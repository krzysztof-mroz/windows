import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import KoemmerlingDiv from "../components/ui/koemmerlingdiv";
import Head from 'next/head';

function Koemmerling() {
  return (
    <Fragment>
      <Head>
        <title>Kömmerling Fenster aus Kunststoff</title>
        <meta
          name="description"
          content="Kunststoff Fenster Kömmerling aus Polen"
        />
        <meta
          name="keywords"
          content="fenster, kunststofffenster, fenster aus polen, profine, kömmerling, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Kömmerling Kunststoff Fenster" subtitle="Innovation und Tradition in einem Produkt"/>

      <KoemmerlingDiv />

    </Fragment>
  );
}

export default Koemmerling;
