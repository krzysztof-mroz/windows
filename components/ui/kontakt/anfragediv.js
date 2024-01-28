import { useRouter } from "next/router";
import { useRef } from "react";

function anfragediv() {
  const profilRef = useRef();
  const insulationRef = useRef();
  const beschlagRef = useRef();
  const glasRef = useRef();
  const schwelleRef = useRef();
  const farbeARef = useRef();
  const farbeIRef = useRef();
  const beschattungRef = useRef();
  const hoehenAngabenRef = useRef();
  const rolloMontageRef = useRef();
  const fussbodenRef = useRef();
  const hoeheBeiFussbodenRef = useRef();
  const doorRef = useRef();
  const bvRef = useRef();
  const prioRef = useRef();
  const nameRef = useRef();
  const telRef = useRef();
  const strasseRef = useRef();
  const ortRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  async function submitFormHandler(event) {
    event.preventDefault();
    const profil = profilRef.current.value;
    const insulation = insulationRef.current.value;
    const beschlag = beschlagRef.current.value;
    const glas = glasRef.current.value;
    const schwelle = schwelleRef.current.value;
    const farbeA = farbeARef.current.value;
    const farbeI = farbeIRef.current.value;
    const beschattung = beschattungRef.current.value;
    const hoehenAngaben = hoehenAngabenRef.current.value;
    const rolloMontage = rolloMontageRef.current.value;
    const fussboden = fussbodenRef.current.value;
    const hoeheBeiFussboden = hoeheBeiFussbodenRef.current.value;
    const door = doorRef.current.value;
    const bv = bvRef.current.value;
    const prio = prioRef.current.value;
    const name = nameRef.current.value;
    const tel = telRef.current.value;
    const strasse = strasseRef.current.value;
    const ort = ortRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const anfrageBody = {
      profil: profil,
      insulation: insulation,
      beschlag: beschlag,
      glas: glas,
      schwelle: schwelle,
      farbeA: farbeA,
      farbeI: farbeI,
      beschattung: beschattung,
      hoehenAngaben: hoehenAngaben,
      rolloMontage: rolloMontage,
      fussboden: fussboden,
      hoeheBeiFussboden: hoeheBeiFussboden,
      door: door,
      bv: bv,
      prio: prio,
      name: name,
      tel: tel,
      strasse: strasse,
      ort: ort,
      email: email,
      message: message,
    };

    $id("email").className =
      "gray f6 w3-input w3-border mv2 w3-sand w3-border-orange";
    $id("name").className =
      "gray f6 w3-input w3-border mv2 w3-sand w3-border-orange";
    $id("liste").className =
      "gray f6 w3-input w3-border mv2 w3-sand w3-border-orange";
    $id("ort").className =
      "gray f6 w3-input w3-border mv2 w3-sand w3-border-orange";

    fetch("/api/sendanfrage", {
      method: "POST",
      body: JSON.stringify({ anfrageBody: anfrageBody }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        $id("sendResponse").innerText = data.message;
        $id("sendResponse").className = "f4 red ba";
        if (data.field) {
          $id(data.field).className =
            "black f6 w3-input w3-border mv2 w3-orange w3-border-red";
        }
        if (data.message == "Ihre Anfrage wurde geschickt. Danke schön.") {
          $id("sendResponse").className = "f4 green ba";
          nameRef.current.value = "";
          ortRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        }
      });
  }

  return (
    <form className="" name="Anfrageformular" onSubmit={submitFormHandler}>
      <div className="flex flex-wrap justify-around  w-100 tl pa2 mt3 ">
        <div className="w-100">
          <div className="w-100 ml4">
            <p className="w-100 w-100 w-third-l-l gray f6 mv2">
              <b>Liste der Positionen</b>
            </p>
          </div>
          <div className="w-100 w-90-l mh2 mh4-l">
            <textarea
              id="liste"
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              rows="15"
              placeholder="Breite mm x Höhe mm, Öffnungsart, Bemerkungen, ANZAHL"
              ref={messageRef}
            ></textarea>
            <button
              type="submit"
              className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
              title="Anfrage abschicken"
            >
              <b>Senden</b>
            </button>
            <p className="f5 gray" id="sendResponse">
              Wir freuen uns auf Ihre Anfrage.
            </p>
          </div>
        </div>

        <h2 className="fl f5 ma1 w-100 tc orange b">
          Sie können uns gerne auch eine{" "}
          <a className="blue" href="mailto:info@polnische-fenster.com">
            {" "}
            Email{" "}
          </a>{" "}
          oder{" "}
          <a
            className="green"
            href="https://wa.me/+4915737448021"
            target="_blank"
          >
            {" "}
            WhatsApp{" "}
          </a>{" "}
          schicken!{" "}
        </h2>

        <div className="flex flex-column flex-row-l flex-wrap justify-around-l w-100 w-50-l b--moon-gray tc tl-l pa4">
          <div className="w-100 w-third-l gray f6 mv2">Profil:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={profilRef} 
              defaultValue="PVC Salamander BluEvolution 92"
            >
              <option value="PVC Aluplast Ideal 4000 Softline">
                PVC Aluplast Ideal 4000 Softline{" "}
              </option>
              <option value="PVC Aluplast Ideal 5000">
                PVC Aluplast Ideal 5000{" "}
              </option>
              <option value="PVC Aluplast Ideal 7000">
                PVC Aluplast Ideal 7000{" "}
              </option>
              <option value="PVC Aluplast Ideal 8000">
                PVC Aluplast Ideal 8000{" "}
              </option>
              <option value="PVC Aluplast Ideal NEO">
                PVC Aluplast Ideal NEO{" "}
              </option>
              <option value="PVC Aluplast Ideal NEO ENERGETO">
                PVC Aluplast Ideal NEO ENERGETO
              </option>
              <option value="PVC Salamander GreenEvo 76 2D">
                PVC Salamander GreenEvo 76 2D{" "}
              </option>
              <option value="PVC Salamander GreenEvo 76 3D">
                PVC Salamander GreenEvo 76 3D{" "}
              </option>
              <option value="PVC Salamander BluEvolution 82">
                PVC Salamander BluEvolution 82{" "}
              </option>
              <option value="PVC Salamander BluEvolution 92">
                PVC Salamander BluEvolution 92{" "}
              </option>
              <option value="PVC Gealan S8000">PVC Gealan S8000 </option>
              <option value="PVC Gealan S9000">PVC Gealan S9000 </option>
              <option value="PVC Schüco CT 70 Classic">
                PVC Schüco CT 70 Classic
              </option>
              <option value="PVC Schüco CT 70 Rondo">
                PVC Schüco CT 70 Rondo
              </option>
              <option value="PVC Schüco Living MD">PVC Schüco Living MD</option>
              <option value="PVC Kömmerling 70 AD">
                PVC Kömmerling 70 AD{" "}
              </option>
              <option value="PVC Kömmerling 76 AD">
                PVC Kömmerling 76 AD{" "}
              </option>
              <option value="PVC Kömmerling 76 MD">
                PVC Kömmerling 76 MD{" "}
              </option>
              <option value="PVC Kömmerling 88 MD">
                PVC Kömmerling 88 MD{" "}
              </option>
              <option value="Alu Aliplast IMPERIAL">
                {" "}
                Alu Aliplast IMPERIAL{" "}
              </option>
              <option value="Alu Aliplast SUPERIAL">
                {" "}
                Alu Aliplast SUPERIAL{" "}
              </option>
              <option value="Alu Aliplast GENESIS">
                {" "}
                Alu Aliplast GENESIS{" "}
              </option>
              <option value="Alu Aliplast MaxLight">
                {" "}
                Alu Aliplast MaxLight{" "}
              </option>
              <option value="Alu Aluprof MB 70 HI">
                {" "}
                Alu Aluprof MB 70 HI{" "}
              </option>
              <option value="Alu Aluprof MB 86 SI">
                {" "}
                Alu Aluprof MB 86 SI{" "}
              </option>
              <option value="Alu Schüco AWS 75 SI">
                {" "}
                Alu Schüco AWS 75 SI{" "}
              </option>
              <option value="Alu Schüco AWS 90 SI">
                {" "}
                Alu Schüco AWS 90 SI{" "}
              </option>
              <option value="Alu Deceuninck 88"> Alu Deceuninck 88 </option>
              <option value="Alu Deceuninck 94"> Alu Deceuninck 94 </option>
              <option value="Alu Deceuninck 110"> Alu Deceuninck 110 </option>
              <option value="Alu Cortizo Cor Casement">
                {" "}
                Alu Cortizo Cor Casement{" "}
              </option>
              <option value="Alu Reynaers Masterline 8">
                {" "}
                Alu Reynaers Masterline 8{" "}
              </option>
              <option value="Alu Reynaers Masterline 10">
                {" "}
                Alu Reynaers Masterline 10{" "}
              </option>
              <option value="Alu Reynaers Slimline 38">
                {" "}
                Alu Reynaers Slimline 38{" "}
              </option>
              <option value="Alu Reynaers CS 77"> Alu Reynaers CS 77 </option>
              <option value="Alu Ponzio PE 68N"> Alu Ponzio PE 68N </option>
              <option value="Alu Ponzio PE 78N"> Alu Ponzio PE 78N </option>
              <option value="Holz 68 mm"> Holz 68 mm </option>
              <option value="Holz 80 mm"> Holz 80 mm </option>
              <option value="Holz 92 mm"> Holz 92 mm </option>
              <option value="Holz 76 mit Alu Schale">
                {" "}
                Holz 76 mit Alu Schale{" "}
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Wärmedämmung:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={insulationRef}
              defaultValue="max 0,95 W/m2K"
            >
              <option value="ohne Bedeutung">ohne Bedeutung</option>
              <option value="1,3 W/m2K">1,3 W/m2K 2fach verglast</option>
              <option value="1,0 W/m2K">1,0 W/m2K 3fach verglast</option>
              <option value="max 0,95 W/m2K">
                max 0,95 W/m2K 3fach verglast
              </option>
              <option value="max 0,9 W/m2K">
                max 0,9 W/m2K 3fach verglast
              </option>
              <option value="max 0,8 W/m2K">
                max 0,8 W/m2K 3fach verglast
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Beschlag:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={beschlagRef}
              defaultValue="Winkhaus activPilot Standard"
            >
              <option value="Standard">Standard</option>
              <option value="RC1">RC1</option>
              <option value="RC2">RC2</option>
              <option value="versteckte Scharniere">
                versteckte Scharniere
              </option>
              <option value="RC1 (versteckte Scharniere)">
                RC1 (versteckte Scharniere)
              </option>
              <option value="RC2 (versteckte Scharniere)">
                RC2 (versteckte Scharniere)
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Verglasung:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={glasRef}
              defaultValue="Standard Verglasung"
            >
              <option value="Standard Verglasung">Standard Verglasung</option>
              <option value="VSG Verglasung außen">VSG Verglasung außen</option>
              <option value="VSG Verglasung innen">VSG Verglasung innen</option>
              <option value="VSG Verglasung beidseitig">
                VSG Verglasung beidseitig
              </option>
              <option value="P4A Panzerverglasung">P4A Panzerverglasung</option>
              <option value="Schallschutz Verglasung leicht">
                Schallschutz Verglasung leicht
              </option>
              <option value="Schallschutz Verglasung mittel">
                Schallschutz Verglasung mittel
              </option>
              <option value="Schallschutz Verglasung hoch">
                Schallschutz Verglasung hoch
              </option>
              <option value="Sonnenschutz Verglasung mittel">
                Sonnenschutz Verglasung mittel
              </option>
              <option value="Sonnenschutz Verglasung stark">
                Sonnenschutz Verglasung stark
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Schwellen:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={schwelleRef}
              defaultValue="Standardschwellen von 70 mm"
            >
              <option value="Standardschwellen von 70 mm">
                Standardschwellen von 70 mm
              </option>
              <option value="Standardschwellen von 70 mm mit Trittschutz">
                Standardschwellen von 70 mm mit Trittschutz
              </option>
              <option value="Flache Alu Schwellen">Flache Alu Schwellen</option>
              <option value="Unterschiedlich pro Position">
                Unterschiedlich pro Position
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Farbe außen:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={farbeARef}
              defaultValue="weiß"
            >
              <option value="weiß"> weiß</option>
              <option value="anthrazitgrau"> anthrazitgrau</option>
              <option value="basaltgrau"> basaltgrau</option>
              <option value="quarzgrau"> quarzgrau</option>
              <option value="betongrau"> betongrau</option>
              <option value="seidengrau"> seidengrau</option>
              <option value="kieselgrau"> kieselgrau</option>
              <option value="Alu gebürstet"> Alu gebürstet</option>
              <option value="Metallic silber"> Metallic silber</option>
              <option value="achatgrau"> achatgrau</option>
              <option value="signalgrau"> signalgrau</option>
              <option value="silbergrau"> silbergrau</option>
              <option value="steingrau"> steingrau</option>
              <option value="cremeweiß"> cremeweiß</option>
              <option value="reinweiß"> reinweiß</option>
              <option value="hellelfenbein"> hellelfenbein</option>
              <option value="graubeige"> graubeige</option>
              <option value="gelb"> gelb</option>
              <option value="goldene Eiche"> goldene Eiche</option>
              <option value="Mahagoni"> Mahagoni</option>
              <option value="Nußbaum"> Nußbaum</option>
              <option value="Eiche dunkel"> Eiche dunkel</option>
              <option value="Mooreiche"> Mooreiche</option>
              <option value="Eiche hell"> Eiche hell</option>
              <option value="Winchester"> Winchester</option>
              <option value="Oregon"> Oregon</option>
              <option value="Montana"> Montana</option>
              <option value="braun dekor"> braun dekor</option>
              <option value="schockobraun"> schockobraun</option>
              <option value="brillantblau"> brillantblau</option>
              <option value="moosgrün"> moosgrün</option>
              <option value="tannengrün"> tannengrün</option>
              <option value="rot"> rot</option>
              <option value="weinrot"> weinrot</option>
              <option value="anthrazitgrau glatt"> anthrazitgrau glatt</option>
              <option value="DB 703 glatt"> DB 703 glatt</option>
              <option value="basaltgrau glatt"> basaltgrau glatt</option>
              <option value="schwarzgrau glatt"> schwarzgrau glatt</option>
              <option value="quarzgrau glatt"> quarzgrau glatt</option>
              <option value="lichtgrau glatt"> lichtgrau glatt</option>
              <option value="achatgrau glatt"> achatgrau glatt</option>
              <option value="andere Farbe"> andere - bitte angeben</option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Farbe innen:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={farbeIRef}
              defaultValue="weiß"
            >
              <option value="weiß"> weiß</option>
              <option value="anthrazitgrau"> anthrazitgrau</option>
              <option value="basaltgrau"> basaltgrau</option>
              <option value="quarzgrau"> quarzgrau</option>
              <option value="betongrau"> betongrau</option>
              <option value="seidengrau"> seidengrau</option>
              <option value="kieselgrau"> kieselgrau</option>
              <option value="Alu gebürstet"> Alu gebürstet</option>
              <option value="Metallic silber"> Metallic silber</option>
              <option value="achatgrau"> achatgrau</option>
              <option value="signalgrau"> signalgrau</option>
              <option value="silbergrau"> silbergrau</option>
              <option value="steingrau"> steingrau</option>
              <option value="cremeweiß"> cremeweiß</option>
              <option value="reinweiß"> reinweiß</option>
              <option value="hellelfenbein"> hellelfenbein</option>
              <option value="graubeige"> graubeige</option>
              <option value="gelb"> gelb</option>
              <option value="goldene Eiche"> goldene Eiche</option>
              <option value="Mahagoni"> Mahagoni</option>
              <option value="Nußbaum"> Nußbaum</option>
              <option value="Eiche dunkel"> Eiche dunkel</option>
              <option value="Mooreiche"> Mooreiche</option>
              <option value="Eiche hell"> Eiche hell</option>
              <option value="Winchester"> Winchester</option>
              <option value="Oregon"> Oregon</option>
              <option value="Montana"> Montana</option>
              <option value="braun dekor"> braun dekor</option>
              <option value="schockobraun"> schockobraun</option>
              <option value="brillantblau"> brillantblau</option>
              <option value="moosgrün"> moosgrün</option>
              <option value="tannengrün"> tannengrün</option>
              <option value="rot"> rot</option>
              <option value="weinrot"> weinrot</option>
              <option value="anthrazitgrau glatt"> anthrazitgrau glatt</option>
              <option value="DB 703 glatt"> DB 703 glatt</option>
              <option value="basaltgrau glatt"> basaltgrau glatt</option>
              <option value="schwarzgrau glatt"> schwarzgrau glatt</option>
              <option value="quarzgrau glatt"> quarzgrau glatt</option>
              <option value="lichtgrau glatt"> lichtgrau glatt</option>
              <option value="achatgrau glatt"> achatgrau glatt</option>
              <option value="andere Farbe"> andere - bitte angeben</option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Beschattung:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={beschattungRef}
              defaultValue="ohne Rollladen"
            >
              <option value="ohne Rollladen"> ohne Rollladen</option>
              <option value="Aufsatzrollladen, Gurt">
                {" "}
                Aufsatzrollladen, Gurt
              </option>
              <option value="Aufsatzrollladen, Motor">
                {" "}
                Aufsatzrollladen, Motor
              </option>
              <option value="Aufsatzrollladen, Motor, Fernbedienung">
                {" "}
                Aufsatzrollladen, Motor, Fernbedienung
              </option>
              <option value="Vorhandene Rollladenkästen renovieren">
                {" "}
                Vorhandene Rollladenkästen renovieren
              </option>
              <option value="Vorsatzrollladen eckig, Gurt">
                {" "}
                Vorsatzrollladen eckig, Gurt
              </option>
              <option value="Vorsatzrollladen eckig, Motor">
                {" "}
                Vorsatzrollladen eckig, Motor
              </option>
              <option value="Vorsatzrollladen eckig, Motor, Fernbedienung">
                {" "}
                Vorsatzrollladen eckig, Motor, Fernbedienung
              </option>
              <option value="Vorsatzrollladen viertelrund, Gurt">
                {" "}
                Vorsatzrollladen viertelrund, Gurt
              </option>
              <option value="Vorsatzrollladen viertelrund, Motor">
                {" "}
                Vorsatzrollladen viertelrund, Motor
              </option>
              <option value="Vorsatzrollladen viertelrund, Motor, Fernbedienung">
                {" "}
                Vorsatzrollladen viertelrund, Motor, Fernbedienung
              </option>
              <option value="Vorsatzrollladen halbrund, Gurt">
                {" "}
                Vorsatzrollladen halbrund, Gurt
              </option>
              <option value="Vorsatzrollladen halbrund, Motor">
                {" "}
                Vorsatzrollladen halbrund, Motor
              </option>
              <option value="Vorsatzrollladen halbrund, Motor, Fernbedienung">
                {" "}
                Vorsatzrollladen halbrund, Motor, Fernbedienung
              </option>
              <option value="Vorsatzrollladen unterputz, Gurt">
                {" "}
                Vorsatzrollladen unterputz, Gurt
              </option>
              <option value="Vorsatzrollladen unterputz, Motor">
                {" "}
                Vorsatzrollladen unterputz, Motor
              </option>
              <option value="Vorsatzrollladen unterputz, Motor, Fernbedienung">
                {" "}
                Vorsatzrollladen unterputz, Motor, Fernbedienung
              </option>
              <option value="Raffstoren C80 Lamellen">
                {" "}
                Raffstoren C80 Vorsatz Kasten
              </option>
              <option value="Raffstoren C80 Lamellen">
                {" "}
                Raffstoren C80 VBox Kasten
              </option>
              <option value="Raffstoren C80 Lamellen">
                {" "}
                Raffstoren C80 Aufsatz Kasten
              </option>
              <option value="Raffstoren Z90 Lamellen">
                {" "}
                Raffstoren Z90 Vorsatz Kasten
              </option>
              <option value="Raffstoren Z90 Lamellen">
                {" "}
                Raffstoren Z90 VBox Kasten
              </option>
              <option value="Raffstoren Z90 Lamellen">
                {" "}
                Raffstoren Z90 Aufsatz Kasten
              </option>
              <option value="Screen Roll Rollläden">
                Screen Roll Rollläden
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Höhenangaben:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={hoehenAngabenRef}
              defaultValue="ohne Rollladenkasten"
            >
              <option value="ohne Rollladenkasten">
                {" "}
                ohne Rollladenkasten
              </option>
              <option value="inkl. Rollladenkasten">
                {" "}
                inkl. Rollladenkasten
              </option>
              <option value="zzgl. Rollladenkasten">
                {" "}
                zzgl. Rollladenkasten
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Rollladen Montage:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={rolloMontageRef}
              defaultValue="ohne Rollladen"
            >
              <option value="ohne Rollladen"> ohne Rollladen</option>
              <option value="Aufsatzkasten am Fenster">
                {" "}
                Aufsatzkasten am Fenster
              </option>
              <option value="Vorsatzrollladen an der Wand">
                {" "}
                Vorsatzrollladen an der Wand
              </option>
              <option value="Vorsatzrollladen in Fensterleibung">
                {" "}
                Vorsatzrollladen in Fensterleibung
              </option>
              <option value="Führunghen am Rahmen, Kasten an der Wand">
                {" "}
                Führunghen am Rahmen, Kasten an der Wand
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>
        </div>

        <div className="flex flex-column flex-row-l flex-wrap justify-around-l w-100 w-50-l b--moon-gray tc tl-l pa4">
          <div className="w-100 w-third-l gray f6 mv2">Fußboden:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <input
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              type="text"
              placeholder="? mm"
              ref={fussbodenRef}
            />
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Höhe bodentief:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={hoeheBeiFussbodenRef}
              defaultValue="ohne Fußbodenaufbau"
            >
              <option value="ohne Fußbodenaufbau"> ohne Fußbodenaufbau</option>
              <option value="inkl. Fußbodenaufbau">
                {" "}
                inkl. Fußbodenaufbau
              </option>
              <option value="zzgl. Fußbodenaufbau">
                {" "}
                zzgl. Fußbodenaufbau
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Haustür:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={doorRef}
              defaultValue="ohne Haustür"
            >
              <option value="ohne Haustür"> ohne Haustür</option>
              <option value="PVC Haustür"> PVC Haustür</option>
              <option value="Alu Haustür Einsatzfüllung">
                {" "}
                Alu Haustür Einsatzfüllung
              </option>
              <option value="Alu flügelüberdeckend">
                {" "}
                Alu flügelüberdeckend
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Bauvorhaben:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={bvRef}
              defaultValue="Neubau, ohne Montage"
            >
              <option value="Neubau, ohne Montage">
                {" "}
                Neubau, ohne Montage
              </option>
              <option value="Neubau, mit RAL Montage">
                {" "}
                Neubau, mit RAL Montage
              </option>
              <option value="Altbau, ohne Montage">
                {" "}
                Altbau, ohne Montage
              </option>
              <option value="Altbau, mit RAL Montage">
                {" "}
                Altbau, mit RAL Montage
              </option>
              <option value="Altbau, mit Demontage und RAL Montage">
                {" "}
                Altbau, mit Demontage und RAL Montage
              </option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Priorität:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <select
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              ref={prioRef}
              defaultValue="Bedarf innerhalb von 1 Monat"
            >
              <option value="Ich möchte Preise vergleichen">
                {" "}
                Ich möchte Preise vergleichen
              </option>
              <option value="Bedarf innerhalb von 1 Jahr">
                {" "}
                Bedarf innerhalb von 1 Jahr
              </option>
              <option value="Bedarf innerhalb von 6 Monaten">
                {" "}
                Bedarf innerhalb von 6 Monaten
              </option>
              <option value="Bedarf innerhalb von 3 Monaten">
                {" "}
                Bedarf innerhalb von 3 Monaten
              </option>
              <option value="Bedarf innerhalb von 1 Monat">
                {" "}
                Bedarf innerhalb von 1 Monat
              </option>
              <option value="Bedarf innerhalb von 3 Wochen">
                {" "}
                Bedarf innerhalb von 3 Wochen
              </option>
              <option value="Bedarf dringend"> Bedarf dringend</option>
            </select>
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Name:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <input
              id="name"
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              type="text"
              placeholder="Ihr Name"
              ref={nameRef}
            />
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Telefon:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <input
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              type="text"
              placeholder="Ihre Telefonnummer"
              ref={telRef}
            />
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Straße, Hausnr:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <input
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              type="text"
              placeholder="Straße, Hausnummer"
              ref={strasseRef}
            />
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">PLZ, Ort:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <input
              id="ort"
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              type="text"
              placeholder="PLZ, Ort"
              ref={ortRef}
            />
            <div className="flex-auto-l"></div>
          </div>

          <div className="w-100 w-third-l gray f6 mv2">Email:</div>
          <div className="w-100  w-two-thirds-l gray f6 flex justify-center">
            <input
              id="email"
              style={{ width: 350, height: 37 }}
              className="gray f6 w3-input w3-border mv2 w3-sand w3-border-orange"
              type="text"
              placeholder="Ihre Email"
              ref={emailRef}
            />
            <div className="flex-auto-l"></div>
          </div>
        </div>

        <button
          type="submit"
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          title="Anfrage abschicken"
        >
          <b>Senden</b>
        </button>
      </div>
    </form>
  );
  function $id(id) {
    return document.getElementById(id);
  }
}

export default anfragediv;
