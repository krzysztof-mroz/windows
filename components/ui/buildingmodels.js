import { proxy, useSnapshot } from "valtio";
import { useRef, useState, useEffect } from "react";
import { useGLTF, useTexture} from "@react-three/drei";
import * as THREE from "three";
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
    wand: "#879988",
    altkasten: "#99711E",
    revision: "#CCA044",
    blue: "#3995CD",
    estrich: "#868686",
    rks: "#B75826",

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
     return [massIl(),altWall(),  putz(), ]
    } else if (props.bauart === "altbau_al") {
     return [ massIl(), massAl(), putz(), altWall(),  alBig(),   ]
    } else if (props.bauart === "neubau") {
      return [ massIl(), neuWall()]
    } else if (props.bauart === "neubau_dg") {
      return [massDg(), massIl(), neuWall(),  dg()]
     }  
  }

  return show();
}

export function WallH({ ...props }) {
  const group = useRef()
  const snap = useSnapshot(state);
  const texPlaster = useTexture("/colors/plaster.png");
  const texPlasterRollo = useTexture("/colors/plasterrollo.png");
  const texStyrofoamNormal = useTexture("/colors/styrofoam_normal.jpg");
  const texBeton = useTexture("/colors/beton.jpg");
  const texBand = useTexture("/bandmass.png");
  const { nodes, materials } = useGLTF('/wallH.glb')
  const [toShow, setToShow] = useState([])

 
  function ilAltBodenMit() {
    return (
      <mesh geometry={nodes.il_alt_boden_mit.geometry} material={nodes.il_alt_boden_mit.material}  position={[5.32, -15.58, 5.93]}  material-map={texPlaster}/>
    );
  }

  function ilAltBodenOhne() {
    return (
      <mesh geometry={nodes.il_alt_boden_ohne.geometry} material={nodes.il_alt_boden_ohne.material}   position={[5.34, -15.58, -5.26]} material-map={texPlaster}/>
    );
  }

  function ilAltBruestungMit() {
    return (
      <mesh geometry={nodes.il_alt_bruestung_mit.geometry} material={nodes.il_alt_bruestung_mit.material} position={[5.37, -15.58, 5.93]}   material-map={texPlaster}/>
    );
  }

  function ilAltBruestungOhne() {
    return (
      <mesh geometry={nodes.il_alt_bruestung_ohne.geometry} material={nodes.il_alt_bruestung_ohne.material} position={[5.24, -15.58, -5.26]}  material-map={texPlaster}/>
    );
  }

  
     
      
      

  function mauerNeuBodenOhne() {
    return (
      <mesh geometry={nodes.mauer_neu_boden_ohne.geometry} material={nodes.mauer_neu_boden_ohne.material} position={[5.14, -15.58, 20.07]}  material-map={texBeton}/>
    );
  }

  function mauerNeuBodenMit() {
    return (
      <mesh geometry={nodes.mauer_neu_boden_mit.geometry} material={nodes.mauer_neu_boden_mit.material} position={[5.31, -15.58, 20.07]} material-map={texBeton}/>
    );
  }

  function mauerNeuBruestungOhne() {
    return (
      <mesh geometry={nodes.mauer_neu_bruestung_ohne.geometry} material={nodes.mauer_neu_bruestung_ohne.material} position={[5.24, -15.58, 20.07]} material-map={texBeton}/>
    );
  }

  function mauerNeuBruestungMit() {
    return (
      <mesh geometry={nodes.mauer_neu_bruestung_mit.geometry} material={nodes.mauer_neu_bruestung_mit.material} position={[5.18, -15.58, 20.07]} material-map={texBeton}/>
    );
  }

  

  function fussbodenAlt() {
    return (
      <group position={[-34.6, -130.83, 13.6]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh geometry={nodes['fussboden_alt-estrich'].geometry} material={nodes['fussboden_alt-estrich'].material} material-color={snap.items.estrich} material-roughness={1}/>
      <mesh geometry={nodes['fussboden_alt-fliesen'].geometry} material={nodes['fussboden_alt-fliesen'].material} material-color={snap.items.blue} material-roughness={0.5}/>
    </group>
    );
  }

  function fussbodenNeu() {
    return (
      <group position={[-34.56, -130.83, 13.6]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh geometry={nodes['fussboden_neu-estrich'].geometry} material={nodes['fussboden_neu-estrich'].material} material-color={snap.items.estrich} material-roughness={1}/>
      <mesh geometry={nodes['fussboden_neu-fliesen'].geometry} material={nodes['fussboden_neu-fliesen'].material} material-color={snap.items.blue} material-roughness={0.5}/>
    </group>
    );
  }

  function altkastenHolz() {
    return (
      <group position={[-47.45, 95.57, 7.3]}>
        <mesh geometry={nodes['altkasten-holz1'].geometry} material={materials.holz1}  material-color={snap.items.altkasten}/>
        <mesh geometry={nodes['altkasten-holz2'].geometry} material={materials.holz2}  material-color={snap.items.revision}/>
      </group>
    );
  }

  function alAltBoden() {
    return (
      <mesh geometry={nodes.al_alt_boden.geometry} material={nodes.al_alt_boden.material} position={[5.34, 0, -21.55]} material-map={texPlaster}/>
    );
  }

  function alAltBruestung() {
    return (
      <mesh geometry={nodes.al_alt_bruestung.geometry} material={nodes.al_alt_bruestung.material} position={[5.26, 0, -21.55]}  material-map={texPlaster}/>
    );
  }

  function fensterbank() {
    return (
      <mesh geometry={nodes.fensterbank.geometry} material={nodes.fensterbank.material} position={[-24.45, -26.49, 3.61]}  material-color={snap.items.pvc}/>
    );
  }

  function fenster() {




    return (

    <group position={[5.21, -14.78, -10.32]}>
      <mesh geometry={nodes['fenster-PVC'].geometry} material={nodes['fenster-PVC'].material} material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes['fenster-plastic'].geometry} material={nodes['fenster-plastic'].material} material-color={snap.items.pvc} />
      
      <mesh geometry={nodes['fenster-gasket'].geometry} material={nodes['fenster-gasket'].material} material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes['fenster-Glas'].geometry} material={nodes['fenster-Glas'].material} 
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

  function bodenProfilOhne() {
    return (
      <group position={[-5.64, -134.52, -9.19]}>  
        <mesh geometry={nodes['boden_profil_ohne-hardware'].geometry} material={nodes['boden_profil_ohne-hardware'].material} material-color={snap.items.hardware}/>
        <mesh geometry={nodes['boden_profil_ohne-GlasKante'].geometry} material={nodes['boden_profil_ohne-GlasKante'].material} material-color={snap.items.gasket}/>
        <mesh geometry={nodes['boden_profil_ohne-WarmeKante'].geometry} material={nodes['boden_profil_ohne-WarmeKante'].material} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes['boden_profil_ohne-plastic'].geometry} material={nodes['boden_profil_ohne-plastic'].material} material-color={snap.items.red}/>
        <mesh geometry={nodes['boden_profil_ohne-PVC'].geometry} material={nodes['boden_profil_ohne-PVC'].material} material-color={snap.items.pvc}/>
        <mesh geometry={nodes['boden_profil_ohne-aluminium'].geometry} material={nodes['boden_profil_ohne-aluminium'].material} material-color={snap.items.aluminium} material-roughness={0.4}/>
        <mesh geometry={nodes['boden_profil_ohne-Stahl'].geometry} material={nodes['boden_profil_ohne-Stahl'].material} material-color={snap.items.steel}/>
        <mesh geometry={nodes['boden_profil_ohne-gasket'].geometry} material={nodes['boden_profil_ohne-gasket'].material} material-color={snap.items.gasketgrey}/>
        <mesh geometry={nodes['boden_profil_ohne-brush'].geometry} material={nodes['boden_profil_ohne-brush'].material} material-color={snap.items.brush}/>
        <mesh geometry={nodes['boden_profil_ohne-Glas'].geometry} material={nodes['boden_profil_ohne-Glas'].material} 
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
  
  function bodenProfilMit() {
    return (
      <group position={[-22.23, -115.95, -1.47]}>
      <mesh geometry={nodes['boden_profil_mit-hardware'].geometry} material={nodes['boden_profil_mit-hardware'].material} material-color={snap.items.hardware}/>
      <mesh geometry={nodes['boden_profil_mit-GlasKante'].geometry} material={nodes['boden_profil_mit-GlasKante'].material} material-color={snap.items.gasket}/>
      <mesh geometry={nodes['boden_profil_mit-WarmeKante'].geometry} material={nodes['boden_profil_mit-WarmeKante'].material} material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes['boden_profil_mit-plastic'].geometry} material={nodes['boden_profil_mit-plastic'].material} material-color={snap.items.red}/>
      <mesh geometry={nodes['boden_profil_mit-PVC'].geometry} material={nodes['boden_profil_mit-PVC'].material} material-color={snap.items.pvc}/>
      <mesh geometry={nodes['boden_profil_mit-aluminium'].geometry} material={nodes['boden_profil_mit-aluminium'].material} material-color={snap.items.aluminium} material-roughness={0.4}/>
      <mesh geometry={nodes['boden_profil_mit-Stahl'].geometry} material={nodes['boden_profil_mit-Stahl'].material} material-color={snap.items.steel}/>
      <mesh geometry={nodes['boden_profil_mit-gasket'].geometry} material={nodes['boden_profil_mit-gasket'].material} material-color={snap.items.gasketgrey}/>
      <mesh geometry={nodes['boden_profil_mit-brush'].geometry} material={nodes['boden_profil_mit-brush'].material} material-color={snap.items.brush}/>
      <mesh geometry={nodes['boden_profil_mit-Glas'].geometry} material={nodes['boden_profil_mit-Glas'].material} 
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

  function rks() {
    return (
      <group position={[5.26, 125, 2.62]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes['rks-red'].geometry} material={materials.red} material-color={snap.items.rks}/>  
        <mesh geometry={nodes['rks-inside'].geometry} material={materials.inside} material-color={snap.items.gasket}/>
        <mesh geometry={nodes['rks-silver'].geometry} material={materials.silver} material-color={snap.items.aluminium}/>
      </group>
    );
  }

  function bandmassBodentiefOhne() {
    return (
      <mesh geometry={nodes.bandmass_bodentief_ohne.geometry} material={nodes.bandmass_bodentief_ohne.material} position={[15.39, 49.21, 7.73]} rotation={[0, 0, -Math.PI / 2]} material-map={texBand}/>
    );
  }

  function dgNeuBoden() {
    return (
      <mesh geometry={nodes.dg_neu_boden.geometry} material={nodes.dg_neu_boden.material} position={[5.42, 0, -21.43]} material-normalMap={texStyrofoamNormal}/>
    );
  }

  function dgNeuBruestung() {
    return (
      <mesh geometry={nodes.dg_neu_bruestung.geometry} material={nodes.dg_neu_bruestung.material} position={[5.15, 0, -21.43]} material-normalMap={texStyrofoamNormal}/>
    );
  }

  function bandmassNeuBodentiefMit() {
    return (
      <mesh geometry={nodes.bandmass_neu_bodentief_mit.geometry} material={nodes.bandmass_neu_bodentief_mit.material} position={[8.56, 49.21, 15.73]} rotation={[0, 0, -Math.PI / 2]} material-map={texBand}/>
    );
  }

  function bandmassNeuBruestung() {
    return (
      <mesh geometry={nodes.bandmass_neu_bruestung.geometry} material={nodes.bandmass_neu_bruestung.material} position={[1.45, 49.21, 18.47]} rotation={[0, 0, -Math.PI / 2]} material-map={texBand} />
    );
  }

 

  function bandmassAltBruestung() {
    return (
      <mesh geometry={nodes.bandmass_alt_bruestung.geometry} material={nodes.bandmass_alt_bruestung.material} position={[14.11, 49.21, 2.6]} rotation={[0, 0, -Math.PI / 2]}  material-map={texBand} />
    );
  }

  function bandmassAltBodentiefAl() {
    return (
      <mesh geometry={nodes.bandmass_alt_bodentief_al.geometry} material={nodes.bandmass_alt_bodentief_al.material} position={[-17.44, 49.21, -21.57]} rotation={[0, 0, -Math.PI / 2]} material-map={texBand} />
    );
  }

  function bandmassAltBruestungMit() {
    return (
      <mesh geometry={nodes.bandmass_alt_bruestung_mit.geometry} material={nodes.bandmass_alt_bruestung_mit.material} position={[-14.49, 49.21, -21.57]} rotation={[0, 0, -Math.PI / 2]}  material-map={texBand} />
    );
  }

  function bandmassFussboden() {
    return (
      <mesh geometry={nodes.bandmass_fussboden.geometry} material={nodes.bandmass_fussboden.material} position={[-16.39, -131.04, 34.62]} rotation={[0, 0, -Math.PI / 2]} material-map={texBand} />
    );
  }
  
 
  
  

  function show() {

    let toReturn = [];

    if (props.rolloH === false && props.altbauH === true && props.bodenH === true) {
     toReturn = [ bandmassBodentiefOhne(), ilAltBodenOhne(),   ]
    } else if (props.rolloH === true && props.altbauH === true && props.bodenH === true) {
     toReturn = [ bandmassBodentiefOhne(), bandmassAltBodentiefAl(), ilAltBodenMit(), alAltBoden(), altkastenHolz(), ]
    } else if (props.rolloH === false && props.altbauH === true && props.bodenH === false) {
      toReturn = [fenster(), bandmassAltBruestung(),  ilAltBruestungOhne(), fensterbank(),  ]
    } else if (props.rolloH === true && props.altbauH === true && props.bodenH === false) {
      toReturn = [fenster(), bandmassAltBruestung(), bandmassAltBruestungMit(), ilAltBruestungMit(), alAltBruestung(), altkastenHolz(),  fensterbank()  ]
    } else if (props.rolloH === false && props.altbauH === false && props.bodenH === true) {
      toReturn = [bandmassBodentiefOhne(), mauerNeuBodenOhne(), ]
    } else if (props.rolloH === true && props.altbauH === false && props.bodenH === true) {
      toReturn = [bandmassBodentiefOhne(), mauerNeuBodenMit(), rks()] 
    } else if (props.rolloH === false && props.altbauH === false && props.bodenH === false) {
      toReturn = [fenster(), bandmassNeuBruestung(), mauerNeuBruestungOhne(), ]
    } else if (props.rolloH === true && props.altbauH === false && props.bodenH === false) {
      toReturn = [mauerNeuBruestungMit(), fenster(), bandmassNeuBruestung(), rks(),  ]
    }



    if (props.fussbodenH === true && props.altbauH === true) {
      toReturn.push(bandmassFussboden(), fussbodenAlt(), bodenProfilMit())
    } else if (props.fussbodenH === false && props.bodenH === true) {
      toReturn.push( bodenProfilOhne())
    }
    if (props.fussbodenH === true && props.altbauH === false) {
      toReturn.push(bandmassFussboden(), fussbodenNeu(), bodenProfilMit(), )
    } else if (props.fussbodenH === false && props.bodenH === true) {
      toReturn.push( bodenProfilOhne())
    }

    if (props.bauart === "neubau_dg" && props.bodenH === false && props.altbauH === false) {
      toReturn.push( dgNeuBruestung())
    } else if (props.bauart === "neubau_dg" && props.bodenH === true && props.altbauH === false) {
      toReturn.push( dgNeuBoden())
    }





    return toReturn;
  }
  
  return show()
 

 
}





