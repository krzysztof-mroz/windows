import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const COLOR_OPTIONS = [
  "Weiß",
  "Anthrazitgrau glatt",
  "Anthrazitgrau Holzstruktur",
  "DB 703",
  "Nußbaum",
  "Goldene Eiche",
  "Mahagoni",
  "Mooreiche",
  "Bergkiefer",
  "Silbergrau",
  "Achatgrau",
  "Basaltgrau",
  "Signalgrau",
  "Quarzgrau",
  "Schiefergrau",
  "Dunkelgrün",
  "Stahlblau",
  "Weinrot",
  "Dunkelbraun",
];

const OPENING_OPTIONS = [
  "Nach innen öffnend DIN links",
  "Nach innen öffnend DIN rechts",
  "Nach außen öffnend DIN links",
  "Nach außen öffnend DIN rechts",
];

export default function AnfrageHTPVCPage() {
  const router = useRouter();
  const { modell, edelstahlrahmen } = router.query;

  const [form, setForm] = useState({
    modell: "",
    edelstahlrahmen: false,

    anzahl: 1,
    farbeInnen: "Weiß",
    farbeAussen: "Weiß",
    oeffnung: "Nach innen öffnend DIN rechts",

    gesamtBreiteMm: 1000,
    gesamtHoeheMm: 2000,

    mitSeitenteil: false,
    seitenteilPosition: "rechts von innen",
    breiteSeitenteil: "",
    breiteTuerfluegelBeiSeitenteil: "",

    mit2Seitenteilen: false,
    breiteSeitenteilLinks: "",
    breiteTuerfluegelBei2Seitenteilen: "",
    breiteSeitenteilRechts: "",

    mitOberlicht: false,
    hoeheTuerfluegel: "",
    hoeheOberlicht: "",

    aussen: "Stoßgriff",
    verglasung: "2-fach, Klarglas",

    elektrooeffner: false,
    tuerschliesser: false,
    vsgGlas: false,
    edelstahlDruecker: false,
    fingerprintLeser: false,
    zweifluegeligMitStulppfosten: false,

    bemerkung: "",
    name: "",
    plz: "",
    email: "",
    telefon: "",

    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [widthWarning, setWidthWarning] = useState("");
  const [heightWarning, setHeightWarning] = useState("");

  useEffect(() => {
    if (!router.isReady) return;

    setForm((prev) => ({
      ...prev,
      modell: String(modell || ""),
      edelstahlrahmen: String(edelstahlrahmen || "0") === "1",
    }));
  }, [router.isReady, modell, edelstahlrahmen]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => {
      const next = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "mitSeitenteil" && checked) {
        next.mit2Seitenteilen = false;
        next.breiteSeitenteilLinks = "";
        next.breiteTuerfluegelBei2Seitenteilen = "";
        next.breiteSeitenteilRechts = "";
      }

      if (name === "mit2Seitenteilen" && checked) {
        next.mitSeitenteil = false;
        next.breiteSeitenteil = "";
        next.breiteTuerfluegelBeiSeitenteil = "";
        next.seitenteilPosition = "rechts von innen";
      }

      return next;
    });
  }

  const widthValidation = useMemo(() => {
    const total = Number(form.gesamtBreiteMm);

    if (!Number.isFinite(total) || total <= 0) return "";

    if (form.mitSeitenteil) {
      const a = Number(form.breiteSeitenteil);
      const b = Number(form.breiteTuerfluegelBeiSeitenteil);

      if (!a || !b) return "";
      if (a + b !== total) {
        return `Achtung: Breite Seitenteil (${a} mm) + Breite Türflügel (${b} mm) = ${a + b} mm, Gesamtmaß Breite ist aber ${total} mm.`;
      }
    }

    if (form.mit2Seitenteilen) {
      const a = Number(form.breiteSeitenteilLinks);
      const b = Number(form.breiteTuerfluegelBei2Seitenteilen);
      const c = Number(form.breiteSeitenteilRechts);

      if (!a || !b || !c) return "";
      if (a + b + c !== total) {
        return `Achtung: Seitenteil links (${a} mm) + Türflügel (${b} mm) + Seitenteil rechts (${c} mm) = ${a + b + c} mm, Gesamtmaß Breite ist aber ${total} mm.`;
      }
    }

    return "";
  }, [
    form.gesamtBreiteMm,
    form.mitSeitenteil,
    form.breiteSeitenteil,
    form.breiteTuerfluegelBeiSeitenteil,
    form.mit2Seitenteilen,
    form.breiteSeitenteilLinks,
    form.breiteTuerfluegelBei2Seitenteilen,
    form.breiteSeitenteilRechts,
  ]);

  const heightValidation = useMemo(() => {
    const total = Number(form.gesamtHoeheMm);

    if (!Number.isFinite(total) || total <= 0) return "";

    if (form.mitOberlicht) {
      const a = Number(form.hoeheTuerfluegel);
      const b = Number(form.hoeheOberlicht);

      if (!a || !b) return "";
      if (a + b !== total) {
        return `Achtung: Höhe Türflügel (${a} mm) + Höhe Oberlicht (${b} mm) = ${a + b} mm, Gesamtmaß Höhe ist aber ${total} mm.`;
      }
    }

    return "";
  }, [form.gesamtHoeheMm, form.mitOberlicht, form.hoeheTuerfluegel, form.hoeheOberlicht]);

  useEffect(() => {
    setWidthWarning(widthValidation);
  }, [widthValidation]);

  useEffect(() => {
    setHeightWarning(heightValidation);
  }, [heightValidation]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (widthValidation) {
      setError("Bitte prüfen Sie die Breitenangaben.");
      return;
    }

    if (heightValidation) {
      setError("Bitte prüfen Sie die Höhenangaben.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/anfragehtpvc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Fehler beim Senden.");
      }

      router.push("/kontakt/anfrage/dankehtpvc");
    } catch (err) {
      setError(err.message || "Fehler beim Senden.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Anfrage Kunststoff Haustüren</title>
        <meta
          name="description"
          content="Anfrageformular für Kunststoff Haustüren aus Polen."
        />
      </Head>

      <section className="wrap">
        <div className="card">
          <h1 className="title">Anfrage Kunststoff Haustür</h1>

          <p className="lead">
            Senden Sie uns Ihre Anfrage. Wir melden uns in der Regel innerhalb von 24 Stunden.
          </p>

          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex="-1"
              className="hp"
            />

            <div className="grid two">
              <div>
                <label>Modell</label>
                <input type="text" name="modell" value={form.modell} readOnly />
              </div>

              <div>
                <label>Edelstahlrahmen</label>
                <input
                  type="text"
                  value={form.edelstahlrahmen ? "Ja" : "Nein"}
                  readOnly
                />
              </div>
            </div>

            <div className="grid three">
              <div>
                <label>Anzahl</label>
                <input
                  type="number"
                  name="anzahl"
                  min="1"
                  max="100"
                  value={form.anzahl}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Farbe innen</label>
                <select name="farbeInnen" value={form.farbeInnen} onChange={handleChange}>
                  {COLOR_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Farbe außen</label>
                <select name="farbeAussen" value={form.farbeAussen} onChange={handleChange}>
                  {COLOR_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label>Öffnungsrichtung</label>
              <select name="oeffnung" value={form.oeffnung} onChange={handleChange}>
                {OPENING_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid two">
              <div>
                <label>Gesamtmaß Breite (mm)</label>
                <input
                  type="number"
                  name="gesamtBreiteMm"
                  min="600"
                  max="3000"
                  value={form.gesamtBreiteMm}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Gesamtmaß Höhe (mm)</label>
                <input
                  type="number"
                  name="gesamtHoeheMm"
                  min="1600"
                  max="3000"
                  value={form.gesamtHoeheMm}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="checksBlock">
              <label className="check">
                <input
                  type="checkbox"
                  name="mitSeitenteil"
                  checked={form.mitSeitenteil}
                  onChange={handleChange}
                />
                <span>mit Seitenteil</span>
              </label>

              {form.mitSeitenteil && (
                <div className="subbox">
                  <div className="grid three">
                    <div>
                      <label>Breite Seitenteil (mm)</label>
                      <input
                        type="number"
                        name="breiteSeitenteil"
                        value={form.breiteSeitenteil}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label>Breite Türflügel (mm)</label>
                      <input
                        type="number"
                        name="breiteTuerfluegelBeiSeitenteil"
                        value={form.breiteTuerfluegelBeiSeitenteil}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label>Position</label>
                      <select
                        name="seitenteilPosition"
                        value={form.seitenteilPosition}
                        onChange={handleChange}
                      >
                        <option value="rechts von innen">rechts von innen</option>
                        <option value="links von innen">links von innen</option>
                      </select>
                    </div>
                  </div>

                  {widthWarning ? <p className="warn">{widthWarning}</p> : null}
                </div>
              )}

              <label className="check">
                <input
                  type="checkbox"
                  name="mit2Seitenteilen"
                  checked={form.mit2Seitenteilen}
                  onChange={handleChange}
                />
                <span>mit 2 Seitenteilen</span>
              </label>

              {form.mit2Seitenteilen && (
                <div className="subbox">
                  <div className="grid three">
                    <div>
                      <label>Breite Seitenteil links (Innenansicht) (mm)</label>
                      <input
                        type="number"
                        name="breiteSeitenteilLinks"
                        value={form.breiteSeitenteilLinks}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label>Breite Türflügel (mm)</label>
                      <input
                        type="number"
                        name="breiteTuerfluegelBei2Seitenteilen"
                        value={form.breiteTuerfluegelBei2Seitenteilen}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label>Breite Seitenteil rechts (Innenansicht) (mm)</label>
                      <input
                        type="number"
                        name="breiteSeitenteilRechts"
                        value={form.breiteSeitenteilRechts}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {widthWarning ? <p className="warn">{widthWarning}</p> : null}
                </div>
              )}

              <label className="check">
                <input
                  type="checkbox"
                  name="mitOberlicht"
                  checked={form.mitOberlicht}
                  onChange={handleChange}
                />
                <span>mit Oberlicht</span>
              </label>

              {form.mitOberlicht && (
                <div className="subbox">
                  <div className="grid two">
                    <div>
                      <label>Höhe Türflügel (mm)</label>
                      <input
                        type="number"
                        name="hoeheTuerfluegel"
                        value={form.hoeheTuerfluegel}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label>Höhe Oberlicht (mm)</label>
                      <input
                        type="number"
                        name="hoeheOberlicht"
                        value={form.hoeheOberlicht}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {heightWarning ? <p className="warn">{heightWarning}</p> : null}
                </div>
              )}
            </div>

            <div className="grid two">
              <div>
                <label>Außen</label>
                <select name="aussen" value={form.aussen} onChange={handleChange}>
                  <option value="Stoßgriff">Stoßgriff</option>
                  <option value="Drücker">Drücker</option>
                  <option value="Knauf">Knauf</option>
                </select>
              </div>

              <div>
                <label>Verglasung</label>
                <select name="verglasung" value={form.verglasung} onChange={handleChange}>
                  <option value="2-fach, Klarglas">2-fach, Klarglas</option>
                  <option value="3-fach, Klarglas">3-fach, Klarglas</option>
                  <option value="Milchglas">Milchglas</option>
                  <option value="Ornamentglas">Ornamentglas</option>
                </select>
              </div>
            </div>

            <div>
              <label>Extras</label>
              <div className="checks">
                <label className="check">
                  <input
                    type="checkbox"
                    name="elektrooeffner"
                    checked={form.elektrooeffner}
                    onChange={handleChange}
                  />
                  <span>Elektroöffner</span>
                </label>

                <label className="check">
                  <input
                    type="checkbox"
                    name="tuerschliesser"
                    checked={form.tuerschliesser}
                    onChange={handleChange}
                  />
                  <span>Türschließer</span>
                </label>

                <label className="check">
                  <input
                    type="checkbox"
                    name="vsgGlas"
                    checked={form.vsgGlas}
                    onChange={handleChange}
                  />
                  <span>VSG Glas</span>
                </label>

                <label className="check">
                  <input
                    type="checkbox"
                    name="edelstahlDruecker"
                    checked={form.edelstahlDruecker}
                    onChange={handleChange}
                  />
                  <span>Edelstahl Drücker</span>
                </label>

                <label className="check">
                  <input
                    type="checkbox"
                    name="fingerprintLeser"
                    checked={form.fingerprintLeser}
                    onChange={handleChange}
                  />
                  <span>Fingerprint Leser</span>
                </label>

                <label className="check">
                  <input
                    type="checkbox"
                    name="zweifluegeligMitStulppfosten"
                    checked={form.zweifluegeligMitStulppfosten}
                    onChange={handleChange}
                  />
                  <span>2 Flügelige Tür mit Stulppfosten</span>
                </label>
              </div>
            </div>

            <div>
              <label>Bemerkung</label>
              <textarea
                name="bemerkung"
                rows="5"
                value={form.bemerkung}
                onChange={handleChange}
              />
            </div>

            <div className="grid two">
              <div>
                <label>Name</label>
                <input name="name" value={form.name} onChange={handleChange} required />
              </div>

              <div>
                <label>PLZ Lieferung</label>
                <input name="plz" value={form.plz} onChange={handleChange} required />
              </div>
            </div>

            <div className="grid two">
              <div>
                <label>E-Mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Telefon</label>
                <input name="telefon" value={form.telefon} onChange={handleChange} />
              </div>
            </div>

            {error ? <p className="error">{error}</p> : null}

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Wird gesendet..." : "Anfrage senden"}
            </button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .wrap {
          max-width: 980px;
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
          margin-bottom: 28px;
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

        .grid.three {
          grid-template-columns: repeat(3, minmax(0, 1fr));
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
        }

        textarea {
          resize: vertical;
        }

        .checks {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .checksBlock {
          display: grid;
          gap: 12px;
          padding: 18px;
          border: 1px solid #ececec;
          border-radius: 14px;
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
          margin: 0;
        }

        .subbox {
          background: #fafafa;
          border: 1px solid #ededed;
          border-radius: 14px;
          padding: 16px;
        }

        .warn {
          margin: 12px 0 0;
          color: #b45309;
          font-size: 14px;
          font-weight: 600;
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

        @media (max-width: 768px) {
          .grid.two,
          .grid.three,
          .checks {
            grid-template-columns: 1fr;
          }

          .card {
            padding: 20px;
          }

          .title {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}