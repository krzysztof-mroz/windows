import { Suspense, useRef, useState, useEffect } from "react";
import "tachyons";
import Link from "next/link";
import ColourStrip from "../components/ui/colourstrip";
import {
  Ct70Classic,
  Ct70Rondo,
  Living,
  K70,
  K76Ad,
  K76Md,
  K88,
  Pe68,
  Pe78N,
  Mb70,
  Mb86,
  Aws75,
  Aws90,
} from "../components/ui/models";
import ProfileStrip from "../components/ui/profilestrip";
import ProfileCards from "../components/ui/profilecards";
import Schnellkontakt from "../components/ui/schnellkontakt";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

function StartPage() {
  const [mainWindow, setMainWindow] = useState("pic");
  const [activeProfile, setActiveProfile] = useState("Schüco CT 70 Classic");

  const Background = (props) => {
    const texture = useTexture("./pics/spring_texture.jpg");
    return <primitive attach="background" object={texture} />;
  };

  function profileChangeHandler(newProfile) {
    setActiveProfile(newProfile);
  }

  return (
    <div className="w-90 w-100-l center">
      <div className="bg-black-80 fw9 pv1 tl dt w-100">
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
                Kunststoff und Aluminium Fenster aus Polen
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap justify-around mb3 w-100">
            <div className="flex flex-wrap justify-center mv1 fl w-100 w-two-thirds-l ba b--moon-gray">
              <div className="justify-end">
                <img
                  className="mv2 mh2"
                  style={{ position: "relative", width: 20, height: 20 }}
                  src={
                    mainWindow === "pic"
                      ? "./pics/svg/bild_red.svg"
                      : "./pics/svg/bild_grey.svg"
                  }
                  title="pic"
                  onMouseDown={changeMainWindow}
                ></img>
                <img
                  className="mv2 mh2"
                  style={{ position: "relative", width: 20, height: 20 }}
                  src={
                    mainWindow === "3d"
                      ? "./pics/svg/3d_red.svg"
                      : "./pics/svg/3d_grey.svg"
                  }
                  title="3d"
                  onMouseDown={changeMainWindow}
                ></img>
                <img
                  className="mv2 mh2"
                  style={{ position: "relative", width: 20, height: 20 }}
                  src={
                    mainWindow === "film"
                      ? "./pics/svg/film_red.svg"
                      : "./pics/svg/film_grey.svg"
                  }
                  title="film"
                  onMouseDown={changeMainWindow}
                ></img>
              </div>
              <div className="w-90">
                <img
                  id="profilDuzy"
                  className={mainWindow == "pic" ? "db" : "dn"}
                  src="./pics/ct_70_classic_3d.jpg"
                ></img>

                <div
                  style={{ position: "relative", height: 478 }}
                  className={mainWindow == "3d" ? "db" : "dn"}
                >
                  <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [16, 16, 16], fov: 50 }}
                  >
                    <Suspense fallback={null}>
                      <Background />
                    </Suspense>

                    <Suspense fallback={null}>
                      {activeProfile == "Schüco CT 70 Classic" ? (
                        <Ct70Classic rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Schüco CT 70 Rondo" ? (
                        <Ct70Rondo rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Schüco Living MD" ? (
                        <Living rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Kömmerling 70 AD" ? (
                        <K70 rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Kömmerling 76 AD" ? (
                        <K76Ad rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Kömmerling 76 MD" ? (
                        <K76Md rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Kömmerling 88 MD" ? (
                        <K88 rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Ponzio PE 68N" ? (
                        <Pe68 rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Ponzio PE 78N" ? (
                        <Pe78N rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Aluprof MB 70 HI" ? (
                        <Mb70 rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Aluprof MB 86 SI" ? (
                        <Mb86 rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Schüco AWS 75" ? (
                        <Aws75 rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Schüco AWS 90" ? (
                        <Aws90 rotation-y={Math.PI * 1.33} />
                      ) : null}
                      <Environment preset="park" />
                     
                    </Suspense>
                    <OrbitControls
                      minPolarAngle={Math.PI * 0.45}
                      maxPolarAngle={Math.PI * 0.55}
                      enableZoom={false}
                      enablePan={false}
                    />
                  </Canvas>
                </div>
              </div>

              <div className="flex flex-wrap justify-start">
                <ProfileStrip onProfileChange={profileChangeHandler} />
              </div>
            </div>
            <div className="flex flex-wrap justify-center mv1  fl w-100 w-30-l ba b--moon-gray">
              <div className="tc  br3 ma2">
                <div class="dn db-l w3-display-topmiddle w3-container"></div>
                <h2 id="tekstProfilu">Schüco CT 70 Classic</h2>
                <p id="komoryProfilu">5 Kammer, 2 Dichtungen, 70 mm Tiefe</p>

                <img
                  id="sectionPic"
                  src="./pics/sections/ct70classic.png"
                ></img>
              </div>
            </div>
          </div>

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
              <img
                className="mh4"
                src="./pics/logos/logo_saint_gobain.png"
              ></img>
            </div>

            <div className="w-100 w-30-l  ma2 pa3">
              <h5 className="gray">Produkte</h5>
              <p className="gray f6">
                <Link href="/">
                  <a className="f6 fw4 no-underline db   ph3">Fenster</a>
                </Link>
                <Link href="/">
                  <a className="f6 fw4 no-underline  db  ph3">Türen</a>
                </Link>
                <Link href="/">
                  <a className="f6 fw4 no-underline  db  ph3">Rollläden</a>
                </Link>
              </p>
            </div>

            <div className="w-100 w-30-l  ma2 pa3">
              <h5 className="gray">Dienstleistungen</h5>
              <p className="gray f6">
                <Link href="/">
                  <a className="f6 fw4 no-underline db   ph3">Aufmaß</a>
                </Link>
                <Link href="/">
                  <a className="f6 fw4 no-underline  db  ph3">Beratung</a>
                </Link>
                <Link href="/">
                  <a className="f6 fw4 no-underline  db  ph3">Vermittlung</a>
                </Link>
                <Link href="/">
                  <a className="f6 fw4 no-underline  db  ph3">Montage</a>
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
                  <a className="f6 fw4 no-underline  db  ph3">Über die Firma</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function changeMainWindow(ev) {
    setMainWindow(ev.target.title);
    console.log(ev.target.title);
  }
}

export default StartPage;
