import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import HowWorkingDiv from "../components/ui/howworkingdiv";
import Head from 'next/head';

function HowWorking() {
    return (
        <Fragment>
        <Head>
          <title>Fenster kaufen in 10 Schritten</title>
          <meta
            name="description"
            content="So funktioniert der Fensterkauf: Anfrage, Angebot, Aufmaß, Produktion, Lieferung und Montage in 10 klaren Schritten."
          />
         
        </Head>
        <HeaderDiv
          title="Fensterkauf in 10 Schritten"
          subtitle="Ein klarer Ablauf von der ersten Anfrage bis zur Montage"
          showDefaultVideo={false}
        />
        <HowWorkingDiv />
       
      </Fragment>
    )
        
    
}

export default HowWorking;
