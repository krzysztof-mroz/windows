import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';
import Salamanderdiv from "../components/ui/salamanderdiv";

function Salamander() {
  return (
    <Fragment>
      <Head>
        <title>Salamander Fenster aus Kunststoff</title>
        <meta
          name="description"
          content="Kunststoff Fenster Salamander aus Polen"
        />
        <meta
          name="keywords"
          content="fenster, kunststofffenster, fenster aus polen, salamander, fenster konfigurator"
        />
      </Head>
      <HeaderDiv title="Salamander Kunststoff Fenster" subtitle="Vision, Innovation und Qualität"/>

      <Salamanderdiv />

    </Fragment>
  );
}

export default Salamander;
