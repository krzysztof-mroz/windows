import Schnellkontakt from "./schnellkontakt";


function description() {
    return (

  <div className="flex flex-wrap justify-around mb1 w-100">
         
  {/* opis profilu */}
  <div className="flex flex-wrap justify-center mv1 fl w-100 w-30-l  b--moon-gray pa4">
    <h2 className="w-100 tc" id="tekstProfilu">
      Kömmerling 88 MD
    </h2>
    <p className="w-100 tc" id="komoryProfilu">
      7 Kammer Profil mit 3 Dichtungen, 88 mm Einbautiefe. Versetzte
      klassische Optik. Fenster Uw ab 0,8 W/(m²·K), Glas Ug ab 0,5
      W/(m²·K).
    </p>
    
    
    {/**<img
      // style={{maxWidth: 350, maxHeight: 350 }}
      
      id="sectionPic"
      src="./pics/sections/k88.png"
    ></img>
    **/}
  </div>

  {/* szybki kontakt */}
  <div className="flex flex-wrap justify-around mv1 tc fl w-100 w-two-thirds-l b--moon-gray pa4">
    <Schnellkontakt />
  </div>

</div>
        
        );
}

export default description;