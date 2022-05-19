import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Head from "next/head";
import Image from 'next/image'
import imagePic from "../public/vermittlung.jpeg"

function Kontakt() {
  return (
    <Fragment>
      <Head>
        <title>Polnische Fenster Kunststoff und Aluminium</title>
        <meta name='description'
              content='Schüco, Kömmerling, Ponzio und Aluprof Fenster aus Polen mit Montage. 3d Visualisierung'
        />
         <meta name='keywords'
              content='fenster, kunststofffenster, fenster aus polen, schüco, kömmerling, ponzio, aluprof, fenster konfigurator'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Vermittlung"/>
      <div className="ph4 ph5-l mv4 w-100 ">
      <p>Sie suchen einen zuverlässigen Vertragspartner in Polen (Fensterhereteller und / oder Fenstermonteur), haben aber nicht die Zeit, mehrere Ansprechspartner kennenzulernen, die dann nicht unbedingt alle Ihre Sprache sprechen. Nutzen Sie dann unsere Kontakte und sparen Sie sich die Zeit und Nerven. Wir werden mit dem Hersteller Kontakt halten und Ihre Interessen dort vertreten. Wir vermitteln im Kontakt und übernehmen Ihre Gespräche mit den Fensterlieferanten. </p>
<p>Wir vertreten Sie beim Lieferanten bei den folgenden Angelegenheiten:</p>
       <div>
       <ul className=" tl">
          <li>Lieferantensuche in Polen für Ihre Bedürfnisse (Fenster, Beschattung, Haustüren),
</li>
            <li>Angebotserstellung und Preisverhandlungen,</li>
            <li>Verfolgung des Produktionsstatuses,</li>
            <li>Transportangelegenheiten,
</li>
            <li>Montage und Nachjustierung der Fenster,</li>
            <li>Reklamationen.</li>
				  </ul>
       </div>
       <p>Wir entlasten Sie gerne. Probieren Sie es aus!

</p>
       <div className="tc ph4 ph5-l mv4 ">
         <div className="pa2 ba b--moon-gray">
         <Image 
          src={imagePic}
          alt="Über uns"
      />
         </div>
       
       </div>
       
      </div>
      
    </Fragment>
  );
}

export default Kontakt;
