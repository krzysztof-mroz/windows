import { useRouter } from "next/router";

function beschattungdiv() {
  const router = useRouter();

  
  function gotoRollos(e) {
    router.push("./rolllaeden")
  }
  function gotoRaf(e) {
    router.push("./raffstoren")
  }
  function gotoScreen(e) {}

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoRollos}
      >
        <img src="./pics/icons/rollo.png"></img>
        <h5>Rollläden</h5>
        <p className="gray f6">
          Standard Beschattung mit Aluminium Lamellen. Mit Gurt oder Motor. Als Aufsatz- oder Vorsatzrollläden.
        </p>
      </div>

      

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoRaf}
      >
        <img src="./pics/icons/rafstore.png"></img>
        <h5>Außen Raffstoren</h5>
        <p className="gray f6">
        Raffstoren mit C-80 oder Z-90 Lamellen und Motorsteuerung. Für stufenlose Regulierung des Tageslichtes im Raum.
        </p>
      </div>

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoScreen}
      >
        <img src="./pics/icons/screenroll.png"></img>
        <h5>"Screen Roll" Rollläden</h5>
        <p className="gray f6">
        Moderne Lösung, jetzt auch für Außen. Kleine Kästen und effektive Beschattung.
        </p>
      </div>
      
    </div>
  );
}

export default beschattungdiv;
