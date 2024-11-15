import Schnellkontakt from "./schnellkontakt";


function description() {
    return (

  <div className="flex flex-wrap justify-around mb1 w-100">
         
  {/* opis profilu */}
  <div className="flex flex-wrap justify-center mv1 fl w-100 w-30-l  b--moon-gray pa4">
    <h2 className="w-100 tc" id="tekstProfilu">
        Aluprof MB 86 SI
    </h2>
    <p className="w-100 tc" id="komoryProfilu">
    Aluminium 3 gedämte Kammer, Rahmen 77 mm Einbauiefe. Flügel 86 mm. Mehrkammer-thermische Trennung, Rahmen Uf ab 0,92 W/(m²·K). Fenster Uw ab 0,72 W/(m²·K), Glas Ug ab 0,5 W/(m²·K).
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