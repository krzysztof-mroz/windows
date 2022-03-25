import { proxy, useSnapshot } from "valtio";
import { useRef, useState, useEffect } from "react";
import { useGLTF, useTexture} from "@react-three/drei";
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
    mauer: "#dddddd",
    wand: "#879988"
  },
});


const farben = getAllColours();

const rotateRate = 0;



export function Wall({ ...props }) {
  const group = useRef()
  const snap = useSnapshot(state);
  const texPlaster = useTexture("/colors/plaster.png");
  const texStyrofoamNormal = useTexture("/colors/styrofoam_normal.jpg");
  const texBeton = useTexture("/colors/beton.jpg");
  const texBand = useTexture("/bandmass.png");
  const { nodes, materials } = useGLTF('/wall.glb')

  function altWall() {
    return (
      <mesh geometry={nodes.il_altbau.geometry} material={nodes.il_altbau.material} position={[15.69, -15.58, 16.95]} material-map={texPlaster}/>
    );
  }

  function putz() {
    return (
      <mesh geometry={nodes.putz.geometry} material={materials.wand} position={[15.69, -15.58, 17.79]}  material-color={snap.items.wand} material-roughness={1}/>
    );
  }

  function massIl() {
    return (
      <mesh geometry={nodes.bandmass_il.geometry} material={nodes.bandmass_il.material} position={[15.69, -15.58, 13.51]} material-map={texBand}/>
    );
  }

  function massAl() {
    return (
      <mesh geometry={nodes.bandmass_al.geometry} material={nodes.bandmass_al.material} position={[15.69, 17.1, -11.35]} material-map={texBand}/>
    );
  }

  function massDg() {
    return (
      <mesh geometry={nodes.bandmass_dg.geometry} material={nodes.bandmass_dg.material} position={[15.69, 17.1, -25.29]} material-map={texBand}/>
    );
  }

  function alSmall() {
    return (
      <mesh geometry={nodes.al_small.geometry} material={nodes.al_small.material} position={[15.63, 0, -10.54]} material-map={texPlaster}/>
    );
  }

  function alBig() {
    return (
      <mesh geometry={nodes.al_big.geometry} material={nodes.al_big.material} position={[15.63, 0, -10.54]} material-map={texPlaster}/>
    );
  }

  function dg() {
    return (
      <mesh geometry={nodes.dg_neubau.geometry} material={nodes.dg_neubau.material} position={[15.63, 0, -21.43]} 
      material-normalMap={texStyrofoamNormal} />
    );
  }

  function neuWall() {
    return (
      <mesh geometry={nodes.il_neubau.geometry} material={materials.Concrete} position={[15.69, -15.58, 20.07]}  material-map={texBeton}/>
    );
  }

  function spielAlt() {
    return (
      <mesh geometry={nodes.alt_spiel.geometry} material={nodes.alt_spiel.material} position={[15.7, 41.59, 5.22]} />
    );
  }

  function spielNeu() {
    return (
      <mesh geometry={nodes.neu_spiel.geometry} material={nodes.neu_spiel.material} position={[15.7, 41.59, -6.22]} />
    );
  }

  function show() {
    if (props.bauart === "altbau") {
     return [altWall(), putz(), massIl()]
    } else if (props.bauart === "altbau_al") {
     return [altWall(), putz(), alBig(), massIl(), massAl()]
    } else if (props.bauart === "neubau") {
      return [neuWall(), massIl()]
    } else if (props.bauart === "neubau_dg") {
      return [neuWall(), massIl(), dg(), massDg()]
     }  
  }

  return show();
}






