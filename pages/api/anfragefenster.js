import nodemailer from "nodemailer";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

function toStrictInt(v) {
  const s = String(v ?? "").trim();
  if (!/^\d+$/.test(s)) return NaN;
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

function yesNo(v) {
  return v ? "JA" : "NEIN";
}

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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const b = req.body || {};

    if (b.website && String(b.website).trim().length > 0) {
      return res.status(200).json({ ok: true });
    }

    const name = String(b.name || "").trim();
    const ort = String(b.ort || "").trim();
    const email = String(b.email || "").trim();
    const telefon = String(b.tel || "").trim();

    if (!name) {
      return res.status(400).json({ error: "Name ist erforderlich." });
    }

    if (!ort) {
      return res.status(400).json({ error: "PLZ und Ort sind erforderlich." });
    }

    if (!email && !telefon) {
      return res
        .status(400)
        .json({ error: "Bitte mindestens E-Mail oder Telefon angeben." });
    }

    if (email && !isEmail(email)) {
      return res.status(400).json({ error: "Ungültige E-Mail." });
    }

    const fussbodenaufbauRaw = String(b.fussbodenaufbau || "").trim();
    if (fussbodenaufbauRaw && Number.isNaN(toStrictInt(fussbodenaufbauRaw))) {
      return res.status(400).json({
        error: "Fußbodenaufbau muss als ganze Zahl in mm angegeben werden.",
      });
    }

    const positions = Array.isArray(b.positions) ? b.positions : [];

    if (positions.length === 0) {
      return res.status(400).json({
        error: "Mindestens eine Position ist erforderlich.",
      });
    }

    const normalizedPositions = positions.map((position, index) => {
      const breiteMm = toStrictInt(position?.breiteMm);
      const hoeheMm = toStrictInt(position?.hoeheMm);
      const anzahl = toStrictInt(position?.anzahl);

      if (Number.isNaN(breiteMm) || breiteMm <= 0) {
        throw new Error(`Position ${index + 1}: Ungültige Breite.`);
      }

      if (Number.isNaN(hoeheMm) || hoeheMm <= 0) {
        throw new Error(`Position ${index + 1}: Ungültige Höhe.`);
      }

      if (Number.isNaN(anzahl) || anzahl < 1 || anzahl > 1000) {
        throw new Error(`Position ${index + 1}: Ungültige Anzahl.`);
      }

      const oeffnungsart = String(position?.oeffnungsart || "Dreh Kipp").trim();

      if (!OPENING_OPTIONS.includes(oeffnungsart)) {
        throw new Error(`Position ${index + 1}: Ungültige Öffnungsart.`);
      }

      const oeffnungsartSonstiges = String(
        position?.oeffnungsartSonstiges || ""
      ).trim();

      if (
        oeffnungsart === "anders (bitte beschreiben)" &&
        !oeffnungsartSonstiges
      ) {
        throw new Error(
          `Position ${index + 1}: Bitte Öffnungsart beschreiben.`
        );
      }

      return {
        breiteMm,
        hoeheMm,
        anzahl,
        oeffnungsart,
        oeffnungsartSonstiges,
        bemerkungen: String(position?.bemerkungen || "").trim(),
        mitRollladen: !!position?.mitRollladen,
        mitInsektengitter: !!position?.mitInsektengitter,
        mitMilchglas: !!position?.mitMilchglas,
        mitSchallschutz: !!position?.mitSchallschutz,
        mitRaffstore: !!position?.mitRaffstore,
        mitSonnenschutz: !!position?.mitSonnenschutz,
      };
    });

    const payload = {
      profil: String(b.profil || "").trim(),
      insulation: String(b.insulation || "").trim(),
      beschlag: String(b.beschlag || "").trim(),
      glas: String(b.glas || "").trim(),
      schwelle: String(b.schwelle || "").trim(),
      farbeA: String(b.farbeA || "").trim(),
      farbeI: String(b.farbeI || "").trim(),
      beschattung: String(b.beschattung || "").trim(),
      hoehenAngaben: String(b.hoehenAngaben || "").trim(),
      rolloMontage: String(b.rolloMontage || "").trim(),
      fussbodenaufbau: fussbodenaufbauRaw,
      hoeheBeiBodentief: String(b.hoeheBeiBodentief || "").trim(),
      door: String(b.door || "").trim(),
      bv: String(b.bv || "").trim(),
      prio: String(b.prio || "").trim(),
      name,
      ort,
      email,
      telefon,
      strasse: String(b.strasse || "").trim(),
      positions: normalizedPositions,
      createdAt: new Date().toISOString(),
      ip: req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "",
      ua: req.headers["user-agent"] || "",
    };

    const positionsText = payload.positions
      .map((p, index) => {
        const extras = [
          p.mitRollladen ? "mit Rollladen" : null,
          p.mitInsektengitter ? "mit Insektengitter" : null,
          p.mitMilchglas ? "mit Milchglas" : null,
          p.mitSchallschutz ? "mit Schallschutz" : null,
          p.mitRaffstore ? "mit Raffstore" : null,
          p.mitSonnenschutz ? "mit Sonnenschutz" : null,
        ]
          .filter(Boolean)
          .join(", ");

        return [
          `Position ${index + 1}`,
          `- Breite: ${p.breiteMm} mm`,
          `- Höhe: ${p.hoeheMm} mm`,
          `- Öffnungsart: ${
            p.oeffnungsart === "anders (bitte beschreiben)"
              ? `anders: ${p.oeffnungsartSonstiges}`
              : p.oeffnungsart
          }`,
          `- Anzahl: ${p.anzahl}`,
          `- Optionen: ${extras || "-"}`,
          `- Bemerkungen: ${p.bemerkungen || "-"}`,
        ].join("\n");
      })
      .join("\n\n");

    const text = [
      "Neue Anfrage – Fenster",
      "",
      "Allgemeine Angaben",
      `Profil: ${payload.profil || "-"}`,
      `Wärmedämmung: ${payload.insulation || "-"}`,
      `Beschlag: ${payload.beschlag || "-"}`,
      `Verglasung: ${payload.glas || "-"}`,
      `Schwellen: ${payload.schwelle || "-"}`,
      `Farbe außen: ${payload.farbeA || "-"}`,
      `Farbe innen: ${payload.farbeI || "-"}`,
      `Beschattung: ${payload.beschattung || "-"}`,
      `Höhenangaben: ${
        payload.beschattung === "ohne Rollladen"
          ? "-"
          : payload.hoehenAngaben || "-"
      }`,
      `Rollladen Montage: ${
        payload.beschattung === "ohne Rollladen"
          ? "-"
          : payload.rolloMontage || "-"
      }`,
      `Fußbodenaufbau: ${payload.fussbodenaufbau || "-"}`,
      `Höhe bei Bodentief: ${
        payload.fussbodenaufbau ? payload.hoeheBeiBodentief || "-" : "-"
      }`,
      `Haustür: ${payload.door || "-"}`,
      `Bauvorhaben: ${payload.bv || "-"}`,
      `Priorität: ${payload.prio || "-"}`,
      "",
      "Positionen",
      positionsText,
      "",
      "Kundendaten",
      `Name: ${payload.name}`,
      `Straße, Hausnr.: ${payload.strasse || "-"}`,
      `PLZ, Ort: ${payload.ort}`,
      `E-Mail: ${payload.email || "-"}`,
      `Telefon: ${payload.telefon || "-"}`,
      "",
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
    const to = process.env.MAIL_TO || "info@polnische-fenster.com";
    const subject = `Anfrage Fenster – ${payload.name} – ${payload.ort}`;

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
    return res.status(500).json({
      error: err.message || "Serverfehler beim Senden.",
    });
  }
}