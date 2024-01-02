import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Head from "next/head";
import Image from 'next/image'
import imagePic from "../public/beratung.jpeg"

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
      <HeaderDiv title="Beratung" subtitle="Professionelle Unterstützung für Ihre Entscheidungen"/>
      <div className="ph4 ph5-l mv4 w-100 ">
       <p>Beratung für Ihre Baustelle oder Renovierung ist unsere Kernkompetenz. Es gibt eine Reihe von Abhängigkeiten, die bei der Fensterbestellung berücksichtigt werden sollen. Niemand kennt alles, deswegen müssen Sie als Bauherr oder Bauleiter selbstverständlich auch nicht alles wissen. Nehmen Sie bitte mit uns Kontakt auf, wir beraten Sie gerne, analysieren die Baupläne und machen Ihnen einen passenden Vorschlag. Dabei stellen wir auf offene Kommunikation und gegenseitiges Vertrauen. 
</p>
       <p>Wir nutzen unsere Erfahrung im Bereich Fenster, Haustüren und Beschattung, um zusammen mit Ihnen eine optimale und kostengünstige Lösung für Sie zu erarbeiten. Wir machen es gerne erstmal online und telefonisch. Wenn es konkret wird, kommen wir auch gerne auf Ihre Baustelle (deutschlandweit) und beraten Sie dort, sowie messen wir die Fenster auf. Wir kennen die neuesten Trends, wir kennen aber auch die Limits der Fensterhersteller und der Monteure. Realistische und optimale Planung Ihrer Fenster und Türen ist eine Voraussetzung für erfolgreiche Vollendung Ihrer Baustelle. 
</p>
       <p>Wir beraten Sie gerne zu den folgenden Themen:
</p>
       <div>
       <ul className=" tl">
          <li>Richtige Auswahl der Fenster, Beschattung und Haustüren,</li>
            <li>Lieferantenfindung und Preisverhandlungen, Vertragsabschluss,</li>
            <li>Aufmaß und Gestaltung der Fenster, inkl. Beschattung im Altbau und im Neubau,</li>
            <li>Energieeffizienz der Fenster und Türen,</li>
            <li>Schallschutz, Einbruchschutz und Sichtschutz,</li>
            <li>Verfügbare Lösungen für die Optik der Fenster,</li>
             <li>Richtige Montage nach den allgemein anerkannten Regeln der Technik.</li>
				  </ul>
       </div>
       <p>Die Anfrage kostet Sie nichts. Wir verfügen über entsprechendes Fachwissen, das Sie gerade brauchen. Lassen wir uns bitte kennenlernen.
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
