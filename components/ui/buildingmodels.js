import { proxy, useSnapshot } from "valtio";
import { useRef, useState, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { getAllColours } from "../data/colours";

const state = proxy({
  current: null,
  items: {
    aluminium: "#e7e7e9",
    brush: "#111111",
    green: "#00ff00",
    gasket: "#222222",
    mauer: "#888888",
    brushbase: "#111111",
    connector: "#8A9FA4",
    kante: "#CCCCCC",
    blockgasket: "#777777",
    insulation: "#EDE9B9",
    hardware: "#e7e7e9",
    glas: "#E3F6FA",
    red: "#ff0000",
    pvc: "#FFFFFF",
    greypvc: "#666666",
    gasketgrey: "#cccccc",
    block: "#F77474",
    kantet: "#D8D6D6",
    steel: "#B0E8F2",
  },
});

const farben = getAllColours();

const rotateRate = 0;

export function Wall({ ...props }) {
  const group = useRef()
  const snap = useSnapshot(state);
  const texPlaster = useTexture("/colors/plaster.png");
  const texStyrofoamNormal = useTexture("/colors/styrofoam_normal.jpg");
 


  //material-map={rubberMap}
  //material-normalMap={rubberNormalMap}
  //material-roughnessMap={rubberRoughnessMap}

  const { nodes, materials } = useGLTF('/wall.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[15.69, -15.58, 16.95]}>
        <mesh geometry={nodes['il_altbau-mauer'].geometry} material={materials.mauer} />
        <mesh geometry={nodes['il_altbau-outside'].geometry} material={materials.outside} />
      </group>
      <mesh geometry={nodes.alt_spiel.geometry} material={nodes.alt_spiel.material} position={[15.7, 41.59, 5.22]} />
      <mesh geometry={nodes.neu_spiel_R.geometry} material={nodes.neu_spiel_R.material} position={[15.7, 41.59, -9.35]} />
      <mesh geometry={nodes.bandmass_dg.geometry} material={nodes.bandmass_dg.material} position={[15.69, 17.1, -28.41]} />
      <mesh geometry={nodes.bandmass_al.geometry} material={nodes.bandmass_al.material} position={[15.69, 17.1, -11.35]} />
      <mesh geometry={nodes.bandmass_il.geometry} material={nodes.bandmass_il.material} position={[15.69, -15.58, 13.51]} />
      <mesh geometry={nodes.dg_neubau.geometry} material={nodes.dg_neubau.material} position={[15.63, 0, -24.55]} 
      material-color={snap.items.pvc}
      material-normalMap={texStyrofoamNormal} 
     />
      <mesh geometry={nodes.il_neubau.geometry} material={materials.Concrete} position={[15.69, -15.58, 16.95]} />
      <mesh geometry={nodes.putz.geometry} material={nodes.putz.material} position={[15.69, -15.58, 16.95]} />
      <mesh geometry={nodes.al_small.geometry} material={nodes.al_small.material} position={[15.63, 0, -10.54]} />
      <mesh geometry={nodes.al_big.geometry} material={nodes.al_big.material} position={[15.63, 0, -10.54]} />
    </group>
  )
}



export function Wall3({ ...props }) {
  const group = useRef()
  const snap = useSnapshot(state);
  const textureWall = useTexture("/colors/plaster.png");

  function basewall() {
    return (
      <group position={[0, 0, 11]}>
        <mesh geometry={nodes['IL_altbau_bruestung21-plaster'].geometry} material={nodes['IL_altbau_bruestung21-plaster'].material} material-map={textureWall}/>
        <mesh geometry={nodes['IL_altbau_bruestung21-wall'].geometry} material={materials.wall} material-color={snap.items.green}/>
        <mesh geometry={nodes['IL_altbau_bruestung21-outside'].geometry} material={materials.outside} material-map={textureWall}/>
        <mesh geometry={nodes['IL_altbau_bruestung21-inside'].geometry} material={materials.inside} material-color={snap.items.pvc} />
      </group>
    );
  }

  function window1() {
    return (
    <group position={[-58.52, -27, 4.99]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh geometry={nodes.FBA.geometry} material={nodes.FBA.material} position={[0.01, 1.84, 0.01]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes.pvc.geometry} material={nodes.pvc.material} position={[58.5, -1.24, -43.56]} rotation={[-Math.PI / 2, 0, 0]} material-color={snap.items.pvc}/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[57.67, -5.67, -8.7]} rotation={[-Math.PI / 2, 0, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[9.96, -0.86, 40.9]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}
      material-side={THREE.DoubleSide}/>
      
    </group>
    );
  }

  function window2() {
    return (
      <group position={[-58.52, -27, 0.99]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh geometry={nodes.FBA_1.geometry} material={nodes.FBA_1.material} position={[0.02, 1.83, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}  material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes.pvc_1.geometry} material={nodes.pvc_1.material} position={[58.52, -1.24, -33.21]} rotation={[-Math.PI / 2, 0, 0]} material-color={snap.items.pvc}/>
      <mesh geometry={nodes.alu_1.geometry} material={nodes.alu_1.material} position={[57.69, -5.67, -0.04]} rotation={[-Math.PI / 2, 0, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.glas_1.geometry} material={nodes.glas_1.material} position={[9.97, -0.87, 40.89]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}
      material-side={THREE.DoubleSide}/>
    
    </group>
    );
  }

  function rollo() {
    return (
      <group position={[58.53, 111, -1]}>
          <mesh geometry={nodes.Endstab_gasket.geometry} material={nodes.Endstab_gasket.material} position={[-34.45, -58.18, 9.61]} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes.Endstab.geometry} material={nodes.Endstab.material} position={[-34.45, -58.18, 9.61]} material-color={snap.items.aluminium} material-roughness={0.4}/>
          <mesh geometry={nodes.rfR.geometry} material={nodes.rfR.material} position={[-117, -21.01, 11.51]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} material-color={snap.items.pvc}/>
          <mesh geometry={nodes.rfL.geometry} material={nodes.rfL.material} position={[-6, -21.01, 9.51]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} material-color={snap.items.pvc}/>
          <mesh geometry={nodes.boczekL.geometry} material={nodes.boczekL.material} position={[0, -21.01, 0]} rotation={[0, 1.57, 0]} material-color={snap.items.pvc}/>
          <mesh geometry={nodes.kasten.geometry} material={nodes.kasten.material} position={[-116, -21.51, 11.51]} material-color={snap.items.pvc}/>
          <mesh geometry={nodes.boczekR.geometry} material={nodes.boczekR.material} position={[-117, -21.01, 11.51]} rotation={[0, 1.57, 0]} material-color={snap.items.pvc}/>
          <mesh geometry={nodes.lamelle7.geometry} material={nodes.lamelle7.material} position={[-19.42, -50.57, 9.89]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes.lamelle6.geometry} material={nodes.lamelle6.material} position={[-19.42, -46.57, 9.89]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes.lamelle5.geometry} material={nodes.lamelle5.material} position={[-19.42, -38.59, 9.89]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes.lamelle4.geometry} material={nodes.lamelle4.material} position={[-19.42, -42.59, 9.89]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes.lamelle3.geometry} material={nodes.lamelle3.material} position={[-19.42, -34.61, 9.89]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes.lamelle2.geometry} material={nodes.lamelle2.material} position={[-19.42, -30.61, 9.89]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes.lamelle1.geometry} material={nodes.lamelle1.material} position={[-19.42, -26.56, 9.89]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes.lamelle.geometry} material={nodes.lamelle.material} position={[-19.42, -22.58, 9.89]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
          
        </group>
    );
  }
  
  function wall1() {
    return (
      <mesh geometry={nodes.al_bez_male_niskie.geometry} material={nodes.al_bez_male_niskie.material} position={[0, 0, 17]} material-map={textureWall}/>
    );
  }

  function wall2() {
    return (
      <mesh geometry={nodes.al_rol_duze_niskie1.geometry} material={nodes.al_rol_duze_niskie1.material} position={[0, 0, 17]} material-map={textureWall}/>
    );
  }


  const { nodes, materials } = useGLTF('/wall.glb')

  return [
    basewall(),
    window2(),
    rollo(),
    wall1()
    
   
  ]

}




export function Band({ ...props }) {
  const group = useRef()
  const textureWall = useTexture("/bandmass.png");
  const { nodes, materials } = useGLTF('/band.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Mat.3']} position={[0, -40.53, -29.51]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

export function Wall1({ ...props }) {

  
  const group = useRef()
  const snap = useSnapshot(state);
  const textureWall = useTexture("/colors/plaster.png");

  function basewall() {
    return (
      <group ref={group} {...props} dispose={null}>
         <mesh geometry={nodes['IL_altbau_bruestung21-inside'].geometry} material={materials.inside}  material-color={snap.items.pvc}/>
      <mesh geometry={nodes['IL_altbau_bruestung21-plaster'].geometry} material={nodes['IL_altbau_bruestung21-plaster'].material} material-map={textureWall} />
      <mesh geometry={nodes['IL_altbau_bruestung21-wall'].geometry} material={materials.wall}  material-color={snap.items.green}/>
      <mesh geometry={nodes['IL_altbau_bruestung21-outside'].geometry} material={materials.outside} material-map={textureWall}/>
     
    </group>
    );
  }

  function wall1() {
    return (
      <mesh geometry={nodes.al_bez_male_niskie.geometry} material={nodes.al_bez_male_niskie.material} position={[0, 0, 17]} material-map={textureWall}/>
    );
  }

  function wall2() {
    return (
      <mesh geometry={nodes.al_rol_duze_niskie1.geometry} material={nodes.al_rol_duze_niskie1.material} position={[0, 0, 17]} material-map={textureWall}/>
    );
  }


  
  const { nodes, materials } = useGLTF('/wall.glb')
  return [
    basewall(),
    wall2(),
   
  ]
    
     
  
}

export function LivingNt({ ...props }) {
  const group = useRef()
  const snap = useSnapshot(state);

  var nrKolorkuZew = 0;
  for (const kolorek of farben) {
    if (kolorek.name == props.colorOutside) {
      nrKolorkuZew = farben.indexOf(kolorek);
    }
  }
  var nrKolorkuWew = 0;
  for (const kolorek of farben) {
    if (kolorek.name == props.colorInside) {
      nrKolorkuWew = farben.indexOf(kolorek);
    }
  }
  
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);

  useFrame((state) => {
    group.current.rotation.y += rotateRate;
  });
  const { nodes, materials } = useGLTF('/living_nt.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[5.86, -6.53, 0]} rotation={[-Math.PI / 2, -0.25, -Math.PI / 2]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} material-map={textureInside}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} material-map={textureOutside}/>
      </group>
      <mesh geometry={nodes.brush_base.geometry} material={nodes.brush_base.material} position={[-5.52, -11.13, 0]}  material-color={snap.items.brushbase}/>
      <mesh geometry={nodes.brush.geometry} material={materials.brush} position={[-5.53, -11.45, 0]} material-color={snap.items.brush}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[5.85, -6.48, 0]} material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
      }/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-6.65, -12.02, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
   
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[6.52, -7.62, 0]}  material-color={snap.items.steel}/>
      <mesh geometry={nodes.plastic.geometry} material={nodes.plastic.material} position={[5.94, -3.16, 0]}  material-color={snap.items.red}/>
      <mesh geometry={nodes.kantet.geometry} material={nodes.kantet.material} position={[5.61, -2.06, 0]}  material-color={snap.items.kantet}/>
      <mesh geometry={nodes.kanteb.geometry} material={nodes.kanteb.material} position={[5.6, -2.4, 0]}  material-color={snap.items.gasket}/>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[6.65, -9.48, 0]}  material-color={snap.items.hardware}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[5.6, 1.02, 0]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}
      material-side={THREE.DoubleSide}/>
    </group>
  )
}

