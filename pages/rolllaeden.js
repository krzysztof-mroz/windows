import { Fragment } from "react";
import RolllaedenDiv from "../components/ui/rolllaedendiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';



function Rolllaeden() {
    return (
        <Fragment>
      <Head>
        <title>Rollläden mit Aluminium Lamellen</title>
        <meta
          name="description"
          content="Aufsatzrollläden und Vorsatzrollläden aus Polen."
        />
        <meta
          name="keywords"
          content="rollladen, aufsatzrolllaeden, vorsatzrolllaeden"
        />
      </Head>
      <HeaderDiv title="Aufsatzrollläden und Vorsatzrollläden."/>
      <RolllaedenDiv />
    </Fragment>
    )
        
    
}

export default Rolllaeden;