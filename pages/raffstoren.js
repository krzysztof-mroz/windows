import { Fragment } from "react";
import RaffstoreDiv from "../components/ui/raffstorediv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';



function Raffstoren() {
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
      <RaffstoreDiv />
    </Fragment>
    )
        
    
}

export default Raffstoren;