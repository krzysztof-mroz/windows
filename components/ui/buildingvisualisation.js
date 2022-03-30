import { Suspense, useRef, useState, useEffect } from "react";
import { Wall, WallH } from "./buildingmodels";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
  useTexture,
  Html,
  useProgress,
} from "@react-three/drei";
import { getAllColours } from "../data/colours";

function buildingvisualisation({ ...props }) {
  const [colorInside, setColorInside] = useState("weiss");
  const [colorOutside, setColorOutside] = useState("weiss");
  const [bauart, setBauart] = useState("neubau");
  const [blackGasket, setBlackGasket] = useState(false);
  const [aluProfile, setAluProfile] = useState(false);
  const [fensterBreite, setFensterBreite] = useState(0);
  const [innenLeibungZeigen, setInnenLeibungZeigen] = useState(false);
  const [innenOeffnungZeigen, setInnenOeffnungZeigen] = useState(false);
  const [kalkuAltbauZeigen, setKalkuAltbauZeigen] = useState(false);
  const [kalkuNeubauZeigen, setKalkuNeubauZeigen] = useState(false);
  const [verbreiterungenSeitlich, setVerbreiterungenSeitlich] = useState(0);
  const [breiteZeigen, setBreiteZeigen] = useState(true);
  const [hoeheZeigen, setHoeheZeigen] = useState(false);
  const [switchButton, setSwitchButton] = useState("Höhe messen");
  const [altbauH, setAltbauH] = useState(false);
  const [bodenH, setBodenH] = useState(false);
  const [fussbodenH, setFussbodenH] = useState(false);
  const [rolloH, setRolloH] = useState(false);
  const [ifHSH, setIfHSH] = useState(false);

  const farben = getAllColours();

  const breiteNeubauRef = useRef();
  const breiteAltbauRef = useRef();
  const breiteAussenleibungRef = useRef();
  const breiteInnenleibungRef = useRef();
  const breiteAussenoeffnungRef = useRef();
  const breiteInnenoeffnungRef = useRef();

  function Loader() {
    const { progress } = useProgress();
    return <Html center>{parseInt(progress)} % geladen</Html>;
  }

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
    const texture = useTexture("/pics/spring_texture.jpg");
    return <primitive attach="background" object={texture} />;
  };

  async function kalkuBreite(event) {
    event.preventDefault();
    const breite = parseInt(breiteNeubauRef.current.value);
    setFensterBreite(breite - 30);
    setVerbreiterungenSeitlich(0);
  }

  async function kalkuBreiteAltbau(event) {
    event.preventDefault();
    const breite = parseInt(breiteAltbauRef.current.value);
    setFensterBreite(breite - 30);
    setVerbreiterungenSeitlich(0);
  }

  async function showInnenAltbau(event) {
    event.preventDefault();
    setVerbreiterungenSeitlich(false);
    setInnenLeibungZeigen(true);
    setKalkuAltbauZeigen(false);
  }

  async function showInnenNeubau(event) {
    event.preventDefault();
    setVerbreiterungenSeitlich(false);
    setInnenOeffnungZeigen(true);
    setKalkuNeubauZeigen(false);
  }

  async function kalkuAltbauMit(event) {
    event.preventDefault();
    setVerbreiterungenSeitlich(0);
    setKalkuAltbauZeigen(true);
    const aussenBreite = parseInt(breiteAussenleibungRef.current.value);
    const innenBreite = parseInt(breiteInnenleibungRef.current.value);
    const difference = innenBreite - aussenBreite;
    if (difference <= 110) {
      setFensterBreite(innenBreite - 30);
    } else if (difference > 110) {
      setFensterBreite(aussenBreite + 80);
    }

    if (difference >= 140) {
      setVerbreiterungenSeitlich(difference - 110);
    }
  }

  async function kalkuNeubauMit(event) {
    event.preventDefault();
    setVerbreiterungenSeitlich(0);
    setKalkuNeubauZeigen(true);
    const aussenBreite = parseInt(breiteAussenoeffnungRef.current.value);
    const innenBreite = parseInt(breiteInnenoeffnungRef.current.value);
    const difference = innenBreite - aussenBreite;
    if (difference <= 110) {
      setFensterBreite(innenBreite - 30);
    } else if (difference > 110) {
      setFensterBreite(aussenBreite + 80);
    }

    if (difference >= 140) {
      setVerbreiterungenSeitlich(difference - 110);
    }
  }

  function switchBH() {
    return (
      <div className="tc">
        <button
          className="w3-button w3-border w3-border-orange w3-sand mv1 mh2 w-80 w-40-l"
          onMouseDown={switchButton === "Höhe messen" ? showHeigth : showWidth}
        >
          {switchButton}
        </button>
      </div>
    );
  }

  function showHeigth() {
    setBreiteZeigen(false);
    setHoeheZeigen(true);
    setSwitchButton("Breite messen");
    if (bauart === "neubau") {
      setAltbauH(false);
    } else if (bauart === "altbau") {
      setAltbauH(true);
    } else if (bauart === "neubau_dg") {
      setAltbauH(false);
    } else if (bauart === "altbau_al") {
      setAltbauH(true);
    }
  }

  function showWidth() {
    setBreiteZeigen(true);
    setHoeheZeigen(false);
    setSwitchButton("Höhe messen");
  }

  function neubauOhne() {
    return (
      <div className="mt4">
        <p>
          Bitte die Leibungsbreite an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen.{" "}
        </p>
        <form className="" onSubmit={kalkuBreite}>
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Breite in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={breiteNeubauRef}
                onChange={kalkuBreite}
              />
            </div>
            <div className="w-30"></div>
          </div>
        </form>
        {fensterBreite > 0 && (
          <p>
            Fensterbreite beträgt <b>{fensterBreite} mm.</b>
          </p>
        )}
        {fensterBreite > 0 && <p>30 mm wurde als Montagespiel abgezogen.</p>}
        <p></p>
      </div>
    );
  }

  function altbauOhne() {
    return (
      <div className="mt4">
        <p>
          1) Falls Putz (oder Fliesen) in der Leibung vorhanden sind, bitte (ev.
          teilweise) abtragen und die Breite von Mauer zu Mauer messen. Putz
          soll grundsätzlich bei Fenstertausch in der Leibung abgetragen werden.{" "}
        </p>
        <p>
          2) Leibungsbreite an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen.{" "}
        </p>
        <form className="" onSubmit={kalkuBreiteAltbau}>
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Breite in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={breiteAltbauRef}
                onChange={kalkuBreiteAltbau}
              />
            </div>
            <div className="w-30"></div>
          </div>
        </form>
        {fensterBreite > 0 && (
          <p>
            Fensterbreite beträgt <b>{fensterBreite} mm.</b>
          </p>
        )}
        {fensterBreite > 0 && <p>30 mm wurde als Montagespiel abgezogen.</p>}
      </div>
    );
  }

  function altbauMit() {
    return (
      <div className="mt4">
        <p>
          1) Falls Putz (oder Fliesen) in der Leibung vorhanden sind, bitte (ev.
          teilweise) abtragen und die Breite von Mauer zu Mauer messen. Putz
          soll grundsätzlich bei Fenstertausch in der Leibung abgetragen werden.{" "}
        </p>
        <p>
          2) Es gibt 2 Leibungen, eine kleinere Außenleibung, und eine grössere
          Innenleibung. Identifizieren Sie bitte bei Ihnen die Leibungen
        </p>
        <p>
          3) Meßen Sie die <b>Außenleibung</b> an verschiedenen Stellen (2-3).
          Nehmen Sie bitte das kleinste Maß.
        </p>
        <form className="" onSubmit={showInnenAltbau}>
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Breite in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={breiteAussenleibungRef}
                onChange={showInnenAltbau}
              />
            </div>
            <div className="w-30"></div>
          </div>
        </form>
      </div>
    );
  }

  function altbauMit2() {
    return (
      <div>
        {innenLeibungZeigen === true && (
          <p>
            {" "}
            4) Meßen Sie die <b>Innenleibung</b> an verschiedenen Stellen (2-3).
            Nehmen Sie bitte das kleinste Maß.
          </p>
        )}
        {innenLeibungZeigen === true && (
          <form className="" onSubmit={kalkuAltbauMit}>
            <div className="flex flex-wrap justify-start tl w-100 w-60-l">
              <div className="w-30 gray f5 mv2">Breite in mm:</div>
              <div className="w-30 gray f6 tl">
                <input
                  id="name"
                  style={{ width: 100, height: 37 }}
                  className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                  type="text"
                  placeholder="mm"
                  ref={breiteInnenleibungRef}
                  onChange={kalkuAltbauMit}
                />
              </div>
              <div className="w-30"></div>
            </div>
          </form>
        )}
        {kalkuAltbauZeigen === true && (
          <p>
            Fensterbreite beträgt <b>{fensterBreite} mm.</b>
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Es werden seitliche Verbreiterungen von insgesamt ca.{" "}
            {verbreiterungenSeitlich} mm empfohlen, (
            {parseInt(verbreiterungenSeitlich / 2)} mm jeweils links und
            rechts).
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Gesamtbreite des Fensters inkl. Verbreiterungen soll{" "}
            {fensterBreite + verbreiterungenSeitlich} mm nicht überschreiten!
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            So bleiben jeweils links und rechts ca. 30 mm von dem Blendrahmen
            von außen sichtbar. 30 mm wurde als Montagespiel abgezogen.
          </p>
        )}
        {verbreiterungenSeitlich === 0 && innenLeibungZeigen === true && (
          <p>
            30 mm wurde als Montagespiel abgezogen. Man braucht keine
            Rahmenverbreiterungen seitlich.{" "}
          </p>
        )}
      </div>
    );
  }

  function neubauMit() {
    return (
      <div className="mt4">
        <p>
          2) Es gibt eine gemauerte (ggf. betonierte) Leibung und von Außen
          kommt eine Dämmung, bzw Klinher. Dämmung / Klinker wird teilweise mit
          der Maueröffnung überlappen. So wird die äußere Maueröffnung kleiner
          als die innere Maueröffnung.
        </p>
        <p>
          3) Meßen Sie bitte die <b>äußere</b> Maueröffnung in der
          Dämmungsschicht (bzw. Klinkerschicht). Falls noch nicht vorhanden,
          kalkulieren Sie bitte die Breite nach Abzug der geplanten Überlappung
          mit vorhanderner Maueröffnung.
        </p>
        <form className="" onSubmit={showInnenNeubau}>
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Breite in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={breiteAussenoeffnungRef}
                onChange={showInnenNeubau}
              />
            </div>
            <div className="w-30"></div>
          </div>
        </form>
      </div>
    );
  }

  function neubauMit2() {
    return (
      <div>
        {innenOeffnungZeigen === true && (
          <p>
            {" "}
            4) Meßen Sie jetzt bitte die <b>innere</b> Maueröffnung an
            verschiedenen Stellen (2-3). Nehmen Sie bitte das kleinste Maß.
          </p>
        )}
        {innenOeffnungZeigen === true && (
          <form className="" onSubmit={kalkuNeubauMit}>
            <div className="flex flex-wrap justify-start tl w-100 w-60-l">
              <div className="w-30 gray f5 mv2">Breite in mm:</div>
              <div className="w-30 gray f6 tl">
                <input
                  id="name"
                  style={{ width: 100, height: 37 }}
                  className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                  type="text"
                  placeholder="mm"
                  ref={breiteInnenoeffnungRef}
                  onChange={kalkuNeubauMit}
                />
              </div>
              <div className="w-30"></div>
            </div>
          </form>
        )}
        {kalkuNeubauZeigen === true && (
          <p>
            Fensterbreite beträgt <b>{fensterBreite} mm.</b>
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Es werden seitliche Verbreiterungen von insgesamt ca.{" "}
            {verbreiterungenSeitlich} mm empfohlen, (
            {parseInt(verbreiterungenSeitlich / 2)} mm jeweils links und
            rechts).
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Gesamtbreite des Fensters inkl. Verbreiterungen soll{" "}
            {fensterBreite + verbreiterungenSeitlich} mm nicht überschreiten!
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            So bleiben jeweils links und rechts ca. 30 mm von dem Blendrahmen
            von außen sichtbar. 30 mm wurde als Montagespiel abgezogen.
          </p>
        )}
        {verbreiterungenSeitlich === 0 && innenOeffnungZeigen === true && (
          <p>
            30 mm wurde als Montagespiel abgezogen. Man braucht keine
            Rahmenverbreiterungen seitlich.{" "}
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-around mb3 w-100">
        {/* wizualizacja */}
        {breiteZeigen === true && (
          <div>
            <div className="db mb4 flex flex-wrap justify-center mv1 pb3 fl w-100 w-50-l b--moon-gray">
              {/* hint */}
              <p className="ba b--moon-gray pa2 silver">
                3d Visualisierung - bitte berühren
              </p>

              {/* canvas */}
              <div
                style={{ position: "relative", height: 478 }}
                className="w-90"
              >
                <Canvas
                  shadows
                  dpr={[1, 2]}
                  camera={{ position: props.camera.split(","), fov: 50 }}
                >
                  <spotLight
                    intensity={0.6}
                    angle={0.1}
                    penumbra={1}
                    position={[800, 800, -2000]}
                    castShadow
                  />
                  <spotLight
                    intensity={0.2}
                    angle={0.1}
                    penumbra={1}
                    position={[800, 800, 1500]}
                    castShadow
                  />

                  <Suspense fallback={<Loader />}>
                    <Background />
                  </Suspense>

                  <Suspense fallback={<Loader />}>
                    {props.product == "wall" && (
                      <Wall rotation-y={Math.PI * 0} bauart={bauart} />
                    )}

                    <Environment preset="park" />
                    <ambientLight intensity={0.5} />
                  </Suspense>
                  <OrbitControls
                    minPolarAngle={Math.PI * 0.45}
                    maxPolarAngle={Math.PI * 0.55}
                    enableZoom={true}
                    enablePan={true}
                  />
                </Canvas>
              </div>
            </div>

            {/* parametry */}
            <div
              className={
                breiteZeigen === true
                  ? "fl w-100 w-50-l b--moon-gray ph3"
                  : "fl w-100 b--moon-gray ph3"
              }
            >
              {/* profile i kolory */}
              <div className="flex flex-wrap justify-center">
                {/* tytul Breite messen */}
                <div className="w-90 tc">
                  <h4 id="nazwaProfilu" className="ba b--moon-gray pa2">
                    Breite messen
                  </h4>
                </div>

                {/* przyciski */}
                <button
                  className={
                    bauart === "altbau"
                      ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 w-80"
                      : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 w-80"
                  }
                  onMouseDown={() => changeBauart("altbau")}
                >
                  Altbau ohne Außenleibung
                </button>

                <button
                  className={
                    bauart === "altbau_al"
                      ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 w-80"
                      : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 w-80"
                  }
                  onMouseDown={() => changeBauart("altbau_al")}
                >
                  Altbau mit Außenleibung
                </button>

                <button
                  className={
                    bauart === "neubau"
                      ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 w-80"
                      : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 w-80"
                  }
                  onMouseDown={() => changeBauart("neubau")}
                >
                  Neubau ohne Dämmung / Klinker
                </button>

                <button
                  className={
                    bauart === "neubau_dg"
                      ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 w-80"
                      : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 w-80"
                  }
                  onMouseDown={() => changeBauart("neubau_dg")}
                >
                  Neubau mit Dämmung / Klinker
                </button>

                {bauart === "neubau" && neubauOhne()}
                {bauart === "altbau" && altbauOhne()}
                {bauart === "altbau_al" && altbauMit()}
                {bauart === "neubau_dg" && neubauMit()}
              </div>
            </div>
            <div className="flex flex-wrap justify-around mb3 w-100 ph3">
              {bauart === "altbau_al" && altbauMit2()}
              {bauart === "neubau_dg" && neubauMit2()}
            </div>
          </div>
        )}

        {/* HOEHE MESSEN */}
        {hoeheZeigen === true && (
          <div>
            <div className="flex flex-wrap justify-around mb3 w-100 ph3">
              <div className=" fl w-100 w-50-l b--moon-gray ph3">
                {/* profile i kolory */}
                <div className="flex flex-wrap justify-center">
                  {/* tytul Breite messen */}
                  <div className="w-90 tc">
                    <h4 id="nazwaProfilu" className="ba b--moon-gray pa2">
                      Höhe messen
                    </h4>
                  </div>

                  {/* przyciski */}
                  <div className="w-90 tc">
                    <button
                      className={
                        altbauH === true
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeAltbauH(true)}
                    >
                      Altbau
                    </button>

                    <button
                      className={
                        altbauH === false
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeAltbauH(false)}
                    >
                      Neubau
                    </button>
                  </div>


                  <div className="w-90 tc">
                    <button
                      className={
                        bodenH === false
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeBodenH(false)}
                    >
                      Brüstung
                    </button>

                    <button
                      className={
                        bodenH === true
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeBodenH(true)}
                    >
                      Bodentief
                    </button>
                  </div>


                  {(bodenH === true) && <div className="w-90 tc">
                    <button
                      className={
                        fussbodenH === true
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeFussbodenH(true)}
                    >
                      Fußboden Aufbau
                    </button>

                    <button
                      className={
                        fussbodenH === false
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeFussbodenH(false)}
                    >
                      ohne
                    </button>
                  </div>}

                  <div className="w-90 tc">
                    <button
                      className={
                        rolloH === true
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeRolloH(true)}
                    >
                      Rollladenkasten
                    </button>

                    <button
                      className={
                        rolloH === false
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeRolloH(false)}
                    >
                      ohne
                    </button>
                  </div>

                  {(bodenH === true) && <div className="w-90 tc">
                    <button
                      className={
                        ifHSH === false
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeHSH(false)}
                    >
                      Standard Fenster / Tür
                    </button>

                    <button
                      className={
                        ifHSH === true
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeHSH(true)}
                    >
                      Hebe Schiebe
                    </button>
                  </div>}



                </div>
              </div>

              <div className="db mb4 flex flex-wrap justify-center mv1 pb3 fl w-100 w-50-l b--moon-gray">
                {/* hint */}
                <p className="ba b--moon-gray pa2 silver">
                  3d Visualisierung - bitte berühren
                </p>

                {/* canvas */}
                <div
                  style={{ position: "relative", height: 478 }}
                  className="w-90"
                >
                  <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: props.camera.split(","), fov: 50 }}
                  >
                    <spotLight
                      intensity={0.6}
                      angle={0.1}
                      penumbra={1}
                      position={[800, 800, -2000]}
                      castShadow
                    />
                    <spotLight
                      intensity={0.2}
                      angle={0.1}
                      penumbra={1}
                      position={[800, 800, 1500]}
                      castShadow
                    />

                    <Suspense fallback={<Loader />}>
                      <Background />
                    </Suspense>

                    <Suspense fallback={<Loader />}>
                      <WallH rotation-y={Math.PI * 0} altbauH={altbauH} bodenH={bodenH} fussbodenH={fussbodenH} rolloH={rolloH} ifHSH={ifHSH} />

                      <Environment preset="park" />
                      <ambientLight intensity={0.5} />
                    </Suspense>
                    <OrbitControls
                      minPolarAngle={Math.PI * 0.45}
                      maxPolarAngle={Math.PI * 0.55}
                      enableZoom={true}
                      enablePan={true}
                    />
                  </Canvas>
                </div>
              </div>

              <div className="flex flex-wrap justify-around mb3 w-100 ph3">
                {bauart === "altbau_al" && altbauMit2()}
                {bauart === "neubau_dg" && neubauMit2()}
              </div>
            </div>
          </div>
        )}
      </div>
      {switchBH()}
      <div className="tc ba b--moon-gray pa1 ma2 mb4 mt3">
        <h5>Fenster Maße:</h5>
        <p>Fenster Breite: {fensterBreite} mm</p>
        {verbreiterungenSeitlich > 0 && (
          <p>
            Verbreiterungen seitlich: {verbreiterungenSeitlich} mm, jeweils{" "}
            {verbreiterungenSeitlich / 2} mm L + R
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Fenster inkl. Verbreiterungen:{" "}
            {fensterBreite + verbreiterungenSeitlich} mm
          </p>
        )}
      </div>
    </div>
  );

  function changeBauart(bauart) {
    setBauart(bauart);
    showWidth();
  }

  function changeAltbauH(ifAltbau) {
    setAltbauH(ifAltbau);
  }

  function changeBodenH(ifBoden) {
    setBodenH(ifBoden);
    if (ifBoden === false) {
      setFussbodenH(false);
      setIfHSH(false)
    }
  }

  function changeFussbodenH(ifFussboden) {
    setFussbodenH(ifFussboden);
  }

  function changeRolloH(ifRollo) {
    setRolloH(ifRollo);
  }
  function changeHSH(ifHS) {
    setIfHSH(ifHS);
  }
}

export default buildingvisualisation;
