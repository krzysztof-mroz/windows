import { Fragment } from "react";
import ScreenDiv from "../components/ui/screendiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';



function Screenrolls() {
    return (
        <Fragment>
      <Head>
        <title>Raffstoren mit C80 oder Z90 Aluminium Lamellen</title>
        <meta
          name="description"
          content="Aluminium Außen Raffstoren aus Polen."
        />
        <meta
          name="keywords"
          content="raffstoren, c80, z90"
        />
      </Head>
      <HeaderDiv title="Raffstoren mit Aluminium Lamellen"/>
      <ScreenDiv />
    </Fragment>
    )
        
    
}

export default Screenrolls;