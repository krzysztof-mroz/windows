const processSteps = [
  {
    title: "Fragen klären",
    icon: "/pics/svg/chat.svg",
    text: "Schreiben Sie uns per WhatsApp, E-Mail oder über das Formular. Wir klären kurz, worum es geht und welche Lösung zu Ihrem Haus passt.",
  },
  {
    title: "Anfrage senden",
    icon: "/pics/svg/angebot.svg",
    text: "Senden Sie uns Maße, Fotos, eine Fensterliste oder nutzen Sie direkt unser Anfrageformular. Auch grobe Angaben reichen für den ersten Überblick.",
  },
  {
    title: "Angebot erhalten",
    icon: "/pics/svg/auftrag.svg",
    text: "Wir bereiten ein übersichtliches Angebot vor: Profile, Glas, Farben, Beschattung, Lieferung und auf Wunsch Montage.",
  },
  {
    title: "Auftrag vereinbaren",
    icon: "/pics/svg/vertrag.svg",
    text: "Wenn das Angebot passt, halten wir die Ausführung fest und stimmen die nächsten Schritte transparent mit Ihnen ab.",
  },
  {
    title: "Anzahlung leisten",
    icon: "/pics/svg/zahlung.svg",
    text: "Nach der Auftragsbestätigung leisten Sie die vereinbarte Anzahlung. Bei größeren Projekten sprechen wir die Absicherung sauber mit Ihnen durch.",
  },
  {
    title: "Aufmaß prüfen",
    icon: "/pics/svg/aufmass.svg",
    text: "Falls Maße noch unsicher sind, organisieren wir ein professionelles Aufmaß. So vermeiden wir Fehler vor der Produktion.",
  },
  {
    title: "Bestellung freigeben",
    icon: "/pics/svg/auftrag.svg",
    text: "Nach dem Aufmaß erhalten Sie die finalen Bestelldaten. Erst nach Ihrer Freigabe gehen Fenster, Türen oder Beschattung in Produktion.",
  },
  {
    title: "Produktion abwarten",
    icon: "/pics/svg/herstellung.svg",
    text: "Ihre Elemente werden nach Maß gefertigt. Wir informieren Sie über den Status und nennen den voraussichtlichen Lieferzeitraum.",
  },
  {
    title: "Lieferung planen",
    icon: "/pics/svg/transport.svg",
    text: "Vor der Lieferung stimmen wir den Termin ab. Offene Restbeträge und organisatorische Details werden rechtzeitig geklärt.",
  },
  {
    title: "Montage abschließen",
    icon: "/pics/svg/montage.svg",
    text: "Wenn Montage bestellt wurde, koordinieren wir den Termin und begleiten das Projekt bis zur fertigen Ausführung.",
  },
];

function HowWorkingDiv() {
  return (
    <section className="howWorking" aria-label="Fensterkauf Ablauf in zehn Schritten">
      <div className="howWorkingIntro">
        <p className="howWorkingEyebrow">So funktioniert es</p>
        <h2>Von der ersten Nachricht bis zur fertigen Montage</h2>
        <p>
          Der Ablauf ist bewusst einfach gehalten: Sie senden uns die wichtigsten
          Informationen, wir prüfen die Details und führen Ihr Projekt Schritt
          für Schritt bis zur Lieferung oder Montage.
        </p>
      </div>

      <div className="howWorkingGraphic" aria-hidden="true">
        <div className="graphicCard">
          <img src="/pics/svg/howitworks.svg" alt="" />
          <div>
            <strong>10 klare Schritte</strong>
            <span>Beratung, Angebot, Aufmaß, Produktion und Lieferung aus einer Hand.</span>
          </div>
        </div>
      </div>

      <div className="howWorkingSteps">
        {processSteps.map((step, index) => (
          <article className="howWorkingStep" key={step.title}>
            <div className="stepMarker">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img src={step.icon} alt="" loading="lazy" />
            </div>
            <div className="stepContent">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="howWorkingCta">
        <a href="/kontakt/anfrage">Anfrage vorbereiten</a>
        <a href="/aufmass">Aufmaß ansehen</a>
      </div>

      <style jsx>{`
        .howWorking {
          margin: 22px auto 28px;
          max-width: 1120px;
          padding: 0 16px;
        }

        .howWorkingIntro {
          margin: 0 auto 20px;
          max-width: 780px;
          text-align: center;
        }

        .howWorkingEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .howWorkingIntro h2 {
          color: #171717;
          font-size: 30px;
          line-height: 1.12;
          margin: 0;
        }

        .howWorkingIntro p:last-child {
          color: #555;
          line-height: 1.55;
          margin: 12px 0 0;
        }

        .howWorkingGraphic {
          margin: 0 auto 18px;
          max-width: 760px;
        }

        .graphicCard {
          align-items: center;
          background: linear-gradient(135deg, rgba(213, 119, 22, 0.1), rgba(17, 17, 17, 0.03)), #fff;
          border: 1px solid rgba(213, 119, 22, 0.2);
          display: grid;
          gap: 14px;
          grid-template-columns: 76px minmax(0, 1fr);
          padding: 16px;
        }

        .graphicCard img {
          display: block;
          height: 76px;
          object-fit: contain;
          width: 76px;
        }

        .graphicCard strong,
        .graphicCard span {
          display: block;
        }

        .graphicCard strong {
          color: #171717;
          font-size: 20px;
          line-height: 1.15;
        }

        .graphicCard span {
          color: #555;
          line-height: 1.45;
          margin-top: 4px;
        }

        .howWorkingSteps {
          display: grid;
          gap: 12px;
        }

        .howWorkingStep {
          background: #fff;
          border: 1px solid rgba(17, 17, 17, 0.1);
          display: grid;
          gap: 14px;
          grid-template-columns: 72px minmax(0, 1fr);
          padding: 14px;
          position: relative;
        }

        .howWorkingStep::before {
          background: #d57716;
          bottom: -13px;
          content: "";
          left: 49px;
          position: absolute;
          top: 72px;
          width: 2px;
        }

        .howWorkingStep:last-child::before {
          display: none;
        }

        .stepMarker {
          align-items: center;
          background: #f6f2ec;
          display: grid;
          gap: 6px;
          justify-items: center;
          min-height: 82px;
          padding: 8px 6px;
        }

        .stepMarker span {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
        }

        .stepMarker img {
          display: block;
          height: 34px;
          object-fit: contain;
          width: 34px;
        }

        .stepContent h3 {
          color: #171717;
          font-size: 20px;
          line-height: 1.16;
          margin: 0;
        }

        .stepContent p {
          color: #555;
          line-height: 1.5;
          margin: 8px 0 0;
        }

        .howWorkingCta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }

        .howWorkingCta a {
          background: #171717;
          color: #fff;
          font-weight: 800;
          padding: 12px 16px;
          text-decoration: none;
        }

        .howWorkingCta a:last-child {
          background: #d57716;
        }

        .howWorkingCta a:hover,
        .howWorkingCta a:focus {
          filter: brightness(0.94);
          outline: none;
        }

        @media (min-width: 760px) {
          .howWorking {
            padding: 0;
          }

          .howWorkingIntro h2 {
            font-size: 40px;
          }

          .howWorkingSteps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .howWorkingStep {
            grid-template-columns: 86px minmax(0, 1fr);
            min-height: 178px;
            padding: 18px;
          }

          .howWorkingStep::before {
            display: none;
          }

          .stepMarker {
            min-height: 104px;
          }

          .stepMarker img {
            height: 42px;
            width: 42px;
          }
        }
      `}</style>
    </section>
  );
}

export default HowWorkingDiv;
