import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Head from "next/head";
import CustomerReview from "../components/ui/referenz";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.polnische-fenster.com";

const categories = [
  {
    title: "Kunststoff und Alu",
    subtitle: "mit Einsatzfüllung, pflegeleicht, preislich attraktiv",
    href: "/products/kunststoff-alu-haustueren",
    img: "/images/tueren/Kunststoff_Haustuer.png",
    alt: "Kunststoff und Alu Haustür aus Polen – Beispielmodell",
  },
  {
    title: "Hochwertige Aluminium Haustüren",
    subtitle: "Flügelüberdeckend, Premium-Optik, moderne Designs",
    href: "/products/aluminium-haustueren",
    img: "/images/tueren/Aluminium_Haustuer.png",
    alt: "Aluminium Haustür aus Polen – Beispielmodell",
  },
  {
    title: "Nebeneingangstüren",
    subtitle: "Robust für Keller, Garage und Nebenräume.",
    href: "/products/k70nt",
    img: "/images/tueren/Nebeneingangstuer.png",
    alt: "Nebeneingangstür aus Polen – Beispielmodell",
  },
  {
    title: "Innentüren",
    subtitle: "Dekore & Styles für Wohnung und Büro.",
    href: "/products/innentueren",
    img: "/images/tueren/Innentuer.jpg",
    alt: "Innentür aus Polen – Beispielmodell",
  },
];

const doorHeroSlides = [
  {
    src: "/images/tueren/hero/tuer-paar.jpg",
    alt: "Moderne schwarze Haustür an einem Haus mit Paar vor dem Eingang",
    tag: "Haustüren nach Maß",
    caption: "Modernes Design für Neubau und Sanierung.",
  },
  {
    src: "/images/tueren/hero/tuer-frau.jpg",
    alt: "Schwarze Haustür mit Glasstreifen an weißer Fassade",
    tag: "Kunststoff oder Aluminium",
    caption: "Passend zu Fassade, Fenstern und Budget.",
  },
  {
    src: "/images/tueren/hero/tuer-seniorin.jpg",
    alt: "Dunkle Haustür an einem Holzhaus mit Seniorin vor dem Eingang",
    tag: "Komfort im Alltag",
    caption: "Niedrige Aluminium Schwelle im Standard",
  },
  {
    src: "/images/tueren/hero/tuer-kind.jpg",
    alt: "Kind vor einer modernen schwarzen Haustür an Backsteinfassade",
    tag: "Sicher und einladend",
    caption: "Hochwertige Türen aus Polen mit Beratung und Montage.",
  },
];

const doorBenefits = [
  {
    title: "Nach Maß aus Polen",
    text: "Haustüren, Nebeneingangstüren und Innentüren passend zu Ihrem Projekt.",
  },
  {
    title: "PVC oder Aluminium",
    text: "Dämmstarke Kunststofftüren oder stabile Aluminiumtüren mit moderner Optik.",
  },
  {
    title: "Mit Aufmaß & Montage",
    text: "Auf Wunsch mit Beratung, Aufmaß vor Ort, Lieferung und fachgerechter Montage.",
  },
];

const doorFitItems = [
  {
    title: "Modernes Haus",
    text: "Aluminium Haustüren mit klaren Linien, Seitenteil, Glasfeldern und eleganten Griffen.",
  },
  {
    title: "Sanierung & Altbau",
    text: "Kunststoff Haustüren mit guter Wärmedämmung und vielen Dekoren für bestehende Fassaden.",
  },
  {
    title: "Nebeneingang",
    text: "Robuste Türen für Keller, Garage, Hauswirtschaftsraum oder Seiteneingang.",
  },
  {
    title: "Komfort & Sicherheit",
    text: "Optionen wie niedrige Schwelle, Fingerprint, Elektroöffner, Türschließer und Sicherheitsglas.",
  },
];

const comparisonRows = [
  {
    label: "Preis",
    pvc: "Meist günstiger und sehr attraktiv für Sanierung.",
    alu: "Höherer Einstiegspreis, dafür Premium-Optik.",
  },
  {
    label: "Optik",
    pvc: "Viele Farben und Dekore, klassisch bis modern.",
    alu: "Sehr schmale, klare und hochwertige Wirkung.",
  },
  {
    label: "Dämmung",
    pvc: "Sehr gute Wärmedämmung bei gutem Preis-Leistungs-Verhältnis.",
    alu: "Sehr gute Dämmwerte je nach System und Ausstattung.",
  },
  {
    label: "Stabilität",
    pvc: "Stabil für typische Haustür- und Nebentürprojekte.",
    alu: "Sehr stabil, ideal für größere Elemente und moderne Architektur.",
  },
  {
    label: "Empfehlung",
    pvc: "Wenn Budget, Dämmung und Pflegeleichtigkeit im Fokus stehen.",
    alu: "Wenn Design, Langlebigkeit und Premium-Auftritt wichtig sind.",
  },
];

const processSteps = [
  {
    title: "Anfrage senden",
    text: "Sie schicken Maße, Fotos, Pläne oder eine kurze Beschreibung Ihrer Wunschtür.",
  },
  {
    title: "Beratung & Auswahl",
    text: "Wir klären Material, Farbe, Glas, Griff, Seitenteil, Schwelle und Zubehör.",
  },
  {
    title: "Angebot & Freigabe",
    text: "Sie erhalten ein passendes Angebot und geben die finale Ausführung frei.",
  },
  {
    title: "Lieferung & Montage",
    text: "Die Tür wird nach Maß gefertigt, geliefert und auf Wunsch fachgerecht montiert.",
  },
];

const doorFaqs = [
  {
    question: "Warum Haustüren aus Polen kaufen?",
    answer:
      "Haustüren aus Polen bieten oft ein sehr gutes Preis-Leistungs-Verhältnis. Viele Hersteller arbeiten mit modernen Profilen, hochwertigen Beschlägen und flexiblen Ausstattungen, sodass Sie eine hochwertige Tür zu einem attraktiven Preis erhalten.",
  },
  {
    question: "Was ist besser: Kunststoff oder Aluminium Haustür?",
    answer:
      "Kunststoff Haustüren bieten eine sehr gute Wärmedämmung und sind meist günstiger. Aluminium Haustüren sind besonders stabil, langlebig und ermöglichen moderne Designs mit großen Glasflächen. Die beste Wahl hängt von Budget, Fassade und gewünschter Ausstattung ab.",
  },
  {
    question: "Bieten Sie Aufmaß und Montage in Deutschland an?",
    answer:
      "Ja. In Deutschland planen wir auf Wunsch Aufmaß, Lieferung und Montage mit. Dabei klären wir Maße, Anschlüsse, Öffnungsrichtung, Schwelle und Seitenteile vorab sauber.",
  },
  {
    question: "Kann ich eine Haustür mit Seitenteil oder niedriger Schwelle bestellen?",
    answer:
      "Ja. Je nach System sind Seitenteile, Oberlichter, niedrige Schwellen, verschiedene Griffe, Glasarten und Komfortoptionen wie Fingerprint oder Elektroöffner möglich.",
  },
  {
    question: "Wie bereite ich eine Anfrage für eine Tür vor?",
    answer:
      "Am besten senden Sie ungefähre Maße, ein Foto der alten Tür oder der Öffnung, die gewünschte Richtung, Materialwunsch und Hinweise zu Farbe, Glas oder Griff. Auch grobe Angaben reichen für den ersten Schritt.",
  },
  {
    question: "Wie lange dauert die Lieferung einer Haustür aus Polen?",
    answer:
      "Die Lieferzeit hängt vom Modell, Material und der Ausstattung ab. In der Regel dauert die Produktion wenige Wochen, danach erfolgt die Lieferung direkt zu Ihnen oder zur Baustelle.",
  },
];

const HouseDoorsInfo = () => {
  return (
    <div className="flex flex-wrap pa4">
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">
          Haustüren aus Polen: Kunststoff & Aluminium
        </h2>
        <p className="lh-copy">
          Unsere <span className="b">Haustüren aus Polen</span> – in{" "}
          <span className="b">Kunststoff</span> und{" "}
          <span className="b">Aluminium</span> – stehen für Qualität, Sicherheit
          und attraktive Preise. Wir bieten viele Türfüllungen und Designs,
          passend für Neubau und Sanierung.
        </p>
        <p className="lh-copy">
          Besonders gefragt sind <span className="b">Aluminium Haustüren</span>{" "}
          mit moderner Optik sowie <span className="b">Kunststoff Haustüren</span>{" "}
          mit sehr guter Wärmedämmung. So finden Sie schnell die passende{" "}
          <span className="b">Eingangstür aus Polen</span> für Ihr Zuhause.
        </p>
      </div>

      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">
          Ausstattung, Sicherheit & Individualisierung
        </h2>
        <p className="lh-copy">
          Auf Wunsch konfigurieren wir Ihre Tür mit Optionen wie{" "}
          <span className="b">
            Stoßgriff, Elektroöffner, Fingerprint, Türschließer
          </span>{" "}
          und weiteren Ausstattungen. Je nach System sind auch höhere
          Sicherheitsstandards möglich.
        </p>
        <p className="lh-copy">
          Kurz gesagt: <span className="b">Türen aus Polen</span>, die funktional
          sind, gut aussehen und zu Ihrem Budget passen –{" "}
          <span className="b">alles aus einer Hand</span>.
        </p>
      </div>
    </div>
  );
};

const DoorQuickBenefits = () => {
  return (
    <section className="mw8 center ph3 pv3">
      <div className="flex flex-wrap justify-center bg-white ba b--black-10">
        {doorBenefits.map((benefit) => (
          <div key={benefit.title} className="w-100 w-third-l pa3">
            <div className="doorBenefitMarker mb2" />
            <h2 className="f5 ma0">{benefit.title}</h2>
            <p className="f6 lh-copy mid-gray ma0 mt2">{benefit.text}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .doorBenefitMarker {
          background: #d57716;
          height: 4px;
          width: 52px;
        }
      `}</style>
    </section>
  );
};

const DoorInquiryBanner = () => {
  return (
    <section className="mw8 center ph3 pv3">
      <div className="doorInquiryBanner flex-l items-center justify-between pa3 pa4-l">
        <div className="pr3-l">
          <h2 className="f3-l f4 ma0">Türangebot vorbereiten lassen</h2>
          <p className="lh-copy ma0 mt2">
            Senden Sie uns Maße, ein Foto Ihrer alten Tür oder einen Plan. Wir
            prüfen Material, Design, Schwelle, Seitenteil und Montageoptionen.
          </p>
        </div>
        <Link href="/kontakt/anfrage" legacyBehavior>
          <a className="doorPrimaryLink dib mt3 mt0-l tc">Tür anfragen</a>
        </Link>
      </div>
      <style jsx>{`
        .doorInquiryBanner {
          background: #f6f2ec;
          border-left: 6px solid #d57716;
        }
        .doorPrimaryLink {
          background: #d57716;
          color: #fff;
          font-weight: 700;
          min-width: 180px;
          padding: 0.9rem 1.1rem;
          text-decoration: none;
        }
      `}</style>
    </section>
  );
};

const DoorCategoryChooser = () => {
  return (
    <section className="doorCategorySection pa3 pa4-ns">
      <div className="tc mb3">
        <h2 className="f3 ma0">Welche Tür möchten Sie planen?</h2>
        <p className="mid-gray lh-copy ma0 mt2">
          Wählen Sie zuerst die passende Türart – wir führen Sie direkt zur
          richtigen Auswahl.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {categories.map((c) => (
          <div key={c.title} className="w-100 w-50-m w-25-l pa2">
            <Link href={c.href} legacyBehavior>
              <a className="db ba b--near-white br3 bg-white overflow-hidden shadow-1 h-100 tuerenCard">
                <div className="bg-white pa2 tuerenImgWrap">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    width={900}
                    height={700}
                    layout="responsive"
                    objectFit="contain"
                    priority={c.href === "/products/kunststoff-alu-haustueren"}
                  />
                </div>

                <div className="pa3">
                  <h2 className="f4 ma0 mb2">{c.title}</h2>
                  <p className="ma0 mid-gray lh-copy">{c.subtitle}</p>
                  <div className="mt3">
                    <span className="tuerenCta">{c.cta || "Mehr erfahren →"}</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .doorCategorySection {
          margin-top: 0.25rem;
        }
        .tuerenCard {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .tuerenCard:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
        }
        .tuerenCta {
          font-weight: 700;
          color: #ff8a00;
        }
      `}</style>
    </section>
  );
};

const DoorFitGuide = () => {
  return (
    <section className="mw9 center ph3 pv4">
      <div className="tc mb3">
        <h2 className="f3 ma0">Welche Tür passt zu Ihrem Haus?</h2>
        <p className="mid-gray lh-copy ma0 mt2">
          Die häufigsten Entscheidungssituationen auf einen Blick.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {doorFitItems.map((item) => (
          <article key={item.title} className="w-100 w-50-m w-25-l pa2">
            <div className="h-100 bg-white ba b--black-10 pa3">
              <h3 className="f5 ma0">{item.title}</h3>
              <p className="f6 lh-copy mid-gray mb0">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const DoorComparison = () => {
  return (
    <section className="bg-light-gray ph3 pv4">
      <div className="mw8 center">
        <div className="tc mb3">
          <h2 className="f3 ma0">Kunststoff oder Aluminium?</h2>
          <p className="mid-gray lh-copy ma0 mt2">
            Beide Varianten sind sinnvoll. Entscheidend sind Budget, Optik und
            technische Anforderungen.
          </p>
        </div>
        <div className="doorCompareCards">
          {comparisonRows.map((row) => (
            <article className="doorCompareCard" key={row.label}>
              <h3>{row.label}</h3>
              <div className="doorCompareOption">
                <strong>Kunststoff Haustür</strong>
                <p>{row.pvc}</p>
              </div>
              <div className="doorCompareOption">
                <strong>Aluminium Haustür</strong>
                <p>{row.alu}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="doorCompareTableWrap">
          <table className="w-100 bg-white collapse doorCompareTable">
            <thead>
              <tr>
                <th className="tl pa3">Kriterium</th>
                <th className="tl pa3">Kunststoff Haustür</th>
                <th className="tl pa3">Aluminium Haustür</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <td className="pa3 b">{row.label}</td>
                  <td className="pa3 mid-gray">{row.pvc}</td>
                  <td className="pa3 mid-gray">{row.alu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>{`
        .doorCompareCards {
          display: grid;
          gap: 0.85rem;
        }
        .doorCompareCard {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-left: 5px solid #d57716;
          padding: 1rem;
        }
        .doorCompareCard h3 {
          font-size: 1rem;
          margin: 0 0 0.75rem;
        }
        .doorCompareOption + .doorCompareOption {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          margin-top: 0.75rem;
          padding-top: 0.75rem;
        }
        .doorCompareOption strong {
          color: #222;
          display: block;
          font-size: 0.95rem;
        }
        .doorCompareOption p {
          color: #666;
          line-height: 1.45;
          margin: 0.25rem 0 0;
        }
        .doorCompareTableWrap {
          display: none;
        }
        .doorCompareTable {
          border: 1px solid rgba(0, 0, 0, 0.12);
          table-layout: fixed;
        }
        .doorCompareTable th {
          background: #333;
          color: #fff;
        }
        .doorCompareTable td,
        .doorCompareTable th {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          vertical-align: top;
        }
        @media (min-width: 48rem) {
          .doorCompareCards {
            display: none;
          }
          .doorCompareTableWrap {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

const DoorProcess = () => {
  return (
    <section className="mw9 center ph3 pv4">
      <div className="tc mb3">
        <h2 className="f3 ma0">So entsteht Ihre neue Tür</h2>
        <p className="mid-gray lh-copy ma0 mt2">
          Vom ersten Foto bis zur fertigen Tür bleibt der Ablauf übersichtlich.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {processSteps.map((step, index) => (
          <article key={step.title} className="w-100 w-50-m w-25-l pa2">
            <div className="h-100 bg-white ba b--black-10 pa3">
              <div className="doorStepNumber mb3">{index + 1}</div>
              <h3 className="f5 ma0">{step.title}</h3>
              <p className="f6 lh-copy mid-gray mb0">{step.text}</p>
            </div>
          </article>
        ))}
      </div>
      <style jsx>{`
        .doorStepNumber {
          background: #d57716;
          color: #fff;
          font-weight: 700;
          height: 34px;
          line-height: 34px;
          text-align: center;
          width: 34px;
        }
      `}</style>
    </section>
  );
};

const DoorFaq = () => {
  return (
    <section className="pa4 mw7 center">
      <h2 className="f3 tc">Häufige Fragen zu Türen aus Polen</h2>
      {doorFaqs.map((faq) => (
        <details key={faq.question} className="mv3 ba b--black-10 pa3 bg-white">
          <summary className="pointer b">{faq.question}</summary>
          <p className="lh-copy mid-gray mb0">{faq.answer}</p>
        </details>
      ))}
    </section>
  );
};

function buildJsonLd() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Türen aus Polen – Kategorien",
    itemListElement: categories.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.title,
      url: `${SITE_URL}${c.href}`,
    })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: doorFaqs.map((faqItem) => ({
      "@type": "Question",
      name: faqItem.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqItem.answer,
      },
    })),
  };

  return { itemList, faq };
}

function Tueren() {
  const seoTitle =
    "Türen aus Polen in Deutschland: Haustüren aus Polen (Kunststoff & Aluminium) | Polnische-Fenster.com";
  const seoDescription =
    "Türen aus Polen in Deutschland: Haustüren aus Kunststoff & Aluminium, Nebeneingangstüren und Innentüren. Große Auswahl, moderne Designs, Optionen wie E-Öffner & Fingerprint, mit Lieferung und Montage auf Wunsch.";

  const canonical = `${SITE_URL}/tueren`;
  const { itemList, faq } = buildJsonLd();

  return (
    <Fragment>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonical} />

        {/* OG */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonical} />

        {/* (opcjonalnie) jeśli masz OG obrazek, dodaj plik do /public */}
        <meta property="og:image" content={`${SITE_URL}/images/tueren/og-tueren.jpg`} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      </Head>

      <HeaderDiv
        title="Türen aus Kunststoff und Aluminium"
        subtitle="Haustüren aus Polen – Nebeneingangstüren und Innentüren"
        heroSlides={doorHeroSlides}
        ifAnfrage="yes"
      />

      <DoorCategoryChooser />
      <DoorQuickBenefits />

      <div className="tc pa3 pa4-ns mw7 center">
        <h2 className="f3">
          Türen aus Polen – hochwertige Haustüren zum fairen Preis
        </h2>

        <p className="lh-copy mid-gray">
          Immer mehr Bauherren entscheiden sich für 
          <strong> Haustüren aus Polen</strong>, weil sie hochwertige Systeme,
          moderne Designs und attraktive Preise verbinden.  
          Bei uns finden Sie <strong>Kunststoff Haustüren</strong>, 
          <strong> Aluminium Haustüren</strong>, 
          <strong> Nebeneingangstüren</strong> und 
          <strong> Innentüren</strong> – alles individuell konfigurierbar 
          und direkt aus Polen geliefert.
        </p>
      </div>

      <DoorInquiryBanner />

      <DoorFitGuide />
      <DoorComparison />
      <HouseDoorsInfo />
      <DoorProcess />
      <DoorInquiryBanner />
      <DoorFaq />
      <CustomerReview />
    </Fragment>
  );
}

export default Tueren;
