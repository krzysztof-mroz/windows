import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Head from "next/head";
import Image from 'next/image'
import imagePic from "../public/aboutus.jpeg"

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
      <HeaderDiv title="Über uns" subtitle="Unsere Leidenschaft: Ihre Wohnraumgestaltung"/>
      <div className="ph4 ph5-l mv4 w-100 ">
       <p>Wir beraten Sie gerne im Bereich Fenster, Rollläden, Raffstoren und Hasustüren. Unsere langjährige Erfahrung in diesem Bereich erlaubt uns, ein optimales Angebot für alle Ihre Anforderungen zu erstellen. Wir haben mehrere Partner als Hersteller, Transportunternehmen und Monteure. Nutzen Sie es und vergleichen Sie bitte unseres Angebot mit dem Wettbewerb. </p>
       <p>Wir finden den richtigen Vertragspartner für Sie, egal ob es ein deutsches Unternehmen, oder direkt der polnische Hersteller ist. Alles bleibt unter einem Dach und wir übernehmen die Verantwortung. Wir messen auf, beraten Sie gerne telefonisch, per Email, WhatsApp oder vor Ort auf der Baustelle. 
</p>
       <p>Schicken Sie uns bitte Ihre Anfrage, kontaktieren Sie uns und wir machen den Rest. </p>
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
