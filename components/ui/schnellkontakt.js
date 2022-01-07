function Schnellkontakt(props) {
  
  return (
    
    <div className=" w-100  fl  tc mh3">
      <form className="" name="Kurzformular" action="../versand_kurznachricht.php" method="post">
      <div className="w3-container ">
      <p>
        <b>Schnellkontakt:</b>
      </p>
      </div>
      
      <textarea
        className="w3-input w3-border mh3 mv4 w-90 mh3 w3-sand w3-border-orange"
        name="inputMessage"
        id="inputMessage"
        rows="9"
        placeholder="Ihre Nachricht"
      ></textarea>
      <div className="mv3">
        
        <input
          className="w3-input w3-border mh3 mb4 w-90 w3-sand w3-border-orange"
          type="text"
          name="inputEmail"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="Email / Telefonnummer"
        ></input>
        <p className="f7 gray">Ihre Daten werden nicht weitergeleitet.</p>
        <button className="w3-button w3-border w3-border-orange w3-sand" type="submit" data-toggle="tooltip" data-placement="top" title="Nachricht abschicken">Senden</button>
      </div>
      </form>
      <hr className="w-90"></hr>
      <div><p>Kostenlose* Hotline:</p></div>
					<div className="w3-text-orange"><h4><b>0 800 44 700 99</b></h4></div>
					<small className="gray f7">*kostenlos vom Festnetz und Mobilfunk.</small>
      <hr className="w-90"></hr>
    </div>
  );
}

export default Schnellkontakt;
