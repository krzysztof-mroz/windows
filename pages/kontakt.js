import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Schnellkontakt from "../components/ui/schnellkontakt";
import Head from "next/head";

function Kontakt() {
  return (
    <Fragment>
      <Head>
        <title>Kontakt zu Polnischen Fenstern</title>
        <meta name='description'
              content='Schneller Kontakt zu uns. Sie bekommen hier die beste Beratung, telefonisch oder vor Ort. Nutzen Sie die Gelegenheit jetzt!'
        />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kontakt für Ihre Fenster"/>
      <div className="flex flex-wrap justify-around mv1 tc fl w-100 ba b--moon-gray pa4">
        <Schnellkontakt />
      </div>
    </Fragment>
  );
}
export default Kontakt;
