import nodemailer from "nodemailer";

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function normalizeBody(body) {
  const legacy = body?.messageBody || {};

  return {
    contact: String(body?.contact || legacy.inputEmail || "").trim(),
    message: String(body?.message || legacy.inputMessage || "").trim(),
    source: String(body?.source || "").trim(),
    website: String(body?.website || "").trim(),
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = normalizeBody(req.body || {});

    if (payload.website) {
      return res.status(200).json({ ok: true });
    }

    if (!payload.contact) {
      return res.status(400).json({ error: "Bitte Kontaktdaten nicht vergessen." });
    }

    if (!payload.message) {
      return res.status(400).json({ error: "Bitte Ihre Nachricht nicht vergessen." });
    }

    if (payload.contact.includes("@") && !isEmail(payload.contact)) {
      return res.status(400).json({ error: "Bitte eine gültige E-Mail angeben." });
    }

    const createdAt = new Date().toISOString();
    const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "";
    const ua = req.headers["user-agent"] || "";

    const text = [
      "Neue Nachricht aus dem Schnellkontakt",
      "",
      `Kontakt: ${payload.contact}`,
      `Quelle: ${payload.source || "-"}`,
      "",
      "Nachricht:",
      payload.message,
      "",
      `Meta: ${createdAt}`,
      `IP: ${ip}`,
      `User-Agent: ${ua}`,
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
    const to =
      process.env.MAIL_TO ||
      process.env.SMTP_USER ||
      "info@polnische-fenster.com";
    const replyTo = isEmail(payload.contact) ? payload.contact : undefined;

    const info = await transporter.sendMail({
      from,
      to,
      replyTo,
      subject: `Schnellkontakt – ${payload.contact}`,
      text,
    });

    if (Array.isArray(info.rejected) && info.rejected.length > 0) {
      throw new Error(`SMTP rejected: ${info.rejected.join(", ")}`);
    }

    if (Array.isArray(info.accepted) && info.accepted.length === 0) {
      throw new Error("SMTP did not accept any recipient.");
    }

    return res.status(200).json({ ok: true, messageId: info.messageId || null });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Ihre Nachricht wurde nicht geschickt, bitte später versuchen.",
    });
  }
}
