import { Suspense, useRef, useState, useEffect } from "react";
import PvcColourStrip from "./pvccolourstrip";
import {HsLs,  Ct70Ht, Ct70Nt, LivingHt, LivingNt} from "./productmodels";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {ContactShadows, Environment, useGLTF, OrbitControls, useTexture} from "@react-three/drei";
import { getAllColours } from "../data/colours";


function productvisualisation({...props}) {

   
    const [colorInside, setColorInside] = useState("weiss");
    const [colorOutside, setColorOutside] = useState("weiss");
    const [bothSidesColor, setBothSidesColor] = useState(true);
    const [blackGasket, setBlackGasket] = useState(false);
    const [aluProfile, setAluProfile] = useState(false);

    const farben = getAllColours();

    //console.log(blackGasket)

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
          <div className="db mb4 flex flex-wrap justify-center mv1 pb3 fl w-100 w-50-l ba b--moon-gray">     

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
                    intensity={farben[nrKolorkuWew].light_inside}
                    angle={0.1}
                    penumbra={1}
                    position={[20, 15, -600]}
                    castShadow
                  />
                  <spotLight
                    intensity={farben[nrKolorkuZew].light_outside}
                    angle={0.1}
                    penumbra={1}
                    position={[20, 15, 600]}
                    castShadow
                  />

                  <Suspense fallback={null}>
                    <Background />
                  </Suspense>

                  <Suspense fallback={null}>

                  {props.product == "livinght" && (
                      <LivingHt
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
                    )}

                     {props.product == "livingnt" && (
                      <LivingNt
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
                    )
                    }
                   
                  {props.product == "ct70nt" && (
                      <Ct70Nt
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
                    )}

                  {props.product == "ct70ht" && (
                      <Ct70Ht
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
                    )}

                  {props.product == "hsls" && (
                      <HsLs
                        rotation-y={Math.PI * 1.33}
                        colorInside={colorInside}
                        colorOutside={colorOutside}
                        blackGasket={blackGasket}
                      />
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
              
              {/* hint */}
              <p className=" ba b--moon-gray pa2 silver">
                bitte Farbe wählen
              </p>

            

              {/* nazwa profilu */}
              <div className="w-90 tc">
                <h4 id="nazwaProfilu" className="ba b--moon-gray pa2">
                  {props.productName}
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

              <PvcColourStrip onColorChange={changeColor} gasketChange={checkGasket} ifAlu={aluProfile} aktywnyKolor={colorOutside}/>

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

export default productvisualisation;