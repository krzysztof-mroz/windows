import { Suspense, useRef, useState, useEffect } from "react";
import { Wall, WallH } from "./buildingmodels";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
  useTexture,
  Html,
  useProgress,
} from "@react-three/drei";
import { getAllColours } from "../data/colours";

function buildingvisualisation({ ...props }) {
 
  const [bauart, setBauart] = useState("neubau");
  const [fensterBreite, setFensterBreite] = useState(0);
  const [fensterHoehe, setFensterHoehe] = useState(0);
  const [innenLeibungZeigen, setInnenLeibungZeigen] = useState(false);
  const [innenOeffnungZeigen, setInnenOeffnungZeigen] = useState(false);
  const [innenHoeheZeigen, setInnenHoeheZeigen] = useState(false);
  const [innenHoeheAltZeigen, setInnenHoeheAltZeigen] = useState(false);
  const [innenHoeheAltFussbodenZeigen, setInnenHoeheAltFussbodenZeigen] = useState(false);
  const [altFussbodenRolloZeigen, setAltFussbodenRolloZeigen] = useState(false);
  const [altInnenFussbodenRolloZeigen, setAltInnenFussbodenRolloZeigen] = useState(false);
  const [fussbodenNeuOhneZeigen, setFussbodenNeuOhneZeigen] = useState(false);
  const [fussbodenNeueMitZeigen, setFussbodenNeuMitZeigen] = useState(false);
  const [kalkuAltbauZeigen, setKalkuAltbauZeigen] = useState(false);
  const [kalkuNeubauZeigen, setKalkuNeubauZeigen] = useState(false);
  const [verbreiterungenSeitlich, setVerbreiterungenSeitlich] = useState(0);
  const [verbreiterungUnten, setVerbreiterungUnten] = useState(0);
  const [platzOben, setPlatzOben] = useState(0);
  const [breiteZeigen, setBreiteZeigen] = useState(true);
  const [hoeheZeigen, setHoeheZeigen] = useState(false);
  const [switchButton, setSwitchButton] = useState("Höhe messen");
  const [altbauH, setAltbauH] = useState(false);
  const [bodenH, setBodenH] = useState(false);
  const [fussbodenH, setFussbodenH] = useState(false);
  const [rolloH, setRolloH] = useState(false);
  const [ifHSH, setIfHSH] = useState(false);


  const breiteNeubauRef = useRef();
  const breiteAltbauRef = useRef();
  const breiteAussenleibungRef = useRef();
  const breiteInnenleibungRef = useRef();
  const breiteAussenoeffnungRef = useRef();
  const breiteInnenoeffnungRef = useRef();
  const neuBruestungOhneRef = useRef()
  const altBruestungOhneRef = useRef()
  const neuBruestungMitRef = useRef()
  const altBruestungMitRef = useRef()
  const altAlBruestungMitRef = useRef()
  const neuBodenOhneOhneRef = useRef()
  const neuBodenOhneMitRef = useRef()
  const neuBodenMitOhneRef = useRef()
  const neuFussbodenMitOhneRef = useRef()
  const neuBodenMitMitRef = useRef()
  const neuFussbodenMitMitRef = useRef()
  const altBodenOhneOhneRef = useRef()
  const altAlBodenOhneMitRef = useRef()
  const altBodenOhneMitRef = useRef()
  const altFussbodenMitOhneRef = useRef()
  const altBodenMitOhneRef = useRef()
  const altFussbodenMitMitRef = useRef()
  const altAlBodenMitMitRef = useRef()
  const altBodenMitMitRef = useRef()

  function Loader() {
    const { progress } = useProgress();
    return <Html center>{parseInt(progress)} % geladen</Html>;
  }

  

  const Background = (props) => {
    const texture = useTexture("/pics/spring_texture.jpg");
    return <primitive attach="background" object={texture} />;
  };

  async function kalkuBreite(event) {
    event.preventDefault();
    const breite = parseInt(breiteNeubauRef.current.value);
    setFensterBreite(breite - 30);
    setVerbreiterungenSeitlich(0);
  }

  async function kalkuBreiteAltbau(event) {
    event.preventDefault();
    const breite = parseInt(breiteAltbauRef.current.value);
    setFensterBreite(breite - 30);
    setVerbreiterungenSeitlich(0);
  }

  async function showInnenAltbau(event) {
    event.preventDefault();
    setVerbreiterungenSeitlich(0);
    setInnenLeibungZeigen(true);
    setKalkuAltbauZeigen(false);
  }

  async function showInnenAltbauHoehe(event) {
    event.preventDefault();
    setInnenHoeheZeigen(true)
  }

  async function showFussbodenNeuOhne(event) {
    event.preventDefault();
    setFussbodenNeuOhneZeigen(true)
  }

  async function showFussbodenNeuMit(event) {
    event.preventDefault();
    setFussbodenNeuMitZeigen(true)
  }

  async function showInnenAltbauBodenHoehe(event) {
    event.preventDefault();
    setInnenHoeheAltZeigen(true)
  }

  async function showInnenAltbauBodenFussodenHoehe(event) {
    event.preventDefault();
    setInnenHoeheAltFussbodenZeigen(true)
  }

  async function showAltbauFussbodenRolloHoehe(event) {
    event.preventDefault();
    setAltFussbodenRolloZeigen(true)
  }

  async function showInnenAltbauFussbodenRolloHoehe(event) {
    event.preventDefault();
    setAltInnenFussbodenRolloZeigen(true)
  }

  

  

  async function showInnenNeubau(event) {
    event.preventDefault();
    setVerbreiterungenSeitlich(false);
    setInnenOeffnungZeigen(true);
    setKalkuNeubauZeigen(false);
  }

  async function kalkuAltbauMit(event) {
    event.preventDefault();
    setVerbreiterungenSeitlich(0);
    setKalkuAltbauZeigen(true);
    const aussenBreite = parseInt(breiteAussenleibungRef.current.value);
    const innenBreite = parseInt(breiteInnenleibungRef.current.value);
    const difference = innenBreite - aussenBreite;
    if (difference <= 110) {
      setFensterBreite(innenBreite - 30);
    } else if (difference > 110) {
      setFensterBreite(aussenBreite + 80);
    }

    if (difference >= 140) {
      setVerbreiterungenSeitlich(difference - 110);
    }
  }

  async function kalkuNeubauMit(event) {
    event.preventDefault();
    setVerbreiterungenSeitlich(0);
    setKalkuNeubauZeigen(true);
    const aussenBreite = parseInt(breiteAussenoeffnungRef.current.value);
    const innenBreite = parseInt(breiteInnenoeffnungRef.current.value);
    const difference = innenBreite - aussenBreite;
    if (difference <= 110) {
      setFensterBreite(innenBreite - 30);
    } else if (difference > 110) {
      setFensterBreite(aussenBreite + 80);
    }

    if (difference >= 140) {
      setVerbreiterungenSeitlich(difference - 110);
    }
  }

  async function kalkuNeuBruestungOhne(event) {
    event.preventDefault();
    const hoehe = parseInt(neuBruestungOhneRef.current.value);
    setFensterHoehe(hoehe-50)
  }

  async function kalkuAltBruestungOhne(event) {
    event.preventDefault();
    const hoehe = parseInt(altBruestungOhneRef.current.value);
    setFensterHoehe(hoehe-50)
  }

  async function kalkuNeuBruestungMit(event) {
    event.preventDefault();
    const hoehe = parseInt(neuBruestungMitRef.current.value);
    setFensterHoehe(hoehe-40)
  }

  async function kalkuAltBruestungMit(event) {
    event.preventDefault();
    const hoehe = parseInt(altBruestungMitRef.current.value);
    const hoeheAl = parseInt(altAlBruestungMitRef.current.value);
    const difference = hoehe - hoeheAl;
    if (difference > 219) {
      setFensterHoehe(hoeheAl-40)
    } else {
      setFensterHoehe(hoeheAl-40-(220-difference))
    }
    setPlatzOben(difference-10)
  }

  async function kalkuNeuBodenOhneOhne(event) {
    event.preventDefault();
    const hoehe = parseInt(neuBodenOhneOhneRef.current.value);
    if (ifHSH === false) {
      setFensterHoehe(hoehe-20)
    } else {
      setFensterHoehe(hoehe+30)
    }   
  }

  async function kalkuNeuBodenOhneMit(event) {
    event.preventDefault();
    const hoehe = parseInt(neuBodenOhneMitRef.current.value);
    if (ifHSH === false) {
      setFensterHoehe(hoehe-10)
    } else {
      setFensterHoehe(hoehe+40)
    }   
  }

  async function kalkuNeuBodenMitOhne(event) {
    event.preventDefault();
    const hoehe = parseInt(neuBodenMitOhneRef.current.value);
    const fussboden = parseInt(neuFussbodenMitOhneRef.current.value);

    if (ifHSH === false) {
      setFensterHoehe(hoehe-10-fussboden)
      setVerbreiterungUnten(fussboden-10)
    } else {
      setFensterHoehe(hoehe-fussboden+30)
      setVerbreiterungUnten(fussboden-50)
      
    }   
  }

  async function kalkuNeuBodenMitMit(event) {
    event.preventDefault();
    const hoehe = parseInt(neuBodenMitMitRef.current.value);
    const fussboden = parseInt(neuFussbodenMitMitRef.current.value);

    if (ifHSH === false) {
      setFensterHoehe(hoehe-fussboden)
      setVerbreiterungUnten(fussboden-10)
    } else {
      setFensterHoehe(hoehe-fussboden+40)
      setVerbreiterungUnten(fussboden-50)   
    }   
  }

  async function kalkuAltBodenOhneOhne(event) {
    event.preventDefault();
    const hoehe = parseInt(altBodenOhneOhneRef.current.value);
    if (ifHSH === false) {
      setFensterHoehe(hoehe-20)
    } else {
      setFensterHoehe(hoehe+30)
    }   
  }

  async function kalkuAltBodenOhneMit(event) {
    event.preventDefault();
    const hoehe = parseInt(altBodenOhneMitRef.current.value);
    const hoeheAl = parseInt(altAlBodenOhneMitRef.current.value);
    const difference = hoehe - hoeheAl;
    if (ifHSH === false) {
      if (difference > 219) {
        setFensterHoehe(hoeheAl-10)
      } else {
        setFensterHoehe(hoeheAl-10-(220-difference))
      }
      setPlatzOben(difference-10)
    } else {
      if (difference > 219) {
        setFensterHoehe(hoeheAl+30)
      } else {
        setFensterHoehe(hoeheAl+30-(220-difference))
      }
      setPlatzOben(difference-10)
    }   
  }

  async function kalkuAltBodenMitOhne(event) {
    event.preventDefault();
    const hoehe = parseInt(altBodenMitOhneRef.current.value);
    const fussboden = parseInt(altFussbodenMitOhneRef.current.value);
    if (ifHSH === false) {
      setFensterHoehe(hoehe-10-fussboden)
      setVerbreiterungUnten(fussboden-10)
    } else {
      setFensterHoehe(hoehe-fussboden+30)
      setVerbreiterungUnten(fussboden-50)    
    }   
  }

  async function kalkuAltBodenMitMit(event) {
    event.preventDefault();
    const hoehe = parseInt(altBodenMitMitRef.current.value);
    const hoeheAl = parseInt(altAlBodenMitMitRef.current.value);
    const fussboden = parseInt(altFussbodenMitMitRef.current.value);
    const difference = hoehe - hoeheAl;
    if (ifHSH === false) {
      if (difference > 219) {
        setFensterHoehe(hoeheAl-fussboden)
        setVerbreiterungUnten(fussboden-10)
      } else {
        setFensterHoehe(hoeheAl-(220-difference))
        setVerbreiterungUnten(fussboden-10)
      }
      setPlatzOben(difference-10)
    } else {
      if (difference > 219) {
        setFensterHoehe(hoeheAl+40-fussboden)
        setVerbreiterungUnten(fussboden-50)
      } else {
        setFensterHoehe(hoeheAl+40-(220-difference))
        setVerbreiterungUnten(fussboden-50)
      }
      setPlatzOben(difference-10)
    }   
  }


  function switchBH() {
    return (
      <div className="tc">
        <button
          className="w3-button w3-border w3-border-orange w3-sand mv1 mh2 w-80 w-40-l"
          onMouseDown={switchButton === "Höhe messen" ? showHeigth : showWidth}
        >
          {switchButton}
        </button>
      </div>
    );
  }

  function showHeigth() {
    setBreiteZeigen(false);
    setHoeheZeigen(true);
    setSwitchButton("Breite messen");
    if (bauart === "neubau") {
      setAltbauH(false);
    } else if (bauart === "altbau") {
      setAltbauH(true);
    } else if (bauart === "neubau_dg") {
      setAltbauH(false);
    } else if (bauart === "altbau_al") {
      setAltbauH(true);
    }
  }

  function showWidth() {
    setBreiteZeigen(true);
    setHoeheZeigen(false);
    setSwitchButton("Höhe messen");
  }

  function altBodenMitMit() { 
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Außenleibung</b> Höhe an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte von Fußboden bis Unterkante <b>Außen</b>sturz.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altAlBodenMitMitRef}
                onChange={showAltbauFussbodenRolloHoehe}
              />
            </div>   
          </div>                 
      </div>
    )
  }

  function altBodenMitMit2() { 
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Innenleibung</b> Höhe an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte von Fußboden bis ganz nach Oben Unterkante <b>Innen</b>sturz.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100 w-60-l">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altBodenMitMitRef}
                onChange={showInnenAltbauFussbodenRolloHoehe}
              />
            </div>   
          </div>                 
      </div>
    )
  }

  function altBodenMitMit3() { 
    return (
      <div className="mt4">
        <p>
        Bitte die (ggf. geplante) Höhe des <b>Fußboden</b> Aufbaus (Estich oder Fußbodenheizung) von Rohfußboden bis Fertigfußboden angeben. Für diesen Bereich sollen als Schutz vor Kältebrücke Verbreiterungen verwendet werden. {" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100 w-60-l">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altFussbodenMitMitRef}
                onChange={kalkuAltBodenMitMit}
              />
            </div>   
          </div>   
          {(fensterHoehe > 0 && ifHSH === false) && <p> Fenster (bzw. Tür) Höhe beträgt <b>{fensterHoehe} mm.</b></p>}
          {(fensterHoehe > 0 && ifHSH === false) && <p> Es wurde 10 mm unten als Montagespiel abgezogen.</p>}
          {(verbreiterungUnten > 0) && <p> Verbreiterung unten beträgt zusätzlich {verbreiterungUnten} mm.</p>}
          {(fensterHoehe > 0 && ifHSH === true) && <p> Hebe Schiebe Anlage soll 40 mm in den Fußboden eingelassen werden. Somit die Höhe von Hebe Schiebe Anlage beträgt <b>{fensterHoehe} mm.</b> </p>}   
          {(platzOben > 0) && <p>Es bleiben {(platzOben > 210) ? platzOben : 210 } mm übrig für Aufsatz Rollladenkasten. Der Kasten ist 210 mm hoch.</p>}          
      </div>
    )
  }

  function altBodenMitOhne() { 
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Leibung</b> Höhe an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte von Fußboden bis Unterkante Sturz.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altBodenMitOhneRef}
                onChange={showInnenAltbauBodenFussodenHoehe}
              />
            </div>   
          </div>                 
      </div>
    )
  }

  function altBodenMitOhne2() { 
    return (
      <div className="mt4">
        <p>
        Bitte die (ggf. geplante) Höhe des <b>Fußboden </b>Aufbaus (Estich oder Fußbodenheizung) von Rohfußboden bis Fertigfußboden angeben. Für diesen Bereich sollen als Schutz vor Kältebrücke Verbreiterungen verwendet werden. {" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altFussbodenMitOhneRef}
                onChange={kalkuAltBodenMitOhne}
              />
            </div>   
          </div>   
          {(fensterHoehe > 0 && ifHSH === false) && <p> Fenster (bzw. Tür) Höhe beträgt <b>{fensterHoehe} mm.</b></p>}
          {(fensterHoehe > 0 && ifHSH === false) && <p> Es wurde 20 mm als Montagespiel abgezogen.</p>}
          {(verbreiterungUnten > 0) && <p> Verbreiterung unten beträgt zusätzlich {verbreiterungUnten} mm.</p>}
          {(fensterHoehe > 0 && ifHSH === true) && <p> Hebe Schiebe Anlage soll 40 mm in den Fußboden eingelassen werden. Somit die Höhe von Hebe Schiebe Anlage beträgt <b>{fensterHoehe} mm.</b> </p>}
      </div>
    )
  }

  function altBodenOhneMit() { 
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Außenleibung</b> Höhe an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte von Fußboden bis Unterkante <b>Außen</b>sturz.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altAlBodenOhneMitRef}
                onChange={showInnenAltbauBodenHoehe}
              />
            </div>   
          </div>     
                      
      </div>
    )
  }

  function altBodenOhneMit2() { 
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Innenleibung</b> Höhe an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte von Fußboden bis ganz Oben Unterkante <b>Innen</b>sturz, wie in 3d Abbildung.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altBodenOhneMitRef}
                onChange={kalkuAltBodenOhneMit}
              />
            </div>
           
          </div>
          {(fensterHoehe > 0 && ifHSH === false) && <p> Fenster (bzw. Tür) Höhe beträgt <b>{fensterHoehe} mm.</b></p>}
          {(fensterHoehe > 0 && ifHSH === false) && <p> Es wurde 10 mm unten als Montagespiel abgezogen.</p>}
          {(platzOben > 0) && <p>Es bleiben {(platzOben > 210) ? platzOben : 210 } mm übrig für Aufsatz Rollladenkasten. Der Kasten ist 210 mm hoch.</p>}
          {(fensterHoehe > 0 && ifHSH === true) && <p> Hebe Schiebe Anlage soll 40 mm in den Fußboden eingelassen werden. Somit die Höhe von Hebe Schiebe Anlage beträgt <b>{fensterHoehe} mm.</b> Denken Sie bitte daran, dass 50 mm Platz für die Schwelle im Fußboden vorbereitet (zB. ausgefräst) werden muss.</p>}
               
      </div>
    )
  }

  function altBodenOhneOhne() {   
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Leibung</b> Höhe an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altBodenOhneOhneRef}
                onChange={kalkuAltBodenOhneOhne}
              />
            </div>
           
          </div>
          {(fensterHoehe > 0 && ifHSH === false) && <p> Fenster (bzw. Tür) Höhe beträgt <b>{fensterHoehe} mm.</b> Die Höhe beinhaltet Aufsatzrollladen Kasten, falls benötigt.</p>}
          {(fensterHoehe > 0 && ifHSH === false) && <p> Es wurde 20 mm als Montagespiel abgezogen.</p>}
          {(fensterHoehe > 0 && ifHSH === true) && <p> Hebe Schiebe Anlage soll 40 mm in den Fußboden eingelassen werden. Somit die Höhe von Hebe Schiebe Anlage beträgt <b>{fensterHoehe} mm.</b> Denken Sie bitte daran, dass 50 mm Platz für die Schwelle im Fußboden vorbereitet (zB. ausgefräst) werden muss.</p>}
               
      </div>
    )
  }

  function neuBodenMitMit() { 
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Maueröffnungs-Höhe</b> an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte von Rohfußboden bis Unterkante Rollladenkasten.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={neuBodenMitMitRef}
                onChange={showFussbodenNeuMit}
              />
            </div>
           
          </div>
          
               
      </div>
    )
  }

  function neuBodenMitMit2() { 
    return (
      <div className="mt4 ">
        <p>
        Bitte die (ggf. geplante) Höhe des <b>Fußboden</b> Aufbaus (Estich oder Fußbodenheizung) von Rohfußboden bis Fertigfußboden angeben. Für diesen Bereich sollen als Schutz vor Kältebrücke Verbreiterungen verwendet werden. {" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100 w-60-l">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={neuFussbodenMitMitRef}
                onChange={kalkuNeuBodenMitMit}
              />
            </div>
           
          </div>
          {(fensterHoehe > 0 && ifHSH === false) && <p> Fenster (bzw. Tür) Höhe beträgt <b>{fensterHoehe} mm.</b></p>}
          {(fensterHoehe > 0 && ifHSH === false) && <p> Es wurde 10 mm als Montagespiel abgezogen.</p>}
          {(verbreiterungUnten > 0) && <p> Verbreiterung unten beträgt zusätzlich {verbreiterungUnten} mm.</p>}
          {(fensterHoehe > 0 && ifHSH === true) && <p> Hebe Schiebe Anlage soll 40 mm in den Fußboden eingelassen werden. Somit die Höhe von Hebe Schiebe Anlage beträgt <b>{fensterHoehe} mm.</b> </p>}
               
      </div>
    )
  }

  function neuBodenMitOhne() { 
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Maueröffnungs-Höhe</b> an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte von Rohfußboden bis Unterkante Sturz.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={neuBodenMitOhneRef}
                onChange={showFussbodenNeuOhne}
              />
            </div>
           
          </div>
          
               
      </div>
    )
  }

  function neuBodenMitOhne2() { 
    return (
      <div className="mt4 ">
        <p>
        Bitte die (ggf. geplante) Höhe des <b>Fußboden</b> Aufbaus (Estich oder Fußbodenheizung) von Rohfußboden bis Fertigfußboden angeben. Für diesen Bereich sollen als Schutz vor Kältebrücke Verbreiterungen verwendet werden. {" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100 w-60-l">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={neuFussbodenMitOhneRef}
                onChange={kalkuNeuBodenMitOhne}
              />
            </div>
           
          </div>
          {(fensterHoehe > 0 && ifHSH === false) && <p> Fenster (bzw. Tür) Höhe beträgt <b>{fensterHoehe} mm.</b> Die Höhe beinhaltet Aufsatzrollladen Kasten, falls benötigt.</p>}
          {(fensterHoehe > 0 && ifHSH === false) && <p> Es wurde 20 mm als Montagespiel abgezogen.</p>}
          {(verbreiterungUnten > 0) && <p> Verbreiterung unten beträgt zusätzlich {verbreiterungUnten} mm.</p>}

          {(fensterHoehe > 0 && ifHSH === true) && <p> Hebe Schiebe Anlage soll 40 mm in den Fußboden eingelassen werden. Somit die Höhe von Hebe Schiebe Anlage beträgt <b>{fensterHoehe} mm.</b> </p>}
               
      </div>
    )
  }

  


  function neuBodenOhneMit() { 
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Maueröffnungs-Höhe</b> an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte vom Fußboden bis Unterkante Rollladenkasten.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={neuBodenOhneMitRef}
                onChange={kalkuNeuBodenOhneMit}
              />
            </div>
           
          </div>
          {(fensterHoehe > 0 && ifHSH === false) && <p> Fenster (bzw. Tür) Höhe beträgt <b>{fensterHoehe} mm.</b> Die Höhe beinhaltet Aufsatzrollladen Kasten, falls benötigt.</p>}
          {(fensterHoehe > 0 && ifHSH === false) && <p> Es wurde 10 mm unten als Montagespiel abgezogen.</p>}
          {(fensterHoehe > 0 && ifHSH === true) && <p> Hebe Schiebe Anlage soll 40 mm in den Fußboden eingelassen werden. Somit die Höhe von Hebe Schiebe Anlage beträgt <b>{fensterHoehe} mm.</b> Denken Sie bitte daran, dass 50 mm Platz für die Schwelle im Fußboden vorbereitet (zB. ausgefräst) werden muss.</p>}
               
      </div>
    )
  }

  function neuBodenOhneOhne() {
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Maueröffnungs-Höhe</b> an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={neuBodenOhneOhneRef}
                onChange={kalkuNeuBodenOhneOhne}
              />
            </div>
           
          </div>
          {(fensterHoehe > 0 && ifHSH === false) && <p> Fenster (bzw. Tür) Höhe beträgt <b>{fensterHoehe} mm.</b> Die Höhe beinhaltet Aufsatzrollladen Kasten, falls benötigt.</p>}
          {(fensterHoehe > 0 && ifHSH === false) && <p> Es wurde 20 mm als Montagespiel abgezogen.</p>}
          {(fensterHoehe > 0 && ifHSH === true) && <p> Hebe Schiebe Anlage soll 40 mm in den Fußboden eingelassen werden. Somit die Höhe von Hebe Schiebe Anlage beträgt <b>{fensterHoehe} mm.</b> Denken Sie bitte daran, dass 50 mm Platz für die Schwelle im Fußboden vorbereitet (zB. ausgefräst) werden muss.</p>}
               
      </div>
    )
  }

  function neuBruestungOhne() {
   
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Maueröffnungs-Höhe</b> an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={neuBruestungOhneRef}
                onChange={kalkuNeuBruestungOhne}
              />
            </div>
           
          </div>
          {(fensterHoehe > 0) && <p> Fenster Höhe beträgt <b>{fensterHoehe} mm.</b> Die Höhe beinhaltet Aufsatzrollladen Kasten, falls benötigt.</p>}
          {(fensterHoehe > 0) && <p> Es wurde 50 mm abgezogen (30 mm für Fensterbank Anschluß Leiste und 20 mm als Montagespiel)</p>}
          {(fensterHoehe > 0) && <p> Falls Sie keine Fensterbank planen, kann die Fensterhöhe maximal {fensterHoehe + 30} mm betragen. </p>}
       
      </div>
    )
  }

  function altBruestungOhne() {
    
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Leibung</b> Höhe an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte von Oberkante Brüstung (Unterkante Fensterbank) bis Unterkante Sturz{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altBruestungOhneRef}
                onChange={kalkuAltBruestungOhne}
              />
            </div>
           
          </div>
          {(fensterHoehe > 0) && <p> Fenster Höhe beträgt <b>{fensterHoehe} mm.</b> Die Höhe beinhaltet Aufsatzrollladen Kasten, falls benötigt.</p>}
          {(fensterHoehe > 0) && <p> Es wurde 50 mm abgezogen (30 mm für Fensterbank Anschluß Leiste und 20 mm als Montagespiel)</p>}
          {(fensterHoehe > 0) && <p> Falls Sie keine Fensterbank planen, kann die Fensterhöhe maximal {fensterHoehe + 30} mm betragen. </p>}
       
      </div>
    )
  }

  function neuBruestungMit() {
   
    return (
      <div className="mt4">
        <p>
          Bitte die <b>Maueröffnungs-Höhe</b> an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte von Oberkante Brüstung bis Unterkante Rollladenkasten.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={neuBruestungMitRef}
                onChange={kalkuNeuBruestungMit}
              />
            </div>
            
          </div>
          {(fensterHoehe > 0) && <p> Fenster Höhe beträgt <b>{fensterHoehe} mm.</b></p>}
          {(fensterHoehe > 0) && <p> Es wurde 40 mm abgezogen (30 mm für Fensterbank Anschluß Leiste und 10 mm als Montagespiel)</p>}
          {(fensterHoehe > 0) && <p> Falls Sie keine Fensterbank planen, kann die Fensterhöhe maximal {fensterHoehe + 30} mm betragen. </p>}
       
      </div>
    )
  }

  function altBruestungMit() {
   
    return (
      <div className="mt4">
        <p>
          Bitte die Leibungshöhe von <b>außen</b> an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen. Messen Sie bitte von Oberkante Brüstung (innen) bis zum <b>Außen</b>sturz, wie in der 3d Abbildung von außen. Wenn die Außenbrüstung tiefer liegt als die Innebrüstung messen Sie bitte von der Innenbrüstung.{" "}
        </p>
       
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altAlBruestungMitRef}
                onChange={showInnenAltbauHoehe}
              />
            </div>           
          </div>
          {(innenHoeheZeigen === true) && <p>  Bitte die Leibungshöhe von <b>innen</b> messen. Von Oberkante Innenbrüstung (bzw. Unterkante Innenfensterbank) bis ganz nach Oben zum Sturz im alten Rollladenkasten. Wie in der 3d Abbildung.</p>}
          {(innenHoeheZeigen === true) && <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Höhe in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={altBruestungMitRef}
                onChange={kalkuAltBruestungMit}
              />
            </div>           
          </div>}


          
       
      </div>
    )
  }

  function altBruestungMit2() {
    return (
      <div className="flex flex-wrap justify-start tl mt4">
        {(fensterHoehe > 0) && <p> Fenster Höhe beträgt <b>{fensterHoehe} mm.</b></p>}
        {(fensterHoehe > 0) && <p> Es wurde unten 40 mm abgezogen (30 mm für Fensterbank Anschluß Leiste und 10 mm als Montagespiel). Falls Sie keine Fensterbank planen, kann die Fensterhöhe maximal {fensterHoehe + 30} mm betragen. </p>}
        {(platzOben > 0) && <p>Es bleiben {(platzOben > 210) ? platzOben : 210 } mm übrig für Aufsatz Rollladenkasten. Der Kasten ist 170, bzw. 210 mm hoch.</p>}
        {(platzOben < 210 && fensterHoehe > 0 && fensterHoehe < 1800) && <p>Sie können auch 170 mm Aufsatzollladen Kasten verwenden. Dann beträgt die Fensterhöhe {fensterHoehe + 40} mm.</p>}

      </div>
    )
  }
  
  function neubauOhne() {
    return (
      <div className="mt4">
        <p>
          Bitte die Leibungsbreite an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen.{" "}
        </p>
        <form className="" onSubmit={kalkuBreite}>
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Breite in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={breiteNeubauRef}
                onChange={kalkuBreite}
              />
            </div>
            <div className="w-30"></div>
          </div>
        </form>
        {fensterBreite > 0 && (
          <p>
            Fensterbreite beträgt <b>{fensterBreite} mm.</b>
          </p>
        )}
        {fensterBreite > 0 && <p>30 mm wurde als Montagespiel abgezogen.</p>}
        <p></p>
      </div>
    );
  }

  function altbauOhne() {
    return (
      <div className="mt4">
        <p>
          Falls Putz (oder Fliesen) in der Leibung vorhanden sind, bitte (ev.
          teilweise) abtragen und die Breite von Mauer zu Mauer messen. Putz
          soll grundsätzlich bei Fenstertausch in der Leibung abgetragen werden.{" "}
        </p>
        <p>
          Leibungsbreite an verschiedenen Stellen (2-3) messen und das
          kleinste Maß nehmen.{" "}
        </p>
        <form className="" onSubmit={kalkuBreiteAltbau}>
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Breite in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={breiteAltbauRef}
                onChange={kalkuBreiteAltbau}
              />
            </div>
            <div className="w-30"></div>
          </div>
        </form>
        {fensterBreite > 0 && (
          <p>
            Fensterbreite beträgt <b>{fensterBreite} mm.</b>
          </p>
        )}
        {fensterBreite > 0 && <p>30 mm wurde als Montagespiel abgezogen.</p>}
      </div>
    );
  }

  function altbauMit() {
    return (
      <div className="mt4">
        <p>
          Falls Putz (oder Fliesen) in der Leibung vorhanden sind, bitte (ev.
          teilweise) abtragen und die Breite von Mauer zu Mauer messen. Putz
          soll grundsätzlich bei Fenstertausch in der Leibung abgetragen werden.{" "}
        </p>
        <p>
          Es gibt 2 Leibungen, eine kleinere Außenleibung, und eine grössere
          Innenleibung. Identifizieren Sie bitte bei Ihnen die Leibungen
        </p>
        <p>
          Messen Sie die <b>Außenleibung</b> an verschiedenen Stellen (2-3).
          Nehmen Sie bitte das kleinste Maß.
        </p>
        <form className="" onSubmit={showInnenAltbau}>
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Breite in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={breiteAussenleibungRef}
                onChange={showInnenAltbau}
              />
            </div>
            <div className="w-30"></div>
          </div>
        </form>
      </div>
    );
  }

  function altbauMit2() {
    return (
      <div className="flex flex-wrap justify-start tl">
        {innenLeibungZeigen === true && (
          <p>
            {" "}
            Messen Sie die <b>Innenleibung</b> an verschiedenen Stellen (2-4).
            Nehmen Sie bitte das kleinste Maß.
          </p>
        )}
        
          
            <div className="flex flex-wrap justify-start tl w-100 w-60-l">
              <div className="w-30 gray f5 mv2">Breite in mm:</div>
              <div className="w-30 gray f6 tl">
                <input
                  id="name"
                  style={{ width: 100, height: 37 }}
                  className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                  type="text"
                  placeholder="mm"
                  ref={breiteInnenleibungRef}
                  onChange={kalkuAltbauMit}
                />
              </div>
              
            </div>
         
       
        {kalkuAltbauZeigen === true && (
          <p>
            Fensterbreite beträgt <b>{fensterBreite} mm.</b>
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Es werden seitliche Verbreiterungen von insgesamt ca.{" "}
            {verbreiterungenSeitlich} mm empfohlen, (
            {parseInt(verbreiterungenSeitlich / 2)} mm jeweils links und
            rechts).
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Gesamtbreite des Fensters inkl. Verbreiterungen soll{" "}
            {fensterBreite + verbreiterungenSeitlich} mm nicht überschreiten!
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            So bleiben jeweils links und rechts ca. 30 mm von dem Blendrahmen
            von außen sichtbar. 30 mm wurde als Montagespiel abgezogen.
          </p>
        )}
        {verbreiterungenSeitlich === 0 && innenLeibungZeigen === true && (
          <p>
            30 mm wurde als Montagespiel abgezogen. Man braucht keine
            Rahmenverbreiterungen seitlich.{" "}
          </p>
        )}
      </div>
    );
  }

  function neubauMit() {
    return (
      <div className="mt4">
        <p>
          Es gibt eine gemauerte (ggf. betonierte) Leibung und von Außen
          kommt eine Dämmung, bzw Klinher. Dämmung / Klinker wird teilweise mit
          der Maueröffnung überlappen. So wird die äußere Maueröffnung kleiner
          als die innere Maueröffnung.
        </p>
        <p>
          Messen Sie bitte die <b>äußere</b> Maueröffnung in der
          Dämmungsschicht (bzw. Klinkerschicht). Falls noch nicht vorhanden,
          kalkulieren Sie bitte die Breite nach Abzug der geplanten Überlappung
          mit vorhanderner Maueröffnung.
        </p>
        <form className="" onSubmit={showInnenNeubau}>
          <div className="flex flex-wrap justify-start tl w-100">
            <div className="w-30 gray f5 mv2">Breite in mm:</div>
            <div className="w-30 gray f6 tl">
              <input
                id="name"
                style={{ width: 100, height: 37 }}
                className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                type="text"
                placeholder="mm"
                ref={breiteAussenoeffnungRef}
                onChange={showInnenNeubau}
              />
            </div>
            <div className="w-30"></div>
          </div>
        </form>
      </div>
    );
  }

  function neubauMit2() {
    return (
      <div>
        {innenOeffnungZeigen === true && (
          <p>
            {" "}
            Messen Sie jetzt bitte die <b>innere</b> Maueröffnung an
            verschiedenen Stellen (2-3). Nehmen Sie bitte das kleinste Maß.
          </p>
        )}
        {innenOeffnungZeigen === true && (
          
            <div className="flex flex-wrap justify-start tl w-100 w-70-l">
              <div className="w-30 gray f5 mv2">Breite in mm:</div>
              <div className="w-30 gray f6 tl">
                <input
                  id="name"
                  style={{ width: 100, height: 37 }}
                  className="gray f6 w3-input w3-border w3-sand w3-border-orange"
                  type="text"
                  placeholder="mm"
                  ref={breiteInnenoeffnungRef}
                  onChange={kalkuNeubauMit}
                />
              </div>
             
            </div>
          
        )}
        {kalkuNeubauZeigen === true && (
          <p>
            Fensterbreite beträgt <b>{fensterBreite} mm.</b>
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Es werden seitliche Verbreiterungen von insgesamt ca.{" "}
            {verbreiterungenSeitlich} mm empfohlen, (
            {parseInt(verbreiterungenSeitlich / 2)} mm jeweils links und
            rechts).
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Gesamtbreite des Fensters inkl. Verbreiterungen soll{" "}
            {fensterBreite + verbreiterungenSeitlich} mm nicht überschreiten!
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            So bleiben jeweils links und rechts ca. 30 mm von dem Blendrahmen
            von außen sichtbar. 30 mm wurde als Montagespiel abgezogen.
          </p>
        )}
        {verbreiterungenSeitlich === 0 && innenOeffnungZeigen === true && (
          <p>
            30 mm wurde als Montagespiel abgezogen. Man braucht keine
            Rahmenverbreiterungen seitlich.{" "}
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-around mb3 w-100">
        {/* wizualizacja */}
        {breiteZeigen === true && (
          <div>
            <div className="db mb4 flex flex-wrap justify-center mv1 pb3 fl w-100 w-50-l b--moon-gray">
              {/* hint */}
              <p className="ba b--moon-gray pa2 silver">
                3d Visualisierung - bitte berühren
              </p>

              {/* canvas */}
              <div
                style={{ position: "relative", height: 478 }}
                className="w-90"
              >
                <Canvas
                  shadows
                  dpr={[1, 2]}
                  camera={{ position: props.camera.split(","), fov: 50 }}
                >
                  <spotLight
                    intensity={0.6}
                    angle={0.1}
                    penumbra={1}
                    position={[800, 800, -2000]}
                    castShadow
                  />
                  <spotLight
                    intensity={0.2}
                    angle={0.1}
                    penumbra={1}
                    position={[800, 800, 1500]}
                    castShadow
                  />

                  <Suspense fallback={<Loader />}>
                    <Background />
                  </Suspense>

                  <Suspense fallback={<Loader />}>
                    {props.product == "wall" && (
                      <Wall rotation-y={Math.PI * 0} bauart={bauart} />
                    )}

                    <Environment preset="park" />
                    <ambientLight intensity={0.5} />
                  </Suspense>
                  <OrbitControls
                    minPolarAngle={Math.PI * 0.45}
                    maxPolarAngle={Math.PI * 0.55}
                    enableZoom={true}
                    enablePan={true}
                  />
                </Canvas>
              </div>
            </div>

            {/* parametry */}
            <div
              className={
                breiteZeigen === true
                  ? "fl w-100 w-50-l b--moon-gray ph3"
                  : "fl w-100 b--moon-gray ph3"
              }
            >
              {/* profile i kolory */}
              <div className="flex flex-wrap justify-center">
                {/* tytul Breite messen */}
                <div className="w-90 tc">
                  <h4 id="nazwaProfilu" className="ba b--moon-gray pa2">
                    Breite messen
                  </h4>
                </div>

                {/* przyciski */}
                <button
                  className={
                    bauart === "altbau"
                      ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 w-80"
                      : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 w-80"
                  }
                  onMouseDown={() => changeBauart("altbau")}
                >
                  Altbau ohne Außenleibung
                </button>

                <button
                  className={
                    bauart === "altbau_al"
                      ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 w-80"
                      : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 w-80"
                  }
                  onMouseDown={() => changeBauart("altbau_al")}
                >
                  Altbau mit Außenleibung
                </button>

                <button
                  className={
                    bauart === "neubau"
                      ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 w-80"
                      : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 w-80"
                  }
                  onMouseDown={() => changeBauart("neubau")}
                >
                  Neubau ohne Dämmung / Klinker
                </button>

                <button
                  className={
                    bauart === "neubau_dg"
                      ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 w-80"
                      : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 w-80"
                  }
                  onMouseDown={() => changeBauart("neubau_dg")}
                >
                  Neubau mit Dämmung / Klinker
                </button>

                {bauart === "neubau" && neubauOhne()}
                {bauart === "altbau" && altbauOhne()}
                {bauart === "altbau_al" && altbauMit()}
                {bauart === "neubau_dg" && neubauMit()}
              </div>
            </div>
            <div className="flex flex-wrap justify-start tl mb3 w-100 ph3">
              {(bauart === "altbau_al" && innenLeibungZeigen === true) && altbauMit2()}
              {bauart === "neubau_dg" && neubauMit2()}
            </div>
          </div>
        )}

        {/* HOEHE MESSEN */}
        {hoeheZeigen === true && (
          <div>
            <div className="flex flex-wrap justify-around mb3 w-100 ph3">
              <div className=" fl w-100 w-50-l b--moon-gray ph3">
                {/* profile i kolory */}
                <div className="flex flex-wrap justify-center">
                  {/* tytul Breite messen */}
                  <div className="w-90 tc">
                    <h4 id="nazwaProfilu" className="ba b--moon-gray pa2">
                      Höhe messen
                    </h4>
                  </div>

                  {/* przyciski */}
                  <div className="w-90 tc">
                    <button
                      className={
                        altbauH === true
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeAltbauH(true)}
                    >
                      Altbau
                    </button>

                    <button
                      className={
                        altbauH === false
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeAltbauH(false)}
                    >
                      Neubau
                    </button>
                  </div>


                  <div className="w-90 tc">
                    <button
                      className={
                        bodenH === false
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeBodenH(false)}
                    >
                      Brüstung
                    </button>

                    <button
                      className={
                        bodenH === true
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeBodenH(true)}
                    >
                      Bodentief
                    </button>
                  </div>


                  {(bodenH === true) && <div className="w-90 tc">
                    <button
                      className={
                        fussbodenH === true
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeFussbodenH(true)}
                    >
                      Fußboden Aufbau
                    </button>

                    <button
                      className={
                        fussbodenH === false
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeFussbodenH(false)}
                    >
                      ohne
                    </button>
                  </div>}

                  <div className="w-90 tc">
                    <button
                      className={
                        rolloH === true
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeRolloH(true)}
                    >
                      Rollladenkasten
                    </button>

                    <button
                      className={
                        rolloH === false
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeRolloH(false)}
                    >
                      ohne
                    </button>
                  </div>

                  {(bodenH === true) && <div className="w-90 tc">
                    <button
                      className={
                        ifHSH === false
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeHSH(false)}
                    >
                      Standard
                    </button>

                    <button
                      className={
                        ifHSH === true
                          ? "w3-button w3-border w3-border-red w3-deep-orange mv1 mh2 "
                          : "w3-button w3-border w3-border-orange w3-sand mv1 mh2 "
                      }
                      onMouseDown={() => changeHSH(true)}
                    >
                      Hebe Schiebe
                    </button>
                  </div>}

                      

                </div>
                {(altbauH === false && bodenH === false && rolloH === false) && neuBruestungOhne()}
                {(altbauH === true && bodenH === false && rolloH === false) && altBruestungOhne()}
                {(altbauH === false && bodenH === false && rolloH === true) && neuBruestungMit()}
                {(altbauH === true && bodenH === false && rolloH === true) && altBruestungMit()}
                {(altbauH === false && bodenH === true  && fussbodenH == false && rolloH === false) && neuBodenOhneOhne()}
                {(altbauH === false && bodenH === true && fussbodenH == false  && rolloH === true) && neuBodenOhneMit()}
                {(altbauH === false && bodenH === true && fussbodenH == true  && rolloH === false) && neuBodenMitOhne()}
                {(altbauH === false && bodenH === true && fussbodenH == true  && rolloH === true) && neuBodenMitMit()}
                {(altbauH === true && bodenH === true  && fussbodenH == false && rolloH === false) && altBodenOhneOhne()}
                {(altbauH === true && bodenH === true  && fussbodenH == false && rolloH === true) && altBodenOhneMit()}
                {(altbauH === true && bodenH === true  && fussbodenH == true && rolloH === false) &&  altBodenMitOhne()}
                {(altbauH === true && bodenH === true  && fussbodenH == true && rolloH === true) &&  altBodenMitMit()}

                

               

                
                 
              </div>

              <div className="db mb4 flex flex-wrap justify-center mv1 pb3 fl w-100 w-50-l b--moon-gray">
                {/* hint */}
                <p className="ba b--moon-gray pa2 silver">
                  3d Visualisierung - bitte berühren
                </p>

                {/* canvas */}
                <div
                  style={{ position: "relative", height: 478 }}
                  className="w-90"
                >
                  <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: props.camera.split(","), fov: 50 }}
                  >
                    <spotLight
                      intensity={0.6}
                      angle={0.1}
                      penumbra={1}
                      position={[800, 800, -2000]}
                      castShadow
                    />
                    <spotLight
                      intensity={0.2}
                      angle={0.1}
                      penumbra={1}
                      position={[800, 800, 1500]}
                      castShadow
                    />

                    <Suspense fallback={<Loader />}>
                      <Background />
                    </Suspense>

                    <Suspense fallback={<Loader />}>
                      <WallH rotation-y={Math.PI * 0} altbauH={altbauH} bodenH={bodenH} fussbodenH={fussbodenH} rolloH={rolloH} ifHSH={ifHSH}  bauart={bauart}/>

                      <Environment preset="park" />
                      <ambientLight intensity={0.5} />
                    </Suspense>
                    <OrbitControls
                      minPolarAngle={Math.PI * 0.45}
                      maxPolarAngle={Math.PI * 0.55}
                      enableZoom={true}
                      enablePan={true}
                    />
                  </Canvas>
                </div>
              </div>

              <div className="flex flex-wrap justify-start tl mb3 w-100 ph3">
              {(altbauH === true && bodenH===false && rolloH===true) && altBruestungMit2()}
              {(altbauH === false && bodenH===true && fussbodenH===true && rolloH===false && fussbodenNeuOhneZeigen ===true) && neuBodenMitOhne2()}
              {(altbauH === false && bodenH===true && fussbodenH===true && rolloH===true && fussbodenNeueMitZeigen ===true) && neuBodenMitMit2()}
              {(altbauH === true && bodenH===true && fussbodenH===false && rolloH===true && innenHoeheAltZeigen ===true) && altBodenOhneMit2()}
              {(altbauH === true && bodenH===true && fussbodenH===true && rolloH===false && innenHoeheAltFussbodenZeigen ===true) && altBodenMitOhne2()}
              {(altbauH === true && bodenH===true && fussbodenH===true && rolloH===true && altFussbodenRolloZeigen ===true) && altBodenMitMit2()}
              {(altbauH === true && bodenH===true && fussbodenH===true && rolloH===true && altInnenFussbodenRolloZeigen ===true) && altBodenMitMit3()}


              
            
            </div>
            </div>
          </div>
        )}
      </div>
      {switchBH()}
      <div className="tc ba b--moon-gray pa1 ma2 mb4 mt3">
        <h5>Fenster Maße:</h5>
        {(fensterBreite > 0) && <p>Fenster Breite: {fensterBreite} mm</p>}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Verbreiterungen seitlich: {verbreiterungenSeitlich} mm, jeweils{" "}
            {verbreiterungenSeitlich / 2} mm L + R
          </p>
        )}
        {verbreiterungenSeitlich > 0 && (
          <p>
            Fenster Breite inkl. Verbreiterungen:{" "}
            {fensterBreite + verbreiterungenSeitlich} mm
          </p>
        )}
        {(fensterHoehe > 0 && rolloH == true) && <p>Fenster Höhe: {fensterHoehe} mm</p>}
        {(fensterHoehe > 0 && rolloH == false) && <p>Fenster Höhe: {fensterHoehe} mm (ggf. inkl. Aufsatzrollladen Kasten)</p>}
        {(platzOben > 0) && <p>zzgl. Aufsatzrollladen: 210 mm</p>}
        {(platzOben > 0) && <p>Gesamthöhe inkl. Aufsatz Rollladenkasten beträgt {fensterHoehe + 210} mm.</p>}
        {(verbreiterungUnten > 0) && <p>zzgl. Verbreiterung unten für Fußboden in der Höhe von {verbreiterungUnten} mm.</p>}
        {(verbreiterungUnten > 0 && platzOben === 0) && <p>Gesamthöhe inkl. Verbreiterung unten beträgt {fensterHoehe + verbreiterungUnten} mm.</p>}
        {(verbreiterungUnten > 0 && platzOben > 0) && <p>Gesamthöhe inkl. Verbreiterung unten und Aufsatzrollladen Kasten beträgt {fensterHoehe + verbreiterungUnten +210} mm.</p>}

      </div>
    </div>
  );

  function changeBauart(bauart) {
    setBauart(bauart);
    showWidth();
  }

  function changeAltbauH(ifAltbau) {
    setAltbauH(ifAltbau);
    setFensterHoehe(0)
    setPlatzOben(0)
    setVerbreiterungUnten(0)
  }

  function changeBodenH(ifBoden) {
    setBodenH(ifBoden);
    setFensterHoehe(0)
    setPlatzOben(0)
    setVerbreiterungUnten(0)
    if (ifBoden === false) {
      setFussbodenH(false);
      setIfHSH(false)
    }
  }

  function changeFussbodenH(ifFussboden) {
    setFussbodenH(ifFussboden);
    setFensterHoehe(0)
    setPlatzOben(0)
    setVerbreiterungUnten(0)
  }

  function changeRolloH(ifRollo) {
    setRolloH(ifRollo);
    setFensterHoehe(0)
    setPlatzOben(0)
    setVerbreiterungUnten(0)
  }
  function changeHSH(ifHS) {
    setIfHSH(ifHS);
    setFensterHoehe(0)
    setPlatzOben(0)
    setVerbreiterungUnten(0) 
     }
}

export default buildingvisualisation;
