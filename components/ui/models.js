import { proxy, useSnapshot } from "valtio";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {useGLTF, useTexture } from "@react-three/drei";

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
      gasketgrey: "#cccccc",
      block: "#F77474",
      kantet: "#D8D6D6",
      steel: "#B0E8F2",
    },
  });

  export function Living1({ ...props }) {
    const group = useRef()
    const snap = useSnapshot(state);
    const colorMap = useTexture("anthrazitgrau.jpg");
    const aluRoughnessMap = useTexture("alu_roughness2.jpg"); 
    const { nodes, materials } = useGLTF('/livingecke.glb')



    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.color_inside.geometry}
          material={nodes.color_inside.material}
          position={[-1.71, 13.15, 7.12]}
          material-map={colorMap}
          material-roughnessMap={aluRoughnessMap}
        />
        <mesh
          geometry={nodes.color_outside.geometry}
          material={nodes.color_outside.material}
          position={[-2.9 , 13.13, 7.63]}
          material-map={colorMap}
          material-roughnessMap={aluRoughnessMap}
        />
        <mesh geometry={nodes.profile.geometry} material={nodes.profile.material} position={[-1.7, 13.15, 7.12]} material-color={snap.items.pvc} />
        <mesh geometry={nodes.gaskets.geometry} material={nodes.gaskets.material} position={[-0.44, 13.16, 6.62]} material-color={snap.items.gasketgrey} />
        <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[1.28, 9.11, 7.11]} material-color={snap.items.kantet}/>
        <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[1.28, 9.11, 7.11]} material-color={snap.items.gasket}/>
        <mesh geometry={nodes.block.geometry} material={nodes.block.material} position={[-1.72, 13.14, 7.11]} material-color={snap.items.red}/>
        <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[-3, 13.14, 7.63]} material-color={snap.items.steel}/>
        <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[-0.44, 13.16, 6.62]} material-color={snap.items.hardware} />
        <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[3, -13.16, -7.63]} material-color={snap.items.glas} />
      </group>
    )
  }



  export function Ct70Classic1({ ...props }) {
    const group = useRef();
    const snap = useSnapshot(state);

    const aluMap = useTexture("alu_basecolor.png");
    const aluNormalMap = useTexture("alu_normal.png");
    const aluRoughnessMap = useTexture("alu_roughness2.jpg");

    const colorMap = useTexture("styrofoam_basecolor.jpg");
    const normalMap = useTexture("styrofoam_normal.jpg");
    const roughnessMap = useTexture("styrofoam_roughness.jpg");
    const aoMap = useTexture("styrofoam_ao.jpg");

    const { nodes, materials } = useGLTF("/aws_75a.glb");
    
    
    
    return (

      

      <group ref={group} {...props} dispose={null}>
        <group position={[-1.23, 0.18, 0]}>
          <mesh
            geometry={nodes["aluminium-Aluminium"].geometry}
            material={materials.Aluminium}
            material-color={snap.items.aluminium}
          />
          <mesh
            geometry={nodes["aluminium-mat2"].geometry}
            material={materials.mat2}
            material-color={snap.items.red}
            material-map={aluMap}
            material-normalMap={aluNormalMap}
            material-roughnessMap={aluRoughnessMap}
          />
          <mesh
            geometry={nodes["aluminium-mat1"].geometry}
            material={materials.mat1}
          />
        </group>
        <mesh
          geometry={nodes.gaskets.geometry}
          material={nodes.gaskets.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.gasket}
        />
        <mesh
          geometry={nodes.main_gasket.geometry}
          material={nodes.main_gasket.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.gasket}
        />
        <mesh
          geometry={nodes.connectors.geometry}
          material={nodes.connectors.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.connector}
        />
        <mesh
          geometry={nodes.block_gasket.geometry}
          material={nodes.block_gasket.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.blockgasket}
        />
        <mesh
          geometry={nodes.kanteT.geometry}
          material={nodes.kanteT.material}
          position={[1.23, -0.18, 0]}
          material-color={snap.items.kante}
        />
        <mesh
          geometry={nodes.kanteB.geometry}
          material={nodes.kanteB.material}
          position={[1.23, -0.18, 0]}
          material-color={snap.items.gasket}
        />
        <mesh
          geometry={nodes.glas3.geometry}
          material={nodes.glas3.material}
          position={[1.23, -0.18, 0]}
          material-color={snap.items.glas}
        />
        <mesh
          geometry={nodes.hardware.geometry}
          material={nodes.hardware.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.hardware}
        />
        <mesh
          geometry={nodes.insulation2.geometry}
          material={nodes.insulation2.material}
          position={[-1.23, 0.18, 0]}
          material-color={snap.items.insulation}
          material-map={colorMap}
          material-normalMap={normalMap}
          material-roughnessMap={roughnessMap}
          material-aoMap={aoMap}
        />
      </group>
    );
  
  }

  export function Ct70Classic({ ...props }) {
    const group = useRef()
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/ct70classic.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.color_outside.geometry}
          material={nodes.color_outside.material}
          position={[1.53, -1.31, 1.5]}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes.color_inside.geometry}
          material={nodes.color_inside.material}
          position={[-1.53, -1.07, 1.26]}
          material-color={snap.items.pvc}
        />
        <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[-0.31, 0.42, -0.22]} material-color={snap.items.kantet}/>
        <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[-0.5, -1.3, 1.5]} material-color={snap.items.hardware}/>
        <mesh geometry={nodes.profile.geometry} material={nodes.profile.material} position={[-0.81, -0.73, 0.92]} material-color={snap.items.pvc}/>
        <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[0.11, -1.62, 1.82]} material-color={snap.items.steel}/>
        <mesh geometry={nodes.gaskets.geometry} material={nodes.gaskets.material} position={[0.12, -0.56, 0.76]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.block.geometry} material={nodes.block.material} position={[-0.27, -0.1, 0.3]} material-color={snap.items.red}/>
        <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[-0.24, 0.24, -0.04]} material-color={snap.items.gasket}/>
        <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[0.03, 1.62, -1.82]} material-color={snap.items.glas}/>
      </group>
    )
  }
  
  export function Ct70Rondo({ ...props }) {
    const group = useRef()
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/ct70rondo.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.color_outside.geometry}
          material={nodes.color_outside.material}
          position={[1.52, -1.16, 1.36]}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes.color_inside.geometry}
          material={nodes.color_inside.material}
          position={[-1.52, -1.18, 1.37]}
          material-color={snap.items.pvc}
        />
        <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[-0.26, 0.26, -0.07]} material-color={snap.items.gasket}/>
        <mesh geometry={nodes.profile.geometry} material={nodes.profile.material} position={[-0.75, -0.77, 0.96]} material-color={snap.items.pvc}/>
        <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[-0.52, -1.32, 1.51]} material-color={snap.items.hardware}/>
        <mesh geometry={nodes.gaskets.geometry} material={nodes.gaskets.material} position={[0.06, -0.59, 0.78]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[-0.33, 0.44, -0.25]} material-color={snap.items.kantet}/>
        <mesh geometry={nodes.block.geometry} material={nodes.block.material} position={[-0.28, -0.08, 0.27]} material-color={snap.items.red}/>
        <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[0.09, -1.64, 1.83]} material-color={snap.items.steel}/>
        <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[0.01, 1.64, -1.83]} material-color={snap.items.glas}/>
      </group>
    )
  }

  export function Living({ ...props }) {
    const group = useRef()
    const snap = useSnapshot(state);
    
    const { nodes, materials } = useGLTF('/living.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.color_inside.geometry}
          material={nodes.color_inside.material}
          position={[-1.9, -1.83, 1.81]}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes.color_outside.geometry}
          material={nodes.color_outside.material}
          position={[1.9, -1.07, 1.05]}
          material-color={snap.items.pvc}
        />
        <mesh geometry={nodes.profile.geometry} material={nodes.profile.material} position={[0.03, -1.73, 1.71]}  material-color={snap.items.pvc}/>
        <mesh geometry={nodes.gaskets.geometry} material={nodes.gaskets.material} position={[0.4, -0.94, 0.92]}  material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[-0.25, 0.22, -0.24]}  material-color={snap.items.kantet}/>
        <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[-0.2, 0.09, -0.11]}  material-color={snap.items.gasket}/>
        <mesh geometry={nodes.block.geometry} material={nodes.block.material} position={[-0.23, -0.26, 0.24]}  material-color={snap.items.red}/>
        <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[-0.21, -1.72, 1.69]}  material-color={snap.items.steel}/>
        <mesh geometry={nodes.hardware.geometry} material={nodes.hardware.material} position={[-0.8, -1.46, 1.44]}  material-color={snap.items.hardware}/>
        <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[0.16, 1.83, -1.81]}  material-color={snap.items.glas}/>
      </group>
    )
  }

  export function K70({ ...props }) {
    const group = useRef()
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/k70.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.color_outside.geometry}
          material={nodes.color_outside.material}
          position={[1.54, -1.39, 1.71]}
          material-color={snap.items.pvc}
        />
        <mesh
          geometry={nodes.color_inside.geometry}
          material={nodes.color_inside.material}
          position={[-1.54, -1.38, 1.69]}
          material-color={snap.items.pvc}
        />
        <mesh geometry={nodes.glasleiste.geometry} material={nodes.glasleiste.material} position={[-0.66, -0.87, 1.18]} material-color={snap.items.pvc}/>
        <mesh geometry={nodes.gasket1.geometry} material={nodes.gasket1.material} position={[0.32, -0.42, 0.73]} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes.block.geometry} material={nodes.block.material} position={[-0.28, -0.17, 0.49]} material-color={snap.items.red}/>
        <mesh geometry={nodes.sash_iron.geometry} material={nodes.sash_iron.material} position={[-0.03, -1.55, 1.86]} material-color={snap.items.steel}/>
        <mesh geometry={nodes.kanteB.geometry} material={nodes.kanteB.material} position={[-0.12, 0.15, 0.17]} material-color={snap.items.gasket}/>
        <mesh geometry={nodes.kanteT.geometry} material={nodes.kanteT.material} position={[-0.18, 0.31, 0]} material-color={snap.items.kantet}/>
        <mesh geometry={nodes.hardware1.geometry} material={nodes.hardware1.material} position={[-0.58, -1.31, 1.62]} material-color={snap.items.hardware}/>
        <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[0.16, 1.55, -1.86]} material-color={snap.items.glas}/>
      </group>
    )
  }