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
    gasket: "#222222",
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
  const textureInside = useTexture(farben[nrKolorkuWew].texture);
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
      <mesh geometry={nodes.brush.geometry} material={materials.brush} position={[-5.53, -11.45, 0]} material-color={snap.items.brush}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[5.85, -6.48, 0]} material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
      }/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-6.65, -12.02, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.brush_base.geometry} material={nodes.brush_base.material} position={[-5.52, -11.13, 0]}  material-color={snap.items.gasket}/>
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

export function LivingHt({ ...props }) {
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
  const textureInside = useTexture(farben[nrKolorkuWew].texture);
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);

  useFrame((state) => {
    group.current.rotation.y += rotateRate;
  });
  const { nodes, materials } = useGLTF('/living_ht.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[5.85, -6.21, 0]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} material-map={textureOutside}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} material-map={textureInside}/>
      </group>
      <mesh geometry={nodes.brush.geometry} material={materials.brush} position={[-5.53, -12.47, 0]} material-color={snap.items.brush}/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-6.65, -13.03, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[5.85, -6.2, 0]} 
      material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }/>
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[6.52, -7.27, 0]} material-color={snap.items.steel}/>
      <mesh geometry={nodes.kantet.geometry} material={nodes.kantet.material} position={[5.61, -1.04, 0]} material-color={snap.items.kantet}/>
      <mesh geometry={nodes.kanteb.geometry} material={nodes.kanteb.material} position={[5.6, -1.38, 0]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[6.65, -9.95, 0]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.brush_base.geometry} material={nodes.brush_base.material} position={[-5.52, -12.14, 0]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.plastic.geometry} material={nodes.plastic.material} position={[5.94, -2.14, 0]} material-color={snap.items.red}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[5.6, 2.03, 0]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}
      material-side={THREE.DoubleSide}
      />
    </group>
  )
}

export function Ct70Nt({ ...props }) {
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
  const textureInside = useTexture(farben[nrKolorkuWew].texture);
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);

  useFrame((state) => {
    group.current.rotation.y += rotateRate;
  });

  //console.log("model: " + props.blackGasket)
  const { nodes, materials } = useGLTF('/ct70_nt.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[5.56, -6.53, -0.01]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} material-map={textureOutside}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} material-map={textureInside}/>
      </group>
      <mesh geometry={nodes.brush.geometry} material={materials.brush} position={[-4.59, -11.23, -0.01]} material-color={snap.items.brush}/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-6.04, -11.88, -0.01]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[5.76, -6.47, 0.01]} material-color={
          props.blackGasket === false ? snap.items.gasket : snap.items.gasketgrey
        }/>
      <mesh
        geometry={nodes.brush_base.geometry}
        material={nodes.brush_base.material}
        position={[-4.57, -10.9, -0.01]}
        material-color={snap.items.gasket}
      />
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[6.04, -7.66, -0.01]} material-color={snap.items.steel}/>
      <mesh geometry={nodes.plastic.geometry} material={nodes.plastic.material} position={[5.76, -3.63, -0.01]} material-color={snap.items.red}/>
      <mesh geometry={nodes.kantet.geometry} material={nodes.kantet.material} position={[5.42, -2.36, -0.01]} material-color={snap.items.kantet}/>
      <mesh geometry={nodes.kanteb.geometry} material={nodes.kanteb.material} position={[5.41, -2.82, -0.01]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.hardware1.geometry} material={nodes.hardware1.material} position={[5.95, -9.22, -0.01]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[5.42, 0.88, -0.01]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}
      material-side={THREE.DoubleSide}
      />
    </group>
  )
}

export function Ct70Ht({ ...props }) {
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
  const textureInside = useTexture(farben[nrKolorkuWew].texture);
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);

  useFrame((state) => {
    group.current.rotation.y += rotateRate;
  });
  const { nodes, materials } = useGLTF('/ct70_ht.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[3.83, -6.52, -0.01]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} material-map={textureInside}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} material-map={textureOutside}/>
      </group>
      <mesh geometry={nodes.brush.geometry} material={materials.brush} position={[7.77, -12.06, 0]} material-color={snap.items.brush}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[4.04, -6.46, 0.01]} 
      material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-7.77, -12.72, -0.01]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[3.68, 1.72, -0.01]} 
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}
        material-side={THREE.DoubleSide}/>
      <mesh
        geometry={nodes.brush_base.geometry}
        material={materials['Rubber - Black']}
        position={[-6.3, -11.74, -0.01]    
        }
        material-color={snap.items.gasket}
      />
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[4.37, -7.62, -0.01]} material-color={snap.items.steel}/>
      <mesh geometry={nodes.plastic.geometry} material={nodes.plastic.material} position={[4.02, -2.76, -0.01]} material-color={snap.items.red}/>
      <mesh geometry={nodes.kantet.geometry} material={nodes.kantet.material} position={[3.69, -1.47, -0.01]} material-color={snap.items.kantet}/>
      <mesh geometry={nodes.kanteb.geometry} material={nodes.kanteb.material} position={[3.67, -1.96, -0.01]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[4.23, -10.06, -0.01]} material-color={snap.items.hardware}/>
    </group>
  )
}



export function HsLs({ ...props }) {
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
  const textureInside = useTexture(farben[nrKolorkuWew].texture);
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);
  useFrame((state) => {
    group.current.rotation.y += rotateRate;
  });
  const { nodes, materials } = useGLTF('/hs_ls.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-2.62, 2.44, 0]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} material-map={textureInside}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} material-map={textureOutside}/>
      </group>
      <mesh geometry={nodes.kante_t.geometry} material={nodes.kante_t.material} position={[-2.63, -1.37, 0]} material-color={snap.items.kantet}/>
      <mesh geometry={nodes.kante_b.geometry} material={nodes.kante_b.material} position={[-2.62, -1.37, 0]}  material-color={snap.items.gasket}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[-2.63, -1.37, 0]} 
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}/>
      <mesh geometry={nodes.connector.geometry} material={nodes.connector.material} position={[-2.64, 16.08, 0]} material-color={snap.items.connector}/>
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[-2.33, 2.75, 0]}  material-color={snap.items.steel}/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-2.67, -2.6, 0]}  material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.grey_pvc.geometry} material={materials.grey_pvc} position={[2.95, -16.08, 0]} material-color={snap.items.greypvc}/>
      <mesh geometry={nodes.insulation.geometry} material={nodes.insulation.material} position={[-2.64, 16.08, 0]} material-color={snap.items.blockgasket}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[-2.95, -2.15, 0]} 
      material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }/>
    </group>
  )
}