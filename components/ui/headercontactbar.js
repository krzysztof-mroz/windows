import { useState } from "react";

function HeaderContactBar() {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const handleWhatsappSubmit = (event) => {
    event.preventDefault();
    const text = whatsappMessage.trim();
    const url = text
      ? `https://wa.me/4915737448021?text=${encodeURIComponent(text)}`
      : "https://wa.me/4915737448021";

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="headerContactBar" aria-label="Kontakt">
      <a href="/" className="headerContactLogo" aria-label="Polnische-Fenster.com Startseite">
        <img src="/pics/logo_PF.png" alt="Polnische-Fenster.com Logo" />
      </a>

      <a className="headerContactMail" href="mailto:info@polnische-fenster.com">
        <img src="/pics/svg/briefumschlag.svg" alt="" />
        <span>info@polnische-fenster.com</span>
      </a>

      <form
        className="headerContactWhatsapp"
        onSubmit={handleWhatsappSubmit}
        aria-label="WhatsApp Nachricht starten"
      >
        <strong>WhatsApp Chat starten</strong>
        <label className="headerContactWhatsappInput">
          <textarea
            aria-label="WhatsApp Nachricht"
            value={whatsappMessage}
            onChange={(event) => setWhatsappMessage(event.target.value)}
            rows="3"
            placeholder="Hallo, ich interessiere mich für ..."
          />
        </label>
        <button type="submit" className="headerContactWhatsappButton">
          <img src="/pics/svg/whatsapp.svg" alt="" />
          WhatsApp öffnen
        </button>
        <img
          className="headerContactMascot"
          src="/images/mascot/monteur-whatsapp.png"
          alt=""
          loading="lazy"
        />
      </form>

      <style jsx>{`
        .headerContactBar {
          align-items: center;
          box-sizing: border-box;
          display: grid;
          gap: 14px;
          grid-template-columns: 150px minmax(230px, 260px) minmax(360px, 1fr);
          margin: 0 auto 18px;
          max-width: 1120px;
          padding: 12px 16px 0;
          width: 100%;
        }

        .headerContactLogo {
          display: block;
          justify-self: center;
          width: 132px;
        }

        .headerContactLogo img {
          display: block;
          height: auto;
          width: 100%;
        }

        .headerContactMail {
          align-items: center;
          background: #fff;
          border: 1px solid #e5e5e5;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
          color: #171717;
          display: inline-flex;
          font-size: 13px;
          font-weight: 800;
          gap: 7px;
          justify-content: center;
          padding: 9px 8px;
          text-decoration: none;
          width: 100%;
        }

        .headerContactMail img {
          flex: 0 0 auto;
          height: 22px;
          width: 22px;
        }

        .headerContactMail span {
          white-space: nowrap;
        }

        .headerContactWhatsapp {
          align-items: center;
          display: grid;
          gap: 10px;
          grid-template-columns: minmax(128px, 0.72fr) minmax(210px, 1fr) auto;
          min-height: 122px;
          position: relative;
        }

        .headerContactWhatsapp::before {
          background: radial-gradient(circle, rgba(37, 211, 102, 0.22), rgba(37, 211, 102, 0) 70%);
          content: "";
          height: 180px;
          pointer-events: none;
          position: absolute;
          right: -26px;
          top: -24px;
          width: 210px;
        }

        .headerContactWhatsapp strong {
          color: #111;
          font-size: 20px;
          line-height: 1.08;
          position: relative;
          text-align: center;
          z-index: 2;
        }

        .headerContactWhatsappInput {
          display: block;
          position: relative;
          z-index: 2;
        }

        .headerContactWhatsappInput textarea {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid #d8e6dc;
          color: #171717;
          font: inherit;
          font-size: 12px;
          line-height: 1.32;
          min-height: 78px;
          outline: none;
          padding: 10px 70px 10px 10px;
          resize: vertical;
          width: 100%;
        }

        .headerContactWhatsappInput textarea:focus {
          border-color: #25d366;
          box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.14);
        }

        .headerContactWhatsappButton {
          align-items: center;
          background: #25d366;
          border: 1px solid #25d366;
          color: #0f2d19;
          cursor: pointer;
          display: inline-flex;
          font-weight: 800;
          gap: 8px;
          justify-content: center;
          min-width: 184px;
          padding: 11px 14px;
          position: relative;
          z-index: 4;
        }

        .headerContactWhatsappButton:hover,
        .headerContactWhatsappButton:focus {
          background: #1fc15c;
          border-color: #1fc15c;
        }

        .headerContactWhatsappButton img {
          height: 22px;
          width: 22px;
        }

        .headerContactMascot {
          bottom: 20px;
          height: auto;
          pointer-events: none;
          position: absolute;
          right: 166px;
          width: 98px;
          z-index: 3;
        }

        @media (min-width: 760px) {
          .headerContactBar {
            padding-left: 0;
            padding-right: 0;
          }
        }

        @media (max-width: 980px) {
          .headerContactBar {
            grid-template-columns: 1fr;
            justify-items: center;
          }

          .headerContactMail {
            max-width: 252px;
          }

          .headerContactWhatsapp {
            grid-template-columns: minmax(0, 1fr);
            justify-items: center;
            max-width: 320px;
            min-height: 214px;
            width: 100%;
          }

          .headerContactWhatsappInput {
            max-width: 224px;
            width: 100%;
          }

          .headerContactWhatsappButton {
            min-width: 206px;
          }

          .headerContactMascot {
            bottom: 39px;
            right: -10px;
            width: 106px;
          }
        }

        @media (max-width: 380px) {
          .headerContactMail {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}

export default HeaderContactBar;
