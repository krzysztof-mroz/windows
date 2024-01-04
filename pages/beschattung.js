import { Fragment } from "react";
import BeschattungDiv from "../components/ui/beschattungdiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from "next/head";
import CustomerReview from "../components/ui/referenz";


function Beschattung() {

  // components/RolladenInfo.js
const RolladenInfo = () => {
  return (
    <div className="flex flex-wrap pa4">
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">Rollläden und Raffstoren</h2>
        <p className="lh-copy">
          Unser Sortiment umfasst <span className="b">Aluprof SKT Opoterm Aufsatzrollläden</span> sowie <span className="b">Vorsatzrollläden</span>, die Unterputz oder Überputz montiert werden können, mit verschiedenen Kastenoptionen wie halbrund, viertelrund oder eckig. Unsere Rollläden bieten die Wahl zwischen <span className="b">manueller oder motorisierter Steuerung</span>, auch mit Funkoption.
        </p>
        <p className="lh-copy">
          Wir sind stolz darauf, <span className="b">Somfy Motoren</span> sowie andere Marken anzubieten, die eine reibungslose Funktionalität gewährleisten. Die Lamellen unserer Rollläden sind aus robustem, ausgeschäumtem Aluminium gefertigt.
        </p>
      </div>
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">Screenrolls und mehr</h2>
        <p className="lh-copy">
          Unsere <span className="b">Raffstoren</span> ermöglichen eine stufenlose Regulierung des Tageslichtes, mit der Z90-Variante für volle Beschattung. Die Kästen können sichtbar oder als Unterputzkästen installiert werden. <span className="b">Screenrolls</span> bieten effiziente Materialbeschattung für Ihre Fenster, verwendbar von innen oder von außen, mit kleinen Kästen zwischen 100 mm und 138 mm in eckigen oder halbrunden Ausführungen. 
        </p>
        <p className="lh-copy">
          Standardmäßig mit <span className="b">Motorsteuerung</span> ausgestattet, sind unsere Screenrolls auch für Gruppensteuerungen geeignet. Eine besondere Erwähnung verdient die <span className="b">ZIP-Führung</span> für eine reibungslose Funktion.
        </p>
      </div>
    </div>
  );
};



  return (
    <Fragment>
      <Head>
        <title>Beschattung mit Rollläden, Raffstoren oder Screens</title>
        <meta
          name="description"
          content="Sie beschatten Ihre Innenräume am einfachsten mit unseren Rollläden, Raffstoren oder Screens. Lichteinfallreduktion, Schallschutz und Einbruchschutz."
        />
       
      </Head>
      <HeaderDiv title="Rollos, Screens und Raffstoren" subtitle="Raffinierte Beschattungslösungen für Ihr Wohlbefinden"/>
      
      <BeschattungDiv />
      
      <RolladenInfo />
      <CustomerReview />
    </Fragment>
  );
}

export default Beschattung;
