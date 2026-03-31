import nodemailer from "nodemailer";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

function toInt(v) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n) : NaN;
}

const OPENING_OPTIONS = [
  "Nach innen öffnend DIN links",
  "Nach innen öffnend DIN rechts",
  "Nach außen öffnend DIN links",
  "Nach außen öffnend DIN rechts",
];

const COLOR_OPTIONS = [
  "Weiß RAL 9016 Matt",
  "Anthrazitgrau RAL 7016 Matt",
  "DB 703 Matt",
  "DB 703 Sandstruktur",
  "Silbergrau RAL 7001 Matt",
  "Basaltgrau RAL 7012 Matt",
  "Schiefergrau RAL 7015 Matt",
  "Schwarzgrau RAL 7021 Matt",
  "Umbragrau RAL 7022 Matt",
  "Quarzgrau RAL 7039 Matt",
  "Mahagoni Braun RAL 8016 Matt",
  "Tiefschwarz RAL 9005 Matt",
  "Weißaluminium RAL 9006",
  "Graualuminium RAL 9007",
  "andere Farbe - Bemerkungen",
];

const AUSSEN_OPTIONS = [
  "Edelstahl Stoßgriff",
  "Eingelassener Griff",
  "Stoßgriff",
  "Drücker",
  "Knauf",
];

function isOneOf(v, list) {
  return list.includes(String(v ?? "").trim());
}

function normalizeColor(v) {
  const s = String(v || "").trim();
  if (!s) return "Weiß RAL 9016 Matt";
  return s;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const b = req.body || {};

    if (b.website && String(b.website).trim().length > 0) {
      return res.status(200).json({ ok: true });
    }

    const modell = String(b.modell || "").trim();
    const name = String(b.name || "").trim();
    const plz = String(b.plz || "").trim();
    const email = String(b.email || "").trim();
    const telefon = String(b.telefon || "").trim();

    if (!modell) return res.status(400).json({ error: "Fehlendes Modell." });
    if (!name) return res.status(400).json({ error: "Name ist erforderlich." });
    if (!plz) return res.status(400).json({ error: "PLZ ist erforderlich." });

    if (!email && !telefon) {
      return res.status(400).json({ error: "Bitte mindestens E-Mail oder Telefon angeben." });
    }

    if (email && !isEmail(email)) {
      return res.status(400).json({ error: "Ungültige E-Mail." });
    }

    const anzahl = toInt(b.anzahl);
    const gesamtBreiteMm = toInt(b.gesamtBreiteMm);
    const gesamtHoeheMm = toInt(b.gesamtHoeheMm);

    if (!anzahl || anzahl < 1 || anzahl > 100) {
      return res.status(400).json({ error: "Ungültige Anzahl." });
    }

    if (!gesamtBreiteMm || gesamtBreiteMm < 600 || gesamtBreiteMm > 3000) {
      return res.status(400).json({ error: "Ungültige Gesamtbreite." });
    }

    if (!gesamtHoeheMm || gesamtHoeheMm < 1600 || gesamtHoeheMm > 3000) {
      return res.status(400).json({ error: "Ungültige Gesamthöhe." });
    }

    const oeffnung = String(b.oeffnung || "Nach innen öffnend DIN rechts").trim();
    if (!isOneOf(oeffnung, OPENING_OPTIONS)) {
      return res.status(400).json({ error: "Ungültige Öffnungsrichtung." });
    }

    const farbeInnen = normalizeColor(b.farbeInnen);
    const farbeAussen = normalizeColor(b.farbeAussen);

    if (!isOneOf(farbeInnen, COLOR_OPTIONS)) {
      return res.status(400).json({ error: "Ungültige Farbe innen." });
    }

    if (!isOneOf(farbeAussen, COLOR_OPTIONS)) {
      return res.status(400).json({ error: "Ungültige Farbe außen." });
    }

    const aussen = String(b.aussen || "Edelstahl Stoßgriff").trim();
    if (!isOneOf(aussen, AUSSEN_OPTIONS)) {
      return res.status(400).json({ error: "Ungültige Auswahl bei Außen." });
    }

    const mitSeitenteil = !!b.mitSeitenteil;
    const mit2Seitenteilen = !!b.mit2Seitenteilen;
    const mitOberlicht = !!b.mitOberlicht;

    if (mitSeitenteil && mit2Seitenteilen) {
      return res.status(400).json({ error: "Bitte nur eine Seitenteil-Option auswählen." });
    }

    const seitenteilPosition = String(b.seitenteilPosition || "rechts von innen").trim();

    let breiteSeitenteil = null;
    let breiteTuerfluegelBeiSeitenteil = null;

    let breiteSeitenteilLinks = null;
    let breiteTuerfluegelBei2Seitenteilen = null;
    let breiteSeitenteilRechts = null;

    let hoeheTuerfluegel = null;
    let hoeheOberlicht = null;

    if (mitSeitenteil) {
      breiteSeitenteil = toInt(b.breiteSeitenteil);
      breiteTuerfluegelBeiSeitenteil = toInt(b.breiteTuerfluegelBeiSeitenteil);

      if (!breiteSeitenteil || !breiteTuerfluegelBeiSeitenteil) {
        return res.status(400).json({ error: "Bitte Breite Seitenteil und Breite Türflügel angeben." });
      }

      if (breiteSeitenteil + breiteTuerfluegelBeiSeitenteil !== gesamtBreiteMm) {
        return res.status(400).json({
          error: "Die Summe von Seitenteil und Türflügel stimmt nicht mit der Gesamtbreite überein.",
        });
      }

      if (!["rechts von innen", "links von innen"].includes(seitenteilPosition)) {
        return res.status(400).json({ error: "Ungültige Position des Seitenteils." });
      }
    }

    if (mit2Seitenteilen) {
      breiteSeitenteilLinks = toInt(b.breiteSeitenteilLinks);
      breiteTuerfluegelBei2Seitenteilen = toInt(b.breiteTuerfluegelBei2Seitenteilen);
      breiteSeitenteilRechts = toInt(b.breiteSeitenteilRechts);

      if (!breiteSeitenteilLinks || !breiteTuerfluegelBei2Seitenteilen || !breiteSeitenteilRechts) {
        return res.status(400).json({ error: "Bitte alle drei Breiten für 2 Seitenteile angeben." });
      }

      if (
        breiteSeitenteilLinks +
          breiteTuerfluegelBei2Seitenteilen +
          breiteSeitenteilRechts !==
        gesamtBreiteMm
      ) {
        return res.status(400).json({
          error: "Die Summe der drei Breiten stimmt nicht mit der Gesamtbreite überein.",
        });
      }
    }

    if (mitOberlicht) {
      hoeheTuerfluegel = toInt(b.hoeheTuerfluegel);
      hoeheOberlicht = toInt(b.hoeheOberlicht);

      if (!hoeheTuerfluegel || !hoeheOberlicht) {
        return res.status(400).json({ error: "Bitte Höhe Türflügel und Höhe Oberlicht angeben." });
      }

      if (hoeheTuerfluegel + hoeheOberlicht !== gesamtHoeheMm) {
        return res.status(400).json({
          error: "Die Summe von Türflügel und Oberlicht stimmt nicht mit der Gesamthöhe überein.",
        });
      }
    }

    const payload = {
      modell,

      anzahl,
      oeffnung,
      farbeInnen,
      farbeAussen,

      gesamtBreiteMm,
      gesamtHoeheMm,

      mitSeitenteil,
      seitenteilPosition: mitSeitenteil ? seitenteilPosition : "",
      breiteSeitenteil,
      breiteTuerfluegelBeiSeitenteil,

      mit2Seitenteilen,
      breiteSeitenteilLinks,
      breiteTuerfluegelBei2Seitenteilen,
      breiteSeitenteilRechts,

      mitOberlicht,
      hoeheTuerfluegel,
      hoeheOberlicht,

      aussen,

      elektrooeffner: !!b.elektrooeffner,
      tuerschliesser: !!b.tuerschliesser,
      edelstahlDruecker: !!b.edelstahlDruecker,
      fingerprintLeser: !!b.fingerprintLeser,
      zweifluegeligMitStulppfosten: !!b.zweifluegeligMitStulppfosten,

      bemerkung: String(b.bemerkung || "").trim(),
      name,
      plz,
      email,
      telefon,

      createdAt: new Date().toISOString(),
      ip: req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "",
      ua: req.headers["user-agent"] || "",
    };

    const text = [
      `Neue Anfrage – Aluminium Haustür`,
      ``,
      `Modell: ${payload.modell}`,
      `Anzahl: ${payload.anzahl}`,
      `Öffnungsrichtung: ${payload.oeffnung}`,
      `Farbe innen: ${payload.farbeInnen}`,
      `Farbe außen: ${payload.farbeAussen}`,
      `Gesamtmaß Breite: ${payload.gesamtBreiteMm} mm`,
      `Gesamtmaß Höhe: ${payload.gesamtHoeheMm} mm`,
      ``,
      `Mit Seitenteil: ${payload.mitSeitenteil ? "JA" : "NEIN"}`,
      payload.mitSeitenteil ? `Position Seitenteil: ${payload.seitenteilPosition}` : null,
      payload.mitSeitenteil ? `Breite Seitenteil: ${payload.breiteSeitenteil} mm` : null,
      payload.mitSeitenteil
        ? `Breite Türflügel: ${payload.breiteTuerfluegelBeiSeitenteil} mm`
        : null,
      ``,
      `Mit 2 Seitenteilen: ${payload.mit2Seitenteilen ? "JA" : "NEIN"}`,
      payload.mit2Seitenteilen
        ? `Breite Seitenteil links: ${payload.breiteSeitenteilLinks} mm`
        : null,
      payload.mit2Seitenteilen
        ? `Breite Türflügel: ${payload.breiteTuerfluegelBei2Seitenteilen} mm`
        : null,
      payload.mit2Seitenteilen
        ? `Breite Seitenteil rechts: ${payload.breiteSeitenteilRechts} mm`
        : null,
      ``,
      `Mit Oberlicht: ${payload.mitOberlicht ? "JA" : "NEIN"}`,
      payload.mitOberlicht ? `Höhe Türflügel: ${payload.hoeheTuerfluegel} mm` : null,
      payload.mitOberlicht ? `Höhe Oberlicht: ${payload.hoeheOberlicht} mm` : null,
      ``,
      `Außen: ${payload.aussen}`,
      `Elektroöffner: ${payload.elektrooeffner ? "JA" : "NEIN"}`,
      `Türschließer: ${payload.tuerschliesser ? "JA" : "NEIN"}`,
      `Edelstahl Drücker: ${payload.edelstahlDruecker ? "JA" : "NEIN"}`,
      `Fingerprint Leser: ${payload.fingerprintLeser ? "JA" : "NEIN"}`,
      `2 Flügelige Tür mit Stulppfosten: ${
        payload.zweifluegeligMitStulppfosten ? "JA" : "NEIN"
      }`,
      ``,
      `Bemerkung:`,
      payload.bemerkung || "-",
      ``,
      `Kunde: ${payload.name}`,
      `PLZ Lieferung: ${payload.plz}`,
      `E-Mail: ${payload.email || "-"}`,
      `Telefon: ${payload.telefon || "-"}`,
      ``,
      `Meta: ${payload.createdAt}`,
    ]
      .filter(Boolean)
      .join("\n");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const from = process.env.MAIL_FROM || "info@polnische-fenster.com";
    const to = "info@polnische-fenster.com";

    const subject = `Anfrage Aluminium Haustür – Modell ${payload.modell} – ${payload.plz}`;

    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email || undefined,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Serverfehler beim Senden." });
  }
}