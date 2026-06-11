import nodemailer from "nodemailer";

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

function requiredOption(body, key, label) {
  const value = String(body[key] || "").trim();
  if (!isOneOf(value, OPTIONS[key])) {
    throw new Error(`Ungültige Auswahl: ${label}.`);
  }
  return value;
}

function toInt(v) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n) : NaN;
}

function optionalInt(body, key, min, max, label) {
  const raw = String(body[key] ?? "").trim();
  if (!raw) return "";

  const value = toInt(raw);
  if (Number.isNaN(value) || value < min || value > max) {
    throw new Error(`Ungültiger Wert: ${label}.`);
  }

  return value;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body || {};

    if (body.website && String(body.website).trim().length > 0) {
      return res.status(200).json({ ok: true });
    }

    const name = String(body.name || "").trim();
    const plz = String(body.plz || "").trim();
    const email = String(body.email || "").trim();
    const telefon = String(body.telefon || "").trim();

    if (!name) return res.status(400).json({ error: "Name ist erforderlich." });
    if (!plz) return res.status(400).json({ error: "PLZ ist erforderlich." });
    if (!email && !telefon) {
      return res.status(400).json({ error: "Bitte mindestens E-Mail oder Telefon angeben." });
    }
    if (email && !isEmail(email)) {
      return res.status(400).json({ error: "Ungültige E-Mail." });
    }

    const anzahl = toInt(body.anzahl);
    if (!anzahl || anzahl < 1 || anzahl > 100) {
      return res.status(400).json({ error: "Ungültige Anzahl." });
    }

    const payload = {
      tuerart: requiredOption(body, "tuerart", "Türart"),
      system: requiredOption(body, "system", "System"),
      oberflaeche: requiredOption(body, "oberflaeche", "Oberfläche"),
      farbe: requiredOption(body, "farbe", "Farbe / Dekor"),
      zarge: requiredOption(body, "zarge", "Zarge"),
      oeffnung: requiredOption(body, "oeffnung", "Öffnungsrichtung"),
      glas: requiredOption(body, "glas", "Glas"),
      griff: requiredOption(body, "griff", "Griff / Beschlag"),
      montage: requiredOption(body, "montage", "Lieferung / Montage"),

      anzahl,
      breiteMm: optionalInt(body, "breiteMm", 500, 1400, "Breite"),
      hoeheMm: optionalInt(body, "hoeheMm", 1800, 2400, "Höhe"),
      wandstaerkeMm: optionalInt(body, "wandstaerkeMm", 60, 600, "Wandstärke"),

      wohnungseingang: !!body.wohnungseingang,
      badWcSchloss: !!body.badWcSchloss,
      lueftung: !!body.lueftung,
      absenkdichtung: !!body.absenkdichtung,

      bemerkung: String(body.bemerkung || "").trim(),
      name,
      plz,
      email,
      telefon,

      createdAt: new Date().toISOString(),
      ip: req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "",
      ua: req.headers["user-agent"] || "",
    };

    const mm = (value) => (value ? `${value} mm` : "-");

    const text = [
      `Neue Anfrage – Innentüren`,
      ``,
      `Türart: ${payload.tuerart}`,
      `System: ${payload.system}`,
      `Oberfläche: ${payload.oberflaeche}`,
      `Farbe / Dekor: ${payload.farbe}`,
      `Zarge: ${payload.zarge}`,
      `Öffnungsrichtung: ${payload.oeffnung}`,
      `Glas: ${payload.glas}`,
      `Griff / Beschlag: ${payload.griff}`,
      `Lieferung / Montage: ${payload.montage}`,
      ``,
      `Anzahl: ${payload.anzahl}`,
      `Breite: ${mm(payload.breiteMm)}`,
      `Höhe: ${mm(payload.hoeheMm)}`,
      `Wandstärke: ${mm(payload.wandstaerkeMm)}`,
      ``,
      `Wohnungseingangstür: ${payload.wohnungseingang ? "JA" : "NEIN"}`,
      `Bad/WC-Schloss: ${payload.badWcSchloss ? "JA" : "NEIN"}`,
      `Lüftung / Unterschnitt: ${payload.lueftung ? "JA" : "NEIN"}`,
      `Absenkdichtung: ${payload.absenkdichtung ? "JA" : "NEIN"}`,
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
    ].join("\n");

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
    const subject = `Anfrage Innentüren – ${payload.tuerart} – ${payload.plz}`;

    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email || undefined,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    if (err?.message?.startsWith("Ungültig")) {
      return res.status(400).json({ error: err.message });
    }

    console.error(err);
    return res.status(500).json({ error: "Serverfehler beim Senden." });
  }
}
