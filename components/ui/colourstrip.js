import { getAllColours } from "../data/colours";
import { useState, useCallback, useEffect } from "react";


function colorStrip(props) {
  const farben = getAllColours();
  const dieFarben = farben.filter(filterColors)
  const [activeColour, setActiveColour] = useState(props.aktywnyKolor);

  useEffect(() => {
    setActiveColour(props.aktywnyKolor);

    var nrKolorkuZew = 0;
    for (const kolorek of farben) {
      if (kolorek.name == props.aktywnyKolor) {
        nrKolorkuZew = farben.indexOf(kolorek);
      }
    }

    $id("nazwaKoloru").innerText = farben[nrKolorkuZew].alt;
}, [props.aktywnyKolor]);





  function filterColors(color) {
    return color.materialAlu === props.ifAlu
  }

  
  return (
    <div className="flex flex-wrap justify-center fl w-100 mv2">
      {dieFarben.map((farbe) => (
        
        <div className="tooltip" key={farbe.id}>
          <img
            name={farbe.name}
            alt={farbe.alt}
            className={
              activeColour === farbe.name
                ? "ba br2 pa1 b--red"
                : "ba br2 pa1 b--moon-gray"
            }
            src={farbe.src}
            title={farbe.alt}
            onMouseDown={zmien_kolor_profili}
          ></img>
          <span className="tooltiptext">{farbe.alt}</span>
        </div>
      ))}
    </div>
  );

  function zmien_kolor_profili(ev) {
    var nrkolorku = 0;
    for (const kolorek of farben) {
      if (kolorek.name == ev.target.name) {
        nrkolorku = farben.indexOf(kolorek);
      }
    }
    //
    setActiveColour(ev.target.name);
    props.onColorChange(ev.target.name);
    props.gasketChange(farben[nrkolorku].blackGasket)
    $id("nazwaKoloru").innerText = farben[nrkolorku].alt;

    
  }

  function $id(id) {
    return document.getElementById(id);
  }
}

export default colorStrip;
