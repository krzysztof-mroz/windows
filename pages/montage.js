import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Head from "next/head";
import Image from 'next/image'
import imagePic from "../public/montage.jpeg"

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
      <HeaderDiv title="Fenstermontage nach RAL" subtitle="Exzellente Arbeit, die den Test der Zeit besteht"/>
      <div className="ph4 ph5-l mv4 w-100 ">
       <p>Unsere Montageteams sind jede Woche in verschiedenen Ecken in Deutschlands unterwegs. Wir bauen Ihre Fenster ein, egal ob es sich um Neubau oder Altbau handelt. 
</p>

       <div>
       <ul className=" tl">
          <li>Fachgerechte Montage und damit die Abdichtung zwischen Fenster und Mauerwerk ist ebenso wichtig für die Qualität des Fensters wie die richtige Wahl des Herstellers.
</li>
            <li>Vorteile der fachgerechten Fenstermontage: Heizenergie-Ersparnis, Werterhaltung des Hauses, Höherer Wohnkomfort, gesundes Wohnklima.</li>
            <li>Montage der Fenster erfolgt nach den allgemein anerkannten Regeln der Technik.</li>
            <li>Die Fenster sind innen dichter als außen zu montieren. Es ist die sog. RAL Montage.
</li>
            <li><b>Sparen Sie nicht bei den Montagekosten! Schlechtes Montageteam kann wesentlich teurer sein, als profesionelle Fenster Montage.
</b></li>
            <li>Wir beraten Sie gerne dazu</li>
             <li>Richtige Montage nach den allgemein anerkannten Regeln der Technik.</li>
				  </ul>
       </div>
       <p>Sind Sie ein erfahrerner Fenstermonteur und suchen einen Geschäftspartner? Da sind Sie bei uns auch richtig. Bitte nehmen Sie mit uns Kontakt auf. Egal, ob Sie Fenster für Ihre Baustellen brauchen, oder neue Montageaufträge gerade suchen. 

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
