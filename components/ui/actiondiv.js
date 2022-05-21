import { useRouter } from "next/router";

function actiondiv() {
  const router = useRouter();
  function gotoRollos(e) {
    router.push("./rolllaeden")
  }
  function gotoRaf(e) {
    router.push("./raffstoren")
  }
  function gotoDoor(e) {
    router.push("./tueren")
  }
  function gotoQuotation(e) {
    router.push("./kontakt/anfrage")
  }
  function gotoAufmass(e) {
    router.push("./aufmass")
  }

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3">
      {/*<div className="w-100 ba b--moon-gray mb4">
        <h4>Wie geht es weiter?</h4>{" "}
    </div>*/}

      <div className="w-100 w-30-l  b--moon-gray ma2 pa3 ba">
        <img src="/pics/laptop.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
          title="Nachricht abschicken"
          onMouseDown={gotoQuotation}
        >
          Anfrage starten
        </button>
      </div>

      <div className="w-100 w-30-l  b--moon-gray ma2 pa3 ba">
        <img src="/pics/messband.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
          onMouseDown={gotoAufmass}
        >
          Wie messe ich richtig?
        </button>
      </div>

      <div className="w-100 w-30-l  b--moon-gray ma2 pa3 ba">
        <img src="/pics/toolbox.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
        >
          Montage nach RAL
        </button>
      </div>
      <div className="w-100 w-30-l  b--moon-gray ma2 pa3 ba">
        <img src="/pics/door.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
          title="Nachricht abschicken"
          onMouseDown={gotoDoor}
        >
          Haustüren Aluminium, PVC
        </button>
      </div>

      <div className="w-100 w-30-l  b--moon-gray ma2 pa3 ba">
        <img src="/pics/rollladen.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
          onMouseDown={gotoRollos}
        >
          Beschattung mit Rollläden
        </button>
      </div>

      <div className="w-100 w-30-l  b--moon-gray ma2 pa3 ba">
        <img src="/pics/raffstore.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
          onMouseDown={gotoRaf}
        >
          Beschattung mit Raffstoren
        </button>
      </div>
      
    </div>
  );
}

export default actiondiv;
