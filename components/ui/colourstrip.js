import { getAllColours } from "../data/colours";
import { useState } from "react";


function colorStrip(props) {
  const farben = getAllColours();
  const [activeColour, setActiveColour] = useState("weiß");

  return (
    <div 
    className="flex flex-wrap justify-center fl w-100 mv2"
     
    >
      {farben.map((farbe) => (
        <div className="tooltip">
          <img
            name={farbe.name}
            alt={farbe.alt}
            className={
              activeColour === farbe.alt
                ? "ba br2 pa1 b--red"
                : "ba br2 pa1 b--moon-gray"
            }
            src={farbe.src}
            title={farbe.alt}
            onMouseDown={zmien_kolor_profili}
          ></img>
          <span class="tooltiptext">{farbe.alt}</span>
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
    setActiveColour(ev.target.alt);
    props.onColorChange(ev.target.name);
    props.gasketChange(farben[nrkolorku].blackGasket)
    $id("nazwaKoloru").innerText = farben[nrkolorku].alt;

    
  }

  function $id(id) {
    return document.getElementById(id);
  }
}

export default colorStrip;
