import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import HowWorkingDiv from "../components/ui/howworkingdiv";
import Head from 'next/head';

function HowWorking() {
    return (
        <Fragment>
        <Head>
          <title>Wie funktioniert es?</title>
          <meta
            name="description"
            content="Fenster aus Polen. Beste Kaufmöglichkeiten."
          />
          <meta
            name="keywords"
            content="fenster, haustür, rollladen, raffstore, polnische fenster"
          />
        </Head>
        <HeaderDiv title="12 Schritte noch zu Ihren Fenstern"/>
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