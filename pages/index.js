import "tachyons";
import Link from "next/link";
import ColourStrip from "../components/ui/colourstrip";
import ProfileStrip from "../components/ui/profilestrip";
import ProfileCards from "../components/ui/profilecards";
import Schnellkontakt from "../components/ui/schnellkontakt";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";

function StartPage() {
  return (
    <div className="w-90 w-100-l center">
      <div className="bg-black-80 fw9 pv1 tl dt w-100 nawierzch">
        <div className="dtc v-mid tc pa1">
          <Link href="/">
            <a className="f6 fw8 bold hover-white no-underline white-70 db dib-l pv2 ph3">
              Polniche-Fenster.Com
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 hover-white no-underline white-70 db dib-l pv2 ph3">
              Start
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 hover-white no-underline white-70 db dib-l pv2 ph3">
              Fenster
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 hover-white no-underline white-70 db dib-l pv2 ph3">
              Haustüren
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 hover-white no-underline white-70 db dib-l pv2 ph3">
              Beschattung
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 hover-white no-underline white-70 db dib-l pv2 ph3">
              Wie funktioniert es
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 hover-white no-underline white-70 db dib-l pv2 ph3">
              Kontakt
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 hover-white no-underline white-70 db dib ml2 pv2 ph3 ba">
              Sign Up
            </a>
          </Link>
        </div>
      </div>


      <div className="flex flex-wrap justify-center">
        <div className="mh2 mh4-ns mh6-l mw9 ">
          <div className="flex flex-wrap justify-center mb2 w-100">
            <div className="flex flex-wrap justify-around fl">

              
              <div className="w-100 w-25-l  tc m1 ">
                <img className="mt1" src="./pics/pflogo.png"></img>
              </div>

              <div className="w-100 w-50-l  fl  tc mv1 ">
                <img className="mv2 mr1" src="./pics/ikona_metrowka.png"></img>
                <img className="mv2 mr1" src="./pics/ikona_auto.png"></img>
                <img className="mv2 mr1" src="./pics/ikona_klucz.png"></img>
                <img className="mv2 " src="./pics/ikona_gwarancja.png"></img>
              </div>

              <div className="w-100 w-25-l fl tc  mt4 f3 f4-l w3-text-orange">
                <b> 0800 44 700 99</b>
              </div>



            </div>
          </div>

          <div className="pv3 tc">
            <div className="flex flex-wrap justify-center w-100">
              <h2 className="fl ma1 w-100 tc">
                Fenster Schüco und Kömmerling aus Polen
              </h2>
            </div>
          </div>

          <div className="tc  br3 ma2 w3-display-container w3-text-blue-grey">
            <img id="profilDuzy" src="./pics/ct_70_classic_3d.jpg"></img>

            <div class="dn db-l w3-display-topmiddle w3-container">
              <h2 id="tekstProfilu">Schüco CT 70 Classic</h2>
              <p id="komoryProfilu">5 Kammer, 2 Dichtungen, 70 mm Tiefe</p>
            </div>
          </div>

          <ProfileStrip />

          <ColourStrip />

          <div className="flex flex-wrap justify-around mb3 w-100">
            <div className="flex flex-wrap justify-center  fl w-100 w-30-l">
              <Schnellkontakt />
            </div>

            <ProfileCards />
          </div>
          <WarumDiv />

          <ActionDiv />

          <div className="flex flex-wrap justify-center mb5 w-100"></div>

          <div className="flex flex-wrap justify-center  w-90 pa2 ml4 fl tc mb1  ">
      <div className="w-100 ba b--moon-gray mb4">
        <img className="mh4" src="./pics/logos/logo_profine.png"></img>
        <img className="mh4" src="./pics/logos/logo_aluprof.png"></img>
        <img className="mh4" src="./pics/logos/logo_ponzio.png"></img>
        <img className="mh4" src="./pics/logos/logo_winkhaus.png"></img>
        <img className="mh4" src="./pics/logos/logo_hoppe.png"></img>
        <img className="mh4" src="./pics/logos/logo_saint_gobain.png"></img>
      </div>

      <div className="w-100 w-30-l  ma2 pa3">
        <h5 className="gray">Produkte</h5>
        <p className="gray f6">
        <Link href="/">
            <a className="f6 fw4 no-underline db   ph3">
              Fenster
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 no-underline  db  ph3">
              Türen
            </a>
          </Link>
         < Link href="/">
            <a className="f6 fw4 no-underline  db  ph3">
             Rollläden
            </a>
          </Link>
        </p>
      </div>

      <div className="w-100 w-30-l  ma2 pa3">
        <h5 className="gray">Dienstleistungen</h5>
        <p className="gray f6">
        <Link href="/">
            <a className="f6 fw4 no-underline db   ph3">
              Aufmaß
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 no-underline  db  ph3">
              Beratung
            </a>
          </Link>
         < Link href="/">
            <a className="f6 fw4 no-underline  db  ph3">
             Vermittlung
            </a>
          </Link>
          < Link href="/">
            <a className="f6 fw4 no-underline  db  ph3">
             Montage
            </a>
          </Link>
        </p>
      </div>

      <div className="w-100 w-30-l  ma2 pa3">
        <h5 className="gray">Über uns</h5>
        <p className="gray f6">
        <Link href="/">
            <a className="f6 fw4 no-underline db   ph3">
              Wie funktioniert es?
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 no-underline  db  ph3">
              Über die Firma
            </a>
          </Link>
        
        </p>
      </div>

      </div>


        
        </div>
      </div>
    </div>
  );
}

export default StartPage;
