const FARBEN = [
  {
    id: "k1",
    name: "weiss",
    alt: "weiß",
    src: "./pics/farben/white.jpg",
    s: 0,
    k: 0,
    texture: "../../colors/white.jpg",
    light_inside: 0.1,
    light_outside: 0.1,
    blackGasket: false,
    core: "white",
    materialAlu: false,
    

  },
  {
    id: "k2",
    name: "anthrazitgrau",
    alt: "anthrazitgrau",
    src: "../pics/farben/anthrazitgrau.png",
    s: 1,
    k: 1,
    texture: "../../colors/anthrazitgrau.jpg",
    light_inside: 1.6,
    light_outside: 1.6,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k3",
    name: "anthrazitgrau-glatt",
    alt: "anthrazitgrau glatt",
    src: "../pics/farben/anthrazitgrau_glatt.png",
    s: 1,
    k: 1,
    texture: "../../colors/anthrazitgrau_glatt.jpg",
    light_inside: 1.6,
    light_outside: 1.6,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k4",
    name: "Alux-DB-703",
    alt: "Alux DB 703",
    src: "../pics/farben/db_703.png",
    s: 1,
    k: 1,
    texture: "../../colors/db_703.jpg",
    light_inside: 0.7,
    light_outside: 0.7,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k5",
    name: "Metbrush-Anthrazitgrau",
    alt: "Metbrush Anthrazitgrau",
    src: "../pics/farben/metbrush_anthrazitgrau.png",
    s: 1,
    k: 1,
    texture: "../../colors/metbrush-anthrazitgrau.jpg",
    light_inside: 1,
    light_outside: 1,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k6",
    name: "Black-Ulti-Matt",
    alt: "Schwarz Ulti Matt",
    src: "../pics/farben/black_ulti_matt.png",
    s: 1,
    k: 1,
    texture: "../../colors/black_ulti_matt.jpg",
    light_inside: 1.8,
    light_outside: 1.8,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k7",
    name: "Anthrazitgrau-Ulti-Matt",
    alt: "Anthrazitgrau Ulti Matt",
    src: "../pics/farben/anthrazitgrau_ulti_matt.png",
    s: 1,
    k: 1,
    texture: "../../colors/anthrazitgrau_ulti_matt.jpg",
    light_inside: 1.8,
    light_outside: 1.8,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k8",
    name: "umbragrau-glatt",
    alt: "umbragrau glatt",
    src: "../pics/farben/umbragrau_glatt.jpg",
    s: 1,
    k: 1,
    texture: "../../colors/umbragrau_glatt.jpg",
    light_inside: 1.8,
    light_outside: 1.8,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k9",
    name: "basaltgrau",
    alt: "basaltgrau",
    src: "./pics/farben/basaltgrau.png",
    s: 1,
    k: 2,
    texture: "../../colors/basaltgrau.jpg",
    light_inside: 1.3,
    light_outside: 1.3,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },

  {
    id: "k10",
    name: "quarzgrau",
    alt: "quarzgrau",
    src: "./pics/farben/quarzgrau.png",
    s: 2,
    k: 1,
    texture: "../../colors/quarzgrau.jpg",
    light_inside: 1.3,
    light_outside: 1.3,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k11",
    name: "quarzgrau-sftn-matt",
    alt: "quarzgrau SFTN matt",
    src: "./pics/farben/quarzgrau_sftn_matt.png",
    s: 2,
    k: 1,
    texture: "../../colors/quarzgrau-sftn-matt.jpg",
    light_inside: 1.3,
    light_outside: 1.3,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k12",
    name: "metbrush-quarzgrau",
    alt: "metbrush quarzgrau",
    src: "./pics/farben/metbrush-quarzgrau.png",
    s: 2,
    k: 1,
    texture: "../../colors/metbrush-quarzgrau.jpg",
    light_inside: 1.3,
    light_outside: 1.3,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k13",
    name: "metbrush-silver",
    alt: "metbrush silver",
    src: "./pics/farben/metbrush-silver.png",
    s: 2,
    k: 1,
    texture: "../../colors/metbrush-silver.jpg",
    light_inside: 0.3,
    light_outside: 0.3,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k14",
    name: "betongrau",
    alt: "betongrau",
    src: "./pics/farben/betongrau.png",
    s: 1,
    k: 2,
    texture: "../../colors/betongrau.jpg",
    light_inside: 0.7,
    light_outside: 0.7,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k15",
    name: "achatgrau",
    alt: "achatgrau",
    src: "./pics/farben/achatgrau.png",
    s: 1,
    k: 2,
    texture: "../../colors/achatgrau.jpg",
    light_inside: 0.7,
    light_outside: 0.7,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },

  {
    id: "k16",
    name: "lichtgrau",
    alt: "lichtgrau",
    src: "./pics/farben/lichtgrau.png",
    s: 1,
    k: 9,
    texture: "../../colors/lichtgrau.jpg",
    light_inside: 1.3,
    light_outside: 1.3,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },

  {
    id: "k17",
    name: "alu-gebuerstet",
    alt: "Alu gebürstet",
    src: "./pics/farben/alugebuerstet.png",
    s: 4,
    k: 9,
    texture: "../../colors/alugebuerstet.jpg",
    light_inside: 0.5,
    light_outside: 0.5,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },

  {
    id: "k18",
    name: "schiefergrau-glatt",
    alt: "schiefergrau glatt",
    src: "./pics/farben/schiefergrau.png",
    s: 2,
    k: 2,
    texture: "../../colors/schiefergrau_glatt.jpg",
    light_inside: 1.6,
    light_outside: 1.6,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },

  {
    id: "k19",
    name: "silbergrau",
    alt: "silbergrau",
    src: "./pics/farben/silbergrau.png",
    s: 2,
    k: 2,
    texture: "../../colors/silbergrau.jpg",
    light_inside: 1,
    light_outside: 1,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },

  {
    id: "k20",
    name: "signalgrau-glatt",
    alt: "signalgrau glatt",
    src: "./pics/farben/signalgrau.png",
    s: 1,
    k: 2,
    texture: "../../colors/signalgrau_glatt.jpg",
    light_inside: 1,
    light_outside: 1,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k21",
    name: "metbrush-platin",
    alt: "metbrush platin",
    src: "./pics/farben/metbrush_platin.png",
    s: 1,
    k: 2,
    texture: "../../colors/metbrush_platin.jpg",
    light_inside: 0.8,
    light_outside: 0.8,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },

  {
    id: "k22",
    name: "cremeweiß",
    alt: "cremeweiß",
    src: "./pics/farben/cremeweiss.png",
    s: 3,
    k: 2,
    texture: "../../colors/cremeweiss.jpg",
    light_inside: 0.5,
    light_outside: 0.5,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  },

  {
    id: "k23",
    name: "reinweiß",
    alt: "reinweiß",
    src: "./pics/farben/reinweiss.png",
    s: 3,
    k: 9,
    texture: "../../colors/reinweiss.jpg",
    light_inside: 0.5,
    light_outside: 0.5,
    blackGasket: false,
    core: "white",
    materialAlu: false,
  }, 
  {
    id: "k24",
    name: "golden-oak",
    alt: "goldene Eiche",
    src: "./pics/farben/goldenoak.png",
    s: 1,
    k: 1,
    texture: "../../colors/goldenoak.jpg",
    light_inside: 1.3,
    light_outside: 1.3,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k25",
    name: "mahagoni",
    alt: "Mahagoni",
    src: "./pics/farben/mahagoni.png",
    s: 1,
    k: 1,
    texture: "../../colors/mahagoni.jpg",
    light_inside: 1.6,
    light_outside: 1.6,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },

  {
    id: "k26",
    name: "nussbaum",
    alt: "Nußbaum",
    src: "./pics/farben/nussbaum.png",
    s: 1,
    k: 1,
    texture: "../../colors/nussbaum.jpg",
    light_inside: 1.8,
    light_outside: 1.8,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k27",
    name: "rustic-cherry",
    alt: "Rustic Cherry",
    src: "./pics/farben/rustic-cherry.png",
    s: 1,
    k: 1,
    texture: "../../colors/rustic-cherry.jpg",
    light_inside: 1.4,
    light_outside: 1.4,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k28",
    name: "black-cherry",
    alt: "Black Cherry",
    src: "./pics/farben/black-cherry.png",
    s: 1,
    k: 1,
    texture: "../../colors/black-cherry.jpg",
    light_inside: 1.4,
    light_outside: 1.4,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k29",
    name: "eiche-dunkel",
    alt: "Eiche dunkel",
    src: "./pics/farben/eiche_dunkel.png",
    s: 1,
    k: 1,
    texture: "../../colors/eiche_dunkel.jpg",
    light_inside: 1.4,
    light_outside: 1.4,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k30",
    name: "eiche-natur",
    alt: "Eiche Natur",
    src: "./pics/farben/eiche-natur.png",
    s: 2,
    k: 9,
    texture: "../../colors/eiche_natur.jpg",
    light_inside: 0.5,
    light_outside: 0.5,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k31",
    name: "irish-oak",
    alt: "Irish Oak",
    src: "./pics/farben/irish-oak.png",
    s: 2,
    k: 9,
    texture: "../../colors/irish-oak.jpg",
    light_inside: 0.5,
    light_outside: 0.5,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k32",
    name: "oregon",
    alt: "Oregon",
    src: "./pics/farben/oregon.png",
    s: 2,
    k: 2,
    texture: "../../colors/oregon.jpg",
    light_inside: 0.5,
    light_outside: 0.5,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k33",
    name: "bergkiefer",
    alt: "Bergkiefer",
    src: "./pics/farben/bergkiefer.png",
    s: 2,
    k: 2,
    texture: "../../colors/bergkiefer.jpg",
    light_inside: 0.5,
    light_outside: 0.5,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k34",
    name: "winchester",
    alt: "Winchester",
    src: "./pics/farben/winchester.jpg",
    s: 1,
    k: 1,
    texture: "../../colors/winchester.jpg",
    light_inside: 0.5,
    light_outside: 0.5,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k35",
    name: "douglasie",
    alt: "Douglasie",
    src: "./pics/farben/douglasie.png",
    s: 1,
    k: 1,
    texture: "../../colors/douglasie.jpg",
    light_inside: 1,
    light_outside: 1,
    gasket: "grey",
    core: "white",
    materialAlu: false,
  },
  {
    id: "k36",
    name: "braunmaron",
    alt: "braunmaron",
    src: "./pics/farben/braunmaron.png",
    s: 2,
    k: 2,
    texture: "../../colors/braunmaron.jpg",
    light_inside: 1.5,
    light_outside: 1.5,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k37",
    name: "schockobraun",
    alt: "schockobraun",
    src: "./pics/farben/schockobraun.png",
    s: 2,
    k: 2,
    texture: "../../colors/schockobraun.jpg",
    light_inside: 1.5,
    light_outside: 1.5,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k38",
    name: "schwarzbraun",
    alt: "schwarzbraun",
    src: "./pics/farben/schwarzbraun.png",
    s: 2,
    k: 2,
    texture: "../../colors/schwarzbraun.jpg",
    light_inside: 1.5,
    light_outside: 1.5,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k39",
    name: "brillantblau",
    alt: "brillantblau",
    src: "./pics/farben/brillantblau.png",
    s: 3,
    k: 2,
    texture: "../../colors/brillantblau.jpg",
    light_inside: 1,
    light_outside: 1,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k40",
    name: "stahlblau",
    alt: "stahlblau",
    src: "./pics/farben/stahlblau.png",
    s: 3,
    k: 2,
    texture: "../../colors/stahlblau.jpg",
    light_inside: 1.8,
    light_outside: 1.8,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k41",
    name: "moosgruen",
    alt: "moosgrün",
    src: "./pics/farben/moosgruen.png",
    s: 3,
    k: 2,
    texture: "../../colors/moosgruen.jpg",
    light_inside: 1.7,
    light_outside: 1.7,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k42",
    name: "tannengruen",
    alt: "tannengrün",
    src: "./pics/farben/tannengruen.png",
    s: 3,
    k: 9,
    texture: "../../colors/tannengruen.jpg",
    light_inside: 1.8,
    light_outside: 1.8,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "k43",
    name: "weinrot",
    alt: "weinrot",
    src: "./pics/farben/weinrot.png",
    s: 3,
    k: 2,
    texture: "../../colors/weinrot.jpg",
    light_inside: 1.3,
    light_outside: 1.3,
    blackGasket: true,
    core: "white",
    materialAlu: false,
  },
  {
    id: "a1",
    name: "weiss_alu",
    alt: "Weißaluminium RAL 9006",
    src: "./pics/farben/alu.png",
    color: "#e7e7e9",
    light_inside: 0.1,
    light_outside: 0.1,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness.jpg",
    texture: "../../colors/white.jpg",


    
  },
  {
    id: "a1a",
    name: "grau_alu",
    alt: "Graualuminium RAL 9007",
    src: "./pics/farben/graualu.png",
    color: "#878581",
    light_inside: 0.2,
    light_outside: 0.2,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness.jpg",
    texture: "../../colors/white.jpg",
 

  },
  {
    id: "a2",
    name: "anthrazitgrau_alu",
    alt: "anthrazitgrau RAL 7016",
    src: "./pics/farben/anthrazitgrau_glatt.jpg",
    color: "#383E42",
    light_inside: 1,
    light_outside: 1,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",
 

  },
  {
    id: "a3",
    name: "weiss_9016",
    alt: "weiß RAL 9016",
    src: "./pics/farben/white.jpg",
    color: "#FFFFFF",
    light_inside: 0.6,
    light_outside: 0.6,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness2.jpg",
    texture: "../../colors/white.jpg",
  

  },
  {
    id: "a4", 
    name: "achatgrau_alu",
    alt: "achatgrau RAL 7038",
    src: "./pics/farben/achatgrau_alu.png",
    color: "#b5b8b1",
    light_inside: 0.1,
    light_outside: 0.1,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",

  },
  {
    id: "a5", 
    name: "eisengrau",
    alt: "eisengrau RAL 7011",
    src: "./pics/farben/eisengrau.png",
    color: "#4D5659",
    light_inside: 0.4,
    light_outside: 0.4,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness.jpg",
    texture: "../../colors/white.jpg",
  
  },
  {
    id: "a6", 
    name: "kieselgrau",
    alt: "kieselgrau RAL 7032",
    src: "./pics/farben/kieselgrau.png",
    color: "#B9B9A8",
    light_inside: 0.1,
    light_outside: 0.1,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",
 

  },
  {
    id: "a7", 
    name: "schokoladen_braun",
    alt: "Schokoladen- braun RAL 8017",
    src: "./pics/farben/schokoladen_braun.png",
    color: "#442f29",
    light_inside: 1,
    light_outside: 1,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",
    

  },
  {
    id: "a8", 
    name: "mahagoni_braun",
    alt: "Mahagonibraun RAL 8016",
    src: "./pics/farben/mahagoni_braun.png",
    color: "#4c2b20",
    light_inside: 1,
    light_outside: 1,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",
    

  },
  {
    id: "a8a", 
    name: "sepia_braun",
    alt: "Sepiabraun RAL 8014",
    src: "./pics/farben/sepiabraun.png",
    color: "#4a3526",
    light_inside: 1,
    light_outside: 1,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",
    

  },
  {
    id: "a9", 
    name: "ocker_braun",
    alt: "Ockerbraun RAL 8001",
    src: "./pics/farben/ockerbraun.png",
    color: "#9d622b",
    light_inside: 0.3,
    light_outside: 0.3,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",
    

  },
  {
    id: "a10", 
    name: "moosgruen_alu",
    alt: "Moosgrün RAL 6005",
    src: "./pics/farben/moosgruen.png",
    color: "#114232",
    light_inside: 1.2,
    light_outside: 1.2,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",
    

  },
  {
    id: "a11", 
    name: "tannengruen_alu",
    alt: "Tannengrün RAL 6009",
    src: "./pics/farben/tannengruen.png",
    color: "#27352a",
    light_inside: 1.2,
    light_outside: 1.2,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",
    
  },
  {
    id: "a12", 
    name: "schwarzbraun_alu",
    alt: "Schwarzbraun RAL 8022",
    src: "./pics/farben/schwarzbraun_alu.png",
    color: "#1a1718",
    light_inside: 1,
    light_outside: 1,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",
    

  },
  {
    id: "a13", 
    name: "tiefschwarz",
    alt: "Tiefschwarz RAL 9005",
    src: "./pics/farben/tiefschwarz.png",
    color: "#0e0e10",
    light_inside: 1,
    light_outside: 1,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
    texture: "../../colors/white.jpg",
  },
  {
    id: "a14",
    name: "golden-oak-alu",
    alt: "goldene Eiche Alu",
    src: "./pics/farben/goldenoak.png",
    texture: "../../colors/goldenoak.jpg",
    color: "#ffffff",
    light_inside: 0.7,
    light_outside: 0.7,
    blackGasket: true,
    materialAlu: true,
    roughness: "./colors/alu_roughness3.jpg",
  },
  
];

export function getAllColours() {
  return FARBEN;
}
