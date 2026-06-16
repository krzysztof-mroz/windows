import { Fragment } from "react";
import Link from "next/link";
import FensterDiv from "../components/ui/fensterdiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';
import CustomerReview from "../components/ui/referenz";
import WindowFeatureGraphic from "../components/WindowFeatureGraphic";

const SITE_URL = "https://www.polnische-fenster.com";

const seoTitle =
  "Fenster aus Polen in Deutschland | Kunststoff & Aluminium für Neubau und Sanierung | Polnische-Fenster.com";
const seoDescription =
  "Fenster aus Polen in Deutschland kaufen: Kunststoff- und Aluminiumfenster von Schüco, Kömmerling, Salamander, Aluplast und Aliplast mit Beratung, Aufmaß und Montage-Service.";
const canonical = `${SITE_URL}/fenster`;
const fensterFaqs = [
  {
    question: "Warum Fenster aus Polen in Deutschland kaufen?",
    answer:
      "Fenster aus Polen sind oft eine starke Kombination aus Preis, Technik und Auswahl. In Deutschland profitieren Kunden von großen Modellen, moderner Ausstattung und individueller Beratung, inklusive Aufmaß und Montage.",
  },
  {
    question: "Welche Fensterprofile sind in Ihrem Sortiment am häufigsten gefragt?",
    answer:
      "Wir liefern Kunststoff- und Aluminiumlösungen von Schüco, Kömmerling, Salamander, Aluplast und Gealan. Für moderne Architektur sind Aluminiumfenster oft beliebt, für klassische Dämmansprüche häufig Kunststoffsysteme.",
  },
  {
    question: "Kann ich Fenster aus Polen mit Montage in Deutschland bekommen?",
    answer:
      "Ja. Wir unterstützen Sie mit Planung, Aufmaß, Lieferung und Montage für Baustellen in Deutschland – je nach Projektgröße mit passender Ausführung und Zubehör.",
  },
  {
    question: "Wie schnell geht der Ablauf bei einem Projekt?",
    answer:
      "Nach kurzer Abstimmung zu Maße, Ausführung und Materialtyp erstellen wir ein Angebot, klären die offenen Details und koordinieren danach Produktion, Lieferung und Einbau.",
  },
];

function FensterFaqs() {
  return (
    <section className="mw8 center ph4 pb4">
      <h2 className="f3 tc ma0 mb3">Häufige Fragen zu Fenstern aus Polen</h2>
      <div>
        {fensterFaqs.map((faq) => (
          <details
            key={faq.question}
            className="ba b--black-10 bg-white pa3 mb2"
          >
            <summary className="b pointer">{faq.question}</summary>
            <p className="lh-copy mid-gray mb0">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FenstertitleIntro() {
  return (
    <section className="mw8 center pa4 pb2">
      <h2 className="f3 ma0 mb2">
        Fenster aus Polen in Deutschland: Technik, Qualität und Preis
      </h2>
      <p className="lh-copy mid-gray ma0">
        Wir planen Fenster aus Polen für Neubau, Sanierung und modernisierte Fassaden:
        von hochwertigen Kunststofffenstern bis zu schlanken Aluminiumfenstern mit klaren Linien.
        Alle Lösungen werden auf Maß, Nutzungsart und Ihre baulichen Gegebenheiten abgestimmt.
      </p>
    </section>
  );
}

function FensterPanelCta() {
  return (
    <section className="fensterCtaWrap">
      <div className="fensterCta">
        <div>
          <p className="fensterEyebrow">Fensterprojekt vorbereiten</p>
          <h2>Fenster, Türen und Beschattung zusammen planen</h2>
          <p>
            Starten Sie direkt mit einer Anfrage oder springen Sie zu den
            passenden Bereichen für Haustüren und Sonnenschutz.
          </p>
        </div>
        <div className="fensterCtaActions">
          <Link href="/kontakt/anfrage" legacyBehavior>
            <a className="fensterPrimaryLink">Anfrage vorbereiten</a>
          </Link>
          <Link href="/tueren" legacyBehavior>
            <a className="fensterSecondaryLink">zu den Haustüren</a>
          </Link>
          <Link href="/beschattung" legacyBehavior>
            <a className="fensterSecondaryLink">zur Beschattung</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .fensterCtaWrap {
          margin: 0 auto;
          max-width: 1120px;
          padding: 10px 16px 12px;
        }

        .fensterCta {
          align-items: center;
          background: #f6f2ec;
          border-left: 6px solid #d57716;
          display: grid;
          gap: 16px;
          padding: 18px;
        }

        .fensterCta h2 {
          color: #171717;
          font-size: 25px;
          line-height: 1.15;
          margin: 0;
        }

        .fensterCta p {
          color: #555;
          line-height: 1.5;
          margin: 8px 0 0;
        }

        .fensterEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .fensterCtaActions {
          display: grid;
          gap: 10px;
        }

        .fensterPrimaryLink,
        .fensterSecondaryLink {
          display: inline-block;
          font-weight: 800;
          min-width: 190px;
          padding: 0.85rem 1rem;
          text-align: center;
          text-decoration: none;
        }

        .fensterPrimaryLink {
          background: #d57716;
          color: #fff;
        }

        .fensterSecondaryLink {
          background: #fff;
          border: 1px solid #d8d8d8;
          color: #222;
        }

        .fensterPrimaryLink:hover,
        .fensterSecondaryLink:hover,
        .fensterPrimaryLink:focus,
        .fensterSecondaryLink:focus {
          transform: translateY(-1px);
        }

        @media (min-width: 760px) {
          .fensterCta {
            grid-template-columns: minmax(0, 1fr) auto;
            padding: 22px 24px;
          }

          .fensterCta h2 {
            font-size: 31px;
          }

          .fensterCtaActions {
            min-width: 220px;
          }
        }
      `}</style>
    </section>
  );
}

function FensterProfileVideo() {
  return (
    <section className="fensterVideoWrap" aria-label="Fensterprofil im Schnitt">
      <div className="fensterVideoText">
        <p className="fensterEyebrow">Profiltechnik</p>
        <h2>Fensterprofil im Schnitt ansehen</h2>
        <p>
          Der Film zeigt Aufbau, Luftkammern, Stahlverstärkung und Dichtungsebenen
          eines modernen Kunststofffensters.
        </p>
      </div>
      <div className="fensterVideoFrame">
        <video
          src="/movies/living.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
      </div>

      <style jsx>{`
        .fensterVideoWrap {
          align-items: center;
          background: #f6f2ec;
          display: grid;
          gap: 24px;
          margin: 22px auto 18px;
          max-width: 1120px;
          padding: 24px 16px;
        }

        .fensterVideoText {
          max-width: 440px;
        }

        .fensterEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .fensterVideoText h2 {
          color: #171717;
          font-size: 28px;
          line-height: 1.12;
          margin: 0;
        }

        .fensterVideoText p:last-child {
          color: #555;
          line-height: 1.5;
          margin: 10px 0 0;
        }

        .fensterVideoFrame {
          background: #111;
          overflow: hidden;
        }

        .fensterVideoFrame video {
          display: block;
          height: auto;
          width: 100%;
        }

        @media (min-width: 840px) {
          .fensterVideoWrap {
            grid-template-columns: minmax(240px, 0.9fr) minmax(420px, 1.4fr);
            padding: 26px 28px;
          }

          .fensterVideoText h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}

function Fenster() {

  // components/WindowBrandsInfo.js
const WindowBrandsInfo2 = () => {
  return (
    <div className="pa4">
      <h2 className="fl f3 ma1 mt3-l w-100 tc">Unsere Fenstermarken</h2>
      <p className="lh-copy">
        Wir bieten eine breite Palette an hochwertigen Fensterlösungen an. Unsere Auswahl an <span className="b">Kunststofffenstern</span> umfasst führende Marken wie <span className="b">Kömmerling</span>, <span className="b">Schüco</span>, <span className="b">Aluplast</span> und <span className="b">Salamander</span>, die für ihre Qualität und Langlebigkeit bekannt sind. Zusätzlich bieten wir eine Vielfalt an <span className="b">Aluminium Fenstern</span> von renommierten Herstellern wie <span className="b">Schüco</span>, <span className="b">Aluprof</span> und <span className="b">Ponzio</span> an, ideal für moderne Architektur und höchste Ansprüche.
      </p>
      <p className="lh-copy">
        Für Kunden, die besonderen Wert auf schnelle Lieferzeiten legen, sind unsere <span className="b">Aluplast</span> und <span className="b">Salamander Kunststofffenster</span> eine ideale Wahl. Mit einer beeindruckenden Lieferzeit von nur <span className="b">3 Wochen</span>, sind sie perfekt für Projekte, die eine zügige Realisierung erfordern.
      </p>
    </div>
  );
};

// components/WindowBrandsInfo.js
const WindowBrandsInfo = () => {
  return (
    <div className="flex flex-wrap pa4">
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">Entdecken Sie unsere Fenstermarken</h2>
        <p className="lh-copy">
          Entdecken Sie die Welt der hochwertigen Fensterlösungen mit unserer umfangreichen Auswahl. Wir bieten erstklassige <span className="b">Kunststofffenster</span> von Marken wie <span className="b">Salamander</span>, <span className="b">Schüco</span>, <span className="b">Gealan</span>, <span className="b">Aluplast</span> und <span className="b">Kömmerling</span>. Jedes dieser Produkte steht für Qualität, Effizienz und Design. 
        </p>
        <p className="lh-copy">
          Neben der Ästhetik liegt unser Fokus auf Funktionalität. Unsere Fenster bieten hervorragende Wärme- und Schalldämmung, Sicherheit und sind einfach zu warten, was sie zur idealen Wahl für jedes Zuhause oder Büro macht. 
        </p>
      </div>
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">Aluminiumfenster für moderne Architektur</h2>
        <p className="lh-copy">
          Für Liebhaber moderner Architektur bieten wir eine Auswahl an <span className="b">Aluminiumfenstern</span> von <span className="b">Aluprof</span>, <span className="b">Reynaers</span>, <span className="b">Schüco</span>, <span className="b">Aliplast</span> und <span className="b">Ponzio</span>. Diese Fenster setzen neue Maßstäbe in Sachen Design und Funktionalität.
        </p>
        <p className="lh-copy">
          Für eilige Projekte empfehlen wir unsere <span className="b">Aluplast</span> und <span className="b">Salamander Kunststofffenster</span> mit einer beeindruckenden Lieferzeit von nur <span className="b">3 Wochen</span>. Ideal für schnelle Renovierungsarbeiten oder wenn es auf jede Minute ankommt.
        </p>
      </div>
    </div>
  );
};





  return (
    <Fragment>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: fensterFaqs.map((faqItem) => ({
                "@type": "Question",
                name: faqItem.question,
                acceptedAnswer: { "@type": "Answer", text: faqItem.answer },
              })),
            }),
          }}
        />
      </Head>
      <HeaderDiv
        title="Fenster aus Kunststoff und Aluminium"
        subtitle="Moderne Fenstertechnik für mehr Lebensqualität"
        showDefaultVideo={false}
      />

      <FenstertitleIntro />
      <WindowFeatureGraphic />
      <FensterPanelCta />
      <FensterDiv />
      <FensterProfileVideo />
      
      <WindowBrandsInfo />
      <FensterFaqs />
      <CustomerReview />
    </Fragment>
  );
}

export default Fenster;
