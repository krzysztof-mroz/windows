import { useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const PROFILE_OPTIONS = [
  "PVC Aluplast Ideal 4000 Softline",
  "PVC Aluplast Ideal 5000",
  "PVC Aluplast Ideal 7000",
  "PVC Aluplast Ideal 8000",
  "PVC Aluplast Ideal NEO",
  "PVC Aluplast Ideal NEO ENERGETO",
  "PVC Salamander GreenEvo 76 2D",
  "PVC Salamander GreenEvo 76 3D",
  "PVC Salamander BluEvolution 82",
  "PVC Salamander BluEvolution 92",
  "PVC Gealan S8000",
  "PVC Gealan S9000",
  "PVC Schüco CT 70 Classic",
  "PVC Schüco CT 70 Rondo",
  "PVC Schüco Living MD",
  "Alu Aliplast IMPERIAL",
  "Alu Aliplast SUPERIAL",
  "Alu Aliplast GENESIS",
  "Alu Aliplast MaxLight",
  "Alu Aluprof MB 70 HI",
  "Alu Aluprof MB 86 SI",
  "Alu Aluprof MB 104 Passive",
  "Alu Schüco AWS 75 SI",
  "Alu Schüco AWS 90 SI",
  "Alu Deceuninck 88",
  "Alu Deceuninck 94",
  "Alu Deceuninck 110",
  "Alu Cortizo Cor Casement",
  "Alu Reynaers Masterline 8",
  "Alu Reynaers Masterline 10",
  "Alu Reynaers Slimline 38",
  "Alu Reynaers CS 77",
  "Holz 68 mm",
  "Holz 80 mm",
  "Holz 92 mm",
  "Holz 76 mit Alu Schale",
];

const COLOR_OPTIONS = [
  "weiß",
  "anthrazitgrau",
  "basaltgrau",
  "quarzgrau",
  "betongrau",
  "seidengrau",
  "kieselgrau",
  "Alu gebürstet",
  "Metallic silber",
  "achatgrau",
  "signalgrau",
  "silbergrau",
  "steingrau",
  "cremeweiß",
  "reinweiß",
  "hellelfenbein",
  "graubeige",
  "gelb",
  "goldene Eiche",
  "Mahagoni",
  "Nußbaum",
  "Eiche dunkel",
  "Mooreiche",
  "Eiche hell",
  "Winchester",
  "Oregon",
  "Montana",
  "braun dekor",
  "schockobraun",
  "brillantblau",
  "moosgrün",
  "tannengrün",
  "rot",
  "weinrot",
  "anthrazitgrau glatt",
  "DB 703 glatt",
  "basaltgrau glatt",
  "schwarzgrau glatt",
  "quarzgrau glatt",
  "lichtgrau glatt",
  "achatgrau glatt",
  "andere Farbe - bitte angeben",
];

const BESCHATTUNG_OPTIONS = [
  "ohne Rollladen",
  "Aufsatzrollladen, Gurt",
  "Aufsatzrollladen, Motor",
  "Aufsatzrollladen, Motor, Fernbedienung",
  "Vorhandene Rollladenkästen renovieren",
  "Vorsatzrollladen eckig, Gurt",
  "Vorsatzrollladen eckig, Motor",
  "Vorsatzrollladen eckig, Motor, Fernbedienung",
  "Vorsatzrollladen viertelrund, Gurt",
  "Vorsatzrollladen viertelrund, Motor",
  "Vorsatzrollladen viertelrund, Motor, Fernbedienung",
  "Vorsatzrollladen halbrund, Gurt",
  "Vorsatzrollladen halbrund, Motor",
  "Vorsatzrollladen halbrund, Motor, Fernbedienung",
  "Vorsatzrollladen unterputz, Gurt",
  "Vorsatzrollladen unterputz, Motor",
  "Vorsatzrollladen unterputz, Motor, Fernbedienung",
  "Raffstoren C80 Vorsatz Kasten",
  "Raffstoren C80 VBox Kasten",
  "Raffstoren C80 Aufsatz Kasten",
  "Raffstoren Z90 Vorsatz Kasten",
  "Raffstoren Z90 VBox Kasten",
  "Raffstoren Z90 Aufsatz Kasten",
  "Screen Roll Rollläden",
];

const OPENING_OPTIONS = [
  "Festverglasung",
  "Dreh",
  "Kipp",
  "Dreh Kipp",
  "2 Flügelig Dreh Stulp - Dreh Kipp",
  "2 Flügelig Dreh Kipp - Dreh Kipp mit Pfosten",
  "Dreh Kipp mit Oberlicht fest",
  "Dreh Kipp mit Unterlicht fest",
  "anders (bitte beschreiben)",
];

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function createEmptyPosition() {
  return {
    id: createId(),
    breiteMm: "",
    hoeheMm: "",
    oeffnungsart: "Dreh Kipp",
    oeffnungsartSonstiges: "",
    anzahl: 1,
    bemerkungen: "",
    mitRollladen: false,
    mitInsektengitter: false,
    mitMilchglas: false,
    mitSchallschutz: false,
    mitRaffstore: false,
    mitSonnenschutz: false,
  };
}

function isDigitsOnly(value) {
  return /^\d+$/.test(String(value || "").trim());
}

function isValidDimension(value) {
  return isDigitsOnly(value) && Number(value) > 0;
}

function isPositionEmpty(position) {
  return !(
    String(position.breiteMm || "").trim() ||
    String(position.hoeheMm || "").trim() ||
    String(position.bemerkungen || "").trim() ||
    String(position.oeffnungsartSonstiges || "").trim() ||
    String(position.anzahl || "1") !== "1" &&
      String(position.anzahl || "1") !== 1 &&
      Number(position.anzahl || 1) !== 1 ||
    position.oeffnungsart !== "Dreh Kipp" ||
    position.mitRollladen ||
    position.mitInsektengitter ||
    position.mitMilchglas ||
    position.mitSchallschutz ||
    position.mitRaffstore ||
    position.mitSonnenschutz
  );
}

function hasAnyPositionContent(position) {
  return !isPositionEmpty(position);
}

function shouldAppendNextPosition(position) {
  return isValidDimension(position.breiteMm) && isValidDimension(position.hoeheMm);
}

function ensureTrailingBlankPosition(list) {
  let next = [...list];

  while (
    next.length > 1 &&
    isPositionEmpty(next[next.length - 1]) &&
    isPositionEmpty(next[next.length - 2])
  ) {
    next.pop();
  }

  if (next.length === 0) {
    return [createEmptyPosition()];
  }

  const last = next[next.length - 1];

  if (!isPositionEmpty(last) && shouldAppendNextPosition(last)) {
    next.push(createEmptyPosition());
  }

  return next;
}

function isValidEmail(email) {
  if (!email) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

export default function AnfrageFensterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    profil: "PVC Salamander BluEvolution 82",
    insulation: "max 0,95 W/m2K",
    beschlag: "Standard",
    glas: "Standard Verglasung",
    schwelle: "Standardschwellen von 70 mm",
    farbeA: "weiß",
    farbeI: "weiß",
    beschattung: "ohne Rollladen",
    hoehenAngaben: "ohne Rollladenkasten",
    rolloMontage: "ohne Rollladen",
    fussbodenaufbau: "",
    hoeheBeiBodentief: "ohne Fußbodenaufbau",
    door: "ohne Haustür",
    bv: "Neubau, ohne Montage",
    prio: "Bedarf innerhalb von 1 Monat",
    name: "",
    tel: "",
    strasse: "",
    ort: "",
    email: "",
    website: "",
  });

  const [positions, setPositions] = useState([createEmptyPosition()]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const showRollladenFields = form.beschattung !== "ohne Rollladen";
  const showBodentiefField = String(form.fussbodenaufbau || "").trim().length > 0;

  const doorLink = useMemo(() => {
    if (
      form.door === "PVC Haustür" ||
      form.door === "Alu Haustür Einsatzfüllung"
    ) {
      return {
        href: "https://www.polnische-fenster.com/products/kunststoff-haustueren",
        label: "Haustür Anfragen",
      };
    }

    if (form.door === "Alu flügelüberdeckend") {
      return {
        href: "https://www.polnische-fenster.com/products/aluminium-haustueren",
        label: "Aluminium Haustür Anfragen",
      };
    }

    return null;
  }, [form.door]);

  const activePositions = useMemo(() => {
    return positions.filter((position) => hasAnyPositionContent(position));
  }, [positions]);

  function handleFormChange(e) {
    const { name, value } = e.target;

    setForm((prev) => {
      const next = {
        ...prev,
        [name]: value,
      };

      if (name === "beschattung" && value === "ohne Rollladen") {
        next.hoehenAngaben = "ohne Rollladenkasten";
        next.rolloMontage = "ohne Rollladen";
      }

      if (name === "fussbodenaufbau" && String(value).trim() === "") {
        next.hoeheBeiBodentief = "ohne Fußbodenaufbau";
      }

      return next;
    });
  }

  function handlePositionChange(id, e) {
    const { name, value, type, checked } = e.target;

    setPositions((prev) => {
      const updated = prev.map((position) => {
        if (position.id !== id) return position;

        const nextPosition = {
          ...position,
          [name]: type === "checkbox" ? checked : value,
        };

        if (name === "oeffnungsart" && value !== "anders (bitte beschreiben)") {
          nextPosition.oeffnungsartSonstiges = "";
        }

        return nextPosition;
      });

      return ensureTrailingBlankPosition(updated);
    });
  }

  function handleDeletePosition(id) {
    const confirmed = window.confirm(
      "Sind Sie sicher, dass Sie diese Position löschen möchten?"
    );

    if (!confirmed) return;

    setPositions((prev) => {
      const filtered = prev.filter((position) => position.id !== id);
      return ensureTrailingBlankPosition(filtered);
    });
  }

  function handleCopyPosition(id) {
    setPositions((prev) => {
      const index = prev.findIndex((position) => position.id === id);
      if (index === -1) return prev;

      const source = prev[index];
      if (isPositionEmpty(source)) return prev;

      const copy = {
        ...source,
        id: createId(),
      };

      const next = [
        ...prev.slice(0, index + 1),
        copy,
        ...prev.slice(index + 1),
      ];

      return ensureTrailingBlankPosition(next);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!String(form.name).trim()) {
      setError("Bitte geben Sie Ihren Namen ein.");
      return;
    }

    if (!String(form.ort).trim()) {
      setError("Bitte geben Sie PLZ und Ort ein.");
      return;
    }

    if (!String(form.email).trim() && !String(form.tel).trim()) {
      setError("Bitte geben Sie mindestens E-Mail oder Telefon an.");
      return;
    }

    if (form.email && !isValidEmail(form.email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    if (form.fussbodenaufbau && !isDigitsOnly(form.fussbodenaufbau)) {
      setError("Bitte geben Sie beim Fußbodenaufbau nur ganze Zahlen in mm ein.");
      return;
    }

    if (activePositions.length === 0) {
      setError("Bitte fügen Sie mindestens eine Position mit Breite und Höhe ein.");
      return;
    }

    for (let i = 0; i < activePositions.length; i += 1) {
      const position = activePositions[i];

      if (!isValidDimension(position.breiteMm)) {
        setError(`Position ${i + 1}: Bitte geben Sie eine gültige Breite in mm ein.`);
        return;
      }

      if (!isValidDimension(position.hoeheMm)) {
        setError(`Position ${i + 1}: Bitte geben Sie eine gültige Höhe in mm ein.`);
        return;
      }

      if (!isDigitsOnly(position.anzahl) || Number(position.anzahl) < 1) {
        setError(`Position ${i + 1}: Bitte geben Sie eine gültige Anzahl ein.`);
        return;
      }

      if (
        position.oeffnungsart === "anders (bitte beschreiben)" &&
        !String(position.oeffnungsartSonstiges).trim()
      ) {
        setError(`Position ${i + 1}: Bitte beschreiben Sie die Öffnungsart.`);
        return;
      }
    }

    setLoading(true);

    try {
      const res = await fetch("/api/anfragefenster", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          positions: activePositions,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Fehler beim Senden.");
      }

      router.push("/kontakt/anfrage/dankefenster");
    } catch (err) {
      setError(err.message || "Fehler beim Senden.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Anfrage Fenster</title>
        <meta
          name="description"
          content="Anfrageformular für Fenster aus Polen."
        />
      </Head>

      <section className="wrap">
        <div className="card">
          <h1 className="title">Anfrage für Ihre Fenster</h1>

          <p className="lead">
            Sagen Sie uns, was Sie brauchen – wir kümmern uns um den Rest.
            Wir melden uns in der Regel innerhalb von 24 Stunden.
          </p>

          <p className="contactHint">
            Sie können uns auch eine{" "}
            <a href="mailto:info@polnische-fenster.com">E-Mail</a>{" "}
            oder{" "}
            <a
              href="https://wa.me/4915737448021"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp-Nachricht
            </a>{" "}
            schicken.
          </p>

          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleFormChange}
              autoComplete="off"
              tabIndex="-1"
              className="hp"
            />

            <div className="grid two">
              <div>
                <label>Profil</label>
                <select name="profil" value={form.profil} onChange={handleFormChange}>
                  {PROFILE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Wärmedämmung</label>
                <select
                  name="insulation"
                  value={form.insulation}
                  onChange={handleFormChange}
                >
                  <option value="ohne Bedeutung">ohne Bedeutung</option>
                  <option value="1,3 W/m2K">1,3 W/m2K 2fach verglast</option>
                  <option value="1,0 W/m2K">1,0 W/m2K 3fach verglast</option>
                  <option value="max 0,95 W/m2K">max 0,95 W/m2K 3fach verglast</option>
                  <option value="max 0,9 W/m2K">max 0,9 W/m2K 3fach verglast</option>
                  <option value="max 0,8 W/m2K">max 0,8 W/m2K 3fach verglast</option>
                </select>
              </div>
            </div>

            <div className="grid two">
              <div>
                <label>Beschlag</label>
                <select name="beschlag" value={form.beschlag} onChange={handleFormChange}>
                  <option value="Standard">Standard</option>
                  <option value="RC1">RC1</option>
                  <option value="RC2">RC2</option>
                  <option value="versteckte Scharniere">versteckte Scharniere</option>
                  <option value="RC1 (versteckte Scharniere)">
                    RC1 (versteckte Scharniere)
                  </option>
                  <option value="RC2 (versteckte Scharniere)">
                    RC2 (versteckte Scharniere)
                  </option>
                </select>
              </div>

              <div>
                <label>Verglasung</label>
                <select name="glas" value={form.glas} onChange={handleFormChange}>
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
              </div>
            </div>

            <div className="grid two">
              <div>
                <label>Schwellen</label>
                <select name="schwelle" value={form.schwelle} onChange={handleFormChange}>
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
              </div>

              <div>
                <label>Beschattung</label>
                <select
                  name="beschattung"
                  value={form.beschattung}
                  onChange={handleFormChange}
                >
                  {BESCHATTUNG_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {showRollladenFields ? (
              <div className="grid two">
                <div>
                  <label>Höhenangaben</label>
                  <select
                    name="hoehenAngaben"
                    value={form.hoehenAngaben}
                    onChange={handleFormChange}
                  >
                    <option value="ohne Rollladenkasten">ohne Rollladenkasten</option>
                    <option value="inkl. Rollladenkasten">inkl. Rollladenkasten</option>
                    <option value="zzgl. Rollladenkasten">zzgl. Rollladenkasten</option>
                  </select>
                </div>

                <div>
                  <label>Rollladen Montage</label>
                  <select
                    name="rolloMontage"
                    value={form.rolloMontage}
                    onChange={handleFormChange}
                  >
                    <option value="ohne Rollladen">ohne Rollladen</option>
                    <option value="Aufsatzkasten am Fenster">Aufsatzkasten am Fenster</option>
                    <option value="Vorsatzrollladen an der Wand">
                      Vorsatzrollladen an der Wand
                    </option>
                    <option value="Vorsatzrollladen in Fensterleibung">
                      Vorsatzrollladen in Fensterleibung
                    </option>
                    <option value="Führungen am Rahmen, Kasten an der Wand">
                      Führungen am Rahmen, Kasten an der Wand
                    </option>
                  </select>
                </div>
              </div>
            ) : null}

            <div className="grid two">
              <div>
                <label>Farbe außen</label>
                <select name="farbeA" value={form.farbeA} onChange={handleFormChange}>
                  {COLOR_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Farbe innen</label>
                <select name="farbeI" value={form.farbeI} onChange={handleFormChange}>
                  {COLOR_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid two">
              <div>
                <label>Fußbodenaufbau</label>
                <input
                  type="text"
                  inputMode="numeric"
                  name="fussbodenaufbau"
                  value={form.fussbodenaufbau}
                  onChange={handleFormChange}
                  placeholder="z. B. 50"
                />
              </div>

              {showBodentiefField ? (
                <div>
                  <label>Höhe bei Bodentief</label>
                  <select
                    name="hoeheBeiBodentief"
                    value={form.hoeheBeiBodentief}
                    onChange={handleFormChange}
                  >
                    <option value="ohne Fußbodenaufbau">ohne Fußbodenaufbau</option>
                    <option value="inkl. Fußbodenaufbau">inkl. Fußbodenaufbau</option>
                    <option value="zzgl. Fußbodenaufbau">zzgl. Fußbodenaufbau</option>
                  </select>
                </div>
              ) : (
                <div />
              )}
            </div>

            <div className="grid two">
              <div className="doorBlock">
                <label>Haustür</label>
                <select name="door" value={form.door} onChange={handleFormChange}>
                  <option value="ohne Haustür">ohne Haustür</option>
                  <option value="PVC Haustür">PVC Haustür</option>
                  <option value="Alu Haustür Einsatzfüllung">
                    Alu Haustür Einsatzfüllung
                  </option>
                  <option value="Alu flügelüberdeckend">Alu flügelüberdeckend</option>
                </select>
              </div>

              <div className="doorLinkWrap">
                {doorLink ? (
                  <a
                    className="sideLink"
                    href={doorLink.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {doorLink.label}
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid two">
              <div>
                <label>Bauvorhaben</label>
                <select name="bv" value={form.bv} onChange={handleFormChange}>
                  <option value="Neubau, ohne Montage">Neubau, ohne Montage</option>
                  <option value="Neubau, mit RAL Montage">Neubau, mit RAL Montage</option>
                  <option value="Altbau, ohne Montage">Altbau, ohne Montage</option>
                  <option value="Altbau, mit RAL Montage">Altbau, mit RAL Montage</option>
                  <option value="Altbau, mit Demontage und RAL Montage">
                    Altbau, mit Demontage und RAL Montage
                  </option>
                </select>
              </div>

              <div>
                <label>Priorität</label>
                <select name="prio" value={form.prio} onChange={handleFormChange}>
                  <option value="Ich möchte Preise vergleichen">
                    Ich möchte Preise vergleichen
                  </option>
                  <option value="Bedarf innerhalb von 1 Jahr">
                    Bedarf innerhalb von 1 Jahr
                  </option>
                  <option value="Bedarf innerhalb von 6 Monaten">
                    Bedarf innerhalb von 6 Monaten
                  </option>
                  <option value="Bedarf innerhalb von 3 Monaten">
                    Bedarf innerhalb von 3 Monaten
                  </option>
                  <option value="Bedarf innerhalb von 1 Monat">
                    Bedarf innerhalb von 1 Monat
                  </option>
                  <option value="Bedarf innerhalb von 3 Wochen">
                    Bedarf innerhalb von 3 Wochen
                  </option>
                  <option value="Bedarf dringend">Bedarf dringend</option>
                </select>
              </div>
            </div>

            <div className="positionsWrap">
              <div className="positionsHeader">
                <h2>Positionen</h2>
                <p>
                  Sobald Breite und Höhe korrekt eingetragen sind, erscheint automatisch
                  die nächste Position.
                </p>
              </div>

              {positions.map((position, index) => {
                const showWidthError =
                  String(position.breiteMm).trim() !== "" &&
                  !isValidDimension(position.breiteMm);

                const showHeightError =
                  String(position.hoeheMm).trim() !== "" &&
                  !isValidDimension(position.hoeheMm);

                return (
                  <div key={position.id} className="positionCard">
                    <div className="positionTop">
                      <h3>Position {index + 1}</h3>

                      <div className="positionActions">
                        <button
                          type="button"
                          className="copyBtn"
                          onClick={() => handleCopyPosition(position.id)}
                        >
                          Kopieren
                        </button>

                        {positions.length > 1 ? (
                          <button
                            type="button"
                            className="deleteBtn"
                            onClick={() => handleDeletePosition(position.id)}
                          >
                            Löschen
                          </button>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid four">
                      <div>
                        <label>Breite in mm</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          name="breiteMm"
                          value={position.breiteMm}
                          onChange={(e) => handlePositionChange(position.id, e)}
                          placeholder="z. B. 1200"
                        />
                        {showWidthError ? (
                          <p className="warn">Bitte nur ganze Zahlen eingeben.</p>
                        ) : null}
                      </div>

                      <div>
                        <label>Höhe in mm</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          name="hoeheMm"
                          value={position.hoeheMm}
                          onChange={(e) => handlePositionChange(position.id, e)}
                          placeholder="z. B. 1500"
                        />
                        {showHeightError ? (
                          <p className="warn">Bitte nur ganze Zahlen eingeben.</p>
                        ) : null}
                      </div>

                      <div>
                        <label>Öffnungsart</label>
                        <select
                          name="oeffnungsart"
                          value={position.oeffnungsart}
                          onChange={(e) => handlePositionChange(position.id, e)}
                        >
                          {OPENING_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label>Anzahl</label>
                        <input
                          type="number"
                          min="1"
                          step="1"
                          name="anzahl"
                          value={position.anzahl}
                          onChange={(e) => handlePositionChange(position.id, e)}
                        />
                      </div>
                    </div>

                    {position.oeffnungsart === "anders (bitte beschreiben)" ? (
                      <div>
                        <label>Öffnungsart beschreiben</label>
                        <input
                          type="text"
                          name="oeffnungsartSonstiges"
                          value={position.oeffnungsartSonstiges}
                          onChange={(e) => handlePositionChange(position.id, e)}
                          placeholder="Bitte beschreiben"
                        />
                      </div>
                    ) : null}

                    <div>
                      <label>Optionen</label>
                      <div className="checks">
                        <label className="check">
                          <input
                            type="checkbox"
                            name="mitRollladen"
                            checked={position.mitRollladen}
                            onChange={(e) => handlePositionChange(position.id, e)}
                          />
                          <span>mit Rollladen</span>
                        </label>

                        <label className="check">
                          <input
                            type="checkbox"
                            name="mitInsektengitter"
                            checked={position.mitInsektengitter}
                            onChange={(e) => handlePositionChange(position.id, e)}
                          />
                          <span>mit Insektengitter</span>
                        </label>

                        <label className="check">
                          <input
                            type="checkbox"
                            name="mitMilchglas"
                            checked={position.mitMilchglas}
                            onChange={(e) => handlePositionChange(position.id, e)}
                          />
                          <span>mit Milchglas</span>
                        </label>

                        <label className="check">
                          <input
                            type="checkbox"
                            name="mitSchallschutz"
                            checked={position.mitSchallschutz}
                            onChange={(e) => handlePositionChange(position.id, e)}
                          />
                          <span>mit Schallschutz</span>
                        </label>

                        <label className="check">
                          <input
                            type="checkbox"
                            name="mitRaffstore"
                            checked={position.mitRaffstore}
                            onChange={(e) => handlePositionChange(position.id, e)}
                          />
                          <span>mit Raffstore</span>
                        </label>

                        <label className="check">
                          <input
                            type="checkbox"
                            name="mitSonnenschutz"
                            checked={position.mitSonnenschutz}
                            onChange={(e) => handlePositionChange(position.id, e)}
                          />
                          <span>mit Sonnenschutz</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label>Bemerkungen</label>
                      <textarea
                        name="bemerkungen"
                        rows="4"
                        value={position.bemerkungen}
                        onChange={(e) => handlePositionChange(position.id, e)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid two">
              <div>
                <label>Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div>
                <label>Telefon</label>
                <input
                  name="tel"
                  value={form.tel}
                  onChange={handleFormChange}
                  placeholder="Telefon oder E-Mail genügt"
                />
              </div>
            </div>

            <div className="grid two">
              <div>
                <label>Straße, Hausnr.</label>
                <input
                  name="strasse"
                  value={form.strasse}
                  onChange={handleFormChange}
                />
              </div>

              <div>
                <label>PLZ, Ort</label>
                <input
                  name="ort"
                  value={form.ort}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>

            <div>
              <label>E-Mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleFormChange}
                placeholder="E-Mail oder Telefon genügt"
              />
            </div>

            <p className="smallInfo">
              Bitte geben Sie mindestens <strong>E-Mail oder Telefon</strong> an.
            </p>

            {error ? <p className="error">{error}</p> : null}

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Wird gesendet..." : "Anfrage senden"}
            </button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px 70px;
        }

        .card {
          background: #fff;
          border: 1px solid #e7e7e7;
          border-radius: 18px;
          padding: 28px;
        }

        .title {
          font-size: 34px;
          margin: 0 0 10px;
        }

        .lead {
          color: #555;
          margin-bottom: 10px;
        }

        .contactHint {
          margin: 0 0 28px;
          color: #555;
        }

        .contactHint a {
          color: #f97316;
          font-weight: 700;
          text-decoration: none;
        }

        .form {
          display: grid;
          gap: 18px;
        }

        .grid {
          display: grid;
          gap: 16px;
        }

        .grid.two {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .grid.four {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        label {
          display: block;
          font-weight: 700;
          margin-bottom: 8px;
        }

        input,
        select,
        textarea {
          width: 100%;
          border: 1px solid #d8d8d8;
          border-radius: 12px;
          padding: 13px 14px;
          font-size: 15px;
          box-sizing: border-box;
          min-height: 48px;
          background: #fff;
        }

        textarea {
          resize: vertical;
          min-height: 120px;
        }

        .positionsWrap {
          display: grid;
          gap: 16px;
          padding: 20px;
          border: 1px solid #ececec;
          border-radius: 16px;
          background: #fcfcfc;
        }

        .positionsHeader h2 {
          margin: 0 0 6px;
          font-size: 24px;
        }

        .positionsHeader p {
          margin: 0;
          color: #666;
        }

        .positionCard {
          border: 1px solid #ededed;
          border-radius: 16px;
          padding: 18px;
          background: #fff;
          display: grid;
          gap: 16px;
        }

        .positionTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .positionTop h3 {
          margin: 0;
          font-size: 22px;
        }

        .positionActions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .copyBtn,
        .deleteBtn {
          border-radius: 10px;
          padding: 10px 14px;
          cursor: pointer;
          font-weight: 700;
        }

        .copyBtn {
          border: 1px solid #fed7aa;
          background: #fff7ed;
          color: #c2410c;
        }

        .deleteBtn {
          border: 1px solid #fecaca;
          background: #fff5f5;
          color: #b91c1c;
        }

        .checks {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .check {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          margin: 0;
        }

        .check input {
          width: auto;
          min-height: auto;
          margin: 0;
        }

        .warn {
          margin: 8px 0 0;
          color: #b45309;
          font-size: 14px;
          font-weight: 600;
        }

        .doorBlock {
          display: block;
        }

        .doorLinkWrap {
          display: flex;
          align-items: end;
        }

        .sideLink {
          display: inline-block;
          text-decoration: none;
          color: #f97316;
          font-weight: 700;
          padding: 13px 14px;
          border: 1px solid #fed7aa;
          border-radius: 12px;
          background: #fff7ed;
          min-height: 48px;
          box-sizing: border-box;
        }

        .smallInfo {
          color: #666;
          margin: -4px 0 0;
        }

        .error {
          color: #b91c1c;
          font-weight: 700;
        }

        .btn {
          display: inline-block;
          border: 0;
          border-radius: 12px;
          padding: 15px 22px;
          background: #f97316;
          color: white;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }

        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .hp {
          position: absolute;
          left: -9999px;
          opacity: 0;
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .grid.two,
          .grid.four,
          .checks {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .card {
            padding: 20px;
          }

          .title {
            font-size: 28px;
          }

          .positionTop {
            align-items: flex-start;
            flex-direction: column;
          }

          .positionActions {
            width: 100%;
          }

          .copyBtn,
          .deleteBtn,
          .sideLink {
            width: 100%;
            text-align: center;
          }

          .doorLinkWrap {
            align-items: stretch;
          }
        }
      `}</style>
    </>
  );
}