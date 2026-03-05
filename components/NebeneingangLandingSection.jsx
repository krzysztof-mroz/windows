import React from "react";

const ICONS = {
  prices: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 10.5V6.8c0-.5.3-.9.8-1.1l5.7-2.3c.3-.1.7-.1 1 0l9 3.6c.5.2.8.6.8 1.1v3.7c0 .5-.3.9-.8 1.1l-9 3.6c-.3.1-.7.1-1 0L3.8 11.6c-.5-.2-.8-.6-.8-1.1Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.2 9.4a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 0 0-3.6 0Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14.2 8.2h4.2M14.2 10.4h3.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  models: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h12v18H6z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M9 7h6M9 11h6M9 15h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M8 21h8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7h11v10H3z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M14 10h3.5l3.5 3.5V17H14z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M6.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M14 17h-2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  tech: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 6.5 17.5 3.5l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M3 21l7.5-7.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M10 14l-1.5-1.5 6-6L16 8z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M6.5 12.5 3.5 9.5 9.5 3.5l3 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function NebeneingangLandingSection({
  // Podmień ścieżki na swoje

  minPriceText = "ab 835 €",                 // dynamicznie możesz wstawić z modeli
}) {
  return (
    <section className="pfWrap">
      <header className="pfHeader">
        <h2 className="pfTitle">Unschlagbare Preise und Modellvielfalt</h2>

        <div className="pfTwoCol">
          <div className="pfCard">
            <h3 className="pfCardTitle">Vorteile</h3>
            <ul className="pfList">
              <li><b>Maßfertigung</b> – keine Fertigmaße</li>
              <li><b>Ab 70&nbsp;mm</b> Einbautiefe</li>
              <li><b>5 Luftkammern</b> für bessere Wärmeisolierung</li>
              <li><b>Ud 1,3 W/(m²K)</b> oder besser</li>
              <li><b>Mehrpunkt-Verriegelung</b> (z.&nbsp;B. GU Secury Automatic)</li>
              <li><b>Stabile Profile</b> mit 127&nbsp;mm Profilbreite</li>
              <li><b>Flache Aluminium-Bodenschwelle</b></li>
              <li><b>Robuste Scharniere</b> von Dr Hahn</li>
              <li><b>Schutz für Ihr Eigentum</b> – solide Grundsicherheit</li>
              <li className="pfHighlight">Ab 2.000 € Bestellwert: <b>versandkostenfrei</b></li>
            </ul>
          </div>

          <div className="pfCard">
            <h3 className="pfCardTitle">Varianten</h3>
            <ul className="pfList">
              <li>Viele Farben <b>innen & außen</b></li>
              <li>Verglasung <b>2-fach oder 3-fach</b></li>
              <li><b>Sandwich-Kunststofffüllungen</b></li>
              <li><b>Elektroöffner</b></li>
              <li><b>Selbstschließer</b></li>
              <li>Außen <b>Drücker</b> oder <b>Stoßgriff</b></li>
              <li>Viele <b>Modellvarianten</b></li>
              <li><b>Design-Türfüllungen</b> möglich</li>
              <li>Sonderwünsche auf Anfrage</li>
            </ul>
          </div>
        </div>

       

        {/* 4 kafelki H2 (wg Twoich nagłówków) */}
        <div className="pfInfoGrid">
          <article className="pfInfo">
            <div className="pfIcon">{ICONS.prices}</div>
            <h3 className="pfInfoTitle">Preise</h3>
            <p className="pfInfoText">
              Transparent & fair – hochwertige Nebeneingangstüren aus Polen, bereits <b>{minPriceText}</b>.
            </p>
          </article>

          <article className="pfInfo">
            <div className="pfIcon">{ICONS.models}</div>
            <h3 className="pfInfoTitle">Modelle</h3>
            <p className="pfInfoText">
              Große Auswahl an Designs – verschiedene Füllungen, Glasoptionen und Farben.
            </p>
          </article>

          <article className="pfInfo">
            <div className="pfIcon">{ICONS.delivery}</div>
            <h3 className="pfInfoTitle">Lieferung nach Deutschland</h3>
            <p className="pfInfoText">
              Zuverlässige Lieferung nach ganz Deutschland. Ab 2.000 € Bestellwert versandkostenfrei.
            </p>
          </article>

          <article className="pfInfo">
            <div className="pfIcon">{ICONS.tech}</div>
            <h3 className="pfInfoTitle">Maße & Technik</h3>
            <p className="pfInfoText">
              Maßfertigung, flache Schwelle, stabile Profile und sichere Beschläge – für langlebige Qualität.
            </p>
          </article>
        </div>
      </header>

      <style jsx>{`
        /* mobile-first */
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
        .pfList li { margin: 8px 0; }
        .pfHighlight { color: #b45309; }

        .pfMediaGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-top: 16px;
        }

        .pfMedia {
          border: 1px solid #e6e6e6;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          margin: 0;
        }

        .pfMediaImg {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 12px;
          background: #fff;
        }

        .pfMediaImg img {
          width: min(320px, 100%);
          height: auto;
          display: block;
          object-fit: contain;
        }

        .pfMediaCap {
          padding: 12px 14px 14px;
          border-top: 1px solid #f0f0f0;
        }
        .pfMediaCap b { display: block; font-size: 14px; letter-spacing: .02em; }
        .pfMediaCap span { display: block; color: #444; margin-top: 4px; }

        .pfInfoGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr)); /* ✅ 2 kolumny na mobile */
          gap: 12px;
          margin-top: 16px;
        }

        /* ultra małe telefony: wróć do 1 kolumny, żeby nie było “mikro-kafli” */
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
        .pfIcon :global(svg) { width: 44px; height: 44px; }

        .pfInfoTitle {
          margin: 10px 0 6px;
          font-size: 18px;
        }

        .pfInfoText {
          margin: 0;
          color: #333;
          line-height: 1.4;
          margin-top: auto; /* tekst “dopycha” dół — opcjonalnie */
        }

        /* >= 720px */
        @media (min-width: 720px) {
          .pfWrap { padding: 28px 20px; }
          .pfTitle { font-size: 34px; }

          .pfTwoCol { grid-template-columns: 1fr 1fr; gap: 16px; }
          .pfMediaGrid { grid-template-columns: repeat(3, 1fr); }
          .pfInfoGrid { grid-template-columns: repeat(2, 1fr); }
        }

        /* >= 1024px */
        @media (min-width: 1024px) {
          .pfInfoGrid { grid-template-columns: repeat(4, 1fr); }
        }

        @media (max-width: 520px) {
          .pfInfo { padding: 12px; }
          .pfInfoTitle { font-size: 16px; line-height: 1.2; }
          .pfInfoText { font-size: 14px; }
          .pfIcon { width: 38px; height: 38px; }
          .pfIcon :global(svg) { width: 38px; height: 38px; }
        }
      `}</style>
    </section>
  );
}