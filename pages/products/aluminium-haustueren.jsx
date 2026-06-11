import { Fragment } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import Link from "next/link";

import HeaderDiv from "../../components/ui/headerdiv";
import AluminiumHaustuerenLandingSection from "../../components/AluminiumHaustuerenLandingSection";
import AluHaustuerenModelsGrid from "../../components/AluHaustuerenModelsGrid";

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
