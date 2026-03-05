import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

const OPTIONS = {
  aussen: ["Drücker", "einfacher Stoßgriff", "Edelstahl Stoßgriff"],
  verglasung: ["2-fach, Klarglas", "3-fach, Klarglas", "2-fach, Milchglas", "3-fach, Milchglas"],
};

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

export default function AnfragePage() {
  const router = useRouter();
  const modell = useMemo(() => {
    const m = router.query.modell;
    if (!m) return "";
    return String(m).padStart(2, "0");
  }, [router.query.modell]);

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const [form, setForm] = useState({
    modell: "",
    anzahl: 1,
    farbeInnen: "weiß",
    farbeAussen: "weiß",
    breiteMm: 1000,
    hoeheMm: 2000,
    verbreiterungMm: "ohne",
    aussen: "Drücker",
    verglasung: "2-fach, Klarglas",
    elektrooeffner: false,
    tuerschliesser: false,
    bemerkung: "",

    plz: "",
    name: "",
    email: "",
    telefon: "",

    // honeypot (anty-spam)
    website: "",
  });

  useEffect(() => {
    if (modell) setForm((p) => ({ ...p, modell }));
  }, [modell]);

  const [errors, setErrors] = useState({});

  function setField(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function validate() {
    const e = {};

    if (!form.modell) e.modell = "Bitte Modell wählen (aus dem Link).";
    if (!form.name.trim()) e.name = "Bitte Vor- und Nachname angeben.";
    if (!form.plz.trim()) e.plz = "Bitte PLZ angeben.";

    const email = form.email.trim();
    const telefon = form.telefon.trim();

    if (!email && !telefon) {
      e.contact = "Bitte mindestens E-Mail oder Telefon angeben.";
    }
    if (email && !isEmail(email)) e.email = "Bitte gültige E-Mail eingeben.";

    const anzahl = Number(form.anzahl);
    if (!Number.isFinite(anzahl) || anzahl < 1 || anzahl > 100) e.anzahl = "Anzahl: 1–100";

    const b = Number(form.breiteMm);
    const h = Number(form.hoeheMm);
    if (!Number.isFinite(b) || b < 600 || b > 1600) e.breiteMm = "Breite: 600–1600 mm";
    if (!Number.isFinite(h) || h < 1600 || h > 2600) e.hoeheMm = "Höhe: 1600–2600 mm";

    // verbreiterung: "ohne" albo liczba
    if (String(form.verbreiterungMm).trim() !== "ohne") {
      const v = Number(form.verbreiterungMm);
      if (!Number.isFinite(v) || v < 0 || v > 300) e.verbreiterungMm = "Verbreiterung: 'ohne' oder 0–300 mm";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    setServerError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Senden fehlgeschlagen.");
      }

      router.push(`/kontakt/anfrage/danke?modell=${encodeURIComponent(form.modell)}`);
    } catch (err) {
      setServerError(err.message || "Senden fehlgeschlagen.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="wrap">
      <header className="head">
        <h1 className="title">Anfrage – Nebeneingangstür</h1>
        <p className="sub">
          Modell wird automatisch übernommen. Bitte ergänzen Sie Maße, Optionen und Ihre Kontaktdaten.
        </p>
      </header>

      <form className="card" onSubmit={onSubmit} noValidate>
        <div className="grid2">
          <div className="field">
            <label>Modell</label>
            <input value={form.modell} readOnly className={`input ${errors.modell ? "err" : ""}`} />
            {errors.modell && <p className="errText">{errors.modell}</p>}
          </div>

          <div className="field">
            <label>Anzahl</label>
            <input
              type="number"
              min="1"
              max="100"
              value={form.anzahl}
              onChange={(e) => setField("anzahl", e.target.value)}
              className={`input ${errors.anzahl ? "err" : ""}`}
            />
            {errors.anzahl && <p className="errText">{errors.anzahl}</p>}
          </div>
        </div>

        <h2 className="h2">Ausführung</h2>

        <div className="grid2">
          <div className="field">
            <label>Farbe innen</label>
            <input
              value={form.farbeInnen}
              onChange={(e) => setField("farbeInnen", e.target.value)}
              className="input"
              placeholder="weiß"
            />
          </div>
          <div className="field">
            <label>Farbe außen</label>
            <input
              value={form.farbeAussen}
              onChange={(e) => setField("farbeAussen", e.target.value)}
              className="input"
              placeholder="weiß"
            />
          </div>

          <div className="field">
            <label>Breite (mm)</label>
            <input
              type="number"
              value={form.breiteMm}
              onChange={(e) => setField("breiteMm", e.target.value)}
              className={`input ${errors.breiteMm ? "err" : ""}`}
            />
            {errors.breiteMm && <p className="errText">{errors.breiteMm}</p>}
          </div>

          <div className="field">
            <label>Höhe (mm)</label>
            <input
              type="number"
              value={form.hoeheMm}
              onChange={(e) => setField("hoeheMm", e.target.value)}
              className={`input ${errors.hoeheMm ? "err" : ""}`}
            />
            {errors.hoeheMm && <p className="errText">{errors.hoeheMm}</p>}
          </div>

          <div className="field">
            <label>Verbreiterung für Fußboden (mm)</label>
            <input
              value={form.verbreiterungMm}
              onChange={(e) => setField("verbreiterungMm", e.target.value)}
              className={`input ${errors.verbreiterungMm ? "err" : ""}`}
              placeholder="ohne"
            />
            {errors.verbreiterungMm && <p className="errText">{errors.verbreiterungMm}</p>}
            <p className="hint">Wert „ohne“ oder Zahl (z.B. 30).</p>
          </div>

          <div className="field">
            <label>Außen</label>
            <select value={form.aussen} onChange={(e) => setField("aussen", e.target.value)} className="input">
              {OPTIONS.aussen.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Verglasung</label>
            <select value={form.verglasung} onChange={(e) => setField("verglasung", e.target.value)} className="input">
              {OPTIONS.verglasung.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="checks">
          <label className="check">
            <input
              type="checkbox"
              checked={form.elektrooeffner}
              onChange={(e) => setField("elektrooeffner", e.target.checked)}
            />
            <span>Elektroöffner</span>
          </label>

          <label className="check">
            <input
              type="checkbox"
              checked={form.tuerschliesser}
              onChange={(e) => setField("tuerschliesser", e.target.checked)}
            />
            <span>Türschließer</span>
          </label>
        </div>

        <div className="field">
          <label>Zusätzliche Hinweise</label>
          <textarea
            value={form.bemerkung}
            onChange={(e) => setField("bemerkung", e.target.value)}
            className="textarea"
            rows={4}
            placeholder="z.B. gewünschter Liefertermin, Besonderheiten, Montage, Fotos…"
          />
        </div>

        <h2 className="h2">Ihre Daten</h2>

        <div className="grid2">
          <div className="field">
            <label>Vor- und Nachname *</label>
            <input
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              className={`input ${errors.name ? "err" : ""}`}
            />
            {errors.name && <p className="errText">{errors.name}</p>}
          </div>

          <div className="field">
            <label>PLZ Lieferung *</label>
            <input
              value={form.plz}
              onChange={(e) => setField("plz", e.target.value)}
              className={`input ${errors.plz ? "err" : ""}`}
              placeholder="z.B. 10115"
            />
            {errors.plz && <p className="errText">{errors.plz}</p>}
          </div>

          <div className="field">
            <label>E-Mail</label>
            <input
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              className={`input ${errors.email ? "err" : ""}`}
              placeholder="name@domain.de"
              inputMode="email"
            />
            {errors.email && <p className="errText">{errors.email}</p>}
          </div>

          <div className="field">
            <label>Telefon</label>
            <input
              value={form.telefon}
              onChange={(e) => setField("telefon", e.target.value)}
              className="input"
              placeholder="+49 …"
              inputMode="tel"
            />
          </div>
        </div>

        {errors.contact && <p className="errBanner">{errors.contact}</p>}
        {serverError && <p className="errBanner">{serverError}</p>}

        {/* honeypot (ukryte pole) */}
        <div className="hp">
          <label>Website</label>
          <input value={form.website} onChange={(e) => setField("website", e.target.value)} />
        </div>

        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? "Senden…" : "Anfrage senden"}
        </button>

        <p className="fine">
          Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung der Anfrage zu.
        </p>
      </form>

      <style jsx>{`
        .wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 24px 16px;
        }
        .head { text-align: center; margin-bottom: 14px; }
        .title { margin: 0; font-size: 28px; line-height: 1.15; }
        .sub { margin: 10px auto 0; color: #444; max-width: 60ch; }

        .card {
          border: 1px solid #e6e6e6;
          border-radius: 16px;
          background: #fff;
          padding: 16px;
        }

        .h2 { margin: 18px 0 10px; font-size: 18px; }
        .grid2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .field label { display: block; font-weight: 600; margin: 0 0 6px; }
        .input, .textarea, select.input {
          width: 100%;
          border: 1px solid #e6e6e6;
          border-radius: 12px;
          padding: 11px 12px;
          font-size: 16px;
          outline: none;
          background: #fff;
        }
        .textarea { resize: vertical; }

        .hint { margin: 6px 0 0; font-size: 13px; color: #555; }
        .err { border-color: #d14343; }
        .errText { margin: 6px 0 0; color: #d14343; font-size: 13px; }
        .errBanner {
          margin: 12px 0 0;
          padding: 10px 12px;
          border-radius: 12px;
          background: #fff2f2;
          border: 1px solid #ffd0d0;
          color: #8b1a1a;
          font-weight: 600;
        }

        .checks {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 10px 0 4px;
        }
        .check {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #e6e6e6;
          border-radius: 999px;
          padding: 8px 12px;
          background: #fff;
          user-select: none;
        }
        .check input { width: 18px; height: 18px; }

        .btn {
          width: 100%;
          margin-top: 14px;
          background: #f97316;
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }
        .btn:disabled { opacity: .7; cursor: not-allowed; }

        .fine { margin: 10px 0 0; font-size: 13px; color: #555; text-align: center; }

        /* honeypot hidden */
        .hp {
          position: absolute;
          left: -9999px;
          top: -9999px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        @media (min-width: 720px) {
          .wrap { padding: 28px 20px; }
          .title { font-size: 34px; }
          .card { padding: 18px; }
          .grid2 { grid-template-columns: 1fr 1fr; }
          .btn { width: auto; min-width: 260px; margin-left: auto; margin-right: auto; display: block; }
        }
      `}</style>
    </section>
  );
}