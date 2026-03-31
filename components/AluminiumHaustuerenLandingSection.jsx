import React from "react";

const ICONS = {
  panel: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 3h12v18H6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 7h6M9 11h6M9 15h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.5-2.8 7.9-7 10-4.2-2.1-7-5.5-7-10V6l7-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9.5 12.2l1.7 1.7 3.5-3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  glass: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="6"
        y="3"
        width="12"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 6h6v12H9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6h16M4 12h16M4 18h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function AluminiumHaustuerenLandingSection({
  minPriceText = "auf Anfrage",
}) {
  return (
    <section className="pfWrap">
      <header className="pfHeader">
        <h2 className="pfTitle">Moderne Aluminium Haustüren nach Maß</h2>

        <div className="pfTwoCol">
          <div className="pfCard">
            <h3 className="pfCardTitle">Vorteile</h3>
            <ul className="pfList">
              <li>
                <b>77 mm dicke Paneele</b> für eine starke und hochwertige
                Konstruktion
              </li>
              <li>
                <b>Mehrfachverriegelung als Standard</b> für mehr Sicherheit
              </li>
              <li>
                <b>Paneele aus Aluminiumblech</b> für hohe Stabilität und
                Langlebigkeit
              </li>
              <li>
                <b>Verdeckte Scharniere als Standard</b> für eine elegante Optik
              </li>
              <li>
                <b>VSG-Verglasung mit warmer Kante</b> als Standard
              </li>
              <li>
                Moderne und repräsentative Lösung für <b>Neubau und Sanierung</b>
              </li>
              <li>
                Sehr hochwertige Optik und robuste Konstruktion für den
                täglichen Einsatz
              </li>
              <li>
                Geeignet für moderne, energieeffiziente Bauprojekte
              </li>
            </ul>
          </div>

          <div className="pfCard">
            <h3 className="pfCardTitle">Ausstattung</h3>
            <ul className="pfList">
              <li>
                <b>Stoßgriff oder Drücker</b> je nach Modell und Wunsch
              </li>
              <li>
                Optional <b>Griffmulde in Edelstahlschwarz</b> mit
                Beleuchtungsmöglichkeit
              </li>
              <li>Modelle mit Verglasung oder geschlossener Füllung</li>
              <li>Viele moderne Designs und elegante Türbilder</li>
              <li>Individuelle Maße für Ihr Bauvorhaben</li>
              <li>Seitenteile und Oberlichter auf Anfrage</li>
              <li>Maßanfertigung passend zu Ihrem Eingangsbereich</li>
            </ul>
          </div>
        </div>

        <div className="pfInfoGrid">
          <article className="pfInfo">
            <div className="pfIcon">{ICONS.panel}</div>
            <h3 className="pfInfoTitle">Starke Paneele</h3>
            <p className="pfInfoText">
              77 mm dicke Paneele sorgen für eine massive und hochwertige
              Türfüllung.
            </p>
          </article>

          <article className="pfInfo">
            <div className="pfIcon">{ICONS.security}</div>
            <h3 className="pfInfoTitle">Sicherheit</h3>
            <p className="pfInfoText">
              Mehrfachverriegelung und robuste Konstruktion gehören zur
              Standardausstattung.
            </p>
          </article>

          <article className="pfInfo">
            <div className="pfIcon">{ICONS.glass}</div>
            <h3 className="pfInfoTitle">Verglasung</h3>
            <p className="pfInfoText">
              VSG-Verglasung mit warmer Kante als Standard bei verglasten
              Modellen.
            </p>
          </article>

          <article className="pfInfo">
            <div className="pfIcon">{ICONS.custom}</div>
            <h3 className="pfInfoTitle">Maßanfertigung</h3>
            <p className="pfInfoText">
              Individuelle Lösungen passend zu Ihrem Eingang und Bauprojekt.
            </p>
          </article>
        </div>

        <div className="pfPriceBox">
          <p className="pfPriceText">
            Aluminium Haustüren <b>{minPriceText}</b>
          </p>
        </div>
      </header>

      <style jsx>{`
        .pfWrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 16px;
        }

        .pfTitle {
          text-align: center;
          font-size: 28px;
          line-height: 1.15;
          margin: 0 0 16px;
        }

        .pfTwoCol {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 14px;
        }

        .pfCard {
          border: 1px solid #e6e6e6;
          border-radius: 14px;
          background: #fff;
          padding: 16px;
        }

        .pfCardTitle {
          font-size: 22px;
          margin: 0 0 10px;
        }

        .pfList {
          margin: 0;
          padding-left: 18px;
          color: #1a1a1a;
        }

        .pfList li {
          margin: 8px 0;
        }

        .pfInfoGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 16px;
        }

        @media (max-width: 360px) {
          .pfInfoGrid {
            grid-template-columns: 1fr;
          }
        }

        .pfInfo {
          border: 1px solid #e6e6e6;
          border-radius: 14px;
          background: #fff;
          padding: 14px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .pfIcon {
          width: 44px;
          height: 44px;
          color: #0f2d44;
        }

        .pfIcon :global(svg) {
          width: 44px;
          height: 44px;
        }

        .pfInfoTitle {
          margin: 10px 0 6px;
          font-size: 18px;
        }

        .pfInfoText {
          margin: 0;
          color: #333;
          line-height: 1.4;
        }

        .pfPriceBox {
          margin-top: 18px;
          padding: 16px;
          background: #eff6ff;
          border: 1px solid #93c5fd;
          border-radius: 14px;
          text-align: center;
        }

        .pfPriceText {
          margin: 0;
          font-size: 18px;
          color: #1d4ed8;
        }

        @media (min-width: 720px) {
          .pfWrap {
            padding: 28px 20px;
          }

          .pfTitle {
            font-size: 34px;
          }

          .pfTwoCol {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .pfInfoGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .pfInfoGrid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 520px) {
          .pfInfo {
            padding: 12px;
          }

          .pfInfoTitle {
            font-size: 16px;
            line-height: 1.2;
          }

          .pfInfoText {
            font-size: 14px;
          }

          .pfIcon {
            width: 38px;
            height: 38px;
          }

          .pfIcon :global(svg) {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </section>
  );
}