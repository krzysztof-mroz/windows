import { Fragment } from "react";
import FensterDiv from "../components/ui/fensterdiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';
import CustomerReview from "../components/ui/referenz";



function Fenster() {

  // components/WindowBrandsInfo.js
const WindowBrandsInfo2 = () => {
  return (
    <div className="pa4">
      <h2 className="fl f3 ma1 mt3-l w-100 tc">Unsere Fenstermarken</h2>
      <p className="lh-copy">
        Wir bieten eine breite Palette an hochwertigen Fensterlösungen an. Unsere Auswahl an <span className="b">Kunststofffenstern</span> umfasst führende Marken wie <span className="b">Kömmerling</span>, <span className="b">Schüco</span>, <span className="b">Aluplast</span> und <span className="b">Salamander</span>, die für ihre Qualität und Langlebigkeit bekannt sind. Zusätzlich bieten wir eine Vielfalt an <span className="b">Aluminium Fenstern</span> von renommierten Herstellern wie <span className="b">Schüco</span>, <span className="b">Aluprof</span> und <span className="b">Ponzio</span> an, ideal für moderne Architektur und höchste Ansprüche.
      </p>
      <p className="lh-copy">
        Für Kunden, die besonderen Wert auf schnelle Lieferzeiten legen, sind unsere <span className="b">Aluplast</span> und <span className="b">Salamander Kunststofffenster</span> eine ideale Wahl. Mit einer beeindruckenden Lieferzeit von nur <span className="b">3 Wochen</span>, sind sie perfekt für Projekte, die eine zügige Realisierung erfordern.
      </p>
    </div>
  );
};

// components/WindowBrandsInfo.js
const WindowBrandsInfo = () => {
  return (
    <div className="flex flex-wrap pa4">
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">Entdecken Sie unsere Fenstermarken</h2>
        <p className="lh-copy">
          Entdecken Sie die Welt der hochwertigen Fensterlösungen mit unserer umfangreichen Auswahl. Wir bieten erstklassige <span className="b">Kunststofffenster</span> von Marken wie <span className="b">Salamander</span>, <span className="b">Schüco</span>, <span className="b">Gealan</span>, <span className="b">Aluplast</span> und <span className="b">Kömmerling</span>. Jedes dieser Produkte steht für Qualität, Effizienz und Design. 
        </p>
        <p className="lh-copy">
          Neben der Ästhetik liegt unser Fokus auf Funktionalität. Unsere Fenster bieten hervorragende Wärme- und Schalldämmung, Sicherheit und sind einfach zu warten, was sie zur idealen Wahl für jedes Zuhause oder Büro macht. 
        </p>
      </div>
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">Aluminiumfenster für moderne Architektur</h2>
        <p className="lh-copy">
          Für Liebhaber moderner Architektur bieten wir eine Auswahl an <span className="b">Aluminiumfenstern</span> von <span className="b">Aluprof</span>, <span className="b">Reynaers</span>, <span className="b">Schüco</span>, <span className="b">Aliplast</span> und <span className="b">Ponzio</span>. Diese Fenster setzen neue Maßstäbe in Sachen Design und Funktionalität.
        </p>
        <p className="lh-copy">
          Für eilige Projekte empfehlen wir unsere <span className="b">Aluplast</span> und <span className="b">Salamander Kunststofffenster</span> mit einer beeindruckenden Lieferzeit von nur <span className="b">3 Wochen</span>. Ideal für schnelle Renovierungsarbeiten oder wenn es auf jede Minute ankommt.
        </p>
      </div>
    </div>
  );
};





  return (
    <Fragment>
      <Head>
        <title>Fenster Schüco, Kömmerling, Ponzio, Aluprof. Kunststoff und Alu.</title>
        <meta
          name="description"
          content="Sie kaufen garantiert passende Fenster bei uns. Sie erreichen Wärmedämmungswerte für KfW Förderung. Mit Montage und bester vor Ort Beratung."
        />
       
      </Head>
      <HeaderDiv title="Fenster aus Kunststoff und Aluminium" subtitle="Modernste Fenstertechnik für mehr Lebensqualität"/>
    
      <FensterDiv />
      
      <WindowBrandsInfo />
      <CustomerReview />
    </Fragment>
  );
}

export default Fenster;
