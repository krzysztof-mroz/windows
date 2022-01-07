import { useState } from "react";
import { getAllProfiles } from "../data/profiles";

function profileStrip(props) {
  const profiles = getAllProfiles();
  const [activeProfile, setActiveProfile] = useState("Kömmerling 88 MD");

  return (
    <div className="flex flex-wrap justify-center fl w-100 mv2">
<img className="mv2 mr5 mr4-l dim db dn-l" style={{ position: "relative", width: 25, height: 25 }} src="../pics/svg/back.svg" onMouseDown={back} />

      {profiles.map((profile) => (
        <div className="tooltip">
          <img
            name={profile.idSlide}
            alt={profile.alt}
            className={
              profile.last
                ? "mv1 mv2-l mr1 mr4-l dn db-l dim"
                : "mv1 mv2-l mr1 mr2-l dn db-l dim"
            }
            style={{ position: "relative", width: 25, height: 25 }}
            src={activeProfile === profile.alt
              ? profile.ikonka + "_red.svg"
              : profile.ikonka + "_grey.svg"
              }

            title={profile.picSlide}
            onMouseDown={zmien_profil}
          ></img>
          <span class="tooltiptext">{profile.alt}</span>
        </div>
      ))}
      <img className="mv2 ml5 ml4-l dim db dn-l" style={{ position: "relative", width: 25, height: 25 }} src="../pics/svg/ffd.svg" onMouseDown={ffd} />
    </div>
  );

  

function ffd (ev) {
  var nrprofila = 0;
    for (const profilek of profiles) {
      if (profilek.alt == activeProfile) {
        nrprofila = profiles.indexOf(profilek);
        if (nrprofila < 12) {nrprofila += 1};
      }
    }
    setActiveProfile(profiles[nrprofila].alt);

    //$id("profilDuzy").src = profiles[nrprofila].picSlide;
    $id("nazwaProfilu").innerText = profiles[nrprofila].alt;
    $id("tekstProfilu").innerText = profiles[nrprofila].alt;
    $id("komoryProfilu").innerText = profiles[nrprofila].desc;
    $id("sectionPic").src = profiles[nrprofila].section;
    props.onProfileChange(profiles[nrprofila].alt);
    //if (props.mWindow == "film") changeVideo (profiles[nrprofila].movie, props.mWindow);



}

function back (ev) {
  var nrprofila = 0;
    for (const profilek of profiles) {
      if (profilek.alt == activeProfile) {
        nrprofila = profiles.indexOf(profilek);
        if (nrprofila > 0) {nrprofila -= 1};
      }
    }
    setActiveProfile(profiles[nrprofila].alt);

    //$id("profilDuzy").src = profiles[nrprofila].picSlide;
    $id("nazwaProfilu").innerText = profiles[nrprofila].alt;
    $id("tekstProfilu").innerText = profiles[nrprofila].alt;
    $id("komoryProfilu").innerText = profiles[nrprofila].desc;
    $id("sectionPic").src = profiles[nrprofila].section;
    props.onProfileChange(profiles[nrprofila].alt);
    //if (props.mWindow == "film") changeVideo (profiles[nrprofila].movie, props.mWindow);

}


  function zmien_profil(ev) {
    var nrprofila = 0;
    for (const profilek of profiles) {
      if (profilek.idSlide == ev.target.name) {
        nrprofila = profiles.indexOf(profilek);
      }
    }

    setActiveProfile(ev.target.alt);

    //$id("profilDuzy").src = ev.target.title;
    $id("nazwaProfilu").innerText = profiles[nrprofila].alt;
    $id("tekstProfilu").innerText = ev.target.alt;
    $id("komoryProfilu").innerText = profiles[nrprofila].desc;
    $id("sectionPic").src = profiles[nrprofila].section;
    props.onProfileChange(ev.target.alt);
    //changeVideo (profiles[nrprofila].movie, props.mWindow);

  }

  function $id(id) {
    return document.getElementById(id);
  }

  function changeVideo (movie, mWindow) {
    var video = $id('video');
    var source = $id('source');
    video.pause();
    source.setAttribute('src', movie);
    video.appendChild(source);
    video.load();
    if (mWindow == "film") video.play();
    
    
  }
}

export default profileStrip;
