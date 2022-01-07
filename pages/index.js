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
import { getAllColours } from "../components/data/colours";

function StartPage() {
  const [mainWindow, setMainWindow] = useState("3d");
  const [activeProfile, setActiveProfile] = useState("Kömmerling 88 MD");
  const [colorInside, setColorInside] = useState("weiss");
  const [colorOutside, setColorOutside] = useState("weiss");
  const [showColors, setShowColors] = useState(false);
  const [bothSidesColor, setBothSidesColor] = useState(false);
  const [blackGasket, setBlackGasket] = useState(false);
  const [aluProfile, setAluProfile] = useState(false);

  const farben = getAllColours();

  var nrKolorkuZew = 0;
  for (const kolorek of farben) {
    if (kolorek.name == colorOutside) {
      nrKolorkuZew = farben.indexOf(kolorek);
    }
  }
  var nrKolorkuWew = 0;
  for (const kolorek of farben) {
    if (kolorek.name == colorInside) {
      nrKolorkuWew = farben.indexOf(kolorek);
    }
  }

  const Background = (props) => {
    const texture = useTexture("./pics/spring_texture.jpg");
    //const texture = useTexture("./pics/wall.jpg");
    return <primitive attach="background" object={texture} />;
  };

  function profileChangeHandler(newProfile) {
    setActiveProfile(newProfile);
    if (newProfile == "Ponzio PE 68N" || newProfile == "Ponzio PE 78N" || newProfile == "Aluprof MB 70 HI" || newProfile == "Aluprof MB 86 SI" || newProfile == "Schüco AWS 75 SI" || newProfile == "Schüco AWS 90 SI") {
      setAluProfile(true)
    } else {
      setAluProfile(false)
    }
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
          <div className="flex flex-wrap justify-around mb2 w-100">
            <div className="w-100 w-20-l  tc mv1">
              <img className="mt1 dib" src="./pics/logo_PF.png"></img>
            </div>

            <div className="w-100 w-50-l  fl  tc mv1 mh1 ">
              <img className="mt4 mr1 " src="./pics/ikonki_rund.png"></img>

              <h3 className="fl ma1 mt3 w-100 tc">
                Kunststoff und Aluminium Fenster aus Polen
              </h3>
            </div>

            <div className="w-100 w-25-l fl tc tl-l mt3  f5 w3-text-orange ">
              <div className="w-100 mv1">
                <img
                  className="dib mr2"
                  style={{ position: "relative", width: 25, height: 25 }}
                  src="./pics/svg/anruf.svg"
                />
                <p className="dib">0800 44 700 99</p>
              </div>
              <div className="w-100 mv1">
                <img
                  className="dib mr2"
                  style={{ position: "relative", width: 25, height: 25 }}
                  src="./pics/svg/briefumschlag.svg"
                />
                <a href="mailto: info@polnische-fenster.com">
                  info@polnische-fenster.com
                </a>
              </div>
              <div className="w-100 mv3">
                <img
                  className="dib mr2"
                  style={{ position: "relative", width: 25, height: 25 }}
                  src="./pics/svg/whatsapp.svg"
                />
                <a href="https://wa.me/4915737448021" target="_blank">
                  +4915737448021
                </a>
              </div>
            </div>
          </div>

          <div className="pv3 tc">
            <div className="flex flex-wrap justify-center w-100">
              <h3 className="fl ma1 w-100 tc w3-text-red">
                DIESE SEITE BEFINDET SICH IM AUFBAU!{" "}
                <a
                  className="w3-text-black"
                  href="mailto: info@polnische-fenster.com"
                >
                  {" "}
                  Kontakt: info@polnische-fenster.com
                </a>
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap justify-around mb3 w-100">
            <div className="flex flex-wrap justify-center mv1 fl w-100 w-two-thirds-l ba b--moon-gray">
              <div className="justify-end">
                <button
                  title="pic"
                  className={
                    mainWindow === "pic"
                      ? "f6 link dim ba ph2 mh2 mt2 mb2 dib b--dark-red dark-red"
                      : "f6 link dim ba ph2 mh2 mt2 mb2 dib near-black"
                  }
                  onMouseDown={changeMainWindow}
                >
                  {" "}
                  Bild
                  <img
                    className="mv2 mh2"
                    style={{ position: "relative", width: 20, height: 20 }}
                    src={
                      mainWindow === "pic"
                        ? "./pics/svg/bild_red.svg"
                        : "./pics/svg/bild_grey.svg"
                    }
                    title="pic"
                  ></img>
                </button>

                <button
                  title="3d"
                  className={
                    mainWindow === "3d"
                      ? "f6 link dim ba ph2 mh2 mt2 mb2 dib b--dark-red dark-red"
                      : "f6 link dim ba ph2 mh2 mt2 mb2 dib near-black"
                  }
                  onMouseDown={changeMainWindow}
                >
                  {" "}
                  3d
                  <img
                    className="mv2 mh2"
                    style={{ position: "relative", width: 20, height: 20 }}
                    src={
                      mainWindow === "3d"
                        ? "./pics/svg/3d_red.svg"
                        : "./pics/svg/3d_grey.svg"
                    }
                    title="3d"
                  ></img>
                </button>

                <button
                  title="film"
                  className={
                    mainWindow === "film"
                      ? "f6 link dim ba ph2 mh2 mt2 mb2 dib b--dark-red dark-red"
                      : "f6 link dim ba ph2 mh2 mt2 mb2 dib near-black"
                  }
                  onMouseDown={changeMainWindow}
                >
                  {" "}
                  Film
                  <img
                    className="mv2 mh2"
                    style={{ position: "relative", width: 20, height: 20 }}
                    src={
                      mainWindow === "film"
                        ? "./pics/svg/film_red.svg"
                        : "./pics/svg/film_grey.svg"
                    }
                    title="film"
                  ></img>
                </button>
              </div>
              <div className="w-90">
                <img
                  id="profilDuzy"
                  className={mainWindow == "pic" ? "db" : "dn"}
                  src="./pics/k_88_3d.jpg"
                ></img>

                <div
                  className={
                    mainWindow == "film"
                      ? "db w-100 flex flex-wrap justify-center"
                      : "dn"
                  }
                >
                  <video
                    className=""
                    id="video"
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: 720,
                      height: "auto",
                    }}
                    controls
                    preload="none"
                    poster="./movies/movie_poster.png"
                  >
                    <source
                      id="source"
                      src="./movies/k88.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div
                  style={{ position: "relative", height: 478 }}
                  className={mainWindow == "3d" ? "db" : "dn"}
                >
                  <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [16, 16, 16], fov: 50 }}
                  >
                    <spotLight
                      intensity={aluProfile === false ? farben[nrKolorkuWew].light_inside : 0.1}
                      angle={0.1}
                      penumbra={1}
                      position={[20, 15, -300]}
                      castShadow
                    />
                    <spotLight
                      intensity={aluProfile === false ? farben[nrKolorkuZew].light_outside : 0.1}
                      angle={0.1}
                      penumbra={1}
                      position={[20, 100, 300]}
                      castShadow
                    />

                    <Suspense fallback={null}>
                      <Background />
                    </Suspense>

                    <Suspense fallback={null}>
                      {activeProfile == "Schüco CT 70 Classic" ? (
                        <Ct70Classic
                          rotation-y={Math.PI * 1.33}
                          colorInside={colorInside}
                          colorOutside={colorOutside}
                          blackGasket={blackGasket}
                        />
                      ) : null}
                      {activeProfile == "Schüco CT 70 Rondo" ? (
                        <Ct70Rondo
                          rotation-y={Math.PI * 1.33}
                          colorInside={colorInside}
                          colorOutside={colorOutside}
                          blackGasket={blackGasket}
                        />
                      ) : null}
                      {activeProfile == "Schüco Living MD" ? (
                        <Living
                          rotation-y={Math.PI * 1.33}
                          colorInside={colorInside}
                          colorOutside={colorOutside}
                          blackGasket={blackGasket}
                        />
                      ) : null}
                      {activeProfile == "Kömmerling 70 AD" ? (
                        <K70
                          rotation-y={Math.PI * 1.33}
                          colorInside={colorInside}
                          colorOutside={colorOutside}
                          blackGasket={blackGasket}
                        />
                      ) : null}
                      {activeProfile == "Kömmerling 76 AD" ? (
                        <K76Ad
                          rotation-y={Math.PI * 1.33}
                          colorInside={colorInside}
                          colorOutside={colorOutside}
                          blackGasket={blackGasket}
                        />
                      ) : null}
                      {activeProfile == "Kömmerling 76 MD" ? (
                        <K76Md
                          rotation-y={Math.PI * 1.33}
                          colorInside={colorInside}
                          colorOutside={colorOutside}
                          blackGasket={blackGasket}
                        />
                      ) : null}
                      {activeProfile == "Kömmerling 88 MD" ? (
                        <K88
                          rotation-y={Math.PI * 1.33}
                          colorInside={colorInside}
                          colorOutside={colorOutside}
                          blackGasket={blackGasket}
                        />
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
                      {activeProfile == "Schüco AWS 75 SI" ? (
                        <Aws75 rotation-y={Math.PI * 1.33} />
                      ) : null}
                      {activeProfile == "Schüco AWS 90 SI" ? (
                        <Aws90 rotation-y={Math.PI * 1.33} />
                      ) : null}
                      <Environment preset="park" />
                      <ambientLight intensity={0.5} />
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
                <ProfileStrip
                  mWindow={mainWindow}
                  onProfileChange={profileChangeHandler}
                />
              </div>
              <div className="flex flex-wrap justify-center w-90">
                <button
                  className={
                    mainWindow === "3d"
                      ? "f6 link dim ba ph5 pv2 mh4 mt2 mb2 dib near-black"
                      : "dn"
                  }
                  onMouseDown={onShowColors}
                >
                  {" "}
                  {showColors === false
                    ? "Farben anzeigen"
                    : "Farben ausblenden"}
                </button>
              </div>

              
            </div>

            <div className="flex flex-wrap justify-center mv1  fl w-100 w-30-l ba b--moon-gray">
              <div className="tc  br3 ma2">
                <div class="dn db-l w3-display-topmiddle w3-container"></div>
                <h2 id="tekstProfilu">Kömmerling 88 MD</h2>
                <p id="komoryProfilu">
                  7 Kammer Profil mit 3 Dichtungen, 88 mm Einbautiefe. Versetzte
                  klassische Optik
                </p>

                <img id="sectionPic" src="./pics/sections/k88.png"></img>
              </div>
            </div>
          </div>

          <div 
          
          className = {showColors === true 
          ?  "flex flex-wrap justify-center  w-90 pa2 ml4 fl tc mb1  "
          : "dn"
          }
         >
            <div className="w-100 ba b--moon-gray mb4">
            <div className="flex flex-wrap justify-center w-90">
                <button
                  className={
                    showColors === true
                      ? bothSidesColor === false
                        ? "f6 link dim ba ph2 pv2 mh2 mt2 mb2 dib b--dark-red dark-red"
                        : "f6 link dim ba ph2 pv2 mh2 mt2 mb2 dib near-black"
                      : "dn"
                  }
                  onMouseDown={oneSideColor}
                >
                  {" "}
                  Farbe nur außen
                </button>

                <button
                  className={
                    showColors === true
                      ? bothSidesColor === true
                        ? "f6 link dim ba ph2 pv2 mh2 mt2 mb2 dib b--dark-red dark-red"
                        : "f6 link dim ba ph2 pv2 mh2 mt2 mb2 dib near-black"
                      : "dn"
                  }
                  onMouseDown={bothSides}
                >
                  {" "}
                  Farbe beidseitig
                </button>
              </div>

              <ColourStrip
                showColors={showColors}
                onColorChange={changeColor}
                gasketChange={checkGasket}
              />
            </div>
          </div>

          {/*<ColourStrip onColorChange={changeColorOutside} />
          <ColourStrip onColorChange={changeColorInside} />*/}

          <div className="flex flex-wrap justify-around mb3 w-100">
            {/*<ProfileCards />*/}
          </div>
          <WarumDiv />

          <ActionDiv />

          <div className="flex flex-wrap justify-center  fl w-90">
            <Schnellkontakt />
          </div>

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

  function checkGasket(hasBlacGasket) {
    if (bothSidesColor ===true ) { setBlackGasket(hasBlacGasket)} else { setBlackGasket(false)}
  }

  function oneSideColor() {
    setBothSidesColor(false);
    setColorInside("weiss");
    setColorOutside(colorOutside);
    setBlackGasket(false);
  }

  function bothSides() {
    setBothSidesColor(true);
    setColorInside(colorOutside);
    setColorOutside(colorOutside);
    setBlackGasket(farben[nrKolorkuZew].blackGasket);
  }

  function onShowColors() {
    if (showColors === false) {
      setShowColors(true);
    } else {
      setShowColors(false);
    }
  }

  function changeMainWindow(ev) {
    setMainWindow(ev.target.title);
    document.getElementById("video").pause();
  }

  function changeColorInside(newColor) {
    setColorInside(newColor);
  }

  function changeColor(newColor) {
    if (bothSidesColor === true) {
      setColorInside(newColor);
      setColorOutside(newColor);
    } else {
      setColorOutside(newColor);
      setColorInside("weiss");
    }
  }
}

export default StartPage;
