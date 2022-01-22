import { useRouter } from 'next/router';



function fensterdiv() {

  const router = useRouter();

  function gotoSchuecoPvc(e) {
    router.push("./schuecopvc")
  }
  function gotoKoemmerling(e) {
    
  }
  function gotoPonzio(e) {
    
  }
  function gotoAluprof(e) {
    
  }
  function gotoSchuecoAlu(e) {
    
  }

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoSchuecoPvc}>
        <img src="./pics/icons/livingfeather.png"></img>
        <h5>Schüco Kunststoff Fenster</h5>
        <p className="gray f6">
          5 Kammer und 7 Kammer Kunststoff Markenfenster mit Stahlverstärkung und Winkhaus activPilot Beschlag.
        </p>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoKoemmerling}>
        <img src="./pics/icons/k88feather.png"></img>
        <h5>Kömmerling Kunststoff Fenster</h5>
        <p className="gray f6">
          5- 6- und 7-Kammer Systeme zur Wahl. 2 oder 3 Dichtungen. Stahlverstärkung, Winkhaus activPilot Beschlag, kurze Lieferzeiten.
        </p>
      </div>
      
      <div className="dn db-l w-100 w-30-l b--moon-gray ma2 pa3"> 
      <img src="./pics/icons/childwindowfeather.png"></img>
      </div>
      
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoPonzio}>
        <img src="./pics/icons/pe78feather.png"></img>
        <h5>Ponzio Aluminium Fenster</h5>
        <p className="gray f6">
          Aluminium Fenster zum vernünftigen Preis mit 3 Dichtungen und mit thermischer Trennung.
        </p>
      </div>
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"  onMouseDown={gotoAluprof}>
        <img src="./pics/icons/mb86feather.png"></img>
        <h5>Aluprof Aluminium Fenster</h5>
        <p className="gray f6">
          Aluminium Fenster mit geringer Profilhöhe und hoher Gestaltungsfreiheit. 
        </p>
      </div>
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoSchuecoAlu}>
        <img src="./pics/icons/aws90feather.png"></img>
        <h5>Schüco Aluminium Fenster</h5>
        <p className="gray f6">
          Aluminium Fenster und Türen für die höchsten Ansprüche, ohne Kompromisse.
        </p>
      </div>
     
    </div>
  );
}

export default fensterdiv
