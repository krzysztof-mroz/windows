import { Suspense, useRef, useState, useEffect } from "react";
import {LivingNt, Wall, Band} from "./buildingmodels";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {ContactShadows, Environment, useGLTF, OrbitControls, useTexture, Html, useProgress} from "@react-three/drei";
import { getAllColours } from "../data/colours";


function buildingvisualisation({...props}) {

   
    const [colorInside, setColorInside] = useState("weiss");
    const [colorOutside, setColorOutside] = useState("weiss");
    const [altbau, setAltbau] = useState(true)
    const [blackGasket, setBlackGasket] = useState(false);
    const [aluProfile, setAluProfile] = useState(false);

    const farben = getAllColours();

    function Loader() {
      const { progress } = useProgress()
      return <Html center>{progress} % loaded</Html>
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
                  camera={{ position: props.camera.split(','), fov: 50 }}
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
                    position={[20, 15, 1500]}
                    castShadow
                  />

                  <Suspense fallback={<Loader />}>
                    <Background />
                  </Suspense>

                  <Suspense fallback={<Loader />}>

                 

                    

                    {props.product == "wall" && (
                      <Wall
                        rotation-y={Math.PI * 0}
                        ifAltbau = {altbau}

                      />
                    )
                    }   

                  
                   

                    
                    <Environment preset="park" />
                    <ambientLight intensity={0.5} />
                  </Suspense>
                  <OrbitControls
                    minPolarAngle={Math.PI * 0.45}
                    maxPolarAngle={Math.PI * 0.55}
                    enableZoom={true}
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
                  Breite messen
                </h4>
              </div>

             

              {/* przyciski / strony kolorów */}     
              <button
                className={
                  altbau === true
                    ? "w3-button w3-border w3-border-red w3-deep-orange mv3 mh2"
                    : "w3-button w3-border w3-border-orange w3-sand mv3 mh2"
                }
                onMouseDown={() => changeAltbau(true)}
              >
                {" "}
                Altbau
              </button>

              <button
                className={
                  altbau === false
                    ? "w3-button w3-border w3-border-red w3-deep-orange mv3 mh2"
                    : "w3-button w3-border w3-border-orange w3-sand mv3 mh2"
                }
                onMouseDown={() => changeAltbau(false)}
              >
                {" "}
                Neubau
              </button>


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
        
          function checkGasket(hasBlackGasket) {
            if (bothSidesColor === true) {
              setBlackGasket(hasBlackGasket);
            } else {
              setBlackGasket(false);
            }
          }
        
          function changeAltbau(ifAltbau) {
            setAltbau(ifAltbau)
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

export default buildingvisualisation;