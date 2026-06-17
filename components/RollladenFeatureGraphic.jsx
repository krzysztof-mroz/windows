import { useState } from "react";

const rollladenFeaturePoints = [
  {
    className: "light",
    side: "left",
    slot: "top",
    lineTop: "51%",
    eyebrow: "Licht",
    title: "Licht und Sonne steuern",
    text: "Rollläden dosieren Tageslicht, reduzieren Blendung und schützen Räume im Sommer vor starker Aufheizung.",
  },
  {
    className: "warmth",
    side: "left",
    slot: "middle",
    lineTop: "50%",
    eyebrow: "Energie",
    title: "Heiz- und Kühlkosten senken",
    text: "Ein heruntergelassener Rollladen bildet eine zusätzliche Barriere gegen Wärmeverlust, Hitze und Zugluft.",
  },
  {
    className: "mounting",
    side: "left",
    slot: "bottom",
    lineTop: "49%",
    eyebrow: "Montage",
    title: "Für Neubau und Sanierung",
    text: "Aufsatz- und Vorsatzrollläden lassen sich passend zur Bauphase, Fassade und Fenstersituation planen.",
  },
  {
    className: "box",
    side: "right",
    slot: "top",
    lineTop: "51%",
    eyebrow: "Kasten",
    title: "Unauffällige Fassadenlösung",
    text: "Je nach System kann der Rollladenkasten sichtbar gestaltet oder dezent in Dämmung und Sturz integriert werden.",
  },
  {
    className: "drive",
    side: "right",
    slot: "middle",
    lineTop: "49%",
    eyebrow: "Bedienung",
    title: "Motor, Schalter oder Funk",
    text: "Rollläden können per Gurt, Kurbel, Wandschalter, Fernbedienung oder Smart-Home-Steuerung bedient werden.",
  },
  {
    className: "security",
    side: "right",
    slot: "bottom",
    lineTop: "48%",
    eyebrow: "Schutz",
    title: "Mehr Sicherheit und Privatsphäre",
    text: "Geschlossene Rollläden schützen vor Blicken, Wetter und erschweren zusätzlich den Zugang zum Fenster.",
  },
];

function RollladenFeatureGraphic() {
  const [activeFeature, setActiveFeature] = useState(rollladenFeaturePoints[0].className);

  return (
    <section className="rollladenFeatureWrap" aria-label="Vorteile moderner Rollläden">
      <div className="rollladenFeatureInner">
        <div className="rollladenFeatureIntro">
          <p className="rollladenEyebrow">Rollläden aus Polen</p>
          <h2>Komfort, Schutz und bessere Energiebilanz</h2>
          <p>
            Die wichtigsten Vorteile moderner Aufsatz- und Vorsatzrollläden:
            kontrolliertes Licht, zusätzlicher Wärmeschutz, flexible Montage,
            komfortable Bedienung und mehr Privatsphäre.
          </p>
        </div>

        <div className="rollladenBlueprint">
          <div className="rollladenVisual">
            <div className="rollladenGlow" />
            <img
              src="/images/rolllaeden/rollladen-feature.webp"
              alt="Rollladen im Schnitt mit Kasten, Lamellen und Führungsschienen"
              className="rollladenImage"
              loading="lazy"
            />
            {rollladenFeaturePoints.map((point) => (
              <button
                type="button"
                key={point.className}
                className={`rollladenHotspot ${point.className} ${
                  activeFeature === point.className ? "active" : ""
                }`}
                aria-label={point.title}
                onClick={() => setActiveFeature(point.className)}
              />
            ))}
          </div>

          <div className="rollladenFeatureCards">
            {rollladenFeaturePoints.map((point) => (
              <article
                className={`rollladenFeatureCard ${point.side} ${point.slot} ${
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
        .rollladenFeatureWrap {
          background:
            linear-gradient(135deg, rgba(17, 17, 17, 0.035), rgba(213, 119, 22, 0.08)),
            #fff;
          margin: 18px auto 12px;
          max-width: 1120px;
          overflow: hidden;
          padding: 28px 16px 20px;
        }

        .rollladenFeatureInner {
          margin: 0 auto;
          max-width: 1040px;
        }

        .rollladenFeatureIntro {
          margin: 0 auto 18px;
          max-width: 780px;
          text-align: center;
        }

        .rollladenEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 7px;
          text-transform: uppercase;
        }

        .rollladenFeatureIntro h2 {
          color: #171717;
          font-size: 28px;
          line-height: 1.12;
          margin: 0;
        }

        .rollladenFeatureIntro p:last-child {
          color: #555;
          line-height: 1.55;
          margin: 10px 0 0;
        }

        .rollladenBlueprint {
          display: flex;
          flex-direction: column;
          gap: 18px;
          position: relative;
        }

        .rollladenVisual {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          max-width: 360px;
          min-height: 460px;
          position: relative;
          width: 100%;
        }

        .rollladenGlow {
          background:
            radial-gradient(circle at 60% 32%, rgba(213, 119, 22, 0.18), rgba(213, 119, 22, 0) 58%),
            radial-gradient(circle at 46% 62%, rgba(17, 17, 17, 0.13), rgba(17, 17, 17, 0) 62%);
          filter: blur(2px);
          height: 88%;
          position: absolute;
          width: 102%;
        }

        .rollladenImage {
          filter: drop-shadow(0 28px 26px rgba(0, 0, 0, 0.2));
          height: auto;
          max-width: 100%;
          position: relative;
          width: min(86vw, 360px);
          z-index: 1;
        }

        .rollladenHotspot {
          animation: rollladenHotspotPulse 2.8s ease-in-out infinite;
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

        .rollladenHotspot.active {
          animation: none;
          background: #d57716;
          border-color: #fff;
          box-shadow:
            0 0 0 4px rgba(213, 119, 22, 0.3),
            0 0 0 13px rgba(213, 119, 22, 0.13),
            0 0 28px rgba(213, 119, 22, 0.55);
          transform: scale(1.28);
        }

        .rollladenHotspot:focus-visible {
          outline: 3px solid rgba(213, 119, 22, 0.45);
          outline-offset: 5px;
        }

        .rollladenHotspot.light {
          left: 29%;
          top: 45%;
        }

        .rollladenHotspot.warmth {
          left: 37%;
          top: 63%;
        }

        .rollladenHotspot.mounting {
          left: 22%;
          bottom: 13%;
        }

        .rollladenHotspot.box {
          right: 20%;
          top: 16%;
        }

        .rollladenHotspot.drive {
          right: 23%;
          top: 36%;
        }

        .rollladenHotspot.security {
          right: 33%;
          bottom: 28%;
        }

        .rollladenFeatureCards {
          display: grid;
          gap: 10px;
        }

        .rollladenFeatureCard {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(17, 17, 17, 0.1);
          box-shadow: 0 14px 32px rgba(17, 17, 17, 0.06);
          cursor: pointer;
          padding: 14px;
          position: relative;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
        }

        .rollladenFeatureCard.active {
          border-color: rgba(213, 119, 22, 0.72);
          box-shadow:
            0 18px 40px rgba(17, 17, 17, 0.09),
            0 0 0 3px rgba(213, 119, 22, 0.13);
          transform: translateY(-2px);
        }

        .rollladenFeatureCard:after {
          animation: rollladenLineDraw 3.2s ease-in-out infinite;
          background: linear-gradient(90deg, #d57716, rgba(213, 119, 22, 0));
          content: "";
          display: block;
          height: 2px;
          margin-top: 12px;
          transform-origin: left center;
        }

        .rollladenFeatureCard.active:after {
          animation: none;
          background: linear-gradient(90deg, #d57716, rgba(213, 119, 22, 0.28));
          height: 3px;
          opacity: 1;
          transform: scaleX(1);
        }

        .rollladenFeatureCard p {
          color: #b86411;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 5px;
          text-transform: uppercase;
        }

        .rollladenFeatureCard h3 {
          color: #171717;
          font-size: 17px;
          line-height: 1.2;
          margin: 0;
        }

        .rollladenFeatureCard span {
          color: #565656;
          display: block;
          font-size: 14px;
          line-height: 1.45;
          margin-top: 7px;
        }

        @keyframes rollladenHotspotPulse {
          0%,
          100% {
            box-shadow: 0 0 0 6px rgba(213, 119, 22, 0.12);
          }

          50% {
            box-shadow: 0 0 0 11px rgba(213, 119, 22, 0.04);
          }
        }

        @keyframes rollladenLineDraw {
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
          .rollladenFeatureWrap {
            padding: 34px 20px 26px;
          }

          .rollladenFeatureIntro h2 {
            font-size: 34px;
          }

          .rollladenFeatureCards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 980px) {
          .rollladenFeatureWrap {
            overflow: visible;
            padding: 42px 20px 34px;
          }

          .rollladenBlueprint {
            align-items: center;
            display: grid;
            gap: 18px 50px;
            grid-template-columns: minmax(220px, 1fr) minmax(300px, 360px) minmax(220px, 1fr);
            grid-template-rows: repeat(3, minmax(112px, auto));
          }

          .rollladenVisual {
            grid-column: 2;
            grid-row: 1 / 4;
            max-width: 360px;
            min-height: 560px;
          }

          .rollladenImage {
            width: min(28vw, 360px);
          }

          .rollladenFeatureCards {
            display: contents;
          }

          .rollladenFeatureCard {
            max-width: 275px;
            min-height: 118px;
          }

          .rollladenFeatureCard.left {
            grid-column: 1;
            justify-self: end;
            text-align: right;
          }

          .rollladenFeatureCard.right {
            grid-column: 3;
            justify-self: start;
            text-align: left;
          }

          .rollladenFeatureCard.top {
            grid-row: 1;
          }

          .rollladenFeatureCard.middle {
            grid-row: 2;
          }

          .rollladenFeatureCard.bottom {
            grid-row: 3;
          }

          .rollladenFeatureCard:after,
          .rollladenFeatureCard:before {
            content: "";
            position: absolute;
          }

          .rollladenFeatureCard:after {
            animation: rollladenLineDraw 3.2s ease-in-out infinite;
            background: linear-gradient(90deg, rgba(213, 119, 22, 0), rgba(213, 119, 22, 0.88));
            height: 1px;
            margin: 0;
            top: var(--lineTop);
            width: 50px;
          }

          .rollladenFeatureCard:before {
            background: #fff;
            border: 2px solid #d57716;
            border-radius: 999px;
            box-shadow: 0 0 0 5px rgba(213, 119, 22, 0.12);
            height: 10px;
            top: calc(var(--lineTop) - 5px);
            width: 10px;
          }

          .rollladenFeatureCard.active:before {
            background: #d57716;
            border-color: #fff;
            box-shadow:
              0 0 0 4px rgba(213, 119, 22, 0.22),
              0 0 18px rgba(213, 119, 22, 0.42);
          }

          .rollladenFeatureCard.active:after {
            animation: none;
            background: #d57716;
            height: 2px;
            opacity: 1;
            transform: scaleX(1);
          }

          .rollladenFeatureCard.left:after {
            right: -50px;
          }

          .rollladenFeatureCard.left:before {
            right: -56px;
          }

          .rollladenFeatureCard.right:after {
            background: linear-gradient(90deg, rgba(213, 119, 22, 0.88), rgba(213, 119, 22, 0));
            left: -50px;
          }

          .rollladenFeatureCard.right:before {
            left: -56px;
          }
        }
      `}</style>
    </section>
  );
}

export default RollladenFeatureGraphic;
