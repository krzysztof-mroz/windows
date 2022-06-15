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
          content="Sie beschatten Ihre Innenräume am einfachsten mit unseren Rollläden, Raffstoren oder Screens. Lichteinfallreduktion, Schallschutz und Einbruchschutz."
        />
       
      </Head>
      <HeaderDiv title="Rollos, Screens und Raffstoren" />
      <BeschattungDiv />
    </Fragment>
  );
}

export default Beschattung;
