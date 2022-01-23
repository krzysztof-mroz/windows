import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
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
        <HeaderDiv title="Fenster aus Polen"/>
        <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
            <p>Wir helfen Ihnen gerne bei der Fensterauswahl. Wir bearten Sie, egal ob Sie Kuststoff- oder Aluminium Fenster brauchen. Starten Sie zuerst Ihr Abenteuer mit unserer 3D Visualisierung. Jederzeit können Sie uns dann kontaktieren, falls Sie Hilfe brauchen. Egal ob telefonisch, per Email oder WhatsApp. </p>
            <div className="w-100 ba b--moon-gray ma2 pa3 ">
            <img src="./pics/jugl_lieferung.png"></img>
            </div>
        </div>
      </Fragment>
    )
        
    
}

export default HowWorking;