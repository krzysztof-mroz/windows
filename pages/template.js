import "tachyons";
import Link from "next/link";
import ColourStrip from "../components/ui/colourstrip";
import ProfileCards from "../components/ui/profilecards";
import Schnellkontakt from "../components/ui/schnellkontakt";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";

function StartPage() {
  return (
    <div>
      <div className="bg-black-50 tc fw9 pb2 pt2">
        <div class="dtc-l v-mid tc pa3">
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
              <div className="w-100 w-30-l fl  tc ma2 ">
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

          <div className="tc  br3 ma2">
          <img src="./pics/Living_picture.jpg"></img>
          </div>
          <div className="pv3 tl">
            <div className="flex flex-wrap justify-around w-100">
              <h2 className="fl ma1 w-100 w-60-l tl">
                Fenster mit Schüco und Kömmerling Profil aus Polen
              </h2>
              <p className="fr ma2 w-100 w-20-l tl tr-l">Path</p>
            </div>
          </div>

          <ColourStrip />

          <div className="flex flex-wrap justify-around mb3 w-100">
            <div className="flex flex-wrap justify-center  fl w-100 w-30-l">
              <Schnellkontakt />
            </div>

            <ProfileCards />v
          </div>
          <WarumDiv />

          <ActionDiv />

          <div className="flex flex-wrap justify-center mb5 w-100">
            <div className="flex justify-center  fl w-100 w-third-l">
              <div className="ba flex justify-center w-100 w-90-l fl bg-black-10 tc ma2 br3 h5">
                card1
              </div>
            </div>
            <div className="flex flex-wrap justify-around fl w-100 w-two-thirds-l">
              <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
                card2
              </div>
              <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
                card3
              </div>
              <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
                card4
              </div>
              <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
                card5
              </div>
              <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
                card6
              </div>
              <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
                card7
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mb5 w-100">
            <div className="flex flex-wrap justify-around fl w-100 w-two-thirds-l">
              <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
                card8
              </div>
              <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
                card9
              </div>
              <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
                card10
              </div>
              <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
                card11
              </div>
            </div>
            <div className="flex justify-center fl w-100 w-third-l">
              <div className="ba w-100 w-90-l fl bg-black-10 tc ma2 br3 h5">
                card12
              </div>
            </div>
          </div>
          <div className="tc bg-black-10 pa6 br3 ma2">FOOTER</div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
