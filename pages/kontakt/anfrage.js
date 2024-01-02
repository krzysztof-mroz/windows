import { Fragment } from "react";
import HeaderDiv from "../../components/ui/headerdiv";
import AnfrageDiv from "../../components/ui/kontakt/anfragediv";
import WarumDiv from "../../components/ui/warumdiv"
import Head from "next/head";

function anfrage() {

  return (
    <Fragment>
      <Head>
        <title>Anfrage Fenster</title>
        <meta
          name="description"
          content="Polnische Fenster - Anfrage."
        />
        <meta name="keywords" content="fenster, kunststofffenster, alufenster, anfrage, fensteranfrage" />
      </Head>
      <HeaderDiv title="Anfrage für Ihre Fenster" subtitle="Sagen Sie uns, was Sie brauchen – wir kümmern uns um den Rest" ifAnfrage="yes" />
      <h2 className="fl f5 ma1 mt3-l w-100 tc">Sie können uns gerne auch eine <a href={`mailto:info@polnische-fenster.com`}>Email</a> oder <a href={`https://wa.me/+4915737448021`} target="_blank">WhatsApp</a> schicken!</h2>

          
      <AnfrageDiv />
    </Fragment>
  );
}

export default anfrage;
