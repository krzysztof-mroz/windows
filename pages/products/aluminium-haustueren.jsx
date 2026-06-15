import { Fragment, useState } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

import HeaderDiv from "../../components/ui/headerdiv";
import AluminiumHaustuerenLandingSection from "../../components/AluminiumHaustuerenLandingSection";
import AluHaustuerenModelsGrid from "../../components/AluHaustuerenModelsGrid";
import DoorCategorySwitchLinks from "../../components/DoorCategorySwitchLinks";

const SITE_URL = "https://www.polnische-fenster.com";
const FORM_HREF = "/kontakt/anfragehtalu?modell=Auswahl%20offen";

const heroSlides = [
  {
    src: "/images/aluminium-haustueren/hero/alutuer-1.jpg",
    alt: "Hochwertige schwarze Aluminium Haustür mit Glaselementen",
    tag: "Premium Aluminium",
    caption: "Flügelüberdeckende Haustüren mit klarer moderner Optik.",
  },
  {
    src: "/images/aluminium-haustueren/hero/alutuer-2.jpg",
    alt: "Moderne Aluminium Haustür mit dunklem Türflügel und warmem Eingangslicht",
    tag: "Stabil und elegant",
    caption: "Robuste Konstruktion, starke Paneele und repräsentativer Eingang.",
  },
  {
    src: "/images/aluminium-haustueren/hero/alutuer-7.png",
    alt: "Aluminium Haustür mit Glasfeldern an heller Fassade",
    tag: "Design nach Maß",
    caption: "Viele Türbilder, Glasvarianten, Farben und Grifflösungen.",
  },
  {
    src: "/images/aluminium-haustueren/hero/alutuer-4.jpg",
    alt: "Dunkle Aluminium Haustür mit horizontalen Linien",
    tag: "Für Neubau und Sanierung",
    caption: "Beratung zu Modell, Maßen, Seitenteil und Oberlicht.",
  },
  {
    src: "/images/aluminium-haustueren/hero/alutuer-5.jpg",
    alt: "Premium Aluminium Haustür mit vertikalem Glasfeld",
    tag: "Hochwertige Ausstattung",
    caption: "Verdeckte Scharniere, VSG-Verglasung und moderne Beschläge.",
  },
];

const processSteps = [
  {
    title: "Modell wählen",
    text: "Wählen Sie ein Despiro-Modell aus der Übersicht oder starten Sie direkt mit dem Formular.",
  },
  {
    title: "Ausstattung klären",
    text: "Maße, Farbe, Griff, Glas, Seitenteil und Oberlicht werden im Formular strukturiert abgefragt.",
  },
  {
    title: "Angebot erhalten",
    text: "Wir prüfen die Angaben und melden uns mit Rückfragen oder einem passenden Angebot.",
  },
];

const doorFeaturePoints = [
  {
    className: "panel",
    side: "left",
    slot: "top",
    lineTop: "50%",
    eyebrow: "Paneel",
    title: "77 mm starke Paneele",
    text: "Flügelüberdeckende Konstruktion für eine ruhige, hochwertige Außenansicht.",
  },
  {
    className: "lock",
    side: "left",
    slot: "middle",
    lineTop: "48%",
    eyebrow: "Sicherheit",
    title: "Mehrfachverriegelung",
    text: "Stabile Verriegelung als Grundlage für Sicherheit und dicht schließende Türen.",
  },
  {
    className: "handle",
    side: "left",
    slot: "bottom",
    lineTop: "46%",
    eyebrow: "Griff",
    title: "Stoßgriff oder Drücker",
    text: "Viele Griffvarianten in Edelstahl, Schwarz oder mit moderner Linienführung.",
  },
  {
    className: "hinges",
    side: "right",
    slot: "top",
    lineTop: "50%",
    eyebrow: "Design",
    title: "Verdeckte Scharniere",
    text: "Klare Optik ohne sichtbare Bänder, passend zu modernen Eingangsbereichen.",
  },
  {
    className: "glass",
    side: "right",
    slot: "middle",
    lineTop: "49%",
    eyebrow: "Glas",
    title: "VSG-Verglasung",
    text: "Licht im Eingangsbereich mit sicherer Verglasung und warmer Kante.",
  },
  {
    className: "finish",
    side: "right",
    slot: "bottom",
    lineTop: "48%",
    eyebrow: "Oberfläche",
    title: "RAL-Farben & Struktur",
    text: "Anthrazit, Schwarz, Feinstruktur und viele Farben passend zur Fassade.",
  },
];

function AluminiumFormCta() {
  return (
    <section className="aluCtaWrap">
      <div className="aluCta">
        <div>
          <p className="aluEyebrow">Hochwertige Aluminium Haustüren</p>
          <h2>Premium-Haustür mit Beratung planen</h2>
          <p>
            Öffnen Sie direkt das Formular oder wählen Sie zuerst ein Modell.
            Maße, Farbe, Griff, Glas, Seitenteile und Oberlicht werden im
            Formular abgefragt.
          </p>
        </div>
        <div className="aluCtaActions">
          <Link href={FORM_HREF} legacyBehavior>
            <a className="aluPrimaryLink">Formular öffnen</a>
          </Link>
          <Link href="#aluminium-modelle" legacyBehavior>
            <a className="aluSecondaryLink">Modelle ansehen</a>
          </Link>
          <DoorCategorySwitchLinks current="premium" />
        </div>
      </div>

      <style jsx>{`
        .aluCtaWrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 20px 16px 8px;
        }

        .aluCta {
          align-items: center;
          background: #f6f2ec;
          border-left: 6px solid #d57716;
          display: grid;
          gap: 16px;
          padding: 18px;
        }

        .aluCta h2 {
          font-size: 25px;
          line-height: 1.15;
          margin: 0;
        }

        .aluCta p {
          color: #555;
          line-height: 1.5;
          margin: 8px 0 0;
        }

        .aluEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .aluCtaActions {
          display: grid;
          gap: 10px;
        }

        .aluPrimaryLink,
        .aluSecondaryLink {
          display: inline-block;
          font-weight: 700;
          min-width: 170px;
          padding: 0.85rem 1rem;
          text-align: center;
          text-decoration: none;
        }

        .aluPrimaryLink {
          background: #d57716;
          color: #fff;
        }

        .aluSecondaryLink {
          background: #fff;
          border: 1px solid #d8d8d8;
          color: #222;
        }

        @media (min-width: 760px) {
          .aluCta {
            grid-template-columns: minmax(0, 1fr) auto;
            padding: 22px 24px;
          }

          .aluCta h2 {
            font-size: 31px;
          }

          .aluCtaActions {
            min-width: 220px;
          }
        }
      `}</style>
    </section>
  );
}

function AluminiumDoorFeatureGraphic() {
  const [activeFeature, setActiveFeature] = useState(doorFeaturePoints[0].className);

  return (
    <section className="doorFeatureWrap" aria-label="Vorteile flügelüberdeckender Aluminium Haustüren">
      <div className="doorFeatureInner">
        <div className="doorFeatureIntro">
          <p className="aluEyebrow">Flügelüberdeckende Aluminium Haustür</p>
          <h2>Premium-Details, die man sieht und im Alltag spürt</h2>
          <p>
            Die wichtigsten Vorteile auf einen Blick: starke Paneele, klare
            Linien, moderne Ausstattung und hochwertige Details für Neubau und
            Sanierung.
          </p>
        </div>

        <div className="doorBlueprint">
          <div className="doorVisual">
            <div className="doorGlow" />
            <Image
              src="/images/aluminium-haustueren/fluegelueberdeckende_alu_haustuer.png"
              alt="Flügelüberdeckende Aluminium Haustür mit modernen Ausstattungsdetails"
              width={616}
              height={1367}
              className="doorImage"
            />
            {doorFeaturePoints.map((point) => (
              <button
                type="button"
                key={point.className}
                className={`doorHotspot ${point.className} ${
                  activeFeature === point.className ? "active" : ""
                }`}
                aria-label={point.title}
                onClick={() => setActiveFeature(point.className)}
              />
            ))}
          </div>

          <div className="featureCards">
            {doorFeaturePoints.map((point) => (
              <article
                className={`featureCard ${point.side} ${point.slot} ${
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
        .doorFeatureWrap {
          background:
            linear-gradient(135deg, rgba(17, 17, 17, 0.04), rgba(213, 119, 22, 0.08)),
            #ffffff;
          margin: 8px auto 0;
          max-width: 1120px;
          padding: 28px 16px 18px;
        }

        .doorFeatureInner {
          margin: 0 auto;
          max-width: 1024px;
        }

        .doorFeatureIntro {
          margin: 0 auto 18px;
          max-width: 740px;
          text-align: center;
        }

        .doorFeatureIntro h2 {
          color: #171717;
          font-size: 28px;
          line-height: 1.12;
          margin: 0;
        }

        .doorFeatureIntro p:last-child {
          color: #555;
          line-height: 1.55;
          margin: 10px 0 0;
        }

        .aluEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 7px;
          text-transform: uppercase;
        }

        .doorBlueprint {
          display: flex;
          flex-direction: column;
          gap: 18px;
          overflow: hidden;
          position: relative;
        }

        .doorVisual {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          max-width: 300px;
          min-height: 420px;
          position: relative;
          width: 100%;
        }

        .doorGlow {
          background: radial-gradient(circle, rgba(213, 119, 22, 0.16), rgba(17, 17, 17, 0) 68%);
          bottom: 8%;
          filter: blur(2px);
          height: 52%;
          position: absolute;
          width: 105%;
        }

        .doorImage {
          filter: drop-shadow(0 32px 28px rgba(0, 0, 0, 0.18));
          height: min(76vh, 440px);
          max-width: 100%;
          position: relative;
          width: auto;
          z-index: 1;
        }

        .doorHotspot {
          animation: hotspotPulse 2.8s ease-in-out infinite;
          background: #fff;
          border: 2px solid #d57716;
          border-radius: 999px;
          box-shadow: 0 0 0 6px rgba(213, 119, 22, 0.12);
          cursor: pointer;
          height: 12px;
          padding: 0;
          position: absolute;
          width: 12px;
          z-index: 2;
        }

        .doorHotspot.active {
          animation: none;
          background: #d57716;
          border-color: #fff;
          box-shadow:
            0 0 0 4px rgba(213, 119, 22, 0.3),
            0 0 0 13px rgba(213, 119, 22, 0.13),
            0 0 28px rgba(213, 119, 22, 0.6);
          transform: scale(1.28);
        }

        .doorHotspot:focus-visible {
          outline: 3px solid rgba(213, 119, 22, 0.45);
          outline-offset: 5px;
        }

        .doorHotspot.panel {
          left: 42%;
          top: 20%;
        }

        .doorHotspot.lock {
          left: 30%;
          top: 45%;
        }

        .doorHotspot.handle {
          left: 33%;
          top: 58%;
        }

        .doorHotspot.hinges {
          right: 17%;
          top: 30%;
        }

        .doorHotspot.glass {
          right: 25%;
          top: 47%;
        }

        .doorHotspot.finish {
          right: 29%;
          bottom: 17%;
        }

        .featureCards {
          display: grid;
          gap: 10px;
        }

        .featureCard {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(17, 17, 17, 0.1);
          box-shadow: 0 14px 32px rgba(17, 17, 17, 0.06);
          cursor: pointer;
          padding: 14px;
          position: relative;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
        }

        .featureCard.active {
          border-color: rgba(213, 119, 22, 0.72);
          box-shadow:
            0 18px 40px rgba(17, 17, 17, 0.09),
            0 0 0 3px rgba(213, 119, 22, 0.13);
          transform: translateY(-2px);
        }

        .featureCard:after {
          background: linear-gradient(90deg, #d57716, rgba(213, 119, 22, 0));
          content: "";
          display: block;
          height: 2px;
          margin-top: 12px;
          transform-origin: left center;
          animation: lineDraw 3.2s ease-in-out infinite;
        }

        .featureCard.active:after {
          animation: none;
          background: linear-gradient(90deg, #d57716, rgba(213, 119, 22, 0.28));
          height: 3px;
          opacity: 1;
          transform: scaleX(1);
        }

        .featureCard p {
          color: #b86411;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 5px;
          text-transform: uppercase;
        }

        .featureCard h3 {
          color: #171717;
          font-size: 17px;
          line-height: 1.2;
          margin: 0;
        }

        .featureCard span {
          color: #565656;
          display: block;
          font-size: 14px;
          line-height: 1.45;
          margin-top: 7px;
        }

        @media (min-width: 700px) {
          .doorFeatureWrap {
            padding: 34px 20px 26px;
          }

          .doorFeatureIntro h2 {
            font-size: 34px;
          }

          .featureCards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 980px) {
          .doorFeatureWrap {
            padding: 42px 20px 34px;
          }

          .doorBlueprint {
            align-items: center;
            display: grid;
            gap: 20px 52px;
            grid-template-columns: minmax(210px, 1fr) minmax(260px, 330px) minmax(210px, 1fr);
            grid-template-rows: repeat(3, minmax(104px, auto));
            overflow: visible;
          }

          .doorVisual {
            grid-column: 2;
            grid-row: 1 / 4;
            max-width: 330px;
            min-height: 620px;
          }

          .doorImage {
            height: min(72vh, 610px);
          }

          .featureCards {
            display: contents;
          }

          .featureCard {
            max-width: 260px;
            min-height: 112px;
          }

          .featureCard.left {
            grid-column: 1;
            justify-self: end;
            text-align: right;
          }

          .featureCard.right {
            grid-column: 3;
            justify-self: start;
            text-align: left;
          }

          .featureCard.top {
            grid-row: 1;
          }

          .featureCard.middle {
            grid-row: 2;
          }

          .featureCard.bottom {
            grid-row: 3;
          }

          .featureCard:after,
          .featureCard:before {
            content: "";
            position: absolute;
          }

          .featureCard:after {
            animation: lineDraw 3.2s ease-in-out infinite;
            background: linear-gradient(90deg, rgba(213, 119, 22, 0), rgba(213, 119, 22, 0.88));
            height: 1px;
            margin: 0;
            top: var(--lineTop);
            width: 52px;
          }

          .featureCard:before {
            background: #fff;
            border: 2px solid #d57716;
            border-radius: 999px;
            box-shadow: 0 0 0 5px rgba(213, 119, 22, 0.12);
            height: 10px;
            top: calc(var(--lineTop) - 5px);
            width: 10px;
          }

          .featureCard.active:before {
            background: #d57716;
            border-color: #fff;
            box-shadow:
              0 0 0 4px rgba(213, 119, 22, 0.22),
              0 0 18px rgba(213, 119, 22, 0.42);
          }

          .featureCard.active:after {
            animation: none;
            background: #d57716;
            height: 2px;
            opacity: 1;
            transform: scaleX(1);
          }

          .featureCard.left:after {
            right: -52px;
          }

          .featureCard.left:before {
            right: -58px;
          }

          .featureCard.right:after {
            background: linear-gradient(90deg, rgba(213, 119, 22, 0.88), rgba(213, 119, 22, 0));
            left: -52px;
          }

          .featureCard.right:before {
            left: -58px;
          }
        }

        @keyframes hotspotPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.18);
          }
        }

        @keyframes lineDraw {
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
      `}</style>
    </section>
  );
}

function AluminiumDoorProcess() {
  return (
    <section className="aluProcessWrap" aria-label="Ablauf Aluminium Haustür Anfrage">
      <div className="aluProcessInner">
        <div className="aluProcessHead">
          <p className="aluEyebrow">So geht es weiter</p>
          <h2>Vom Türmodell zum passenden Angebot</h2>
        </div>
        <div className="aluSteps">
          {processSteps.map((step, index) => (
            <article className="aluStep" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .aluProcessWrap {
          background: #f7f7f7;
          padding: 24px 16px;
        }

        .aluProcessInner {
          max-width: 1120px;
          margin: 0 auto;
        }

        .aluProcessHead {
          text-align: center;
          margin-bottom: 16px;
        }

        .aluProcessHead h2 {
          font-size: 25px;
          line-height: 1.15;
          margin: 0;
        }

        .aluEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .aluSteps {
          display: grid;
          gap: 12px;
        }

        .aluStep {
          background: #fff;
          border: 1px solid #e2e2e2;
          padding: 16px;
        }

        .aluStep span {
          align-items: center;
          background: #111;
          color: #fff;
          display: inline-flex;
          font-weight: 700;
          height: 32px;
          justify-content: center;
          width: 32px;
        }

        .aluStep h3 {
          font-size: 18px;
          margin: 12px 0 6px;
        }

        .aluStep p {
          color: #555;
          line-height: 1.45;
          margin: 0;
        }

        @media (min-width: 760px) {
          .aluProcessWrap {
            padding: 32px 20px;
          }

          .aluProcessHead h2 {
            font-size: 31px;
          }

          .aluSteps {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}

function AluminiumHaustuerenPage({ models }) {
  return (
    <Fragment>
      <Head>
        <title>Aluminium Haustüren aus Polen – moderne Modelle nach Maß</title>
        <meta
          name="description"
          content="Aluminium Haustüren aus Polen – moderne Modelle nach Maß, starke Paneele, hochwertige Ausstattung und viele Designs."
        />
        <link
          rel="canonical"
          href={`${SITE_URL}/products/aluminium-haustueren`}
        />
        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content="Aluminium Haustüren aus Polen – moderne Modelle nach Maß"
        />
        <meta
          property="og:description"
          content="Aluminium Haustüren aus Polen – moderne Modelle nach Maß, starke Paneele, hochwertige Ausstattung und viele Designs."
        />
        <meta
          property="og:url"
          content={`${SITE_URL}/products/aluminium-haustueren`}
        />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/aluminium-haustueren/hero/alutuer-1.jpg`}
        />
      </Head>

      <HeaderDiv
        title="Aluminium Haustüren aus Polen"
        subtitle="Flügelüberdeckend, Premium-Optik, moderne Designs"
        heroSlides={heroSlides}
        ifAnfrage="yes"
      />

      <AluminiumFormCta />
      <AluminiumDoorFeatureGraphic />

      <div id="aluminium-modelle">
        <AluHaustuerenModelsGrid initialCount={12} models={models} />
      </div>

      <AluminiumHaustuerenLandingSection minPriceText="auf Anfrage" />
      <AluminiumDoorProcess />
    </Fragment>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public", "despiro");

  let models = [];

  try {
    const files = fs
      .readdirSync(dir)
      .filter((file) => /^DP\d{2}\.jpg$/i.test(file))
      .sort((a, b) => {
        const aNum = parseInt(a.match(/\d+/)?.[0] || "0", 10);
        const bNum = parseInt(b.match(/\d+/)?.[0] || "0", 10);
        return aNum - bNum;
      });

    models = files.map((file) => {
      const baseId = file.replace(/\.jpg$/i, "");
      const displayId = baseId.replace(/^DP/i, "");

      return {
        id: baseId,
        baseId: displayId,
        name: `DP ${displayId}`,
        src: `/despiro/${file}`,
      };
    });
  } catch (error) {
    console.error("Fehler beim Lesen von /public/despiro:", error);
  }

  return {
    props: {
      models,
    },
  };
}

export default AluminiumHaustuerenPage;
