import { Fragment } from "react";
import BeschattungDiv from "../components/ui/beschattungdiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from "next/head";

function Beschattung() {
  return (
    <Fragment>
      <Head>
        <title>Beschattung mit Rollläden, Raffstoren oder Screens</title>
        <meta
          name="description"
          content="Rollläden, Raffstoren und Screens aus Polen. Die Beste Fenster Beschattung."
        />
        <meta name="keywords" content="rollladen, raffstore, screen" />
      </Head>
      <HeaderDiv title="Beschattung der Fenster" />
      <BeschattungDiv />
    </Fragment>
  );
}

export default Beschattung;
