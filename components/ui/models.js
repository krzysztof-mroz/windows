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

export function Ct70Classic({ ...props }) {
  const group = useRef();
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
  const { nodes, materials } = useGLTF("/ct70classic.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.81, -0.73, 0.92]}>
        <mesh
          geometry={nodes["profile-PVC"].geometry}
          material={nodes["profile-PVC"].material}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes["profile-ColorOutside"].geometry}
          material={nodes["profile-ColorOutside"].material}
          material-map={textureOutside}
        />
        <mesh
          geometry={nodes["profile-ColorInside"].geometry}
          material={nodes["profile-ColorInside"].material}
          material-map={textureInside}
        />
      </group>
      <mesh
        geometry={nodes.kanteT.geometry}
        material={nodes.kanteT.material}
        position={[-0.31, 0.42, -0.22]}
        material-color={snap.items.kantet}
      />
      <mesh
        geometry={nodes.hardware.geometry}
        material={nodes.hardware.material}
        position={[-0.5, -1.3, 1.5]}
        material-color={snap.items.hardware}
      />
      <mesh
        geometry={nodes.steel.geometry}
        material={nodes.steel.material}
        position={[0.11, -1.62, 1.82]}
        material-color={snap.items.steel}
      />
      <mesh
        geometry={nodes.gaskets.geometry}
        material={nodes.gaskets.material}
        position={[0.12, -0.56, 0.76]}
        material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }
      />
      <mesh
        geometry={nodes.block.geometry}
        material={nodes.block.material}
        position={[-0.27, -0.1, 0.3]}
        material-color={snap.items.red}
      />
      <mesh
        geometry={nodes.kanteB.geometry}
        material={nodes.kanteB.material}
        position={[-0.24, 0.24, -0.04]}
        material-color={snap.items.gasket}
      />
      <mesh
        geometry={nodes.glas.geometry}
        material={nodes.glas.material}
        position={[0.03, 1.62, -1.82]}
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}
        material-side={THREE.DoubleSide}
      />
    </group>
  );
}

export function Ct70Rondo({ ...props }) {
  const group = useRef();
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
  const { nodes, materials } = useGLTF("/ct70rondo.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.75, -0.77, 0.96]}>
        <mesh
          geometry={nodes["profile-PVC"].geometry}
          material={nodes["profile-PVC"].material}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes["profile-color_inside"].geometry}
          material={nodes["profile-color_inside"].material}
          material-map={textureInside}
        />
        <mesh
          geometry={nodes["profile-color_outside"].geometry}
          material={nodes["profile-color_outside"].material}
          material-map={textureOutside}
        />
      </group>
      <mesh
        geometry={nodes.hardware.geometry}
        material={nodes.hardware.material}
        position={[-0.52, -1.32, 1.51]}
        material-color={snap.items.hardware}
      />
      <mesh
        geometry={nodes.gaskets.geometry}
        material={nodes.gaskets.material}
        position={[0.06, -0.59, 0.78]}
        material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }
      />
      <mesh
        geometry={nodes.kanteT.geometry}
        material={nodes.kanteT.material}
        position={[-0.33, 0.44, -0.25]}
        material-color={snap.items.kantet}
      />
      <mesh
        geometry={nodes.kanteB.geometry}
        material={nodes.kanteB.material}
        position={[-0.26, 0.26, -0.07]}
        material-color={snap.items.gasket}
      />
      <mesh
        geometry={nodes.block.geometry}
        material={nodes.block.material}
        position={[-0.28, -0.08, 0.27]}
        material-color={snap.items.red}
      />
      <mesh
        geometry={nodes.steel.geometry}
        material={nodes.steel.material}
        position={[0.09, -1.64, 1.83]}
        material-color={snap.items.steel}
      />
      <mesh
        geometry={nodes.glas.geometry}
        material={nodes.glas.material}
        position={[0.01, 1.64, -1.83]}
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}
      />
    </group>
  );
}

export function Living({ ...props }) {
  const group = useRef();
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
  const { nodes, materials } = useGLTF("/living.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.03, -1.73, 1.71]}>
        <mesh
          geometry={nodes["profile-PVC"].geometry}
          material={nodes["profile-PVC"].material}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes["profile-color_inside"].geometry}
          material={nodes["profile-color_inside"].material}
          material-map={textureInside}
        />
        <mesh
          geometry={nodes["profile-color_outside"].geometry}
          material={nodes["profile-color_outside"].material}
          material-map={textureOutside}
        />
      </group>
      <mesh
        geometry={nodes.gaskets.geometry}
        material={nodes.gaskets.material}
        position={[0.4, -0.94, 0.92]}
        material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }
      />
      <mesh
        geometry={nodes.kanteT.geometry}
        material={nodes.kanteT.material}
        position={[-0.25, 0.22, -0.24]}
        material-color={snap.items.kantet}
      />
      <mesh
        geometry={nodes.kanteB.geometry}
        material={nodes.kanteB.material}
        position={[-0.2, 0.09, -0.11]}
        material-color={snap.items.gasket}
      />
      <mesh
        geometry={nodes.block.geometry}
        material={nodes.block.material}
        position={[-0.23, -0.26, 0.24]}
        material-color={snap.items.red}
      />
      <mesh
        geometry={nodes.steel.geometry}
        material={nodes.steel.material}
        position={[-0.21, -1.72, 1.69]}
        material-color={snap.items.steel}
      />
      <mesh
        geometry={nodes.hardware.geometry}
        material={nodes.hardware.material}
        position={[-0.8, -1.46, 1.44]}
        material-color={snap.items.hardware}
      />
      <mesh
        geometry={nodes.glas.geometry}
        material={nodes.glas.material}
        position={[0.16, 1.83, -1.81]}
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}
      />
    </group>
  );
}



export function K70({ ...props }) {
  const group = useRef();
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
  const { nodes, materials } = useGLTF("/k70.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.66, -0.87, 1.18]}>
        <mesh
          geometry={nodes["profile-PVC"].geometry}
          material={nodes["profile-PVC"].material}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes["profile-color_inside"].geometry}
          material={nodes["profile-color_inside"].material}
          material-map={textureInside}
        />
        <mesh
          geometry={nodes["profile-color_outside"].geometry}
          material={nodes["profile-color_outside"].material}
          material-map={textureOutside}
        />
      </group>
      <mesh
        geometry={nodes.gaskets.geometry}
        material={nodes.gaskets.material}
        position={[0.32, -0.42, 0.73]}
        material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }
      />
      <mesh
        geometry={nodes.block.geometry}
        material={nodes.block.material}
        position={[-0.28, -0.17, 0.49]}
        material-color={snap.items.red}
      />
      <mesh
        geometry={nodes.steel.geometry}
        material={nodes.steel.material}
        position={[-0.03, -1.55, 1.86]}
        material-color={snap.items.steel}
      />
      <mesh
        geometry={nodes.kanteB.geometry}
        material={nodes.kanteB.material}
        position={[-0.12, 0.15, 0.17]}
        material-color={snap.items.gasket}
      />
      <mesh
        geometry={nodes.kanteT.geometry}
        material={nodes.kanteT.material}
        position={[-0.18, 0.31, 0]}
        material-color={snap.items.kantet}
      />
      <mesh
        geometry={nodes.hardware.geometry}
        material={nodes.hardware.material}
        position={[-0.58, -1.31, 1.62]}
        material-color={snap.items.hardware}
      />
      <mesh
        geometry={nodes.glas.geometry}
        material={nodes.glas.material}
        position={[0.16, 1.55, -1.86]}
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}
      />
    </group>
  );
}

export function K76Ad({ ...props }) {
  const group = useRef();
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
  const { nodes, materials } = useGLTF("/k76ad.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.21, -1.98, 2.21]}>
        <mesh
          geometry={nodes["profile-PVC"].geometry}
          material={nodes["profile-PVC"].material}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes["profile-color_inside"].geometry}
          material={nodes["profile-color_inside"].material}
          material-map={textureInside}
        />
        <mesh
          geometry={nodes["profile-color_outside"].geometry}
          material={nodes["profile-color_outside"].material}
          material-map={textureOutside}
        />
      </group>
      <mesh
        geometry={nodes.steel.geometry}
        material={nodes.steel.material}
        position={[0.06, -1.37, 1.6]}
        material-color={snap.items.steel}
      />
      <mesh
        geometry={nodes.gaskets.geometry}
        material={nodes.gaskets.material}
        position={[0.27, -0.57, 0.8]}
        material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }
      />
      <mesh
        geometry={nodes.block.geometry}
        material={nodes.block.material}
        position={[-0.45, 0.17, 0.05]}
        material-color={snap.items.red}
      />
      <mesh
        geometry={nodes.kanteB.geometry}
        material={nodes.kanteB.material}
        position={[-0.21, 0.55, -0.31]}
        material-color={snap.items.gasket}
      />
      <mesh
        geometry={nodes.kanteT.geometry}
        material={nodes.kanteT.material}
        position={[-0.25, 0.69, -0.46]}
        material-color={snap.items.kantet}
      />
      <mesh
        geometry={nodes.hardware.geometry}
        material={nodes.hardware.material}
        position={[-0.65, -0.94, 1.17]}
        material-color={snap.items.hardware}
      />
      <mesh
        geometry={nodes.glas.geometry}
        material={nodes.glas.material}
        position={[0.12, 1.98, -2.21]}
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}
      />
    </group>
  );
}

export function K76Md({ ...props }) {
  const group = useRef();
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
  const { nodes, materials } = useGLTF("/k76md.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.14, -1.76, 1.83]}>
        <mesh
          geometry={nodes["profile-PVC"].geometry}
          material={nodes["profile-PVC"].material}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes["profile-color_inside"].geometry}
          material={nodes["profile-color_inside"].material}
          material-map={textureInside}
        />
        <mesh
          geometry={nodes["profile-color_outside"].geometry}
          material={nodes["profile-color_outside"].material}
          material-map={textureOutside}
        />
      </group>
      <mesh
        geometry={nodes.steel.geometry}
        material={nodes.steel.material}
        position={[-0.1, -1.81, 1.87]}
        material-color={snap.items.steel}
      />
      <mesh
        geometry={nodes.gaskets.geometry}
        material={nodes.gaskets.material}
        position={[0.3, -1.08, 1.15]}
        material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }
      />
      <mesh
        geometry={nodes.block.geometry}
        material={nodes.block.material}
        position={[-0.49, -0.34, 0.41]}
        material-color={snap.items.red}
      />
      <mesh
        geometry={nodes.kanteB.geometry}
        material={nodes.kanteB.material}
        position={[-0.24, 0.03, 0.05]}
        material-color={snap.items.gasket}
      />
      <mesh
        geometry={nodes.kanteT.geometry}
        material={nodes.kanteT.material}
        position={[-0.28, 0.18, -0.1]}
        material-color={snap.items.kantet}
      />
      <mesh
        geometry={nodes.hardware.geometry}
        material={nodes.hardware.material}
        position={[-0.7, -1.45, 1.53]}
        material-color={snap.items.hardware}
      />
      <mesh
        geometry={nodes.glas.geometry}
        material={nodes.glas.material}
        position={[0.08, 1.81, -1.87]}
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}
      />
    </group>
  );
}

export function K88({ ...props }) {
  const group = useRef();
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
  const { nodes, materials } = useGLTF("/k88.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.4, -2.01, 1.33]}>
        <mesh
          geometry={nodes["profile-PVC"].geometry}
          material={nodes["profile-PVC"].material}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes["profile-color_outside"].geometry}
          material={nodes["profile-color_outside"].material}
          material-map={textureOutside}
        />
        <mesh
          geometry={nodes["profile-color_inside"].geometry}
          material={nodes["profile-color_inside"].material}
          material-map={textureInside}
        />
      </group>
      <mesh
        geometry={nodes.steel.geometry}
        material={nodes.steel.material}
        position={[-0.3, -2.5, 1.81]}
        material-color={snap.items.steel}
      />
      <mesh
        geometry={nodes.gaskets.geometry}
        material={nodes.gaskets.material}
        position={[0.4, -1.73, 1.04]}
        material-color={
          props.blackGasket === true ? snap.items.gasket : snap.items.gasketgrey
        }
      />
      <mesh
        geometry={nodes.block.geometry}
        material={nodes.block.material}
        position={[-0.54, -0.96, 0.28]}
        material-color={snap.items.red}
      />
      <mesh
        geometry={nodes.kanteB.geometry}
        material={nodes.kanteB.material}
        position={[-0.35, -0.6, -0.09]}
        material-color={snap.items.gasket}
      />
      <mesh
        geometry={nodes.kanteT.geometry}
        material={nodes.kanteT.material}
        position={[-0.41, -0.45, -0.24]}
        material-color={snap.items.kantet}
      />
      <mesh
        geometry={nodes.hardware.geometry}
        material={nodes.hardware.material}
        position={[-0.79, -1.93, 1.25]}
        material-color={snap.items.hardware}
      />
      <mesh
        geometry={nodes.glas.geometry}
        material={nodes.glas.material}
        position={[-0.33, 2.5, -1.81]}
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}
      />
    </group>
  );
}

export function Pe68({ ...props }) {
  const group = useRef();
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

  const aluRoughnessInside = useTexture(farben[nrKolorkuWew].roughness);
  const aluRoughnessOutside = useTexture(farben[nrKolorkuZew].roughness);

  const colorInside = farben[nrKolorkuWew].color;
  const colorOutside = farben[nrKolorkuZew].color;

  const textureInside = useTexture(farben[nrKolorkuWew].texture);
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);

  useFrame((state) => {
    group.current.rotation.y += rotateRate;
  });
  const { nodes, materials } = useGLTF("/pe68.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.37, -0.58, 1.48]}>
        <mesh
          geometry={nodes["profile-Aluminium"].geometry}
          material={materials.Aluminium}
          material-color={snap.items.aluminium}
        />

        <mesh
          geometry={nodes["profile-color_outside"].geometry}
          material={nodes["profile-color_outside"].material}
          material-map={textureOutside}
          material-color={colorOutside}
          material-roughnessMap={aluRoughnessOutside}
        />
        <mesh
          geometry={nodes["profile-color_inside"].geometry}
          material={nodes["profile-color_inside"].material}
          material-map={textureInside}
          material-color={colorInside}
          material-roughnessMap={aluRoughnessInside}
        />
      </group>
      <mesh
        geometry={nodes.gaskets.geometry}
        material={nodes.gaskets.material}
        position={[0.26, -0.24, 1.11]}
        material-color={snap.items.gasket}
      />
      <mesh
        geometry={nodes.main_gasket.geometry}
        material={nodes.main_gasket.material}
        position={[0.65, -1.24, 2.12]}
        material-color={snap.items.gasket}
      />
      <mesh
        geometry={nodes.connectors.geometry}
        material={nodes.connectors.material}
        position={[0.7, -0.74, 1.62]}
        material-color={snap.items.connector}
      />
      <mesh
        geometry={nodes.block.geometry}
        material={nodes.block.material}
        position={[0.78, 0.84, 0.03]}
        material-color={snap.items.blockgasket}
      />
      <mesh
        geometry={nodes.kanteB.geometry}
        material={nodes.kanteB.material}
        position={[0.18, 1.25, -0.37]}
        material-color={snap.items.gasket}
      />
      <mesh
        geometry={nodes.kanteT.geometry}
        material={nodes.kanteT.material}
        position={[0.25, 1.4, -0.52]}
        material-color={snap.items.kantet}
      />
      <mesh
        geometry={nodes.hardware.geometry}
        material={nodes.hardware.material}
        position={[-0.78, -0.84, 1.72]}
        material-color={snap.items.hardware}
      />
      <mesh
        geometry={nodes.blinder.geometry}
        material={nodes.blinder.material}
        position={[-0.7, -1.4, 2.28]}
        material-color={snap.items.connector}
      />
      <mesh
        geometry={nodes.glas.geometry}
        material={nodes.glas.material}
        position={[-0.21, 1.1, -2.28]}
        material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}
      />
    </group>
  );
}

export function Pe78N({ ...props }) {
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

  const aluRoughnessInside = useTexture(farben[nrKolorkuWew].roughness);
  const aluRoughnessOutside = useTexture(farben[nrKolorkuZew].roughness);

  const colorInside = farben[nrKolorkuWew].color;
  const colorOutside = farben[nrKolorkuZew].color;

  const textureInside = useTexture(farben[nrKolorkuWew].texture);
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);

  const { nodes, materials } = useGLTF('/pe78n.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.32, -2.15, 1.55]}>
        <mesh geometry={nodes['profile-Aluminium'].geometry} material={materials.Aluminium} material-color={snap.items.aluminium}/>
        <mesh geometry={nodes['profile-color_outside'].geometry} material={nodes['profile-color_outside'].material}  
          material-map={textureOutside}
          material-color={colorOutside}
          material-roughnessMap={aluRoughnessOutside}/>
        <mesh geometry={nodes['profile-color_inside'].geometry} material={nodes['profile-color_inside'].material} 
          material-map={textureInside}
          material-color={colorInside}
          material-roughnessMap={aluRoughnessInside}/>
      </group>
      <mesh geometry={nodes.gaskets.geometry} material={materials['Rubber - Black']} position={[0.23, -1.71, 1.09]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.main_gasket.geometry} material={nodes.main_gasket.material} position={[0.7, -2.43, 1.8]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.connectors.geometry} material={nodes.connectors.material} position={[0.79, -2.51, 1.89]} material-color={snap.items.connector}/>
      <mesh
        geometry={nodes.blockgasket.geometry}
        material={nodes.blockgasket.material}
        position={[0.95, -0.76, 0.13]}
        material-color={snap.items.blockgasket}
      />
      <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[0.75, -0.51, -0.12]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[0.82, -0.36, -0.26]} material-color={snap.items.kantet}/>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[-0.95, -2.06, 1.43]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.insulation.geometry} material={nodes.insulation.material} position={[0.79, -2.61, 1.98]} material-color={snap.items.blockgasket}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[0.75, 2.61, -1.98]} material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}/>
    </group>
  )
}


export function Mb70({ ...props }) {
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

  const aluRoughnessInside = useTexture(farben[nrKolorkuWew].roughness);
  const aluRoughnessOutside = useTexture(farben[nrKolorkuZew].roughness);

  const colorInside = farben[nrKolorkuWew].color;
  const colorOutside = farben[nrKolorkuZew].color;

  const textureInside = useTexture(farben[nrKolorkuWew].texture);
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);
  const { nodes, materials } = useGLTF('/mb70.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.49, -1.84, 1.26]}>
        <mesh geometry={nodes['profile-Aluminium'].geometry} material={materials.Aluminium} material-color={snap.items.aluminium}/>
        <mesh geometry={nodes['profile-color_inside'].geometry} material={nodes['profile-color_inside'].material}  
        material-map={textureInside}
        material-color={colorInside}
        material-roughnessMap={aluRoughnessInside}/>
        <mesh geometry={nodes['profile-color_outside'].geometry} material={nodes['profile-color_outside'].material}  
          material-map={textureOutside}
          material-color={colorOutside}
          material-roughnessMap={aluRoughnessOutside}/>
      </group>
      <mesh geometry={nodes.gaskets.geometry} material={materials['Rubber ']} position={[-0.45, -1.28, 0.64]} material-color={snap.items.gasket}/>
      <mesh
        geometry={nodes.main_gasket.geometry}
        material={nodes.main_gasket.material}
        position={[0.39, -2.31, 1.68]}
        material-color={snap.items.gasket}
      />
      <mesh geometry={nodes.connectors.geometry} material={nodes.connectors.material} position={[0.04, -2.42, 1.78]} material-color={snap.items.connector}/>
      <mesh
        geometry={nodes.block_gasket.geometry}
        material={nodes.block_gasket.material}
        position={[0.08, -1.16, 0.52]}
        material-color={snap.items.blockgasket}
      />
      <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[0.43, -0.8, 0.16]}  material-color={snap.items.kantet}/>
      <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[0.49, -0.92, 0.29]}  material-color={snap.items.gasket}/>
      <mesh geometry={nodes.insulation.geometry} material={nodes.insulation.material} position={[0.03, -2.31, 1.68]}  material-color={snap.items.blockgasket}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[0.48, 2.42, -1.78]} material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}/>
    </group>
  )
}

export function Mb86({ ...props }) {
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

  const aluRoughnessInside = useTexture(farben[nrKolorkuWew].roughness);
  const aluRoughnessOutside = useTexture(farben[nrKolorkuZew].roughness);

  const colorInside = farben[nrKolorkuWew].color;
  const colorOutside = farben[nrKolorkuZew].color;

  const textureInside = useTexture(farben[nrKolorkuWew].texture);
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);
  const { nodes, materials } = useGLTF('/mb86.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.23, -1.75, 1.19]}>
        <mesh geometry={nodes['profile-Aluminium'].geometry} material={materials.Aluminium} material-color={snap.items.aluminium}/>
        <mesh geometry={nodes['profile-color_inside'].geometry} material={nodes['profile-color_inside'].material} 
        material-map={textureInside}
        material-color={colorInside}
        material-roughnessMap={aluRoughnessInside}/>
        <mesh geometry={nodes['profile-color_outside'].geometry} material={nodes['profile-color_outside'].material} 
         material-map={textureOutside}
         material-color={colorOutside}
         material-roughnessMap={aluRoughnessOutside}/>
      </group>
      <mesh geometry={nodes.gaskets.geometry} material={materials['Rubber - Black']} position={[-0.42, -1.16, 0.54]} material-color={snap.items.gasket}/>
      <mesh
        geometry={nodes.main_gasket.geometry}
        material={nodes.main_gasket.material}
        position={[0.92, -2.26, 1.64]}
        material-color={snap.items.gasket}
      />
      <mesh geometry={nodes.connectors.geometry} material={nodes.connectors.material} position={[0.67, -2.45, 1.83]} material-color={snap.items.connector}/>
      <mesh
        geometry={nodes.block_gasket.geometry}
        material={nodes.block_gasket.material}
        position={[0.65, -0.94, 0.31]}
        material-color={snap.items.blockgasket}
      />
      <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[0.64, -0.57, -0.06]} material-color={snap.items.kantet}/>
      <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[0.72, -0.69, 0.06]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[-0.92, -1.96, 1.34]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[0.71, 2.45, -1.83]} material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}/>
    </group>
  )
}

export function Aws75({ ...props }) {
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

  const aluRoughnessInside = useTexture(farben[nrKolorkuWew].roughness);
  const aluRoughnessOutside = useTexture(farben[nrKolorkuZew].roughness);

  const colorInside = farben[nrKolorkuWew].color;
  const colorOutside = farben[nrKolorkuZew].color;

  const textureInside = useTexture(farben[nrKolorkuWew].texture);
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);
  const { nodes, materials } = useGLTF('/aws75.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.15, -1.98, 1.4]}>
        <mesh geometry={nodes['profile-Aluminium'].geometry} material={materials.Aluminium} material-color={snap.items.aluminium}/>
        <mesh geometry={nodes['profile-color_inside'].geometry} material={nodes['profile-color_inside'].material} 
        material-map={textureInside}
        material-color={colorInside}
        material-roughnessMap={aluRoughnessInside}/>
        <mesh geometry={nodes['profile-color_outside'].geometry} material={nodes['profile-color_outside'].material} 
        material-map={textureOutside}
         material-color={colorOutside}
         material-roughnessMap={aluRoughnessOutside}/>
      </group>
      <mesh geometry={nodes.gaskets.geometry} material={materials['Rubber - Black']} position={[0.26, -1.25, 0.63]} material-color={snap.items.gasket}/>
      <mesh
        geometry={nodes.main_gasket.geometry}
        material={nodes.main_gasket.material}
        position={[0.81, -2.58, 1.95]}
        material-color={snap.items.gasket}
      />
      <mesh geometry={nodes.connectors.geometry} material={nodes.connectors.material} position={[0.56, -1.96, 1.33]} />
      <mesh
        geometry={nodes.block_gasket.geometry}
        material={nodes.block_gasket.material}
        position={[0.71, -0.82, 0.19]}
        material-color={snap.items.blockgasket}
      />
      <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[0.86, -0.57, -0.06]} material-color={snap.items.kantet}/>
      <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[0.82, -0.68, 0.05]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[-0.86, -2.11, 1.48]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.insulation.geometry} material={nodes.insulation.material} position={[0.47, -2.61, 1.98]} material-color={snap.items.insulation}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[0.82, 2.61, -1.98]} 
      material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}/>
    </group>
  )
}



export function Aws90({ ...props }) {
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

  const aluRoughnessInside = useTexture(farben[nrKolorkuWew].roughness);
  const aluRoughnessOutside = useTexture(farben[nrKolorkuZew].roughness);

  const colorInside = farben[nrKolorkuWew].color;
  const colorOutside = farben[nrKolorkuZew].color;

  const textureInside = useTexture(farben[nrKolorkuWew].texture);
  const textureOutside = useTexture(farben[nrKolorkuZew].texture);
  const { nodes, materials } = useGLTF('/aws90.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.16, -1.89, 1.33]}>
        <mesh geometry={nodes['profile-Aluminium'].geometry} material={materials.Aluminium} material-color={snap.items.aluminium}/>
        <mesh geometry={nodes['profile-color_inside'].geometry} material={nodes['profile-color_inside'].material} 
        material-map={textureInside}
        material-color={colorInside}
        material-roughnessMap={aluRoughnessInside}/>
        <mesh geometry={nodes['profile-color_outside'].geometry} material={nodes['profile-color_outside'].material} 
        material-map={textureOutside}
         material-color={colorOutside}
         material-roughnessMap={aluRoughnessOutside}/>
         
      </group>
      <mesh geometry={nodes.gaskets.geometry} material={materials['Rubber - Black']} position={[0.36, -1.27, 0.63]} material-color={snap.items.gasket}/>
      <mesh
        geometry={nodes.main_gasket.geometry}
        material={nodes.main_gasket.material}
        position={[0.75, -2.54, 1.91]}
        material-color={snap.items.gasket}
      />
      <mesh geometry={nodes.connectors.geometry} material={nodes.connectors.material} position={[0.67, -2.45, 1.82]} />
      <mesh
        geometry={nodes.block_gasket.geometry}
        material={nodes.block_gasket.material}
        position={[0.61, -0.84, 0.21]}
        material-color={snap.items.blockgasket}
      />
      <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[1.05, -0.63, 0]} material-color={snap.items.kantet}/>
      <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[1.08, -0.74, 0.11]} material-color={snap.items.gasket}/>
      <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[-1.08, -2.07, 1.44]} material-color={snap.items.hardware}/>
      <mesh geometry={nodes.insulation.geometry} material={materials.insulation} position={[0.55, -2.41, 1.78]} material-color={snap.items.insulation}/>
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[1.08, 2.54, -1.91]} 
      material-roughness={0.25}
        material-clearcoat={1}
        material-reflectivity={1}
        material-transparent
        material-opacity={0.92}
        material-transmission={0}/>
    </group>
  )
}


