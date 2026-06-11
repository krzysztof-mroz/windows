import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const OPTIONS = {
  tuerart: [
    "Rahmentür STILE",
    "Lackierte Tür",
    "UNO Premium / Plattentür",
    "Glastür GRAF",
    "Schiebetür",
    "Wohnungseingangstür",
    "noch offen - Beratung gewünscht",
  ],
  system: [
    "mit Falz",
    "ohne Falz",
    "revers öffnend",
    "Schiebetür vor der Wand",
    "Schiebetür in der Wand",
    "noch offen - Beratung gewünscht",
  ],
  oberflaeche: [
    "GREKO",
    "PREMIUM",
    "ST CPL",
    "ST CPL AntiFinger",
    "lackiert / Weiß Titan UV",
    "Glas",
    "noch offen - Beratung gewünscht",
  ],
  farbe: [
    "Weiß",
    "Anthrazit",
    "Schwarz",
    "Eiche Natur",
    "Goldene Eiche",
    "Nussbaum",
    "Dunkelblau",
    "Salbei",
    "Holzdekor hell",
    "Holzdekor dunkel",
    "andere - Bemerkungen",
    "noch offen - Beratung gewünscht",
  ],
  zarge: [
    "Umfassungszarge",
    "Blockzarge",
    "Tunnelzarge",
    "verdecktes Türsystem",
    "ohne Zarge / nur Türblatt",
    "noch offen - Beratung gewünscht",
  ],
  oeffnung: [
    "DIN links",
    "DIN rechts",
    "Schiebetür links laufend",
    "Schiebetür rechts laufend",
    "noch offen - Beratung gewünscht",
  ],
  glas: [
    "ohne Glas",
    "Klarglas",
    "satiniertes Glas",
    "schwarzes Glas",
    "Glastür GRAF",
    "andere - Bemerkungen",
  ],
  griff: [
    "schwarz matt",
    "Edelstahl / Chrom",
    "Gold / Messing",
    "klassischer Drücker",
    "Schiebetürgriff / Griffmuschel",
    "noch offen - Beratung gewünscht",
  ],
  montage: [
    "nur Lieferung",
    "Lieferung und Montage",
    "noch offen - Beratung gewünscht",
  ],
};

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

function isOneOf(v, list) {
  return list.includes(String(v ?? "").trim());
}

export default function AnfrageInnentuerenPage() {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    tuerart: "noch offen - Beratung gewünscht",
    system: "noch offen - Beratung gewünscht",
    oberflaeche: "noch offen - Beratung gewünscht",
    farbe: "noch offen - Beratung gewünscht",
    zarge: "noch offen - Beratung gewünscht",
    oeffnung: "noch offen - Beratung gewünscht",
    glas: "ohne Glas",
    griff: "noch offen - Beratung gewünscht",
    montage: "noch offen - Beratung gewünscht",

    anzahl: 1,
    breiteMm: "",
    hoeheMm: "",
    wandstaerkeMm: "",
    wohnungseingang: false,
    badWcSchloss: false,
    lueftung: false,
    absenkdichtung: false,

    bemerkung: "",
    name: "",
    plz: "",
    email: "",
    telefon: "",
    website: "",
  });

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    const nextErrors = {};

    if (!isOneOf(form.tuerart, OPTIONS.tuerart)) nextErrors.tuerart = "Bitte Türart wählen.";
    if (!isOneOf(form.system, OPTIONS.system)) nextErrors.system = "Bitte System wählen.";
    if (!isOneOf(form.oberflaeche, OPTIONS.oberflaeche)) nextErrors.oberflaeche = "Bitte Oberfläche wählen.";
    if (!isOneOf(form.farbe, OPTIONS.farbe)) nextErrors.farbe = "Bitte Farbe/Dekor wählen.";
    if (!isOneOf(form.zarge, OPTIONS.zarge)) nextErrors.zarge = "Bitte Zarge wählen.";
    if (!isOneOf(form.oeffnung, OPTIONS.oeffnung)) nextErrors.oeffnung = "Bitte Öffnungsrichtung wählen.";
    if (!isOneOf(form.glas, OPTIONS.glas)) nextErrors.glas = "Bitte Glas wählen.";
    if (!isOneOf(form.griff, OPTIONS.griff)) nextErrors.griff = "Bitte Griff wählen.";
    if (!isOneOf(form.montage, OPTIONS.montage)) nextErrors.montage = "Bitte Lieferung/Montage wählen.";

    const anzahl = Number(form.anzahl);
    if (!Number.isFinite(anzahl) || anzahl < 1 || anzahl > 100) {
      nextErrors.anzahl = "Anzahl: 1-100";
    }

    if (String(form.breiteMm || "").trim()) {
      const breite = Number(form.breiteMm);
      if (!Number.isFinite(breite) || breite < 500 || breite > 1400) {
        nextErrors.breiteMm = "Breite: 500-1400 mm oder leer lassen.";
      }
    }

    if (String(form.hoeheMm || "").trim()) {
      const hoehe = Number(form.hoeheMm);
      if (!Number.isFinite(hoehe) || hoehe < 1800 || hoehe > 2400) {
        nextErrors.hoeheMm = "Höhe: 1800-2400 mm oder leer lassen.";
      }
    }

    if (String(form.wandstaerkeMm || "").trim()) {
      const wand = Number(form.wandstaerkeMm);
      if (!Number.isFinite(wand) || wand < 60 || wand > 600) {
        nextErrors.wandstaerkeMm = "Wandstärke: 60-600 mm oder leer lassen.";
      }
    }

    if (!String(form.name || "").trim()) nextErrors.name = "Bitte Vor- und Nachname angeben.";
    if (!String(form.plz || "").trim()) nextErrors.plz = "Bitte PLZ angeben.";

    const email = String(form.email || "").trim();
    const telefon = String(form.telefon || "").trim();
    if (!email && !telefon) nextErrors.contact = "Bitte mindestens E-Mail oder Telefon angeben.";
    if (email && !isEmail(email)) nextErrors.email = "Bitte gültige E-Mail eingeben.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event) {
    event.preventDefault();
    setServerError("");

    if (!validate()) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/anfrageinnentueren", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data?.error || "Senden fehlgeschlagen.");

      router.push("/kontakt/anfrage/dankeinnentueren");
    } catch (error) {
      setServerError(error?.message || "Senden fehlgeschlagen.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>Anfrage Innentüren</title>
        <meta
          name="description"
          content="Anfrageformular für Innentüren, Glastüren und Schiebetüren aus Polen."
        />
      </Head>

      <section className="wrap">
        <header className="head">
          <h1 className="title">Anfrage – Innentüren</h1>
          <p className="sub">
            Wählen Sie Türart, Oberfläche, Zarge und Ausstattung. Wenn Sie noch
            unsicher sind, lassen Sie die Auswahl einfach auf Beratung stehen.
          </p>
        </header>

        <form className="card" onSubmit={onSubmit} noValidate>
          <input
            type="text"
            value={form.website}
            onChange={(event) => setField("website", event.target.value)}
            autoComplete="off"
            tabIndex="-1"
            className="hp"
          />

          <h2 className="h2">Tür und System</h2>
          <div className="grid2">
            <FieldSelect label="Türart" name="tuerart" value={form.tuerart} options={OPTIONS.tuerart} error={errors.tuerart} onChange={setField} />
            <FieldSelect label="System" name="system" value={form.system} options={OPTIONS.system} error={errors.system} onChange={setField} />
            <FieldSelect label="Oberfläche" name="oberflaeche" value={form.oberflaeche} options={OPTIONS.oberflaeche} error={errors.oberflaeche} onChange={setField} />
            <FieldSelect label="Farbe / Dekor" name="farbe" value={form.farbe} options={OPTIONS.farbe} error={errors.farbe} onChange={setField} />
            <FieldSelect label="Zarge" name="zarge" value={form.zarge} options={OPTIONS.zarge} error={errors.zarge} onChange={setField} />
            <FieldSelect label="Öffnungsrichtung" name="oeffnung" value={form.oeffnung} options={OPTIONS.oeffnung} error={errors.oeffnung} onChange={setField} />
          </div>

          <h2 className="h2">Maße und Menge</h2>
          <div className="grid2">
            <FieldInput label="Anzahl" name="anzahl" type="number" value={form.anzahl} error={errors.anzahl} onChange={setField} />
            <FieldInput label="Breite Türblatt oder Öffnung (mm)" name="breiteMm" type="number" value={form.breiteMm} error={errors.breiteMm} onChange={setField} placeholder="optional" />
            <FieldInput label="Höhe Türblatt oder Öffnung (mm)" name="hoeheMm" type="number" value={form.hoeheMm} error={errors.hoeheMm} onChange={setField} placeholder="optional" />
            <FieldInput label="Wandstärke für Zarge (mm)" name="wandstaerkeMm" type="number" value={form.wandstaerkeMm} error={errors.wandstaerkeMm} onChange={setField} placeholder="optional" />
          </div>

          <h2 className="h2">Ausstattung</h2>
          <div className="grid2">
            <FieldSelect label="Glas" name="glas" value={form.glas} options={OPTIONS.glas} error={errors.glas} onChange={setField} />
            <FieldSelect label="Griff / Beschlag" name="griff" value={form.griff} options={OPTIONS.griff} error={errors.griff} onChange={setField} />
            <FieldSelect label="Lieferung / Montage" name="montage" value={form.montage} options={OPTIONS.montage} error={errors.montage} onChange={setField} />
          </div>

          <div className="checks">
            <Check label="Wohnungseingangstür" checked={form.wohnungseingang} onChange={(value) => setField("wohnungseingang", value)} />
            <Check label="Bad/WC-Schloss" checked={form.badWcSchloss} onChange={(value) => setField("badWcSchloss", value)} />
            <Check label="Lüftung / Unterschnitt" checked={form.lueftung} onChange={(value) => setField("lueftung", value)} />
            <Check label="Absenkdichtung" checked={form.absenkdichtung} onChange={(value) => setField("absenkdichtung", value)} />
          </div>

          <div className="field">
            <label>Zusätzliche Hinweise</label>
            <textarea
              value={form.bemerkung}
              onChange={(event) => setField("bemerkung", event.target.value)}
              className="textarea"
              rows={4}
              placeholder="z.B. mehrere Räume, gewünschtes Dekor, Fotos, Wandstärken, Montagewunsch..."
            />
          </div>

          <h2 className="h2">Ihre Daten</h2>
          <div className="grid2">
            <FieldInput label="Vor- und Nachname *" name="name" value={form.name} error={errors.name} onChange={setField} />
            <FieldInput label="PLZ Lieferung *" name="plz" value={form.plz} error={errors.plz} onChange={setField} placeholder="z.B. 10115" />
            <FieldInput label="E-Mail" name="email" value={form.email} error={errors.email} onChange={setField} placeholder="name@domain.de" inputMode="email" />
            <FieldInput label="Telefon" name="telefon" value={form.telefon} onChange={setField} placeholder="+49 ..." inputMode="tel" />
          </div>

          {errors.contact && <p className="errBanner">{errors.contact}</p>}
          {serverError && <p className="errBanner">{serverError}</p>}

          <button className="btn" type="submit" disabled={submitting}>
            {submitting ? "Senden..." : "Anfrage senden"}
          </button>

          <p className="fine">
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung der Anfrage zu.
          </p>
        </form>
      </section>

      <style jsx>{`
        .wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 24px 16px;
        }
        .head {
          text-align: center;
          margin-bottom: 14px;
        }
        .title {
          margin: 0;
          font-size: 28px;
          line-height: 1.15;
        }
        .sub {
          margin: 10px auto 0;
          color: #444;
          max-width: 62ch;
          line-height: 1.5;
        }
        .card {
          border: 1px solid #e6e6e6;
          border-radius: 16px;
          background: #fff;
          padding: 16px;
        }
        .h2 {
          margin: 18px 0 10px;
          font-size: 18px;
        }
        .grid2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        :global(.field label) {
          display: block;
          font-weight: 600;
          margin: 0 0 6px;
        }
        :global(.input),
        :global(.textarea),
        :global(select.input) {
          width: 100%;
          border: 1px solid #e6e6e6;
          border-radius: 12px;
          padding: 11px 12px;
          font-size: 16px;
          outline: none;
          background: #fff;
          box-sizing: border-box;
        }
        :global(.textarea) {
          resize: vertical;
        }
        :global(.err) {
          border-color: #d14343;
        }
        :global(.errText) {
          margin: 6px 0 0;
          color: #d14343;
          font-size: 13px;
        }
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
          margin: 10px 0 16px;
        }
        :global(.check) {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #e6e6e6;
          border-radius: 999px;
          padding: 8px 12px;
          background: #fff;
          user-select: none;
        }
        :global(.check input) {
          width: 18px;
          height: 18px;
        }
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
        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .fine {
          margin: 10px 0 0;
          font-size: 13px;
          color: #555;
          text-align: center;
        }
        .hp {
          position: absolute;
          left: -9999px;
          top: -9999px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
        @media (min-width: 720px) {
          .wrap {
            padding: 28px 20px;
          }
          .title {
            font-size: 34px;
          }
          .card {
            padding: 18px;
          }
          .grid2 {
            grid-template-columns: 1fr 1fr;
          }
          .btn {
            width: auto;
            min-width: 260px;
            margin-left: auto;
            margin-right: auto;
            display: block;
          }
        }
      `}</style>
    </>
  );
}

function FieldSelect({ label, name, value, options, error, onChange }) {
  return (
    <div className="field">
      <label>{label}</label>
      <select
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        className={`input ${error ? "err" : ""}`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="errText">{error}</p>}
    </div>
  );
}

function FieldInput({
  label,
  name,
  value,
  type = "text",
  error,
  onChange,
  placeholder,
  inputMode,
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        className={`input ${error ? "err" : ""}`}
        placeholder={placeholder}
        inputMode={inputMode}
      />
      {error && <p className="errText">{error}</p>}
    </div>
  );
}

function Check({ label, checked, onChange }) {
  return (
    <label className="check">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
