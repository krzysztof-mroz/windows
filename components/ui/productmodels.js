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
      <mesh geometry={nodes.brush_base.geometry} material={nodes.brush_base.material} position={[-5.52, -12.14, 0]} material-color={snap.items.brushbase}/>
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
      <mesh
        geometry={nodes.brush_base.geometry}
        material={nodes.brush_base.material}
        position={[-4.57, -10.9, -0.01]}
        material-color={snap.items.brushbase}
      />
      <mesh geometry={nodes.brush.geometry} material={materials.brush} position={[-4.59, -11.23, -0.01]} material-color={snap.items.brush}/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-6.04, -11.88, -0.01]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[5.76, -6.47, 0.01]} material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }/>
      
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
      <mesh
        geometry={nodes.brush_base.brushbase}
        material={materials['Rubber - Black']}
        position={[-6.3, -11.74, -0.01]    
        }
        material-color={snap.items.gasket}
      />
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
      <mesh geometry={nodes.grey_pvc.geometry} material={nodes.alu.material} position={[2.95, -16.08, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.insulation.geometry} material={nodes.insulation.material} position={[-2.64, 16.08, 0]} material-color={snap.items.blockgasket}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[-2.95, -2.15, 0]} 
      material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }/>
    </group>
  )
}

export function HsPd({ ...props }) {
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
  const { nodes, materials } = useGLTF('/hs_pd.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-2.73, -3.61, 10]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} material-map={textureInside}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} material-map={textureOutside}/>
      </group>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-2.71, -7.97, 10]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[-2.38, -6.48, 10]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[-3.16, -5.48, 10]} 
      material-color={
        props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
      }/>
      <mesh geometry={nodes.plastic.geometry} material={nodes.plastic.material} position={[-2.34, -6.49, 10]} material-color={snap.items.red}/>
      <mesh geometry={nodes.kante_t.geometry} material={nodes.kante_t.material} position={[-2.39, -6.48, 10]} material-color={snap.items.kantet}/>
      <mesh geometry={nodes.kante_b.geometry} material={nodes.kante_b.material} position={[-2.38, -6.48, 10]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[-2.77, -2.34, 10]} material-color={snap.items.steel}/>
      <mesh geometry={nodes.connector.geometry} material={nodes.connector.material} position={[3.16, 7.97, 10]} material-color={snap.items.connector}/>
      <mesh geometry={nodes.brush.geometry} material={nodes.brush.material} position={[-1.73, 5.46, -10]} material-color={snap.items.brush}/>
    </group>
  )
}

export function K88Ht({ ...props }) {
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
  const { nodes, materials } = useGLTF('/k88_ht.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[5.06, -6.4, 0]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} material-map={textureOutside}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} material-map={textureInside}/>
      </group>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[5.99, -9.92, 0]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.block.geometry} material={nodes.block.material} position={[5.35, -1.84, 0]} material-color={snap.items.red}/>
      <mesh geometry={nodes.kanteb.geometry} material={nodes.kanteb.material} position={[5.21, -1.05, 0]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.kantet.geometry} material={nodes.kantet.material} position={[5.21, -0.72, 0]} material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[5.21, 2.36, 0]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-5.99, -13.36, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.gasket_black.geometry} material={materials['Rubber - Black']} position={[-5.01, -13.01, 0]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[5.08, -5.82, 0]} 
      material-color={
        props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
      }/>
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[5.32, -7.23, 0]} material-color={snap.items.steel}/>
    </group>
  )
}

export function K88Nt({ ...props }) {
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
  const { nodes, materials } = useGLTF('/k88_nt.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[5.05, -6.75, 0]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} material-map={textureOutside}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} material-map={textureInside}/>
      </group>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[5.99, -9.52, 0]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[5.21, 1.21, 0]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}/>
      <mesh geometry={nodes.plastic.geometry} material={nodes.plastic.material} position={[5.35, -2.98, 0]} material-color={snap.items.red}/>
      <mesh geometry={nodes.kanteb.geometry} material={nodes.kanteb.material} position={[5.21, -2.19, 0]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.kantet.geometry} material={nodes.kantet.material} position={[5.21, -1.86, 0]} material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-5.99, -12.21, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.gasket_black.geometry} material={materials['Rubber - Black']} position={[-5.01, -11.86, 0]} material-color={snap.items.pgasket}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[5.07, -6.16, 0]} 
      material-color={
        props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
      }/>
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[5.57, -7.62, 0]} material-color={snap.items.steel}/>
    </group>
  )
}

export function Ael({ ...props }) {
  const group = useRef()
  const snap = useSnapshot(state);
  const texPlaster = useTexture("/colors/plaster.png");
  const texStyrofoamNormal = useTexture("/colors/styrofoam_normal.jpg");
  const texBeton = useTexture("/colors/beton.jpg");

  const { nodes, materials } = useGLTF('/ael.glb')

  function rollo() {
    return (
      <group ref={group} {...props} dispose={null}>
      <group position={[9.74, -8.9, -19.05]}>
        <group position={[0.6, 4.32, 25.56]} rotation={[0, -1.57, 0]}>
          <mesh geometry={nodes['profile-gasket'].geometry} material={nodes['profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['profile-PVC'].geometry} material={nodes['profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.FBA.geometry} material={nodes.FBA.material} position={[0.6, -53.85, 25.82]} rotation={[0, -1.57, 0]} material-color={snap.items.gasketgrey}/>
        
        <mesh geometry={nodes.beschlag.geometry} material={materials.F9} position={[-1.05, 2.31, 18.3]} rotation={[0, -1.57, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
        <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[-2.44, 5.47, 24.99]} rotation={[0, -1.57, 0]} 
         material-roughness={0.25}
         material-clearcoat={1}
         material-reflectivity={1}
         material-transparent
         material-opacity={0.92}
         material-transmission={0}
        />
      </group>
      <group position={[7.39, 36.47, -20.34]} rotation={[0, 1.57, 0]}>
        <mesh geometry={nodes.Endstab_gasket.geometry} material={materials.rubber} position={[-34.43, -20.98, 2.99]} rotation={[0, -1.57, 0]} material-color={snap.items.gasket}/>
        <mesh geometry={nodes.Endstab.geometry} material={materials.grey} position={[-34.44, -18.1, 2.99]} rotation={[0, -1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.lamellen.geometry} material={materials.grey} position={[-34.43, 0.46, 2.97]} rotation={[0, -1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.rf.geometry} material={nodes.rf.material} position={[-34.05, -42.4, 3.03]} rotation={[0, -1.57, 0]} material-color={snap.items.pvc}/>
        <mesh geometry={nodes.kasten.geometry} material={nodes.kasten.material} position={[-24.54, 26.28, 3.03]} rotation={[0, -1.57, 0]} material-color={snap.items.pvc}/>
      </group>
     
      <mesh geometry={nodes.wall.geometry} material={materials.Concrete} position={[-10.41, -37.38, -2.69]} rotation={[0, -1.57, 0]} material-map={texBeton}/>
    </group>
    );
  }

  function daemmung() {
    return (
      <group ref={group} {...props} dispose={null}>
    
     
      <mesh geometry={nodes.insulation.geometry} material={nodes.insulation.material} position={[-10.38, -37.38, 20.34]} rotation={[0, -1.57, 0]} material-normalMap={texStyrofoamNormal}/>
     
    </group>
    );
  }
 

  function show() {

    let toReturn = [];

  if (props.mitDaemmung === false) {
    toReturn = [ rollo()]
   } else {
    toReturn = [ rollo(), daemmung()]
   }

    return toReturn;
  }

  return show()
}