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
      <HeaderDiv title="Kontakt für Ihre Fenster" subtitle="Ihre Fragen und Anliegen sind uns wichtig"/>
      <div className="flex flex-wrap justify-around mv1 tc fl w-100 ba b--moon-gray pa4">
        <Schnellkontakt />
        <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 center"  >
        <p className="gray f6">Kugemo UG (haftungsbeschränkt) </p>
        <p className="gray f6">Münzstraße 2 </p>
        <p className="gray f6">38100 Braunschweig </p>  
        <p className="gray f6">VAT ID: DE345506278</p>
        <p className="gray f6">Tel: 0800 4470099</p>
        <p className="gray f6">Email: info@polnische-fenster.com</p>
        <p className="gray f6">Handelsregisternummer: HRB 209415</p>
      </div>
      </div>
      
    </Fragment>
  );
}
export default Kontakt;
