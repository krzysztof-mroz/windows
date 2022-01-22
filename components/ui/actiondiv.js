function actiondiv() {
  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      {/*<div className="w-100 ba b--moon-gray mb4">
        <h4>Wie geht es weiter?</h4>{" "}
  </div>*/}

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3">
        <img src="./pics/laptop.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
          title="Nachricht abschicken"
        >
          Anfrage starten
        </button>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3">
        <img src="./pics/messband.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
        >
          Wie messe ich richtig?
        </button>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3">
        <img src="./pics/toolbox.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-80 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
        >
          Montage nach RAL
        </button>
      </div>
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3">
        <img src="./pics/door.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
          title="Nachricht abschicken"
        >
          Haustüren Aluminium, PVC
        </button>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3">
        <img src="./pics/rollladen.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
        >
          Beschattung mit Rollläden
        </button>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3">
        <img src="./pics/raffstore.png"></img>

        <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
        >
          Beschattung mit Raffstoren
        </button>
      </div>
      
    </div>
  );
}

export default actiondiv;
