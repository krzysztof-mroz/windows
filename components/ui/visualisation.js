import { Suspense, useRef, useState, useEffect } from "react";
import ColourStrip from "./colourstrip";
import {Ct70Classic, Ct70Rondo, Living, K70, K76Ad, K76Md, K88, Pe68, Pe78N, Mb70, Mb86, Aws75, Aws90} from "./models";
import ProfileStrip from "./profilestrip";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {ContactShadows, Environment, useGLTF, OrbitControls, useTexture, Html, useProgress} from "@react-three/drei";
import { getAllColours } from "../data/colours";


function visualisation(props) {

    const [activeProfile, setActiveProfile] = useState(props.profil);
    const [colorInside, setColorInside] = useState("db-703-alu");
    const [colorOutside, setColorOutside] = useState("db-703-alu");
    const [bothSidesColor, setBothSidesColor] = useState(true);
    const [blackGasket, setBlackGasket] = useState(false);
    const [aluProfile, setAluProfile] = useState(true);
    
    const farben = getAllColours();

    useEffect(() => {
      if (props.showProfiles != "yes" ) {
        profileChangeHandler(props.profil)
      }
      
    });
  

    function Loader() {
      const { progress } = useProgress()
       return <Html center>{parseInt(progress)} % geladen</Html>
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

  
  
    return (

        
      <div className="flex flex-wrap justify-around mb3 w-100">

           {/* wizualizacja */}
          <div className="db mb4 flex flex-wrap justify-center mv1-l pb3 fl w-100 w-50-l  b--moon-gray">     

              {/* hint */}
              <p className="ba b--moon-gray pa2 silver">
                3d Visualisierung - bitte berühren
              </p>

              {/* canvas */}
              <div style={{ position: "relative", height: 478 }} className="w-90">



                <Canvas
                  shadows
                  dpr={[1, 2]}
                  camera={{ position: [16, 16, 16], fov: 50 }}
                >
                  <spotLight
                    intensity={farben[nrKolorkuWew].light_inside}
                    angle={0.1}
                    penumbra={1}
                    position={[20, 15, -300]}
                    castShadow
                  />
                  <spotLight
                    intensity={farben[nrKolorkuZew].light_outside}
                    angle={0.1}
                    penumbra={1}
                    position={[20, 15, 300]}
                    castShadow
                  />

                  <Suspense fallback={<Loader />}>
                    <Background />
                  </Suspense>

                  <Suspense fallback={<Loader />}>
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
                      <Pe68
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
                    ) : null}
                    {activeProfile == "Ponzio PE 78N" ? (
                      <Pe78N
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
                    ) : null}
                    {activeProfile == "Aluprof MB 70 HI" ? (
                      <Mb70
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
                    ) : null}
                    {activeProfile == "Aluprof MB 86 SI" ? (
                      <Mb86
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
                    ) : null}
                    {activeProfile == "Schüco AWS 75 SI" ? (
                      <Aws75
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
                    ) : null}
                    {activeProfile == "Schüco AWS 90 SI" ? (
                      <Aws90
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
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

          {/* parametry */}
          <div className=" fl w-100 w-50-l b--moon-gray ph3">

            {/* profile i kolory */}
            <div className="flex flex-wrap justify-center">
              
              {/* hint */}
              <p className=" ba b--moon-gray pa2 silver">
              {props.showProfiles === "yes" ? ' Profil- und Farbauswahl' : 'Farbauswahl'}
               
              </p>

              {props.showProfiles === "yes" && <ProfileStrip onProfileChange={profileChangeHandler} />}

              {/* nazwa profilu */}
              <div className="w-90 tc">
                <h4 id="nazwaProfilu" className="ba b--moon-gray pa2">
                  {props.profil}
                </h4>
              </div>

              {/* nazwa koloru */}
              <div className="w-90 tc">
                <p id="nazwaKoloru" className="ba b--moon-gray pa2 mb1">
                  weiß
                </p>
              </div>

              {/* przyciski / strony kolorów */}     
              <button
                className={
                  bothSidesColor === false
                    ? "w3-button w3-border w3-border-red w3-deep-orange mv3 mh2"
                    : "w3-button w3-border w3-border-orange w3-sand mv3 mh2"
                }
                onMouseDown={oneSideColor}
              >
                {" "}
                Farbe außen
              </button>

              <button
                className={
                  bothSidesColor === true
                    ? "w3-button w3-border w3-border-red w3-deep-orange mv3 mh2"
                    : "w3-button w3-border w3-border-orange w3-sand mv3 mh2"
                }
                onMouseDown={bothSides}
              >
                {" "}
                Farbe beidseitig
              </button>

              <ColourStrip onColorChange={changeColor} gasketChange={checkGasket} ifAlu={aluProfile} aktywnyKolor={colorOutside}/>

            </div>
          </div>
        </div>
        );

        function profileChangeHandler(newProfile) {
            setActiveProfile(newProfile);
            if (
              newProfile == "Ponzio PE 68N" ||
              newProfile == "Ponzio PE 78N" ||
              newProfile == "Aluprof MB 70 HI" ||
              newProfile == "Aluprof MB 86 SI" ||
              newProfile == "Schüco AWS 75 SI" ||
              newProfile == "Schüco AWS 90 SI"
            ) {
              if (aluProfile === false) {
                setAluProfile(true);
                setColorInside("weiss_9016");
                setColorOutside("weiss_9016");
              }
            } else {
              if (aluProfile === true) {
                setAluProfile(false);
                setColorInside("weiss");
                setColorOutside("weiss");
                setBlackGasket(false);
              }
            }
          }
        
          function checkGasket(hasBlacGasket) {
            if (bothSidesColor === true) {
              setBlackGasket(hasBlacGasket);
            } else {
              setBlackGasket(false);
            }
          }
        
          function oneSideColor() {
            setBothSidesColor(false);
            setColorInside("weiss");
            if (aluProfile == true) {
              setColorInside("weiss_9016");
            }
            setBlackGasket(false);
          }
        
          function bothSides() {
            setBothSidesColor(true);
            setColorInside(colorOutside);
            setBlackGasket(farben[nrKolorkuZew].blackGasket);
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
              if (aluProfile == true) {
                setColorInside("weiss_9016");
              }
            }
          }
}

export default visualisation;