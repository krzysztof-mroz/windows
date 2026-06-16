import { useState } from "react";

const windowFeaturePoints = [
  {
    className: "thermal",
    side: "left",
    slot: "top",
    lineTop: "52%",
    eyebrow: "Wärmedämmung",
    title: "Energieeffiziente Profile",
    text: "PVC- und Aluminiumfenster mit moderner Konstruktion für Neubau, Sanierung und niedrige Heizkosten.",
  },
  {
    className: "sound",
    side: "left",
    slot: "middle",
    lineTop: "50%",
    eyebrow: "Schallschutz",
    title: "Leise Fenster",
    text: "Passende Glasstärken und Isoliergläser reduzieren Lärm und erhöhen den Wohnkomfort.",
  },
  {
    className: "design",
    side: "left",
    slot: "bottom",
    lineTop: "48%",
    eyebrow: "Design",
    title: "Farben, Dekore und Strukturen",
    text: "Profile, Farben und Oberflächen werden passend zur Fassade und zum Charakter des Hauses geplant.",
  },
  {
    className: "glass",
    side: "right",
    slot: "top",
    lineTop: "51%",
    eyebrow: "Glas",
    title: "Breite Auswahl an Verglasungen",
    text: "Von Wärmeschutzglas bis Sicherheits- oder Schallschutzverglasung: die Ausstattung wird zum Projekt gewählt.",
  },
  {
    className: "fittings",
    side: "right",
    slot: "middle",
    lineTop: "49%",
    eyebrow: "Sicherheit",
    title: "Verdeckt liegende Beschläge",
    text: "Verdeckt liegende Beschläge mit Pilzkopfverriegelung sorgen für klare Optik und solide Verriegelung.",
  },
  {
    className: "standards",
    side: "right",
    slot: "bottom",
    lineTop: "47%",
    eyebrow: "Normen",
    title: "Deutsche und EU-Normen",
    text: "Konformität mit allen deutschen und EU-Normen für zuverlässige Planung, Lieferung und Montage.",
  },
];

function WindowFeatureGraphic() {
  const [activeFeature, setActiveFeature] = useState(windowFeaturePoints[0].className);

  return (
    <section className="windowFeatureWrap" aria-label="Vorteile moderner Fenster aus Polen">
      <div className="windowFeatureInner">
        <div className="windowFeatureIntro">
          <p className="windowEyebrow">Fenster aus Polen</p>
          <h2>Moderne Fenstertechnik auf einen Blick</h2>
          <p>
            Die wichtigsten Vorteile kompakt dargestellt: Wärmedämmung,
            Schallschutz, Sicherheit, Verglasung und eine breite Auswahl an
            Profilen, Farben und Oberflächen.
          </p>
        </div>

        <div className="windowBlueprint">
          <div className="windowVisual">
            <div className="windowGlow" />
            <img
              src="/images/fenster/window-feature.webp"
              alt="Modernes schwarzes Fenster mit geöffnetem Flügel und Beschlägen"
              className="windowImage"
              loading="lazy"
            />
            {windowFeaturePoints.map((point) => (
              <button
                type="button"
                key={point.className}
                className={`windowHotspot ${point.className} ${
                  activeFeature === point.className ? "active" : ""
                }`}
                aria-label={point.title}
                onClick={() => setActiveFeature(point.className)}
              />
            ))}
          </div>

          <div className="windowFeatureCards">
            {windowFeaturePoints.map((point) => (
              <article
                className={`windowFeatureCard ${point.side} ${point.slot} ${
                  activeFeature === point.className ? "active" : ""
                }`}
                key={point.title}
                style={{ "--lineTop": point.lineTop }}
                onClick={() => setActiveFeature(point.className)}
              >
                <p>{point.eyebrow}</p>
                <h3>{point.title}</h3>
                <span>{point.text}</span>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .windowFeatureWrap {
          background:
            linear-gradient(135deg, rgba(17, 17, 17, 0.035), rgba(213, 119, 22, 0.08)),
            #fff;
          margin: 18px auto 12px;
          max-width: 1120px;
          overflow: hidden;
          padding: 28px 16px 20px;
        }

        .windowFeatureInner {
          margin: 0 auto;
          max-width: 1040px;
        }

        .windowFeatureIntro {
          margin: 0 auto 18px;
          max-width: 760px;
          text-align: center;
        }

        .windowEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 7px;
          text-transform: uppercase;
        }

        .windowFeatureIntro h2 {
          color: #171717;
          font-size: 28px;
          line-height: 1.12;
          margin: 0;
        }

        .windowFeatureIntro p:last-child {
          color: #555;
          line-height: 1.55;
          margin: 10px 0 0;
        }

        .windowBlueprint {
          display: flex;
          flex-direction: column;
          gap: 18px;
          position: relative;
        }

        .windowVisual {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          max-width: 430px;
          min-height: 300px;
          position: relative;
          width: 100%;
        }

        .windowGlow {
          background:
            radial-gradient(circle at 48% 52%, rgba(213, 119, 22, 0.18), rgba(213, 119, 22, 0) 62%),
            radial-gradient(circle at 58% 40%, rgba(17, 17, 17, 0.12), rgba(17, 17, 17, 0) 55%);
          filter: blur(2px);
          height: 82%;
          position: absolute;
          width: 96%;
        }

        .windowImage {
          filter: drop-shadow(0 26px 24px rgba(0, 0, 0, 0.2));
          height: auto;
          max-width: 100%;
          position: relative;
          width: min(92vw, 430px);
          z-index: 1;
        }

        .windowHotspot {
          animation: windowHotspotPulse 2.8s ease-in-out infinite;
          background: #fff;
          border: 2px solid #d57716;
          border-radius: 999px;
          box-shadow: 0 0 0 6px rgba(213, 119, 22, 0.12);
          cursor: pointer;
          height: 13px;
          padding: 0;
          position: absolute;
          width: 13px;
          z-index: 2;
        }

        .windowHotspot.active {
          animation: none;
          background: #d57716;
          border-color: #fff;
          box-shadow:
            0 0 0 4px rgba(213, 119, 22, 0.3),
            0 0 0 13px rgba(213, 119, 22, 0.13),
            0 0 28px rgba(213, 119, 22, 0.55);
          transform: scale(1.28);
        }

        .windowHotspot:focus-visible {
          outline: 3px solid rgba(213, 119, 22, 0.45);
          outline-offset: 5px;
        }

        .windowHotspot.thermal {
          left: 21%;
          top: 29%;
        }

        .windowHotspot.sound {
          left: 36%;
          top: 52%;
        }

        .windowHotspot.design {
          left: 18%;
          bottom: 23%;
        }

        .windowHotspot.glass {
          right: 26%;
          top: 37%;
        }

        .windowHotspot.fittings {
          right: 49%;
          top: 47%;
        }

        .windowHotspot.standards {
          right: 16%;
          bottom: 28%;
        }

        .windowFeatureCards {
          display: grid;
          gap: 10px;
        }

        .windowFeatureCard {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(17, 17, 17, 0.1);
          box-shadow: 0 14px 32px rgba(17, 17, 17, 0.06);
          cursor: pointer;
          padding: 14px;
          position: relative;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
        }

        .windowFeatureCard.active {
          border-color: rgba(213, 119, 22, 0.72);
          box-shadow:
            0 18px 40px rgba(17, 17, 17, 0.09),
            0 0 0 3px rgba(213, 119, 22, 0.13);
          transform: translateY(-2px);
        }

        .windowFeatureCard:after {
          animation: windowLineDraw 3.2s ease-in-out infinite;
          background: linear-gradient(90deg, #d57716, rgba(213, 119, 22, 0));
          content: "";
          display: block;
          height: 2px;
          margin-top: 12px;
          transform-origin: left center;
        }

        .windowFeatureCard.active:after {
          animation: none;
          background: linear-gradient(90deg, #d57716, rgba(213, 119, 22, 0.28));
          height: 3px;
          opacity: 1;
          transform: scaleX(1);
        }

        .windowFeatureCard p {
          color: #b86411;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 5px;
          text-transform: uppercase;
        }

        .windowFeatureCard h3 {
          color: #171717;
          font-size: 17px;
          line-height: 1.2;
          margin: 0;
        }

        .windowFeatureCard span {
          color: #565656;
          display: block;
          font-size: 14px;
          line-height: 1.45;
          margin-top: 7px;
        }

        @keyframes windowHotspotPulse {
          0%,
          100% {
            box-shadow: 0 0 0 6px rgba(213, 119, 22, 0.12);
          }

          50% {
            box-shadow: 0 0 0 11px rgba(213, 119, 22, 0.04);
          }
        }

        @keyframes windowLineDraw {
          0%,
          100% {
            opacity: 0.45;
            transform: scaleX(0.45);
          }

          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @media (min-width: 700px) {
          .windowFeatureWrap {
            padding: 34px 20px 26px;
          }

          .windowFeatureIntro h2 {
            font-size: 34px;
          }

          .windowFeatureCards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 980px) {
          .windowFeatureWrap {
            overflow: visible;
            padding: 42px 20px 34px;
          }

          .windowBlueprint {
            align-items: center;
            display: grid;
            gap: 18px 50px;
            grid-template-columns: minmax(220px, 1fr) minmax(330px, 430px) minmax(220px, 1fr);
            grid-template-rows: repeat(3, minmax(108px, auto));
          }

          .windowVisual {
            grid-column: 2;
            grid-row: 1 / 4;
            max-width: 430px;
            min-height: 440px;
          }

          .windowImage {
            width: min(34vw, 430px);
          }

          .windowFeatureCards {
            display: contents;
          }

          .windowFeatureCard {
            max-width: 270px;
            min-height: 116px;
          }

          .windowFeatureCard.left {
            grid-column: 1;
            justify-self: end;
            text-align: right;
          }

          .windowFeatureCard.right {
            grid-column: 3;
            justify-self: start;
            text-align: left;
          }

          .windowFeatureCard.top {
            grid-row: 1;
          }

          .windowFeatureCard.middle {
            grid-row: 2;
          }

          .windowFeatureCard.bottom {
            grid-row: 3;
          }

          .windowFeatureCard:after,
          .windowFeatureCard:before {
            content: "";
            position: absolute;
          }

          .windowFeatureCard:after {
            animation: windowLineDraw 3.2s ease-in-out infinite;
            background: linear-gradient(90deg, rgba(213, 119, 22, 0), rgba(213, 119, 22, 0.88));
            height: 1px;
            margin: 0;
            top: var(--lineTop);
            width: 50px;
          }

          .windowFeatureCard:before {
            background: #fff;
            border: 2px solid #d57716;
            border-radius: 999px;
            box-shadow: 0 0 0 5px rgba(213, 119, 22, 0.12);
            height: 10px;
            top: calc(var(--lineTop) - 5px);
            width: 10px;
          }

          .windowFeatureCard.active:before {
            background: #d57716;
            border-color: #fff;
            box-shadow:
              0 0 0 4px rgba(213, 119, 22, 0.22),
              0 0 18px rgba(213, 119, 22, 0.42);
          }

          .windowFeatureCard.active:after {
            animation: none;
            background: #d57716;
            height: 2px;
            opacity: 1;
            transform: scaleX(1);
          }

          .windowFeatureCard.left:after {
            right: -50px;
          }

          .windowFeatureCard.left:before {
            right: -56px;
          }

          .windowFeatureCard.right:after {
            background: linear-gradient(90deg, rgba(213, 119, 22, 0.88), rgba(213, 119, 22, 0));
            left: -50px;
          }

          .windowFeatureCard.right:before {
            left: -56px;
          }
        }
      `}</style>
    </section>
  );
}

export default WindowFeatureGraphic;
