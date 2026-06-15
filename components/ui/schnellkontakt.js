import { useState } from "react";
import { useRouter } from "next/router";

const initialForm = {
  contact: "",
  message: "",
  website: "",
};

function Schnellkontakt() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("Wir freuen uns auf Ihre Nachricht.");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitFormHandler(event) {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");
    setNotice("Ihre Nachricht wird gesendet ...");

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        body: JSON.stringify({
          contact: form.contact,
          message: form.message,
          website: form.website,
          source:
            typeof window !== "undefined" ? window.location.href : "Website",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Senden fehlgeschlagen.");
      }

      setForm(initialForm);
      await router.push("/kontakt/schnellkontakt-danke");
    } catch (error) {
      setStatus("error");
      setNotice(error.message || "Ihre Nachricht konnte nicht gesendet werden.");
    }
  }

  return (
    <section className="quickContact" aria-label="Schnellkontakt">
      <div className="quickContactMascot" aria-hidden="true">
        <img
          src="/images/mascot/monteur-schnellkontakt.png"
          alt=""
          loading="lazy"
        />
      </div>

      <form className="quickContactCard" name="Kurzformular" onSubmit={submitFormHandler}>
        <div className="quickContactHead">
          <p>Schnellkontakt</p>
          <h2>Kurze Frage? Wir helfen direkt weiter.</h2>
        </div>

        <input
          className="quickContactTrap"
          type="text"
          name="website"
          value={form.website}
          onChange={updateField}
          tabIndex="-1"
          autoComplete="off"
        />

        <label className="quickContactField">
          <span>Ihre Nachricht</span>
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            rows="7"
            placeholder="Worum geht es bei Ihrem Projekt?"
            required
          />
        </label>

        <label className="quickContactField">
          <span>E-Mail oder Telefonnummer</span>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={updateField}
            placeholder="Damit wir Sie erreichen können"
            required
          />
        </label>

        <div className="quickContactActions">
          <p>Ihre Daten werden nicht weitergeleitet.</p>
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Wird gesendet ..." : "Nachricht senden"}
          </button>
        </div>

        <p className={`quickContactNotice ${status}`}>{notice}</p>
      </form>

      <style jsx>{`
        .quickContact {
          align-items: stretch;
          display: grid;
          grid-template-columns: 1fr;
          margin: 0 auto;
          max-width: 1120px;
          position: relative;
          text-align: left;
          width: 100%;
        }

        .quickContactMascot {
          display: flex;
          justify-content: center;
          margin: 0 0 -42px;
          pointer-events: none;
          position: relative;
          z-index: 2;
        }

        .quickContactMascot img {
          display: block;
          height: auto;
          max-width: min(260px, 72vw);
          width: 100%;
        }

        .quickContactCard {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(255, 248, 238, 0.94)),
            #fff;
          border: 1px solid #eadfce;
          box-shadow: 0 18px 48px rgba(32, 28, 24, 0.12);
          display: grid;
          gap: 16px;
          padding: 28px 18px 20px;
          position: relative;
          z-index: 1;
        }

        .quickContactHead p {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .quickContactHead h2 {
          color: #171717;
          font-size: 26px;
          line-height: 1.16;
          margin: 0;
          max-width: 14ch;
        }

        .quickContactField {
          display: grid;
          gap: 7px;
        }

        .quickContactField span {
          color: #3b332b;
          font-size: 13px;
          font-weight: 800;
        }

        .quickContactField input,
        .quickContactField textarea {
          background: #fff;
          border: 1px solid #dfc9ad;
          color: #1d1d1d;
          font: inherit;
          line-height: 1.45;
          outline: none;
          padding: 13px 14px;
          transition: border-color 0.16s ease, box-shadow 0.16s ease;
          width: 100%;
        }

        .quickContactField textarea {
          min-height: 156px;
          resize: vertical;
        }

        .quickContactField input:focus,
        .quickContactField textarea:focus {
          border-color: #d57716;
          box-shadow: 0 0 0 3px rgba(213, 119, 22, 0.18);
        }

        .quickContactActions {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: space-between;
        }

        .quickContactActions p {
          color: #6f665e;
          font-size: 13px;
          margin: 0;
        }

        .quickContactActions button {
          background: #171717;
          border: 1px solid #171717;
          color: #fff;
          cursor: pointer;
          font-weight: 800;
          padding: 13px 18px;
          transition: background 0.16s ease, border-color 0.16s ease, transform 0.16s ease;
        }

        .quickContactActions button:hover,
        .quickContactActions button:focus {
          background: #d57716;
          border-color: #d57716;
          transform: translateY(-1px);
        }

        .quickContactActions button:disabled {
          cursor: wait;
          opacity: 0.68;
          transform: none;
        }

        .quickContactNotice {
          color: #6f665e;
          font-size: 15px;
          font-weight: 700;
          margin: 0;
        }

        .quickContactNotice.success {
          color: #167a3a;
        }

        .quickContactNotice.error {
          color: #b3261e;
        }

        .quickContactTrap {
          height: 1px;
          left: -10000px;
          opacity: 0;
          position: absolute;
          top: auto;
          width: 1px;
        }

        @media (min-width: 760px) {
          .quickContact {
            grid-template-columns: minmax(210px, 0.45fr) minmax(0, 1fr);
            min-height: 430px;
          }

          .quickContactMascot {
            align-items: flex-end;
            justify-content: flex-end;
            margin: 0 -76px -10px 0;
          }

          .quickContactMascot img {
            max-width: 380px;
          }

          .quickContactCard {
            align-self: center;
            gap: 18px;
            padding: 34px 34px 26px 70px;
          }

          .quickContactHead h2 {
            font-size: 32px;
            max-width: 18ch;
          }
        }

        @media (min-width: 1040px) {
          .quickContact {
            grid-template-columns: 300px minmax(0, 1fr);
          }

          .quickContactMascot {
            margin-right: -110px;
          }

          .quickContactMascot img {
            max-width: 450px;
          }

          .quickContactCard {
            padding-left: 130px;
          }
        }
      `}</style>
    </section>
  );
}

export default Schnellkontakt;
