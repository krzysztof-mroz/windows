import { Suspense, useRef, useState, useEffect } from "react";
import "tachyons";
import "tachyons-svg";
import Link from "next/link";
import ColourStrip from "../components/ui/colourstrip";
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
  

  const state = proxy({
    current: null,
    items: {
      aluminium: "#e7e7e9",
      gasket: "#222222",
      connector: "#8A9FA4",
      kante: "#CCCCCC",
      blockgasket: "#777777",
      insulation: "#EDE9B9",
      hardware: "#e7e7e9",
      glas: "#E3F6FA",
      red: "#ff0000",
      pvc: "#FFFFFF",
      gasketgrey: "#cccccc",
      block: "#F77474",
      kantet: "#D8D6D6",
      steel: "#B0E8F2",
    },
  });




  function ModelLiving({ ...props }) {
    const group = useRef()
    const snap = useSnapshot(state);
    const colorMap = useTexture("anthrazitgrau.jpg");
    const aluRoughnessMap = useTexture("alu_roughness2.jpg"); 
    const { nodes, materials } = useGLTF('/livingecke.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.color_inside.geometry}
          material={nodes.color_inside.material}
          position={[-1.71, 13.15, 7.12]}
          material-map={colorMap}
          material-roughnessMap={aluRoughnessMap}
        />
        <mesh
          geometry={nodes.color_outside.geometry}
          material={nodes.color_outside.material}
          position={[-2.9 , 13.13, 7.63]}
          material-map={colorMap}
          material-roughnessMap={aluRoughnessMap}
        />
        <mesh geometry={nodes.profile.geometry} material={nodes.profile.material} position={[-1.7, 13.15, 7.12]} material-color={snap.items.pvc} />
        <mesh geometry={nodes.gaskets.geometry} material={nodes.gaskets.material} position={[-0.44, 13.16, 6.62]} material-color={snap.items.gasketgrey} />
        <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[1.28, 9.11, 7.11]} material-color={snap.items.kantet}/>
        <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[1.28, 9.11, 7.11]} material-color={snap.items.gasket}/>
        <mesh geometry={nodes.block.geometry} material={nodes.block.material} position={[-1.72, 13.14, 7.11]} material-color={snap.items.red}/>
        <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[-3, 13.14, 7.63]} material-color={snap.items.steel}/>
        <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[-0.44, 13.16, 6.62]} material-color={snap.items.hardware} />
        <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[3, -13.16, -7.63]} material-color={snap.items.glas} />
      </group>
    )
  }



  function Model({ ...props }) {
    const group = useRef();
    const snap = useSnapshot(state);

    const aluMap = useTexture("alu_basecolor.png");
    const aluNormalMap = useTexture("alu_normal.png");
    const aluRoughnessMap = useTexture("alu_roughness2.jpg");

    const colorMap = useTexture("styrofoam_basecolor.jpg");
    const normalMap = useTexture("styrofoam_normal.jpg");
    const roughnessMap = useTexture("styrofoam_roughness.jpg");
    const aoMap = useTexture("styrofoam_ao.jpg");

    const { nodes, materials } = useGLTF("/aws_75a.glb");
    
    
    
    return (

      

      <group ref={group} {...props} dispose={null}>
        <group position={[-1.23, 0.18, 0]}>
          <mesh
            geometry={nodes["aluminium-Aluminium"].geometry}
            material={materials.Aluminium}
            material-color={snap.items.aluminium}
          />
          <mesh
            geometry={nodes["aluminium-mat2"].geometry}
            material={materials.mat2}
            material-color={snap.items.red}
            material-map={aluMap}
            material-normalMap={aluNormalMap}
            material-roughnessMap={aluRoughnessMap}
          />
          <mesh
            geometry={nodes["aluminium-mat1"].geometry}
            material={materials.mat1}
          />
        </group>
        <mesh
          geometry={nodes.gaskets.geometry}
          material={nodes.gaskets.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.gasket}
        />
        <mesh
          geometry={nodes.main_gasket.geometry}
          material={nodes.main_gasket.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.gasket}
        />
        <mesh
          geometry={nodes.connectors.geometry}
          material={nodes.connectors.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.connector}
        />
        <mesh
          geometry={nodes.block_gasket.geometry}
          material={nodes.block_gasket.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.blockgasket}
        />
        <mesh
          geometry={nodes.kanteT.geometry}
          material={nodes.kanteT.material}
          position={[1.23, -0.18, 0]}
          material-color={snap.items.kante}
        />
        <mesh
          geometry={nodes.kanteB.geometry}
          material={nodes.kanteB.material}
          position={[1.23, -0.18, 0]}
          material-color={snap.items.gasket}
        />
        <mesh
          geometry={nodes.glas3.geometry}
          material={nodes.glas3.material}
          position={[1.23, -0.18, 0]}
          material-color={snap.items.glas}
        />
        <mesh
          geometry={nodes.hardware.geometry}
          material={nodes.hardware.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.hardware}
        />
        <mesh
          geometry={nodes.insulation2.geometry}
          material={nodes.insulation2.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.insulation}
          material-map={colorMap}
          material-normalMap={normalMap}
          material-roughnessMap={roughnessMap}
          material-aoMap={aoMap}
        />
      </group>
    );
  
  }

  function profileChangeHandler(newProfile) {
    setActiveProfile(newProfile);
  };

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

                <div style={{ position: "relative", height: 478 }} className={mainWindow == "3d" ? "db" : "dn"}>
                  <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [20, 20, 20], fov: 50 }}
                    
                  >
                    <Suspense fallback={null}>
                      {activeProfile=="Schüco CT 70 Classic"? <Model  /> : null}
                      {activeProfile=="Schüco Living MD"? <ModelLiving  /> : null}
                      <Environment preset="warehouse" />
                      <ContactShadows
                        rotation-x={Math.PI / 2}
                        position={[0, -0.8, 0]}
                        opacity={0.25}
                        width={10}
                        height={10}
                        blur={1.5}
                        far={0.8}
                      />
                    </Suspense>
                    <OrbitControls
                      minPolarAngle={Math.PI / 3}
                      maxPolarAngle={Math.PI * (2 / 3)}
                      enableZoom={true}
                      enablePan={false}
                    />
                  </Canvas>
                </div>
              </div>

              <div className="flex flex-wrap justify-start">
                <ProfileStrip onProfileChange={profileChangeHandler} />
              </div>
            </div>
            <div className="flex flex-wrap justify-center mv1  fl w-100 w-25-l ba b--moon-gray">
              <div className="tc  br3 ma2 w3-display-container w3-text-blue-grey">
                <div class="dn db-l w3-display-topmiddle w3-container">
                  <h2 id="tekstProfilu">Schüco CT 70 Classic</h2>
                  <p id="komoryProfilu">5 Kammer, 2 Dichtungen, 70 mm Tiefe</p>
                </div>
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
