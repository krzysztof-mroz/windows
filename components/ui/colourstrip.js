import { getAllColours } from "../data/colours";
import { useState } from "react";
import { getAllProfiles } from "../data/profiles";

function colorStrip() {
  const farben = getAllColours();
  const profiles = getAllProfiles();
  const [activeColour, setActiveColour] = useState("weiß");

  return (
    <div className="flex flex-wrap justify-center fl w-100 mv2">
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

    setActiveColour(ev.target.alt);

    $id("pic_profil_ct_70_classic").src =
      "./pics/profile/ct_70_classic_" + ev.target.name + ".png";
    $id("ct_70_classic_color").innerText = ev.target.alt;
    $id("ct_70_classic_cena").innerText =
      "ab " + profiles[0].prices[farben[nrkolorku].s] + ",-";
    $id("ct_70_classic_mwst").innerText = "mit MwSt";

    $id("pic_profil_ct_70_rondo").src =
      "./pics/profile/ct_70_rondo_" + ev.target.name + ".png";
    $id("ct_70_rondo_color").innerText = ev.target.alt;
    $id("ct_70_rondo_cena").innerText =
      "ab " + profiles[1].prices[farben[nrkolorku].s] + ",-";
    $id("ct_70_rondo_mwst").innerText = "mit MwSt";

    $id("pic_profil_living_classic").src =
      "./pics/profile/living_classic_" + ev.target.name + ".png";
    $id("living_color").innerText = ev.target.alt;
    $id("living_cena").innerText =
      "ab " + profiles[2].prices[farben[nrkolorku].s] + ",-";
    $id("living_mwst").innerText = "mit MwSt";

    $id("pic_profil_koemmerling_70").src =
      "./pics/profile/koemmerling_70_" + ev.target.name + ".png";
    $id("koemmerling_70_color").innerText = ev.target.alt;
    $id("koemmerling_70_cena").innerText =
      "ab " + profiles[3].prices[farben[nrkolorku].k] + ",-";
    $id("koemmerling_70_mwst").innerText = "mit MwSt";

    $id("pic_profil_koemmerling_76AD").src =
      "./pics/profile/koemmerling_76AD_" + ev.target.name + ".png";
    $id("koemmerling_76AD_color").innerText = ev.target.alt;
    $id("koemmerling_76AD_cena").innerText =
      "ab " + profiles[4].prices[farben[nrkolorku].k] + ",-";
    $id("koemmerling_76AD_mwst").innerText = "mit MwSt";

    $id("pic_profil_koemmerling_76MD").src =
      "./pics/profile/koemmerling_76MD_" + ev.target.name + ".png";
    $id("koemmerling_76MD_color").innerText = ev.target.alt;
    $id("koemmerling_76MD_cena").innerText =
      "ab " + profiles[5].prices[farben[nrkolorku].k] + ",-";
    $id("koemmerling_76MD_mwst").innerText = "mit MwSt";

    $id("pic_profil_koemmerling_88").src =
      "./pics/profile/koemmerling_88_" + ev.target.name + ".png";
    $id("koemmerling_88_color").innerText = ev.target.alt;
    $id("koemmerling_88_cena").innerText =
      "ab " + profiles[6].prices[farben[nrkolorku].k] + ",-";
    $id("koemmerling_88_mwst").innerText = "mit MwSt";

    if (farben[nrkolorku].s == 9) {
      // profile schueco
      $id("ct_70_classic_cena").innerText = "nicht verfügbar";
      $id("ct_70_classic_mwst").innerText = "";
      $id("ct_70_rondo_cena").innerText = "nicht verfügbar";
      $id("ct_70_rondo_mwst").innerText = "";
      $id("living_cena").innerText = "nicht verfügbar";
      $id("living_mwst").innerText = "";
    }

    if (farben[nrkolorku].k == 9) {
      // profile koemmerling
      $id("koemmerling_70_cena").innerText = "nicht verfügbar";
      $id("koemmerling_70_mwst").innerText = "";
      $id("koemmerling_76AD_cena").innerText = "nicht verfügbar";
      $id("koemmerling_76AD_mwst").innerText = "";
      $id("koemmerling_76MD_cena").innerText = "nicht verfügbar";
      $id("koemmerling_76MD_mwst").innerText = "";
      $id("koemmerling_88_cena").innerText = "nicht verfügbar";
      $id("koemmerling_88_mwst").innerText = "";
    }
  }

  function $id(id) {
    return document.getElementById(id);
  }
}

export default colorStrip;
