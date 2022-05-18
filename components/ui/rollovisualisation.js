import { Suspense, useRef, useState, useEffect } from "react";
import PvcColourStrip from "./pvccolourstrip";
import {
  Ael,
  Sk,
  Sko,
  Skp,
  Sp,
  Raf
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
  const [rolloMode, setRolloMode] = useState("verb");
  const [mitDaemmung, setMitDaemmung] = useState(false)

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

            {props.product == "sk" && (
                <Sk rotation-y={Math.PI * 2.33} mode={rolloMode} />
              )}  

            {props.product == "sko" && (
                <Sko rotation-y={Math.PI * 2.33} mode={rolloMode} />
              )}  

            {props.product == "skp" && (
                <Skp rotation-y={Math.PI * 2.33} mode={rolloMode} />
              )}  
            
            {props.product == "sp" && (
                <Sp rotation-y={Math.PI * 2.33} mode={rolloMode} />
              )}  

            {props.product == "raf" && (
                <Raf rotation-y={Math.PI * 2.33} mode={rolloMode} />
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
      <div className=" fl w-100 w-50-l b--moon-gray ph3">
        {/* profile i kolory */}
        <div className="flex flex-wrap justify-center">
          {/* nazwa profilu */}
          <div className="w-90 tc">
            <h4 id="nazwaProfilu" className="ba b--moon-gray pa2">
              {props.productName}
            </h4>
          </div>

          {/* AEL */}
          {props.product === "ael" && (
          <div className="w-90 tc mt4">
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
           
            <div className="f5 tl mt4">
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
              <li><b>Wölbung</b> der Lamellen zeigt <b>nach außen</b>.</li>
                      
            </ul>
            </div>
          </div>
          )}
           {/* KONIEC AEL */}

           {/* SP */}
          {props.product === "sp" && (
          <div className="w-90 tc mt4">
            <button
              className={
                rolloMode === "wand"
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => changeRolloMode("wand")}
            >
              Montage an der Wand mit Dämmung
            </button>

            <button
              className={
                rolloMode === "verb"
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => changeRolloMode("verb")}
            >
              Montage mit Verbreiterung
            </button>
           
            <div className="f5 tl mt4">

            {rolloMode === "verb" && (
              <div>
                <p >Oben am Fensterblendrahmen wird eine Rahmenverbreiterung verwendet. Das Fenster wird um soviel kleiner. An der Verbreiterung wird der Kasten befestigt. Man vermeidet dadurch den von innen sichtbaren Rollladenkasten. Von Außen wird an den Kasten Dämmung angebracht.</p>
              </div>
            )}
            
            {rolloMode === "wand" && (
              <div>
                <p >Das Fenster wird mit der Außenwand bündig montiert. Der Kasten wird an der Wand befestigt, die Führungsschienen an dem Fensterblendrahmen. Man erreicht dadurch mehr Fensterfläche. Der Kasten wird dann in der Dämmung "versteckt". Entsprechende Dämmungsschicht wird benötigt.</p>
              </div>
            )}
            <ul>
            <li><b>Verputzbarer Kasten.</b></li>
            <li><b>Wartungsklappe von außen unten.</b></li>
              <li>Ausgeschäumte Aluminium Lamellen</li>
              <li>Gurtantrieb, oder Motorenantrieb, zur Wahl.</li>
              <li>Möglichkeit der Verwendung von Insektengitter.</li>
              <li>
                Verschiedene Farben der Kästen, Führunsschienen und Lamellen.
              </li>
              <li>39 mm Lamellen im Standard.</li>
              
             
              <li>
                Kastenhöhen: 138 mm, 166 mm, 181 mm, 207 mm.{" "}
              </li>
            

              <li><b>Wölbung</b> der Lamellen zeigt <b>nach innen</b>.</li>
                      
            </ul>
            </div>
          </div>
          )}
           {/* KONIEC SP */}

            {/* RAF */}
          {props.product === "raf" && (
          <div className="w-90 tc mt4">
            <button
              className={
                rolloMode === "wand"
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => changeRolloMode("wand")}
            >
              Wandmontage ohne Dämmung, C80
            </button>

            <button
              className={
                rolloMode === "wand_z"
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => changeRolloMode("wand_z")}
            >
              Wandmontage mit Dämmung, Z90
            </button>

            <button
              className={
                rolloMode === "verb"
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => changeRolloMode("verb")}
            >
              Montage mit Verbreiterung, C80
            </button>
           
            <div className="f5 tl mt4">

            {rolloMode === "verb" && (
              <div>
                <p >Oben am Fensterblendrahmen wird eine Rahmenverbreiterung verwendet. Das Fenster wird um soviel kleiner. An der Verbreiterung wird der Kasten befestigt. Von Außen wird an den Kasten Dämmung angebracht. Es ist eine sinnvolle <b>Alternative zu den Aufsatzraffstoren.</b></p>
              </div>
            )}
            
            {rolloMode === "wand" && (
              <div>
                <p >Das Fenster wird mit der Außenwand bündig montiert. Der Kasten wird an der Wand befestigt, die Führungsschienen an dem Fensterblendrahmen. Man erreicht dadurch mehr Fensterfläche. Blende bleibt außen sichtbatr in dieser Variante.</p>
              </div>
            )}
            {rolloMode === "wand_z" && (
              <div>
                <p >Das Fenster wird mit der Außenwand bündig montiert. Der Kasten wird an der Wand befestigt, Zusätzliche Dämmung ist möglich. Die Führungsschienen kommen an den Fensterblendrahmen. Man erreicht dadurch mehr Fensterfläche. Blende "versteckt" man dann in der Dämmungsschicht.</p>
              </div>
            )}
            <ul> 
					   <li>Moderner Schutz gegen Sonnenstrahlen.</li>
					   <li>Verschiedene Farben.</li>
					   <li><b>Stufenlose Regulierung des Tageslichtes im Raum.</b></li>
					   <li>Einfache Montage.</li>
					   <li>Motorsteuerung im Standard, Gruppensteuerungen möglich.</li>
					   <li>C80 oder Z90 Aluminiumlamellen. <b>Z90 für die volle Beschattung</b>.</li>
             <li>Verfügbare Höhen: 190 mm, 240 mm, 290 mm, 340 mm, 390 mm, 440 mm.</li>
             <li>Maximale Breite 4000 mm ohne Teilung.</li>
				  </ul>
            </div>
          </div>
          )}
           {/* KONIEC RAF */}


             {/* SK SKO SKP */}
          {(props.product === "sk" || props.product === "sko" || props.product === "skp") && (
          <div className="w-90 tc">
            <button
              className={
                rolloMode === "ohne"
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => changeRolloMode("ohne")}
            >
              Montage direkt am Fenster
            </button>

            <button
              className={
                rolloMode === "verb"
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => changeRolloMode("verb")}
            >
              Montage mit Verbreiterung
            </button>

            <button
              className={
                rolloMode === "wand_rahmen"
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => changeRolloMode("wand_rahmen")}
            >
              Montage mit Kasten an der Wand
            </button>

            <button
              className={
                rolloMode === "wand_wand"
                  ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                  : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
              }
              onMouseDown={() => changeRolloMode("wand_wand")}
            >
              Montage komplett an der Wand
            </button>
           
            <div className="f5 tl mt4">

            {rolloMode === "ohne" && (
              <div className="red">
                <p >Diese Montageart wird nicht empfohlen. Der Rollladenkasten ist von innen sichtbar. Um das zu vermeiden verwenden Sie bitte Verbreiterung oben am Fenster. (Taste "Montage am Fenster mit Verbreiterung")</p>
              </div>
            )}

            {rolloMode === "verb" && (
              <div>
                <p >Oben am Fensterblendrahmen wird eine Rahmenverbreiterung verwendet. Das Fenster wird um soviel kleiner. An der Verbreiterung wird der Kasten befestigt. Der Vorteil liegt in der Optik. Man vermeidet den von innen sichtbaren Rollladenkasten.</p>
              </div>
            )}

            {rolloMode === "wand_rahmen" && (
              <div>
                <p >Das Fenster selbst wird bündig mit der Außenwand montiert. Der Rollladenkasten kommt dann an die Wand und die Führungsschienen an den Fenster Blendrahmen. Vorteil: Mehr Fensterfläche. Nachteil: Kasten ragt von der Fassade aus. </p>
              </div>
            )}

            {rolloMode === "wand_wand" && (
              <div>
                <p>Rollladen Kasten und Führungsschienen werden an der Wand befestigt. Fenster kann dann in der Leibung nach innen rücken (zB. bei der Außenleibung im Altbau), muss nicht außen bündig montiert werden. Vorteile: Flexibel, Mehr Fensterfläche. Nachteil: Kasten ragt von der Fassade aus. </p>
              </div>
            )}  

            <ul>
            {props.product === "sk" && (<li><b>Eckiger Kasten</b></li>)}
            {props.product === "sko" && (<li><b>Halbrunder Kasten</b></li>)}
            {props.product === "skp" && (<li><b>Viertelrunder Kasten</b></li>)}
            <li><b>Wartungsklappe von außen.</b></li>
              <li>Ausgeschäumte Aluminium Lamellen</li>
              <li>Gurtantrieb, oder Motorenantrieb, zur Wahl.</li>
              <li>Möglichkeit der Verwendung von Insektengitter.</li>
              <li>
                Verschiedene Farben der Kästen, Führunsschienen und Lamellen.
              </li>
              <li>39 mm Lamellen im Standard.</li>
              
              {props.product === "sk" && (
              <li>
                Kastenhöhen: 127,5 mm, 138 mm, 151 mm, 168 mm, 183 mm, 208 mm.{" "}
              </li>
              )}

            {props.product === "sko" && (
              <li>
                Kastenhöhen: 142 mm, 170 mm, 185 mm, 212 mm{" "}
              </li>
              )}

            {props.product === "skp" && (
              <li>
                Kastenhöhen: 138 mm, 151 mm, 166 mm, 181 mm, 206 mm.{" "}
              </li>
              )}
              <li><b>Wölbung</b> der Lamellen zeigt <b>nach innen</b>.</li>
                      
            </ul>
            </div>
          </div>
          )}
           {/* KONIEC SK SKO SKP*/}

          {/* przyciski / strony kolorów */}
        </div>
      </div>
    </div>
  );

  function changeRolloMode(mode) {
      setRolloMode(mode)
  }

  function toggleInsulation(mode) {
    setMitDaemmung(mode)
}
}

export default rollovisualisation;
