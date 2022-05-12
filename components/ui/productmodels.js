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
    anthracite: "#383e42"
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

export function K70Nt({ ...props }) {
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
  const { nodes, materials } = useGLTF('/k70_nt.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[4.84, -6.25, 0]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} material-map={textureInside}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} material-map={textureOutside}/>
      </group>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[4.28, 1.34, 0]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}/>
      <mesh geometry={nodes.kanteb.geometry} material={nodes.kanteb.material} position={[4.28, -1.71, 0]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.kantet.geometry} material={nodes.kantet.material} position={[4.29, -1.38, 0]} material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes.block.geometry} material={nodes.block.material} position={[4.98, -2.46, 0]} material-color={snap.items.red}/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-5.29, -12.34, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[4.95, -5.7, 0]} 
       material-color={
        props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
      }/>
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[5.11, -7.16, 0]} material-color={snap.items.steel}/>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[5.29, -8.98, 0]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.tit.geometry} material={materials['Rubber - Black']} position={[-4.29, -11.7, 0]} material-color={snap.items.gasket}/>
    </group>
  )
}


export function K76Ht({ ...props }) {
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
  const { nodes, materials } = useGLTF('/k76_ht.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[4.81, -5.86, 0]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} material-map={textureOutside}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} material-map={textureInside}/>
      </group>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[5.56, -9.38, 0]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.tits.geometry} material={materials['Rubber - Black']} position={[-5.56, -12.5, 0]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-5.26, -13.19, 0]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[5.13, 2.19, 0]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}/>
       <mesh geometry={nodes.kantet.geometry} material={nodes.kantet.material} position={[-0.59, -0.17, 0]} material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes.kanteb.geometry} material={nodes.kanteb.material} position={[5.13, -0.5, 0]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.block.geometry} material={nodes.block.material} position={[4.94, -1.3, 0]} material-color={snap.items.red}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[4.96, -5.27, 0]} 
      material-color={
        props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
      }/>
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[5.14, -6.69, 0]} material-color={snap.items.steel}/>
    </group>
  )
}

export function K76Nt({ ...props }) {
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
  const { nodes, materials } = useGLTF('/k76_nt.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-4.81, -6.71, 0]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material}  material-map={textureOutside}/>
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material}  material-map={textureInside}/>
      </group>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[-5.56, -9.5, 0]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[5.25, -12.36, 0]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[-4.95, -6.15, 0]} rotation={[-Math.PI, 0, -Math.PI]} 
      material-color={
        props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
      }/>
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[-5.38, -7.57, 0]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.steel}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[-5.15, 1.36, 0]} rotation={[-Math.PI, 0, -Math.PI]} 
      material-roughness={0.25}
      material-clearcoat={1}
      material-reflectivity={1}
      material-transparent
      material-opacity={0.92}
      material-transmission={0}/>
      <mesh geometry={nodes.kantet.geometry} material={nodes.kantet.material} position={[-5.15, -1.84, 0]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes.kanteb.geometry} material={nodes.kanteb.material} position={[-5.14, -2.17, 0]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.block.geometry} material={nodes.block.material} position={[-4.95, -2.96, 0]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.red}/>
      <mesh geometry={nodes.tits.geometry} material={materials['Rubber - Black']} position={[5.56, -11.69, 0]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.gasket}/>
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
      <group position={[9.74, 12.9, -19.05]}>
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
      <group position={[7.39, 56.47, -20.34]} rotation={[0, 1.57, 0]}>
        <mesh geometry={nodes.Endstab_gasket.geometry} material={materials.rubber} position={[-34.43, -20.98, 2.99]} rotation={[0, -1.57, 0]} material-color={snap.items.gasket}/>
        <mesh geometry={nodes.Endstab.geometry} material={materials.grey} position={[-34.44, -18.1, 2.99]} rotation={[0, -1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.lamellen.geometry} material={materials.grey} position={[-34.43, 0.46, 2.97]} rotation={[0, -1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.rf.geometry} material={nodes.rf.material} position={[-34.05, -42.4, 3.03]} rotation={[0, -1.57, 0]} material-color={snap.items.pvc}/>
        <mesh geometry={nodes.kasten.geometry} material={nodes.kasten.material} position={[-24.54, 26.28, 3.03]} rotation={[0, -1.57, 0]} material-color={snap.items.pvc}/>
      </group>
     
      <mesh geometry={nodes.wall.geometry} material={materials.Concrete} position={[-10.41, -17.38, -2.69]} rotation={[0, -1.57, 0]} material-map={texBeton}/>
    </group>
    );
  }

  function daemmung() {
    return (
      <group ref={group} {...props} dispose={null}>
    
     
      <mesh geometry={nodes.insulation.geometry} material={nodes.insulation.material} position={[-10.38, -17.38, 20.34]} rotation={[0, -1.57, 0]} material-normalMap={texStyrofoamNormal}/>
     
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

export function Sk({ ...props }) {
  const snap = useSnapshot(state);
  const texPlaster = useTexture("/colors/plaster.png");
  const texStyrofoamNormal = useTexture("/colors/styrofoam_normal.jpg");
  const texBeton = useTexture("/colors/beton.jpg");
  const group = useRef()
  const { nodes, materials } = useGLTF('/sk.glb')

  
  function wall() {
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.wall.geometry} material={materials.Concrete} position={[-28.5, -19.7, 6.36]} rotation={[0, -1.57, 0]} material-map={texBeton}/>
      </group>
      )    
    }

    function rollo1a() {
      return (
       <group ref={group} {...props} dispose={null}> 
        <group position={[28.5, 63.83, -32.13]}>
        <group position={[-36.11, -3.97, 43.56]}>
          <mesh geometry={nodes.v1lamellen_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['v1lamellen-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey}/>
        </group>
       
        <mesh geometry={nodes.v1alu.geometry} material={nodes.v1alu.material} position={[-36.21, -41.44, 48.79]} material-color={snap.items.pvc}/>
      </group>
      </group>
      )      
    }

    function rollo1b() {
      return (
       <group ref={group} {...props} dispose={null}> 
        <group position={[28.5, 63.83, -32.13]}>
        
        <group position={[-36.11, 13.39, 42.59]}>
          <mesh geometry={nodes.v1lamellen2_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['v1lamellen2-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey}/>
        </group>
        <mesh geometry={nodes.v1alu.geometry} material={nodes.v1alu.material} position={[-36.21, -41.44, 48.79]} material-color={snap.items.pvc}/>
      </group>
      </group>
      )      
    }


  function rollo2() {
    return (
     <group ref={group} {...props} dispose={null}> 
      <group position={[28.5, 63.83, -16.66]}>
        <group position={[-36.11, 12.32, 43.56]}>
          <mesh geometry={nodes.v2lamellen_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['v2lamellen-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey}/>
        </group>
        <mesh geometry={nodes.v2alu.geometry} material={nodes.v2alu.material} position={[-36.21, -33.3, 48.79]} material-color={snap.items.pvc}/>
      </group>  
    </group>
    )      
  }

  function rollo3() {
    return (
     <group ref={group} {...props} dispose={null}> 
     <group position={[28.5, 63.83, -16.66]}>
        <group position={[-36.1, 12.32, 43.56]}>
          <mesh geometry={nodes.v3lamellen_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['v3lamellen-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey}/>
        </group>
        <mesh geometry={nodes.v3alu.geometry} material={nodes.v3alu.material} position={[-36.21, -33.3, 48.79]} material-color={snap.items.pvc}/>
      </group>
    </group>
    )      
  }

  function verb() {
    return (
     <group ref={group} {...props} dispose={null}> 
       <group position={[7.51, 69.31, -28.43]}>
        <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[-15.35, 15.41, 32.22]} rotation={[Math.PI, -1.57, 0]}  material-color={snap.items.steel}/>
        <mesh geometry={nodes.verb_1.geometry} material={nodes.verb_1.material} position={[-15.35, 15.76, 33.43]} rotation={[Math.PI, -1.57, 0]} material-color={snap.items.pvc}/>
        <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[-15.31, 9.79, 33.06]} rotation={[Math.PI, -1.57, 0]}  material-color={snap.items.gasketgrey}/>
      </group>
    </group>
    )      
  }

  function window1() {
    return (
     <group ref={group} {...props} dispose={null}> 
       <group position={[28.5, 63.59, -31.96]}>
        <group position={[-36.36, -45.84, 35.94]}>
          <mesh geometry={nodes['w1profile-gasket'].geometry} material={nodes['w1profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w1profile-PVC'].geometry} material={nodes['w1profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w1FBA.geometry} material={nodes.w1FBA.material} position={[-36.35, -108.66, 36.2]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w1glas.geometry} material={nodes.w1glas.material} position={[-39.4, -44.7, 35.37]} rotation={[0, 1.57, 0]} 
         material-roughness={0.25}
         material-clearcoat={1}
         material-reflectivity={1}
         material-transparent
         material-opacity={0.92}
         material-transmission={0}/>
        <mesh geometry={nodes.w1beschlag.geometry} material={materials.F9} position={[-38, -47.85, 28.68]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
    </group>
    )      
  }

  function window2a() {
    return (
     <group ref={group} {...props} dispose={null}> 
       <group position={[28.5, 63.59, -31.96]}>
        <group position={[-36.36, -39.92, 35.94]}>
          <mesh geometry={nodes['w2profile-gasket'].geometry} material={nodes['w2profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w2profile-PVC'].geometry} material={nodes['w2profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w2FBA.geometry} material={nodes.w2FBA.material} position={[-36.35, -108.66, 36.2]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w2glas.geometry} material={nodes.w2glas.material} position={[-39.4, -38.78, 35.37]} rotation={[0, 1.57, 0]} 
          material-roughness={0.25}
          material-clearcoat={1}
          material-reflectivity={1}
          material-transparent
          material-opacity={0.92}
          material-transmission={0}/>
        <mesh geometry={nodes.w2beschlag.geometry} material={materials.F9} position={[-38, -41.93, 28.68]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
    </group>
    )      
  }

  function window2b() {
    return (
     <group ref={group} {...props} dispose={null}> 
       <group position={[28.5, 63.59, -31.96]}>
        <group position={[-36.36, -39.92, 35.94]}>
          <mesh geometry={nodes['w2profile-gasket'].geometry} material={nodes['w2profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w2profile-PVC'].geometry} material={nodes['w2profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w2FBA.geometry} material={nodes.w2FBA.material} position={[-36.35, -108.66, 36.2]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w2glas.geometry} material={nodes.w2glas.material} position={[-39.4, -38.78, 35.37]} rotation={[0, 1.57, 0]} 
         material-roughness={0.25}
         material-clearcoat={0}
         material-transmission={0.1}/>
        <mesh geometry={nodes.w2beschlag.geometry} material={materials.F9} position={[-38, -41.93, 28.68]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
    </group>
    )      
  }

  function window3() {
    return (
      <group ref={group} {...props} dispose={null}>     
      <group position={[28.5, 63.59, -16.48]}>
        <group position={[-36.36, -39.49, 35.94]}>
          <mesh geometry={nodes['w3profile-gasket'].geometry} material={nodes['w3profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w3profile-PVC'].geometry} material={nodes['w3profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w3FBA.geometry} material={nodes.w3FBA.material} position={[-36.35, -108.66, 36.2]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w3glas.geometry} material={nodes.w3glas.material} position={[-39.4, -38.35, 35.37]} rotation={[0, 1.57, 0]} 
         material-roughness={0.25}
         material-clearcoat={1}
         material-reflectivity={1}
         material-transparent
         material-opacity={0.92}
         material-transmission={0}/>
        <mesh geometry={nodes.w3beschlag.geometry} material={materials.F9} position={[-38, -41.5, 28.68]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>  
    </group>
    )    
  }
  
  
  function show() {

    let toReturn = [];

  if (props.mode === "ohne") {
    toReturn = [ wall(), rollo1b(), window2b()]
   } else if (props.mode === "verb") {
    toReturn = [  wall(), rollo1a(), window1(), verb() ]
   } else if (props.mode === "wand_rahmen") {
    toReturn = [wall(),  window3(), rollo2(),  ]
   } else if (props.mode === "wand_wand") {
    toReturn = [  window2a(),  wall(), rollo3(),]
   }

    return toReturn
   
  }

  return show()
}

export function Sko({ ...props }) {
  const group = useRef()
  const snap = useSnapshot(state);
  const texPlaster = useTexture("/colors/plaster.png");
  const texStyrofoamNormal = useTexture("/colors/styrofoam_normal.jpg");
  const texBeton = useTexture("/colors/beton.jpg");
  const { nodes, materials } = useGLTF('/sko.glb')
  
  function wall() {
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.wall.geometry} material={materials.Concrete} position={[-28.5, -18.03, 5.69]} rotation={[0, -1.57, 0]} material-map={texBeton}/>
      </group>
      )    
    }

    function rollo1a() {
      return (
       <group ref={group} {...props} dispose={null}> 
       <group position={[28.5, 65.5, -32.8]}>
        <group position={[-19.58, 22.04, 40.84]}>
          <mesh geometry={nodes.v1lamellen_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey} />
          <mesh geometry={nodes['v1lamellen-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey} />
        </group>
        <mesh geometry={nodes.v1sko_alu.geometry} material={nodes.v1sko_alu.material} position={[-19.63, -15.29, 47.3]} material-color={snap.items.pvc}/>
      </group>
      </group>
      )      
    }

    function rollo1b() {
      return (
       <group ref={group} {...props} dispose={null}> 
        <group position={[28.5, 65.5, -32.8]}>
        <group position={[-19.58, 37.73, 39.87]}>
          <mesh geometry={nodes.v1lamellen2_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey} />
          <mesh geometry={nodes['v1lamellen2-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey} />
        </group>
        <mesh geometry={nodes.v1sko_alu.geometry} material={nodes.v1sko_alu.material} position={[-19.63, -15.29, 47.3]} material-color={snap.items.pvc}/>
      </group>
      </group>
      )      
    }

    function rollo2() {
      return (
       <group ref={group} {...props} dispose={null}> 
         <group position={[28.5, 72.83, -16.66]}>
        <group position={[-19.58, 32.57, 42.9]}>
          <mesh geometry={nodes.v2lamellen_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['v2lamellen-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey}/>
        </group>
        <mesh geometry={nodes.v2sko_alu.geometry} material={nodes.v2sko_alu.material} position={[-19.72, -12.86, 49.45]} material-color={snap.items.pvc}/>
      </group>
      </group>
      )      
    }
  
    function rollo3() {
      return (
       <group ref={group} {...props} dispose={null}> 
       <group position={[28.5, 65.5, -17.32]}>
        <group position={[-19.56, 39.9, 43.56]}>
          <mesh geometry={nodes.v3lamellen_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['v3lamellen-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey}/>
        </group>
        <mesh geometry={nodes.v3sko_alu.geometry} material={nodes.v3sko_alu.material} position={[-19.72, -5.53, 50.12]} material-color={snap.items.pvc}/>
      </group>
      </group>
      )      
    }

    function verb() {
      return (
       <group ref={group} {...props} dispose={null}> 
          <group position={[7.51, 70.98, -31.81]}>
        <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[-15.35, 15.41, 32.22]} rotation={[Math.PI, -1.57, 0]} material-color={snap.items.steel}/>
        <mesh geometry={nodes.verb_1.geometry} material={nodes.verb_1.material} position={[-15.35, 15.76, 33.43]} rotation={[Math.PI, -1.57, 0]} material-color={snap.items.pvc}/>
        <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[-15.31, 9.79, 33.06]} rotation={[Math.PI, -1.57, 0]} material-color={snap.items.gasketgrey}/>
      </group>
      </group>
      )      
    }

    function window1() {
      return (
       <group ref={group} {...props} dispose={null}> 
         <group position={[28.5, 72.59, -31.96]}>
        <group position={[-36.36, -53.17, 32.56]}>
          <mesh geometry={nodes['w1profile-gasket'].geometry} material={nodes['w1profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w1profile-PVC'].geometry} material={nodes['w1profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w1FBA.geometry} material={nodes.w1FBA.material} position={[-36.35, -115.99, 32.82]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w1glas.geometry} material={nodes.w1glas.material} position={[-39.4, -52.03, 31.99]} rotation={[0, 1.57, 0]} 
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}/>
        <mesh geometry={nodes.w1beschlag.geometry} material={materials.F9} position={[-38, -55.18, 25.31]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
      </group>
      )      
    }

    function window2a() {
      return (
       <group ref={group} {...props} dispose={null}> 
          <group position={[28.5, 65.26, -32.62]}>
        <group position={[-36.36, -39.92, 33.23]}>
          <mesh geometry={nodes['w2profile-gasket'].geometry} material={nodes['w2profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w2profile-PVC'].geometry} material={nodes['w2profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w2FBA.geometry} material={nodes.w2FBA.material} position={[-36.35, -108.66, 33.49]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w2glas.geometry} material={nodes.w2glas.material} position={[-39.4, -38.78, 32.66]} rotation={[0, 1.57, 0]} 
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}/>
        <mesh geometry={nodes.w2beschlag.geometry} material={materials.F9} position={[-38, -41.93, 25.97]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
      </group>
      )      
    }

    function window2b() {
      return (
       <group ref={group} {...props} dispose={null}> 
          <group position={[28.5, 65.26, -32.62]}>
        <group position={[-36.36, -39.92, 33.23]}>
          <mesh geometry={nodes['w2profile-gasket'].geometry} material={nodes['w2profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w2profile-PVC'].geometry} material={nodes['w2profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w2FBA.geometry} material={nodes.w2FBA.material} position={[-36.35, -108.66, 33.49]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w2glas.geometry} material={nodes.w2glas.material} position={[-39.4, -38.78, 32.66]} rotation={[0, 1.57, 0]} 
         material-roughness={0.25}
         material-clearcoat={0}
         material-transmission={0.1}/>
        <mesh geometry={nodes.w2beschlag.geometry} material={materials.F9} position={[-38, -41.93, 25.97]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
      </group>
      )      
    }
  
  
  function window3() {
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[28.5, 65.26, -17.15]}>
        <group position={[-36.36, -39.49, 35.94]}>
          <mesh geometry={nodes['w3profile-gasket'].geometry} material={nodes['w3profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w3profile-PVC'].geometry} material={nodes['w3profile-PVC'].material}material-color={snap.items.pvc} />
        </group>
        <mesh geometry={nodes.w3FBA.geometry} material={nodes.w3FBA.material} position={[-36.35, -108.66, 36.2]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w3glas.geometry} material={nodes.w3glas.material} position={[-39.4, -38.35, 35.37]} rotation={[0, 1.57, 0]} 
         material-roughness={0.25}
         material-clearcoat={1}
         material-reflectivity={1}
         material-transparent
         material-opacity={0.92}
         material-transmission={0}/>
        <mesh geometry={nodes.w3beschlag.geometry} material={materials.F9} position={[-38, -41.5, 28.68]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>    
    </group>
  )
}

function show() {

  let toReturn = [];

if (props.mode === "ohne") {
  toReturn = [ wall(), rollo1b(), window2b()]
 } else if (props.mode === "verb") {
  toReturn = [  wall(), rollo1a(), window1(), verb() ]
 } else if (props.mode === "wand_rahmen") {
  toReturn = [wall(),  window3(), rollo2(),  ]
 } else if (props.mode === "wand_wand") {
  toReturn = [  window2a(),  wall(), rollo3(),]
 }

  return toReturn
 
}

return show()

}

export function Skp({ ...props }) {
  const group = useRef()
  const snap = useSnapshot(state);
  const texPlaster = useTexture("/colors/plaster.png");
  const texStyrofoamNormal = useTexture("/colors/styrofoam_normal.jpg");
  const texBeton = useTexture("/colors/beton.jpg");
  const { nodes, materials } = useGLTF('/skp.glb')
  
  function wall() {
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.wall.geometry} material={materials.Concrete} position={[-22.74, -8.7, -5.39]} rotation={[0, -1.57, 0]}   material-map={texBeton}/>
      </group>
      )    
    }

    function rollo1a() {
      return (
      <group ref={group} {...props} dispose={null}> 
      <group position={[16.08, 48.82, -20.48]}>
        <group position={[-19.58, 22.04, 20.41]}>
          <mesh geometry={nodes.v1lamellen_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['v1lamellen-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey}/>
        </group>
       
        <mesh geometry={nodes.v1skp_alu.geometry} material={nodes.v1skp_alu.material} position={[-18.19, -15.24, 25.6]} material-color={snap.items.pvc}/>
      </group>
      </group>
      )      
    }

    function rollo1b() {
      return (
       <group ref={group} {...props} dispose={null}> 
        <group position={[16.08, 48.82, -20.48]}>
        
        <group position={[-19.58, 39.48, 19.44]}>
          <mesh geometry={nodes.v1lamellen2_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['v1lamellen2-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey}/>
        </group>
        <mesh geometry={nodes.v1skp_alu.geometry} material={nodes.v1skp_alu.material} position={[-18.19, -15.24, 25.6]} material-color={snap.items.pvc}/>
      </group>
      </group>
      )      
    }

    function rollo2() {
      return (
       <group ref={group} {...props} dispose={null}> 
         <group position={[17.58, 56.15, -4.34]}>
        <group position={[-19.58, 32.57, 19.49]}>
          <mesh geometry={nodes.v2lamellen_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['v2lamellen-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey}/>
        </group>
        <mesh geometry={nodes.v2skp_alu.geometry} material={nodes.v2skp_alu.material} position={[-19.72, -13.78, 24.81]} material-color={snap.items.pvc}/>
      </group>
      </group>
      )      
    }
  
    function rollo3() {
      return (
       <group ref={group} {...props} dispose={null}> 
          <group position={[16.08, 48.82, -5]}>
        <group position={[-17.91, 39.9, 20.15]}>
          <mesh geometry={nodes.v3lamellen_1.geometry} material={materials['default']} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['v3lamellen-Mat'].geometry} material={materials.Mat} material-color={snap.items.gasketgrey}/>
        </group>
        <mesh geometry={nodes.v3skp_alu.geometry} material={nodes.v3skp_alu.material} position={[-18.06, -6.45, 25.48]} material-color={snap.items.pvc}/>
      </group>
      </group>
      )      
    }

    function verb() {
      return (
       <group ref={group} {...props} dispose={null}> 
        <group position={[-3.45, 54.3, -19.49]}>
        <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[1.18, 41.42, 11.79]} rotation={[Math.PI, -1.57, 0]} material-color={snap.items.steel}/>
        <mesh geometry={nodes.verb_1.geometry} material={nodes.verb_1.material} position={[1.18, 41.77, 13]} rotation={[Math.PI, -1.57, 0]} material-color={snap.items.pvc}/>
        <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[1.22, 35.8, 12.64]} rotation={[Math.PI, -1.57, 0]} material-color={snap.items.gasketgrey}/>
      </group>
      </group>
      )      
    }

    function window1() {
      return (
       <group ref={group} {...props} dispose={null}> 
        <group position={[17.54, 55.91, -19.64]}>
        <group position={[-19.82, -27.16, 12.14]}>
          <mesh geometry={nodes['w1profile-gasket'].geometry} material={nodes['w1profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w1profile-PVC'].geometry} material={nodes['w1profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w1FBA.geometry} material={nodes.w1FBA.material} position={[-19.82, -89.99, 12.4]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w1glas.geometry} material={nodes.w1glas.material} position={[-22.86, -26.02, 11.56]} rotation={[0, 1.57, 0]} 
         material-roughness={0.25}
         material-clearcoat={1}
         material-reflectivity={1}
         material-transparent
         material-opacity={0.92}
         material-transmission={0}/>
        <mesh geometry={nodes.w1beschlag.geometry} material={materials.F9} position={[-21.47, -29.17, 4.88]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
      </group>
      )      
    }

    function window2a() {
      return (
       <group ref={group} {...props} dispose={null}> 
         <group position={[17.54, 48.58, -20.3]}>
        <group position={[-19.82, -13.91, 12.8]}>
          <mesh geometry={nodes['w2profile-gasket'].geometry} material={nodes['w2profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w2profile-PVC'].geometry} material={nodes['w2profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w2FBA.geometry} material={nodes.w2FBA.material} position={[-19.82, -82.66, 13.06]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w2glas.geometry} material={nodes.w2glas.material} position={[-22.86, -12.77, 12.23]} rotation={[0, 1.57, 0]} 
         material-roughness={0.25}
         material-clearcoat={1}
         material-reflectivity={1}
         material-transparent
         material-opacity={0.92}
         material-transmission={0}/>
        <mesh geometry={nodes.w2beschlag.geometry} material={materials.F9} position={[-21.47, -15.92, 5.54]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
      </group>
      )      
    }

    function window2b() {
      return (
       <group ref={group} {...props} dispose={null}> 
          <group position={[17.54, 48.58, -20.3]}>
        <group position={[-19.82, -13.91, 12.8]}>
          <mesh geometry={nodes['w2profile-gasket'].geometry} material={nodes['w2profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w2profile-PVC'].geometry} material={nodes['w2profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w2FBA.geometry} material={nodes.w2FBA.material} position={[-19.82, -82.66, 13.06]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w2glas.geometry} material={nodes.w2glas.material} position={[-22.86, -12.77, 12.23]} rotation={[0, 1.57, 0]} 
          material-roughness={0.25}
          material-clearcoat={0}
          material-transmission={0.1}/>
        <mesh geometry={nodes.w2beschlag.geometry} material={materials.F9} position={[-21.47, -15.92, 5.54]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
      </group>
      )      
    }


  function window3() {
  return (
    <group ref={group} {...props} dispose={null}>  
       <group position={[16.08, 48.58, -4.82]}>
        <group position={[-18.17, -13.49, 12.63]}>
          <mesh geometry={nodes['w3profile-gasket'].geometry} material={nodes['w3profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w3profile-PVC'].geometry} material={nodes['w3profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w3FBA.geometry} material={nodes.w3FBA.material} position={[-18.16, -82.66, 12.89]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w3glas.geometry} material={nodes.w3glas.material} position={[-21.21, -12.34, 12.06]} rotation={[0, 1.57, 0]} 
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}/>
        <mesh geometry={nodes.w3beschlag.geometry} material={materials.F9} position={[-19.82, -15.5, 5.37]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
    </group>
  )
}
function show() {

  let toReturn = [];

if (props.mode === "ohne") {
 
  toReturn = [ wall(), rollo1b(), window2b()]
 } else if (props.mode === "verb") {
  toReturn = [  wall(), rollo1a(), window1(), verb() ]
 } else if (props.mode === "wand_rahmen") {
  toReturn = [wall(),  window3(), rollo2(),  ]
 } else if (props.mode === "wand_wand") {
  toReturn = [  window2a(),  wall(), rollo3(),]
 }

  return toReturn
 
}

return show()
}

export function Sp({ ...props }) {
  const group = useRef()
  const snap = useSnapshot(state);
  const texPlaster = useTexture("/colors/plaster.png");
  const texStyrofoamNormal = useTexture("/colors/styrofoam_normal.jpg");
  const texBeton = useTexture("/colors/beton.jpg");
  const { nodes, materials } = useGLTF('/sp.glb')


  function wall() {
    return (
      <group ref={group} {...props} dispose={null}>
       <mesh geometry={nodes.wall.geometry} material={materials.Concrete} position={[-20.38, -16.63, -3]} rotation={[0, -1.57, 0]}   material-map={texBeton}/>
      </group>
      )    
    }
    function rollo1() {
      return (
      <group ref={group} {...props} dispose={null}> 
       <group position={[20.67, 83.22, -16]}>
        <group position={[-20.54, -39.39, 41.8]}>
          <mesh geometry={nodes['v1alu-PVC'].geometry} material={nodes['v1alu-PVC'].material} material-color={snap.items.pvc}/>
          <mesh geometry={nodes['v1alu-Iron'].geometry} material={nodes['v1alu-Iron'].material} material-color={snap.items.aluminium} material-roughness={0.4}/>
        </group>
        <mesh geometry={nodes.v1lamellen.geometry} material={materials.Mat} position={[-20.44, -4.03, 33.75]} material-color={snap.items.gasketgrey}/>
      </group>
      </group>
      )      
    }

    function rollo2() {
      return (
      <group ref={group} {...props} dispose={null}> 
       <group position={[20.67, 65.12, -33.34]}>
        <group position={[-20.54, -39.39, 41.8]}>
          <mesh geometry={nodes['v2alu-PVC'].geometry} material={nodes['v2alu-PVC'].material} material-color={snap.items.pvc}/>
          <mesh geometry={nodes['v2alu-Iron'].geometry} material={nodes['v2alu-Iron'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.v2lamellen.geometry} material={materials.Mat} position={[-20.44, -4.03, 33.75]} material-color={snap.items.gasketgrey}/>
      </group>
      </group>
      )      
    }

    function verb() {
      return (
       <group ref={group} {...props} dispose={null}> 
          <group position={[-4.34, 25.39, -19.06]}>
        <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[4.51, 62.41, 11.79]} rotation={[Math.PI, -1.57, 0]} material-color={snap.items.steel}/>
        <mesh geometry={nodes.verb_1.geometry} material={nodes.verb_1.material} position={[4.51, 62.76, 13]} rotation={[Math.PI, -1.57, 0]} material-color={snap.items.pvc}/>
        <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[4.55, 56.78, 12.64]} rotation={[Math.PI, -1.57, 0]} material-color={snap.items.gasketgrey}/>
      </group>
      </group>
      )      
    }

    function window1() {
      return (
       <group ref={group} {...props} dispose={null}> 
        <group position={[16.65, 26.99, -19.2]}>
        <group position={[-16.49, -6.18, 12.14]}>
          <mesh geometry={nodes['w1profile-gasket'].geometry} material={nodes['w1profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w1profile-PVC'].geometry} material={nodes['w1profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w1FBA.geometry} material={nodes.w1FBA.material} position={[-16.49, -69, 12.4]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w1glas.geometry} material={nodes.w1glas.material} position={[-19.53, -5.03, 11.56]} rotation={[0, 1.57, 0]} 
        material-roughness={0.25}
         material-clearcoat={1}
         material-reflectivity={1}
         material-transparent
         material-opacity={0.92}
         material-transmission={0}/>
        <mesh geometry={nodes.w1beschlag.geometry} material={materials.F9} position={[-18.14, -8.19, 4.88]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
      </group>
      )      
    }

    function window2() {
      return (
       <group ref={group} {...props} dispose={null}> 
       <group position={[15.11, 19.66, -2.44]}>
        <group position={[-14.84, 7.5, 12.63]}>
          <mesh geometry={nodes['w2profile-gasket'].geometry} material={nodes['w2profile-gasket'].material} material-color={snap.items.gasketgrey}/>
          <mesh geometry={nodes['w2profile-PVC'].geometry} material={nodes['w2profile-PVC'].material} material-color={snap.items.pvc}/>
        </group>
        <mesh geometry={nodes.w2FBA.geometry} material={nodes.w2FBA.material} position={[-14.83, -61.67, 12.89]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.w2glas.geometry} material={nodes.w2glas.material} position={[-17.88, 8.64, 12.06]} rotation={[0, 1.57, 0]} 
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}/>
        <mesh geometry={nodes.w2beschlag.geometry} material={materials.F9} position={[-16.49, 5.49, 5.37]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
      </group>
      )      
    }

    function dg1() {
      return (
        <group ref={group} {...props} dispose={null}> 
          <mesh geometry={nodes.insulation1.geometry} material={nodes.insulation1.material} position={[0.28, 104.01, 33.34]} rotation={[-Math.PI, 0, -Math.PI]} material-normalMap={texStyrofoamNormal}/>
          <mesh geometry={nodes.dg1.geometry} material={nodes.dg1.material} position={[-20.39, -16.44, 26.08]} rotation={[0, -1.57, 0]} material-normalMap={texStyrofoamNormal}/>
       </group>

      )
    }

    function dg2() {
      return (
        <group ref={group} {...props} dispose={null}> 
          <mesh geometry={nodes.insulation2.geometry} material={nodes.insulation2.material} position={[0.19, 85.87, 16.16]} rotation={[-Math.PI, 0, -Math.PI]} material-normalMap={texStyrofoamNormal}/>
          <mesh geometry={nodes.dg2.geometry} material={nodes.dg2.material} position={[-20.67, -16.67, 21]} rotation={[0, -1.57, 0]} material-normalMap={texStyrofoamNormal}/>
       </group>

      )
    }

  function show() {

    let toReturn = [];
  
  if (props.mode === "verb") { 
    toReturn = [dg2(), window1(), wall(), rollo2(), verb()]
   } else if (props.mode === "wand") {
    toReturn = [rollo1(), dg1(), wall(),  window2()  ]
   } 
  
    return toReturn
   
  }
  
  return show()
}

export function Raf({ ...props }) {
  const group = useRef()
  const snap = useSnapshot(state);
  const texPlaster = useTexture("/colors/plaster.png");
  const texStyrofoamNormal = useTexture("/colors/styrofoam_normal.jpg");
  const texBeton = useTexture("/colors/beton.jpg");
  const { nodes, materials } = useGLTF('/raf.glb')
  
  function wall() {
    return (
      <group ref={group} {...props} dispose={null}>
         <mesh geometry={nodes.wall.geometry} material={materials.Concrete} position={[-23.96, -19.8, -5.98]} rotation={[0, -1.57, 0]}  material-map={texBeton}/>
      </group>
      )    
    }

    function c80() {
      return (
        <group ref={group} {...props} dispose={null}>
          <group position={[-13.47, -6.93, 25.38]}>
            <mesh geometry={nodes.c80halterung.geometry} material={nodes.c80halterung.material} position={[9.48, 110.89, -8.5]} material-color={snap.items.aluminium}/>
            <mesh geometry={nodes.c80gaskets.geometry} material={materials['Rubber - Black']} position={[9.49, 31.33, -6.06]} material-color={snap.items.gasket} />
            <mesh geometry={nodes.c80halter.geometry} material={materials.anthr} position={[9.48, 32.26, -10.06]} material-color={snap.items.anthracite}/>
            <mesh geometry={nodes.c80lines.geometry} material={materials.anthr} position={[9.44, 75.82, -6.17]} material-color={snap.items.anthracite}/>
            <mesh geometry={nodes.c80aretki.geometry} material={materials['Rubber - Black']} position={[9.54, 71.59, -6.11]} material-color={snap.items.gasket}/>       
            <mesh geometry={nodes.c80endleiste_cap.geometry} material={materials['Rubber - Black']} position={[9.42, 43.52, -6.17]} material-color={snap.items.gasket} />
            <mesh geometry={nodes.c80endlieiste.geometry} material={materials.silver} position={[9.43, 43.52, -6.17]} rotation={[0, 1.57, 0]} material-color={snap.items.anthracite} />
            <mesh geometry={nodes.c80rf.geometry} material={materials.anthr} position={[9.49, 31.33, -6.28]} material-color={snap.items.anthracite}/>
            <mesh geometry={nodes.c80box.geometry} material={materials.anthr} position={[9.48, 109.01, -6.08]} material-color={snap.items.anthracite}/>
            <mesh geometry={nodes.c80lamellen.geometry} material={materials.silver} position={[9.43, 71.85, -6.23]} material-color={snap.items.aluminium} material-roughness={0.4}/>
      </group>
        </group>
        )    
      }

      function z90() {
        return (
          <group ref={group} {...props} dispose={null}>
            <group position={[-13.47, -6.93, 25.38]}>
              <mesh geometry={nodes.z90box.geometry} material={nodes.z90box.material} position={[9.83, 109.07, -4.43]} material-color={snap.items.aluminium} material-roughness={0.4}/>
              <mesh geometry={nodes.z90halterung.geometry} material={nodes.z90halterung.material} position={[9.83, 110.93, -6.86]}  material-color={snap.items.aluminium}/>
              <mesh geometry={nodes.z90gasket.geometry} material={materials['Rubber - Black']} position={[9.84, 30.5, -4.42]} material-color={snap.items.gasket}/>
              <mesh geometry={nodes.z90aretka.geometry} material={materials['Rubber - Black']} position={[9.9, 72.4, -4.44]} material-color={snap.items.gasket}/>
              <mesh geometry={nodes.z90endleiste_cap.geometry} material={materials['Rubber - Black']} position={[9.77, 43.56, -4.46]} material-color={snap.items.gasket}/>
              <mesh geometry={nodes.z90endlieiste.geometry} material={materials.silver} position={[9.78, 43.56, -4.46]} rotation={[0, 1.57, 0]} material-color={snap.items.anthracite}/>
              <mesh geometry={nodes.z90lines.geometry} material={materials.anthr} position={[9.79, 75.86, -4.49]} material-color={snap.items.anthracite}/>
              <mesh geometry={nodes.z90halter.geometry} material={materials.anthr} position={[9.84, 30.87, -9.3]} material-color={snap.items.anthracite}/>
              <mesh geometry={nodes.z90rf.geometry} material={materials.anthr} position={[9.85, 30.5, -4.64]} material-color={snap.items.anthracite}/>
              <mesh geometry={nodes.lamellenZ.geometry} material={materials.silver} position={[9.76, 73.6, -4.42]} material-color={snap.items.aluminium} material-roughness={0.4}/>
            </group>
          </group>
          )    
        }

        function c802() {
          return (
            <group ref={group} {...props} dispose={null}>
             <group position={[24, 80.29, 53.42]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.c802box.geometry} material={nodes.c802box.material} position={[27.16, 1.07, 47.06]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.aluminium} material-roughness={0.4}/>
              <mesh geometry={nodes.c802lines.geometry} material={materials.anthr} position={[27.2, -32.06, 48.03]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.anthracite}/>
              <mesh geometry={nodes.c802halterung.geometry} material={nodes.c802halterung.material} position={[27.16, 3.01, 50.36]} rotation={[-Math.PI, 0, -Math.PI]}  material-color={snap.items.aluminium}/>
              <mesh geometry={nodes.c802aretki.geometry} material={materials['Rubber - Black']} position={[27.1, -36.29, 47.97]} rotation={[Math.PI, 0, -Math.PI]} material-color={snap.items.gasket}/>
              <mesh geometry={nodes.c802lamellen.geometry} material={materials.silver} position={[27.2, -36.02, 48.09]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.aluminium} material-roughness={0.4}/>
              <mesh geometry={nodes.c802endleiste_cap.geometry} material={materials['Rubber - Black']} position={[27.22, -64.36, 48.03]} rotation={[0, 1.57, 0]} />
              <mesh geometry={nodes.c802endlieiste.geometry} material={materials.silver} position={[27.21, -64.36, 48.03]} material-color={snap.items.aluminium} material-roughness={0.4}/>
              <mesh geometry={nodes.c802gaskets.geometry} material={materials['Rubber - Black']} position={[27.15, -66.57, 47.92]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.gasket}/>
              <mesh geometry={nodes.c802halter.geometry} material={materials.anthr} position={[27.15, -65.63, 51.92]} rotation={[-Math.PI, 0, -Math.PI]} material-color={snap.items.anthracite}/>
              <mesh geometry={nodes.c802rf.geometry} material={materials.anthr} position={[27.14, -66.57, 48.14]} rotation={[Math.PI, 0, -Math.PI]} material-color={snap.items.anthracite}/>
            </group>
            </group>
            )    
          }

          function window1() {
            return (
              <group ref={group} {...props} dispose={null}>
                <group position={[0.61, 63.48, -47.38]}>
                  <group position={[-4.35, -39.99, 54.65]}>
                  <mesh geometry={nodes['w1profile-anthr'].geometry} material={materials.anthr} material-color={snap.items.anthracite}/>
                    <mesh geometry={nodes['w1profile-gasket'].geometry} material={nodes['w1profile-gasket'].material} material-color={snap.items.gasket}/>
                  </group>
                  <mesh geometry={nodes.w1FBA.geometry} material={nodes.w1FBA.material} position={[-4.34, -108.66, 54.91]} rotation={[0, 1.57, 0]} material-color={snap.items.gasketgrey}/>
                  <mesh geometry={nodes.w1beschlag.geometry} material={materials.F9} position={[-5.99, -42, 47.39]} material-color={snap.items.aluminium} material-roughness={0.4}/>
                  <mesh geometry={nodes.w1glas.geometry} material={nodes.w1glas.material} position={[-7.39, -38.85, 54.08]} 
                   material-roughness={0.25}
                   material-clearcoat={1}
                   material-reflectivity={1}
                   material-transparent
                   material-opacity={0.92}
                   material-transmission={0}/>
                </group>
              </group>
              )    
            }

            function verb() {
              return (
                <group ref={group} {...props} dispose={null}>
                  <group position={[0.2, 107.61, -53.42]} rotation={[0, 0, -Math.PI]}>
                    <mesh geometry={nodes.sash_steel.geometry} material={nodes.sash_steel.material} position={[3.64, 24.87, 46.7]} rotation={[0, 0, -Math.PI]} material-color={snap.items.steel}/>
                    <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[3.64, 27.43, 47.54]} rotation={[0, 0, -Math.PI]} material-color={snap.items.gasket}/>
                    <mesh geometry={nodes.verb_1.geometry} material={materials.anthr} position={[3.64, 24.97, 47.9]} rotation={[0, 0, -Math.PI]} material-color={snap.items.anthracite}/>
                </group>
                </group>
                )    
              }

              function window2() {
                return (
                  <group ref={group} {...props} dispose={null}>
                     <group position={[-4.91, 63.05, -53.07]}>
                      <group position={[1.45, -48.07, 46.54]}>
                      <mesh geometry={nodes['w2profile-anthr'].geometry} material={materials.anthr}  material-color={snap.items.anthracite}/>
                        <mesh geometry={nodes['w2profile-gasket'].geometry} material={nodes['w2profile-gasket'].material} material-color={snap.items.gasket}/>
                      </group>
                      <mesh geometry={nodes.w2FBA.geometry} material={nodes.w2FBA.material} position={[1.45, -108.66, 46.8]} rotation={[Math.PI, 0, -Math.PI]} material-color={snap.items.gasketgrey}/>
                      <mesh geometry={nodes.w2beschlag.geometry} material={materials.F9} position={[-0.2, -50.08, 39.28]} material-color={snap.items.aluminium} material-roughness={0.4}/>
                      <mesh geometry={nodes.w2glas.geometry} material={nodes.w2glas.material} position={[-1.6, -46.93, 45.97]} rotation={[-Math.PI, 0, -Math.PI]} 
                       material-roughness={0.25}
                       material-clearcoat={1}
                       material-reflectivity={1}
                       material-transparent
                       material-opacity={0.92}
                       material-transmission={0}/>
                    </group>
                  </group>
                  )    
                }

                function dg1() {
                  return (
                    <group ref={group} {...props} dispose={null}>
                        <mesh geometry={nodes.dg1.geometry} material={nodes.dg1.material} position={[-24, -19.98, 21.21]} rotation={[0, -1.48, 0]}  material-normalMap={texStyrofoamNormal}/>
                        <mesh geometry={nodes.insulation1.geometry} material={nodes.insulation1.material} position={[-3.66, 102.31, 13.53]} rotation={[Math.PI, -0.09, Math.PI]}  material-normalMap={texStyrofoamNormal}/>
                    </group>
                    )    
                  }

              function dg2() {
              return (
                <group ref={group} {...props} dispose={null}>
                  <mesh geometry={nodes.dg2.geometry} material={nodes.dg2.material} position={[-23.93, -19.83, 17.17]} rotation={[0, -1.57, 0]} material-normalMap={texStyrofoamNormal} />
                </group>
              )
            }

  function show() {

    let toReturn = [];
  
  if (props.mode === "verb") { 
    toReturn = [window2(), dg2(), c802(), wall(), verb()]
   } else if (props.mode === "wand") {
    toReturn=[wall(), window1(), c80()]
   } else if (props.mode === "wand_z") {
    toReturn = [wall(), window1(),  dg1(), z90()]
    //toReturn = [ window1(),z90(), wall(),  dg1() ]
   } 
  
    return toReturn
   
  }
  return show()
}

