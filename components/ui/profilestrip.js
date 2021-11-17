import { useState } from "react";
import { getAllProfiles } from "../data/profiles";

function profileStrip() {
  
  const profiles = getAllProfiles();
  const [activeProfile, setActiveProfile] = useState("Schüco CT 70 Classic");

  return (
    <div className="flex flex-wrap justify-center fl w-100 mv2">

      <p className="mr2 mt4"> <b>Bitte Profil wählen:</b></p>
      {profiles.map((profile) => (
        <div className="tooltip">
          <img
            name={profile.idSlide}
            alt={profile.alt}
            className={
              activeProfile === profile.alt
                ? "ba br2 pa1 b--red"
                : "ba br2 pa1 b--moon-gray"
            }
            src={profile.ikonka}
           
            title={profile.picSlide}
            onMouseDown={zmien_profil}
          ></img>
          <span class="tooltiptext">{profile.alt}</span>
        </div>
      ))}
    </div>
  );

  function zmien_profil(ev) {
    var nrprofila = 0;
    for (const profilek of profiles) {
      if (profilek.idSlide == ev.target.name) {
        nrprofila = profiles.indexOf(profilek);
      }
    }

    setActiveProfile(ev.target.alt);

    $id("profilDuzy").src = ev.target.title; 
    $id("tekstProfilu").innerText = ev.target.alt; 
    $id("komoryProfilu").innerText = profiles[nrprofila].komoryProfilu;
     
    

   

   
  }

  function $id(id) {
    return document.getElementById(id);
  }
}

export default profileStrip;