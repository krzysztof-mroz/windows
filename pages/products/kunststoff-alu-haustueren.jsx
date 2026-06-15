import { Fragment } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import Link from "next/link";

import HeaderDiv from "../../components/ui/headerdiv";
import KunststoffHaustuerenLandingSection from "../../components/KunststoffHaustuerenLandingSection";
import HaustuerenModelsGrid from "../../components/HaustuerenModelsGrid";
import DoorCategorySwitchLinks from "../../components/DoorCategorySwitchLinks";

const SITE_URL = "https://www.polnische-fenster.com";
const FORM_HREF = "/kontakt/anfragehtpvc?modell=Auswahl%20offen";

const heroSlides = [
  {
    src: "/images/kunststoff-alu-haustueren/hero/haustuer-1.jpg",
    alt: "Moderne Haustür mit Einsatzfüllung an einem Haus",
    tag: "Kunststoff und Alu",
    caption: "Budgetfreundliche Haustüren mit moderner Einsatzfüllung.",
  },
  {
    src: "/images/kunststoff-alu-haustueren/hero/haustuer-2.jpg",
    alt: "Helle Fassade mit moderner Haustür und Seitenteil",
    tag: "Mit Seitenteil",
    caption: "Passend zu Neubau, Sanierung und bestehenden Öffnungen.",
  },
  {
    src: "/images/kunststoff-alu-haustueren/hero/haustuer-3.jpg",
    alt: "Dunkle Haustür mit Glasfeld und moderner Architektur",
    tag: "Viele Modelle",
    caption: "Modelle mit Glas, Dekorrahmen und Edelstahloptik.",
  },
  {
    src: "/images/kunststoff-alu-haustueren/hero/haustuer-4.jpg",
    alt: "Moderne Haustür in dunkler Farbe an einem Hauseingang",
    tag: "Pflegeleicht",
    caption: "Kunststoff oder Aluminium nach Wunsch auswählbar.",
  },
  {
    src: "/images/kunststoff-alu-haustueren/hero/haustuer-5.jpg",
    alt: "Haustür mit Glas und dunklem Rahmen am Hauseingang",
    tag: "Nach Maß",
    caption: "Maße, Farbe, Glas und Griff passend zum Projekt.",
  },
  {
    src: "/images/kunststoff-alu-haustueren/hero/haustuer-6.jpg",
    alt: "Moderne Haustür mit Blumen am Eingang",
    tag: "Anfrage vorbereiten",
    caption: "Schnell zur Modellwahl und zum passenden Formular.",
  },
];

const comparisonRows = [
  {
    label: "Preis",
    kunststoff: "Meist die günstigste Lösung mit sehr gutem Preis-Leistungs-Verhältnis.",
    alu: "Etwas höherer Einstiegspreis, aber stabil und modern in der Wirkung.",
  },
  {
    label: "Optik",
    kunststoff: "Klassische und moderne Türfüllungen mit vielen Farben und Dekoren.",
    alu: "Schlanke, klare Anmutung und hochwertige Optik mit Einsatzfüllung.",
  },
  {
    label: "Pflege",
    kunststoff: "Pflegeleicht, unempfindlich und gut für häufig genutzte Eingänge.",
    alu: "Sehr robuste Oberfläche und langlebige Lösung für moderne Eingänge.",
  },
  {
    label: "Einsatz",
    kunststoff: "Sehr gut für Sanierung, Budgetprojekte und klassische Wohnhäuser.",
    alu: "Gut für moderne Häuser, größere Elemente und eine wertigere Außenwirkung.",
  },
  {
    label: "Empfehlung",
    kunststoff: "Wenn Budget, Wärmedämmung und Pflegeleichtigkeit im Vordergrund stehen.",
    alu: "Wenn die Tür etwas hochwertiger und architektonisch klarer wirken soll.",
  },
];

const processSteps = [
  {
    title: "Modell wählen",
    text: "Wählen Sie ein Modell aus der Übersicht oder öffnen Sie zuerst das Formular.",
  },
  {
    title: "Material festlegen",
    text: "Im Formular wählen Sie Kunststoff oder Aluminium und geben Maße, Farbe und Ausstattung an.",
  },
  {
    title: "Angebot erhalten",
    text: "Wir prüfen die Angaben und melden uns mit Rückfragen oder einem passenden Angebot.",
  },
];

function HaustuerFormCta() {
  return (
    <section className="budgetCtaWrap">
      <div className="budgetCta">
        <div>
          <p className="budgetEyebrow">Kunststoff und Alu Haustüren</p>
          <h2>Budgetfreundliche Haustür mit Einsatzfüllung planen</h2>
          <p>
            Öffnen Sie direkt das Formular oder springen Sie zuerst zu den
            Modellen. Material, Maße, Farbe, Glas und Ausstattung werden im
            Formular abgefragt.
          </p>
        </div>
        <div className="budgetCtaActions">
          <Link href={FORM_HREF} legacyBehavior>
            <a className="budgetPrimaryLink">Formular öffnen</a>
          </Link>
          <Link href="#haustueren-modelle" legacyBehavior>
            <a className="budgetSecondaryLink">Modelle ansehen</a>
          </Link>
          <DoorCategorySwitchLinks current="budget" />
        </div>
      </div>
      <style jsx>{`
        .budgetCtaWrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 20px 16px 8px;
        }

        .budgetCta {
          align-items: center;
          background: #f6f2ec;
          border-left: 6px solid #d57716;
          display: grid;
          gap: 16px;
          padding: 18px;
        }

        .budgetCta h2 {
          font-size: 25px;
          line-height: 1.15;
          margin: 0;
        }

        .budgetCta p {
          color: #555;
          line-height: 1.5;
          margin: 8px 0 0;
        }

        .budgetEyebrow {
          color: #d57716;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .budgetCtaActions {
          display: grid;
          gap: 10px;
        }

        .budgetPrimaryLink,
        .budgetSecondaryLink {
          display: inline-block;
          font-weight: 700;
          min-width: 170px;
          padding: 0.85rem 1rem;
          text-align: center;
          text-decoration: none;
        }

        .budgetPrimaryLink {
          background: #d57716;
          color: #fff;
        }

        .budgetSecondaryLink {
          background: #fff;
          border: 1px solid #d8d8d8;
          color: #222;
        }

        @media (min-width: 820px) {
          .budgetCta {
            grid-template-columns: 1fr auto;
            padding: 24px;
          }

          .budgetCta h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}

function BudgetDoorComparison() {
  return (
    <section className="budgetCompare">
      <div className="budgetCompareInner">
        <div className="tc mb3">
          <p className="budgetEyebrow">Materialwahl</p>
          <h2>Kunststoff oder Alu?</h2>
          <p>
            Beide Varianten eignen sich für Haustüren mit Einsatzfüllung. Die
            beste Wahl hängt von Budget, Optik und gewünschter Robustheit ab.
          </p>
        </div>

        <div className="budgetTableWrap">
          <table>
            <thead>
              <tr>
                <th>Kriterium</th>
                <th>Kunststoff</th>
                <th>Aluminium</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.kunststoff}</td>
                  <td>{row.alu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="budgetCompareCards">
          {comparisonRows.map((row) => (
            <article key={row.label}>
              <h3>{row.label}</h3>
              <p>
                <strong>Kunststoff:</strong> {row.kunststoff}
              </p>
              <p>
                <strong>Aluminium:</strong> {row.alu}
              </p>
            </article>
          ))}
        </div>
      </div>
      <style jsx>{`
        .budgetCompare {
          background: #f7f7f7;
          padding: 28px 16px;
        }

        .budgetCompareInner {
          margin: 0 auto;
          max-width: 1120px;
        }

        .budgetEyebrow {
          color: #d57716;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .budgetCompare h2 {
          font-size: 28px;
          line-height: 1.15;
          margin: 0;
        }

        .budgetCompare p {
          color: #555;
          line-height: 1.5;
          margin: 8px auto 0;
          max-width: 720px;
        }

        .budgetTableWrap {
          display: none;
        }

        .budgetCompareCards {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }

        .budgetCompareCards article {
          background: #fff;
          border: 1px solid #e3e3e3;
          padding: 14px;
        }

        .budgetCompareCards h3 {
          font-size: 19px;
          margin: 0 0 8px;
        }

        .budgetCompareCards p {
          margin: 7px 0 0;
        }

        @media (min-width: 780px) {
          .budgetCompare h2 {
            font-size: 34px;
          }

          .budgetTableWrap {
            display: block;
            margin-top: 20px;
            overflow-x: auto;
          }

          table {
            background: #fff;
            border-collapse: collapse;
            width: 100%;
          }

          th,
          td {
            border: 1px solid #e3e3e3;
            line-height: 1.45;
            padding: 14px;
            text-align: left;
            vertical-align: top;
          }

          th {
            background: #fff7ed;
          }

          .budgetCompareCards {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

function BudgetDoorProcess() {
  return (
    <section className="budgetProcess">
      <div className="tc mb3">
        <p className="budgetEyebrow">Anfrage</p>
        <h2>Schnell zum Angebot</h2>
      </div>
      <div className="processGrid">
        {processSteps.map((step, index) => (
          <article key={step.title}>
            <span>{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
      <style jsx>{`
        .budgetProcess {
          max-width: 1120px;
          margin: 0 auto;
          padding: 28px 16px 40px;
        }

        .budgetEyebrow {
          color: #d57716;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .budgetProcess h2 {
          font-size: 28px;
          line-height: 1.15;
          margin: 0;
        }

        .processGrid {
          display: grid;
          gap: 12px;
        }

        .processGrid article {
          background: #fff;
          border: 1px solid #e3e3e3;
          padding: 16px;
        }

        .processGrid span {
          align-items: center;
          background: #d57716;
          color: #fff;
          display: inline-flex;
          font-weight: 700;
          height: 34px;
          justify-content: center;
          margin-bottom: 10px;
          width: 34px;
        }

        .processGrid h3 {
          font-size: 20px;
          margin: 0;
        }

        .processGrid p {
          color: #555;
          line-height: 1.5;
          margin: 8px 0 0;
        }

        @media (min-width: 780px) {
          .budgetProcess h2 {
            font-size: 34px;
          }

          .processGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}

function KunststoffAluHaustuerenPage({ models }) {
  const seoTitle =
    "Kunststoff und Alu Haustüren aus Polen – Modelle & Preise";
  const seoDescription =
    "Kunststoff und Alu Haustüren aus Polen mit Einsatzfüllung: moderne Modelle, viele Farben, Seitenteile, Glas und attraktive Preise.";
  const canonical = `${SITE_URL}/products/kunststoff-alu-haustueren`;

  return (
    <Fragment>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonical} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderDiv
        title="Kunststoff und Alu Haustüren aus Polen"
        subtitle="Budgetfreundliche Haustüren mit Einsatzfüllung"
        heroSlides={heroSlides}
        ifAnfrage="yes"
      />

      <HaustuerFormCta />

      <div id="haustueren-modelle">
        <HaustuerenModelsGrid initialCount={12} models={models} />
      </div>

      <KunststoffHaustuerenLandingSection minPriceText="ab 1.129 € inkl. MwSt" />
      <BudgetDoorComparison />
      <BudgetDoorProcess />
    </Fragment>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public", "ekoline");

  let files = [];
  try {
    files = fs.readdirSync(dir);
  } catch (err) {
    console.error("Fehler beim Lesen von /public/ekoline:", err);
  }

  const jpgFiles = files.filter((file) => /\.(jpe?g)$/i.test(file));

  const models = jpgFiles
    .map((file) => {
      const match = file.match(/^(\d{2,3})(-2)?\.(jpg|jpeg)$/i);
      if (!match) return null;

      const baseId = match[1];
      const hasSteelFrame = Boolean(match[2]);

      return {
        id: hasSteelFrame ? `${baseId}-2` : baseId,
        baseId,
        name: `Modell ${baseId}${hasSteelFrame ? " mit Edelstahlrahmen" : ""}`,
        variantLabel: hasSteelFrame ? "mit Edelstahlrahmen" : null,
        src: `/ekoline/${file}`,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aNum = parseInt(a.baseId, 10);
      const bNum = parseInt(b.baseId, 10);

      if (aNum !== bNum) return aNum - bNum;

      const aVariant = a.id.includes("-2") ? 1 : 0;
      const bVariant = b.id.includes("-2") ? 1 : 0;
      return aVariant - bVariant;
    });

  return {
    props: {
      models,
    },
  };
}

export default KunststoffAluHaustuerenPage;
