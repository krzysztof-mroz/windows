function ponziodiv() {
  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/pe_68_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Ponzio PE 68 N</h5>
          <p className="gray f6 tl">
          <ul>   
            <li>Dreikammerprofilsystem mit der Euro-Nut und Beschlagnut.</li>
            <li>Einbautiefe Rahmen beträgt 68 mm und Flügel 76 mm.</li>
            <li>Thermische Trennung 32 mm</li>
            <li>Zwei-Komponenten-Zentraldichtung</li>
            <li>Wärmedurchgangskoeffizient 1,5 W/m2K</li>
            <li>Hohe Profilsteifheit für bessere Statik</li>
            <li>Flexibilität in Eckverbindervarianten</li>
            <li>Glasstärke 18-59 mm</li>
            <li>Ganze RAL Farbpalette verfügbar</li>
         </ul>
          </p>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/pe68.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/pe68.png"
          ></img>
        </div>
      </div>

      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/pe_78n_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5 className="gray">Ponzio PE 78N</h5>
          <div className="gray f6 tl">
          <ul>
            
            
          
            <li>Dreikammerprofilsystem mit der Euro-Nut und Beschlagnut.</li>
            <li>Für Fensterkonstruktionen mit hohen Wärmedämmansprüchen bestimmt</li>
            <li>Einbautiefe Rahmen beträgt 78 mm und Flügel 86 mm.</li>
            <li>Thermische Trennung 42 mm</li>
            <li>Zwei-Komponenten-Zentraldichtung</li>
            <li>Wärmedurchgangskoeffizient bei Variante PE78 N+ Uf = 1,3 W/ m²K </li>
            <li>Sehr gute statische Eigenschaften.</li>
            <li>Flexibilität in Eckverbindervarianten</li>
            <li>Glasstärke 23-61 mm</li>
            <li>Ganze RAL Farbpalette verfügbar</li>
       
        </ul>
          </div>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/pe78.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/pe78.png"
          ></img>
        </div>
      </div>

    </div>
  );
}

export default ponziodiv;
