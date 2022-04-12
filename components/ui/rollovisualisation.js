import { Suspense, useRef, useState, useEffect } from "react";
import PvcColourStrip from "./pvccolourstrip";
import {
  HsLs,
  HsPd,
  Ct70Ht,
  Ct70Nt,
  LivingHt,
  LivingNt,
  K88Ht,
  K88Nt,
  Ael,
} from "./productmodels";
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

function rollovisualisation({ ...props }) {
  const [mitDaemmung, setMitDaemmung] = useState(false);

  function Loader() {
    const { progress } = useProgress();
    return <Html center>{parseInt(progress)} % geladen</Html>;
  }

  //console.log(blackGasket)

  const Background = (props) => {
    const texture = useTexture("/pics/spring_texture.jpg");
    return <primitive attach="background" object={texture} />;
  };

  return (
    <div className="flex flex-wrap justify-around mb3 w-100">
      {/* wizualizacja */}
      <div className="db mb4 flex flex-wrap justify-center mv1 pb3 fl w-100 w-50-l b--moon-gray">
        {/* hint */}
        <p className="ba b--moon-gray pa2 silver">
          3d Visualisierung - bitte berühren
        </p>

        {/* canvas */}
        <div style={{ position: "relative", height: 478 }} className="w-90">
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
              position={[800, 800, -2000]}
              castShadow
            />

            <Suspense fallback={<Loader />}>
              <Background />
            </Suspense>

            <Suspense fallback={<Loader />}>
              {props.product == "ael" && (
                <Ael rotation-y={Math.PI * 2.33} mitDaemmung={mitDaemmung} />
              )}

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

      {/* parametry */}
      <div className=" fl w-100 w-50-l b--moon-gray ph3">
        {/* profile i kolory */}
        <div className="flex flex-wrap justify-center">
          {/* nazwa profilu */}
          <div className="w-90 tc">
            <h4 id="nazwaProfilu" className="ba b--moon-gray pa2">
              {props.productName}
            </h4>
          </div>

          {/* nazwa koloru */}
          <div className="w-90 tc">
            <button
              className={
                mitDaemmung === false
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => toggleInsulation(false)}
            >
              Ohne Dämmung
            </button>

            <button
              className={
                mitDaemmung === true
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => toggleInsulation(true)}
            >
              Mit Dämmung
            </button>
            {props.product == "ael" && (
            <div className="silver f5 tl mt4">
            <ul>
              <li>
                Rollladenkasten wird{" "}
                <b>oben auf dem Fensterblendrahmen draufgesetzt</b>.
              </li>
              <li>Kasten kann einseitig oder beidseitig verputzt werden.</li>
              <li>
                <b>Wartungsklappe von unten</b> oder von vorne, innen.
              </li>
              <li>Ausgeschäumte Aluminium Lamellen</li>
              <li>Gurtantrieb, oder Motorenantrieb, zur Wahl.</li>
              <li>Möglichkeit der Verwendung von Insektengitter.</li>
              <li>
                Optimale thermische Isolierung durch Verwendung von Styropor
                Einlage.
              </li>
              <li>
                Verschiedene Farben der Kästen, Führunsschienen und Lamellen.
              </li>
              <li>Kastenhöhen: 170 mm, 210 mm, 240mm. </li>
              <li>Wölbung der Lamellen zeigt nach außen.</li>
              
             
            </ul>
            </div>
            )}
          </div>

          {/* przyciski / strony kolorów */}
        </div>
      </div>
    </div>
  );

  function toggleInsulation(withInsulation) {
      setMitDaemmung(withInsulation)
  }
}

export default rollovisualisation;
