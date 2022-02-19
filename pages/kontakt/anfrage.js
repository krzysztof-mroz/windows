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
      <HeaderDiv title="Anfrage für Ihre Fenster" />

          
      <AnfrageDiv />
    </Fragment>
  );
}

export default anfrage;
