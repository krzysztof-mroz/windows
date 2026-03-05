import nodemailer from "nodemailer";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

function toInt(v) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n) : NaN;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const b = req.body || {};

    // honeypot: boty często wypełniają ukryte pole
    if (b.website && String(b.website).trim().length > 0) {
      return res.status(200).json({ ok: true }); // udajemy sukces, nie wysyłamy
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
    if (email && !isEmail(email)) return res.status(400).json({ error: "Ungültige E-Mail." });

    const anzahl = toInt(b.anzahl);
    const breiteMm = toInt(b.breiteMm);
    const hoeheMm = toInt(b.hoeheMm);

    if (!anzahl || anzahl < 1 || anzahl > 100) return res.status(400).json({ error: "Ungültige Anzahl." });
    if (!breiteMm || breiteMm < 600 || breiteMm > 1600) return res.status(400).json({ error: "Ungültige Breite." });
    if (!hoeheMm || hoeheMm < 1600 || hoeheMm > 2600) return res.status(400).json({ error: "Ungültige Höhe." });

    const verbreiterungRaw = String(b.verbreiterungMm ?? "ohne").trim();
    let verbreiterung = verbreiterungRaw;
    if (verbreiterungRaw !== "ohne") {
      const v = toInt(verbreiterungRaw);
      if (Number.isNaN(v) || v < 0 || v > 300) {
        return res.status(400).json({ error: "Ungültige Verbreiterung." });
      }
      verbreiterung = `${v} mm`;
    }

    const payload = {
      modell,
      anzahl,
      farbeInnen: String(b.farbeInnen || "weiß"),
      farbeAussen: String(b.farbeAussen || "weiß"),
      breiteMm,
      hoeheMm,
      verbreiterung,
      aussen: String(b.aussen || "Drücker"),
      verglasung: String(b.verglasung || "2-fach, Klarglas"),
      elektrooeffner: !!b.elektrooeffner,
      tuerschliesser: !!b.tuerschliesser,
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
      `Neue Anfrage – Nebeneingangstür`,
      ``,
      `Modell: ${payload.modell}`,
      `Anzahl: ${payload.anzahl}`,
      `Farbe innen: ${payload.farbeInnen}`,
      `Farbe außen: ${payload.farbeAussen}`,
      `Breite: ${payload.breiteMm} mm`,
      `Höhe: ${payload.hoeheMm} mm`,
      `Verbreiterung Fußboden: ${payload.verbreiterung}`,
      `Außen: ${payload.aussen}`,
      `Verglasung: ${payload.verglasung}`,
      `Elektroöffner: ${payload.elektrooeffner ? "JA" : "NEIN"}`,
      `Türschließer: ${payload.tuerschliesser ? "JA" : "NEIN"}`,
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

    // SMTP z Twojej skrzynki (bezinwestycyjnie)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true", // true dla 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // IMPORTANT: "from" zwykle musi być z Twojej domeny/skrzynki
    const from = process.env.MAIL_FROM || "info@polnische-fenster.com";
    const to = "info@polnische-fenster.com";

    const subject = `Anfrage Nebeneingangstür – Modell ${payload.modell} – ${payload.plz}`;

    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email || undefined, // jak poda email, łatwo odpiszesz
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Serverfehler beim Senden." });
  }
}