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
    <div className="mw">
      <div className="bg-black-80 tc fw9 pv1 dt w-100">
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
            <div className="flex flex-wrap justify-around fl w-100">
              <div className="w-100 w-30-l fl  tc ma2 ">
                <img className="mt4" src="./pics/pf-logo.png"></img>
              </div>
              
              <div className="w-100 w-30-l  fl  tc ma2 ">
              <img className="mv2 mh1" src="./pics/ikona_metrowka.png"></img>
              <img className="mv2 mh1" src="./pics/ikona_auto.png"></img>
              <img className="mv2 mh1" src="./pics/ikona_klucz.png"></img>
              <img className="mv2 mh1" src="./pics/ikona_gwarancja.png"></img>
            </div>

              <div className="w-100 w-30-l fl  tc ma2 mt4 red f3 w3-text-purple">
                <b> 0 800 44 700 99</b>
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
            
            <div class="dn db-l w3-display-topmiddle w3-container"><h2 id="tekstProfilu">Schüco CT 70 Classic</h2><p id="komoryProfilu">5 Kammer, 2 Dichtungen, 70 mm Tiefe</p></div>
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

          <div className="tc bg-black-10 pa6 br3 ma2">FOOTER</div>
        </div>
      </div>
    </div>
  );

  
}

export default StartPage;
