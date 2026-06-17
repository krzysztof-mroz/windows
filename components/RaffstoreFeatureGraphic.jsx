import { useState } from "react";

const raffstoreFeaturePoints = [
  {
    className: "light",
    side: "left",
    slot: "top",
    lineTop: "52%",
    eyebrow: "Licht",
    title: "Tageslicht stufenlos steuern",
    text: "Die Lamellen lassen sich genau ausrichten, damit Räume hell bleiben, ohne dass Sonne und Blendung stören.",
  },
  {
    className: "climate",
    side: "left",
    slot: "middle",
    lineTop: "50%",
    eyebrow: "Klima",
    title: "Weniger Hitze im Sommer",
    text: "Raffstoren halten direkte Sonneneinstrahlung vor der Scheibe ab und können den Einsatz der Klimaanlage reduzieren.",
  },
  {
    className: "renovation",
    side: "left",
    slot: "bottom",
    lineTop: "49%",
    eyebrow: "Montage",
    title: "Für Neubau und fertige Gebäude",
    text: "Fassadenjalousien können bei neuen Projekten, Sanierungen und vielen bestehenden Gebäuden eingeplant werden.",
  },
  {
    className: "box",
    side: "right",
    slot: "top",
    lineTop: "51%",
    eyebrow: "System",
    title: "C80, Z90 und moderne Kästen",
    text: "Je nach Projekt stehen unterschiedliche Lamellenformen, Blenden und Kastensysteme für sichtbare oder verdeckte Montage zur Auswahl.",
  },
  {
    className: "drive",
    side: "right",
    slot: "middle",
    lineTop: "49%",
    eyebrow: "Bedienung",
    title: "Motor, Funk und Smart Home",
    text: "Die Bedienung ist per Schalter, Fernbedienung, App oder automatisierten Szenarien möglich.",
  },
  {
    className: "design",
    side: "right",
    slot: "bottom",
    lineTop: "47%",
    eyebrow: "Design",
    title: "Farben passend zur Fassade",
    text: "Aluminiumlamellen sind langlebig, wetterbeständig und lassen sich farblich an Fenster, Türen und Architektur anpassen.",
  },
];

function RaffstoreFeatureGraphic() {
  const [activeFeature, setActiveFeature] = useState(raffstoreFeaturePoints[0].className);

  return (
    <section className="raffstoreFeatureWrap" aria-label="Vorteile moderner Raffstoren">
      <div className="raffstoreFeatureInner">
        <div className="raffstoreFeatureIntro">
          <p className="raffstoreEyebrow">Raffstoren aus Polen</p>
          <h2>Fassadenjalousien für Licht, Klima und Design</h2>
          <p>
            Moderne Raffstoren regulieren Tageslicht sehr präzise, schützen
            große Verglasungen vor Überhitzung und geben der Fassade eine klare,
            technische Optik.
          </p>
        </div>

        <div className="raffstoreBlueprint">
          <div className="raffstoreVisual">
            <div className="raffstoreGlow" />
            <img
              src="/images/raffstoren/raffstore-feature.webp"
              alt="Raffstore mit Aluminiumlamellen, Kasten und Führungsschienen"
              className="raffstoreImage"
              loading="lazy"
            />
            {raffstoreFeaturePoints.map((point) => (
              <button
                type="button"
                key={point.className}
                className={`raffstoreHotspot ${point.className} ${
                  activeFeature === point.className ? "active" : ""
                }`}
                aria-label={point.title}
                onClick={() => setActiveFeature(point.className)}
              />
            ))}
          </div>

          <div className="raffstoreFeatureCards">
            {raffstoreFeaturePoints.map((point) => (
              <article
                className={`raffstoreFeatureCard ${point.side} ${point.slot} ${
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
        .raffstoreFeatureWrap {
          background:
            linear-gradient(135deg, rgba(17, 17, 17, 0.035), rgba(213, 119, 22, 0.08)),
            #fff;
          margin: 18px auto 12px;
          max-width: 1120px;
          overflow: hidden;
          padding: 28px 16px 20px;
        }

        .raffstoreFeatureInner {
          margin: 0 auto;
          max-width: 1040px;
        }

        .raffstoreFeatureIntro {
          margin: 0 auto 18px;
          max-width: 780px;
          text-align: center;
        }

        .raffstoreEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 7px;
          text-transform: uppercase;
        }

        .raffstoreFeatureIntro h2 {
          color: #171717;
          font-size: 28px;
          line-height: 1.12;
          margin: 0;
        }

        .raffstoreFeatureIntro p:last-child {
          color: #555;
          line-height: 1.55;
          margin: 10px 0 0;
        }

        .raffstoreBlueprint {
          display: flex;
          flex-direction: column;
          gap: 18px;
          position: relative;
        }

        .raffstoreVisual {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          max-width: 320px;
          min-height: 480px;
          position: relative;
          width: 100%;
        }

        .raffstoreGlow {
          background:
            radial-gradient(circle at 54% 31%, rgba(213, 119, 22, 0.18), rgba(213, 119, 22, 0) 58%),
            radial-gradient(circle at 48% 67%, rgba(17, 17, 17, 0.14), rgba(17, 17, 17, 0) 62%);
          filter: blur(2px);
          height: 90%;
          position: absolute;
          width: 104%;
        }

        .raffstoreImage {
          filter: drop-shadow(0 28px 26px rgba(0, 0, 0, 0.2));
          height: auto;
          max-height: 560px;
          max-width: 100%;
          object-fit: contain;
          position: relative;
          width: min(78vw, 320px);
          z-index: 1;
        }

        .raffstoreHotspot {
          animation: raffstoreHotspotPulse 2.8s ease-in-out infinite;
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

        .raffstoreHotspot.active {
          animation: none;
          background: #d57716;
          border-color: #fff;
          box-shadow:
            0 0 0 4px rgba(213, 119, 22, 0.3),
            0 0 0 13px rgba(213, 119, 22, 0.13),
            0 0 28px rgba(213, 119, 22, 0.55);
          transform: scale(1.28);
        }

        .raffstoreHotspot:focus-visible {
          outline: 3px solid rgba(213, 119, 22, 0.45);
          outline-offset: 5px;
        }

        .raffstoreHotspot.light {
          left: 30%;
          top: 48%;
        }

        .raffstoreHotspot.climate {
          left: 35%;
          top: 62%;
        }

        .raffstoreHotspot.renovation {
          left: 30%;
          bottom: 12%;
        }

        .raffstoreHotspot.box {
          right: 29%;
          top: 17%;
        }

        .raffstoreHotspot.drive {
          right: 25%;
          top: 34%;
        }

        .raffstoreHotspot.design {
          right: 27%;
          bottom: 28%;
        }

        .raffstoreFeatureCards {
          display: grid;
          gap: 10px;
        }

        .raffstoreFeatureCard {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(17, 17, 17, 0.1);
          box-shadow: 0 14px 32px rgba(17, 17, 17, 0.06);
          cursor: pointer;
          padding: 14px;
          position: relative;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
        }

        .raffstoreFeatureCard.active {
          border-color: rgba(213, 119, 22, 0.72);
          box-shadow:
            0 18px 40px rgba(17, 17, 17, 0.09),
            0 0 0 3px rgba(213, 119, 22, 0.13);
          transform: translateY(-2px);
        }

        .raffstoreFeatureCard:after {
          animation: raffstoreLineDraw 3.2s ease-in-out infinite;
          background: linear-gradient(90deg, #d57716, rgba(213, 119, 22, 0));
          content: "";
          display: block;
          height: 2px;
          margin-top: 12px;
          transform-origin: left center;
        }

        .raffstoreFeatureCard.active:after {
          animation: none;
          background: linear-gradient(90deg, #d57716, rgba(213, 119, 22, 0.28));
          height: 3px;
          opacity: 1;
          transform: scaleX(1);
        }

        .raffstoreFeatureCard p {
          color: #b86411;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 5px;
          text-transform: uppercase;
        }

        .raffstoreFeatureCard h3 {
          color: #171717;
          font-size: 17px;
          line-height: 1.2;
          margin: 0;
        }

        .raffstoreFeatureCard span {
          color: #565656;
          display: block;
          font-size: 14px;
          line-height: 1.45;
          margin-top: 7px;
        }

        @keyframes raffstoreHotspotPulse {
          0%,
          100% {
            box-shadow: 0 0 0 6px rgba(213, 119, 22, 0.12);
          }

          50% {
            box-shadow: 0 0 0 11px rgba(213, 119, 22, 0.04);
          }
        }

        @keyframes raffstoreLineDraw {
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
          .raffstoreFeatureWrap {
            padding: 34px 20px 26px;
          }

          .raffstoreFeatureIntro h2 {
            font-size: 34px;
          }

          .raffstoreFeatureCards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 980px) {
          .raffstoreFeatureWrap {
            overflow: visible;
            padding: 42px 20px 34px;
          }

          .raffstoreBlueprint {
            align-items: center;
            display: grid;
            gap: 18px 50px;
            grid-template-columns: minmax(220px, 1fr) minmax(270px, 320px) minmax(220px, 1fr);
            grid-template-rows: repeat(3, minmax(112px, auto));
          }

          .raffstoreVisual {
            grid-column: 2;
            grid-row: 1 / 4;
            max-width: 320px;
            min-height: 590px;
          }

          .raffstoreImage {
            width: min(25vw, 320px);
          }

          .raffstoreFeatureCards {
            display: contents;
          }

          .raffstoreFeatureCard {
            max-width: 275px;
            min-height: 118px;
          }

          .raffstoreFeatureCard.left {
            grid-column: 1;
            justify-self: end;
            text-align: right;
          }

          .raffstoreFeatureCard.right {
            grid-column: 3;
            justify-self: start;
            text-align: left;
          }

          .raffstoreFeatureCard.top {
            grid-row: 1;
          }

          .raffstoreFeatureCard.middle {
            grid-row: 2;
          }

          .raffstoreFeatureCard.bottom {
            grid-row: 3;
          }

          .raffstoreFeatureCard:after,
          .raffstoreFeatureCard:before {
            content: "";
            position: absolute;
          }

          .raffstoreFeatureCard:after {
            animation: raffstoreLineDraw 3.2s ease-in-out infinite;
            background: linear-gradient(90deg, rgba(213, 119, 22, 0), rgba(213, 119, 22, 0.88));
            height: 1px;
            margin: 0;
            top: var(--lineTop);
            width: 50px;
          }

          .raffstoreFeatureCard:before {
            background: #fff;
            border: 2px solid #d57716;
            border-radius: 999px;
            box-shadow: 0 0 0 5px rgba(213, 119, 22, 0.12);
            height: 10px;
            top: calc(var(--lineTop) - 5px);
            width: 10px;
          }

          .raffstoreFeatureCard.active:before {
            background: #d57716;
            border-color: #fff;
            box-shadow:
              0 0 0 4px rgba(213, 119, 22, 0.22),
              0 0 18px rgba(213, 119, 22, 0.42);
          }

          .raffstoreFeatureCard.active:after {
            animation: none;
            background: #d57716;
            height: 2px;
            opacity: 1;
            transform: scaleX(1);
          }

          .raffstoreFeatureCard.left:after {
            right: -50px;
          }

          .raffstoreFeatureCard.left:before {
            right: -56px;
          }

          .raffstoreFeatureCard.right:after {
            background: linear-gradient(90deg, rgba(213, 119, 22, 0.88), rgba(213, 119, 22, 0));
            left: -50px;
          }

          .raffstoreFeatureCard.right:before {
            left: -56px;
          }
        }
      `}</style>
    </section>
  );
}

export default RaffstoreFeatureGraphic;
