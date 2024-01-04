import { Fragment } from "react";
import TuerenDiv from "../components/ui/tuerendiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';
import CustomerReview from "../components/ui/referenz";


function Tueren() {
  // components/HouseDoorsInfo.js
const HouseDoorsInfo = () => {
  return (
    <div className="flex flex-wrap pa4">
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">Haustüren aus Kunststoff und Aluminium</h2>
        <p className="lh-copy">
          Unsere <span className="b">Haustüren</span>, sowohl in <span className="b">Kunststoff</span> als auch in <span className="b">Aluminium</span>, bieten höchste Qualität und Sicherheit. Wir führen eine breite Palette an Türfüllungen von renommierten Herstellern wie <span className="b">Veyna</span> (für Kunststoff- und Aluminiumtüren von Ponzio) und <span className="b">Perito</span> (für Kunststofftüren).
        </p>
        <p className="lh-copy">
          Besonders hervorzuheben sind unsere Aluminium Haustüren von <span className="b">Aluprof und Schüco</span>, ausgestattet mit hochwertigen <span className="b">Aluprof Türfüllungen</span>. Diese bieten nicht nur eine exzellente Isolierung, sondern auch ein modernes Design, angepasst an Ihre individuellen Wünsche.
        </p>
      </div>
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">Individuelle Gestaltung und Sicherheit</h2>
        <p className="lh-copy">
          Für unsere Aluminiumtüren bieten wir sowohl <span className="b">Einsatzfüllungen</span> als auch <span className="b">flügelüberdeckende Füllungen</span>, verfügbar als Außenflügelüberdeckend oder beidseitig. Jede Tür wird mit <span className="b">deutschen Sicherheitsbeschlägen</span> ausgestattet und kann mit verschiedenen Optionen wie <span className="b">Stoßgriff, Elektroöffner, Fingerprint Öffner, Türschließer, Briefkasten, Sprechanlage</span> und vielem mehr individualisiert werden.
        </p>
        <p className="lh-copy">
          Unsere Haustüren bieten nicht nur Sicherheit und Ästhetik, sondern sind auch ein Symbol für Technologie und Komfort in Ihrem Zuhause.
        </p>
      </div>
    </div>
  );
};



    return (
        <Fragment>
      <Head>
        <title>Sie finden bestimmt passende Haustür bei uns. Größte Auswahl an Haustüren, egal ob mit Stoßgriff, E-Öffner oder Selbstschliesser. Alles aus einer Hand.</title>
        <meta
          name="description"
          content="Sie finden bestimmt passende Haustür bei uns. "
        />
      
      </Head>
      <HeaderDiv title="Eingangstüren aus Kunststoff und Aluminium" subtitle="Die beste Wahl für sichere und ansprechende Türen"/>
      
      
      <TuerenDiv />
      
      <HouseDoorsInfo />
      <CustomerReview />
    </Fragment>
    )
        
    
}

export default Tueren;