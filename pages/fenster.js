import { Fragment } from "react";
import FensterDiv from "../components/ui/fensterdiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';


function Fenster() {
  return (
    <Fragment>
      <Head>
        <title>Fenster Schüco, Kömmerling, Ponzio, Aluprof. Kunststoff und Alu.</title>
        <meta
          name="description"
          content="Sie kaufen garantiert passende Fenster bei uns. Sie erreichen Wärmedämmungswerte für KfW Förderung. Mit Montage und bester vor Ort Beratung."
        />
       
      </Head>
      <HeaderDiv title="Fenster aus Kunststoff und Aluminium" subtitle="Modernste Fenstertechnik für mehr Lebensqualität"/>
      <FensterDiv />
    </Fragment>
  );
}

export default Fenster;
