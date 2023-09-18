import { useRef } from "react";

function Schnellkontakt(props) {
  const contactRef = useRef();
  const messageRef = useRef();

  async function submitFormHandler(event) {
    event.preventDefault();
    const inputEmail = contactRef.current.value;
    const inputMessage = messageRef.current.value;
    const messageBody = { inputEmail: inputEmail, inputMessage: inputMessage };

    fetch("/api/sendmail", {
      method: "POST",
      body: JSON.stringify({ messageBody: messageBody }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        $id("sendResponse").innerText = data.message;
        $id("sendResponse").className = "f4 red ba";
        if (data.message == "Ihre Nachricht wurde geschickt. Danke schön.") {
          $id("sendResponse").className = "f4 green ba";
          contactRef.current.value = "";
          messageRef.current.value = "";
        }
      });
  }

  return (
    <div className="w-90 fl">
      <form className="" name="Kurzformular" onSubmit={submitFormHandler}>
        <div className="">
          <p>
            <b>Schnellkontakt:</b>
          </p>
        </div>

        <textarea
          ref={messageRef}
          className="w3-input w3-border mv4  w3-sand w3-border-orange"
          name="inputMessage"
          id="inputMessage"
          rows="9"
          placeholder="Ihre Nachricht"
        ></textarea>
        <div className="mv3">
          <input
            ref={contactRef}
            className="w3-input w3-border  mb4 w3-sand w3-border-orange"
            type="text"
            name="inputEmail"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Email / Telefonnummer"
          ></input>
          <p className="f7 gray">Ihre Daten werden nicht weitergeleitet.</p>
          <button
            className="w3-button w3-border w3-border-orange w3-sand"
            type="submit"
            data-toggle="tooltip"
            data-placement="top"
            title="Nachricht abschicken"
          >
            Senden
          </button>
          <p className="f5 gray" id="sendResponse">
            Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
      </form>
     {/** <hr className="w-90"></hr>
      <div>
        <p>Kostenlose* Hotline:</p>
      </div>
      <div className="w3-text-orange">
        <h4>
          <b>0 800 44 700 99</b>
        </h4>
      </div>
      <small className="gray f7">*kostenlos vom Festnetz und Mobilfunk.</small>
      <hr className="w-90"></hr> **/ }
    </div>
  );
  function $id(id) {
    return document.getElementById(id);
  }
}
export default Schnellkontakt;
