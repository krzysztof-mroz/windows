import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import HowWorkingDiv from "../components/ui/howworkingdiv";
import Head from 'next/head';

function HowWorking() {
    return (
        <Fragment>
        <Head>
          <title>Wie kaufe ich meine Fenster?</title>
          <meta
            name="description"
            content="Der schnellste und einfachste Weg, wie Sie Ihre neuen Fenster kaufen und dabei bis 30% des Wertes sparen. Garantierte KfW Förderung."
          />
         
        </Head>
        <HeaderDiv title="Fensterkauf in 12 Schritten" subtitle="Schritt für Schritt zum perfekten Fensteraustausch"/>
        <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
           
            <HowWorkingDiv />
            <div className="w-100 ba b--moon-gray ma2 pa3 ">
            <img src="./pics/jugl_lieferung.png"></img>
            </div>
        </div>
       
      </Fragment>
    )
        
    
}

export default HowWorking;