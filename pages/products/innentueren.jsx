import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import HeaderDiv from "../../components/ui/headerdiv";

const SITE_URL = "https://www.polnische-fenster.com";

const heroSlides = [
  {
    src: "/images/innentueren/hero/innentueren-1.jpg",
    alt: "Wohnliche Innentür in Holzoptik mit Glasfeld im Familienhaus",
    tag: "Wohnliche Innentüren",
    caption: "Holzoptik, Glas und passende Beschläge für helle Wohnräume.",
  },
  {
    src: "/images/innentueren/hero/innentueren-2.jpg",
    alt: "Weiße Innentür zum Schlafzimmer mit moderner Linienoptik",
    tag: "Für jeden Raum",
    caption: "Türen für Schlafzimmer, Kinderzimmer, Büro und Wohnbereich.",
  },
  {
    src: "/images/innentueren/hero/innentueren-3.jpg",
    alt: "Weiße Innentür mit Glasfeldern in moderner Wohnung",
    tag: "Mehr Licht",
    caption: "Glastüren und Lichtausschnitte für offene, freundliche Räume.",
  },
  {
    src: "/images/innentueren/hero/innentueren-4.jpg",
    alt: "Grüne Innentür mit satiniertem Glas und goldenen Beschlägen",
    tag: "Farbe und Stil",
    caption: "Dekore, Farben und Oberflächen passend zur Einrichtung.",
  },
];

const doorTypes = [
  {
    title: "Rahmentüren STILE",
    text: "Türflügel in Rahmenkonstruktion, mit oder ohne Falz, mit vielen Dekoren und Glasvarianten.",
    image: "/images/innentueren/stile-rahmentueren.jpg",
    alt: "Rahmentür STILE als Innentür in modernem Wohnraum",
  },
  {
    title: "Farbige Innentüren",
    text: "Greko, Premium, ST CPL und ST CPL AntiFinger für moderne Wohnräume und pflegeleichte Oberflächen.",
    image: "/images/innentueren/moderne-farben.jpg",
    alt: "Farbige Innentür mit grüner Oberfläche",
  },
  {
    title: "Lackierte Türen",
    text: "Schlichte, helle und elegante Türen, unter anderem mit Weiß Titan UV und moderner Lackoberfläche.",
    image: "/images/innentueren/lackierte-tueren.jpg",
    alt: "Lackierte weiße Innentür in modernem Raum",
  },
  {
    title: "UNO Premium & Plattentüren",
    text: "Glatte Türbilder, Holzoptik und ruhige Designs für minimalistische oder klassische Innenräume.",
    image: "/images/innentueren/uno-premium.jpg",
    alt: "UNO Premium Innentür mit Holzdekor",
  },
  {
    title: "Glastüren GRAF",
    text: "Türflügel aus Glas für Innenräume, transparent, satiniert, dekorativ oder mit schwarzer Optik.",
    image: "/images/innentueren/glastuer-graf.jpg",
    alt: "Glastür GRAF mit schwarzem Rahmen",
  },
  {
    title: "Schiebetüren",
    text: "Vor der Wand oder in der Wand laufende Systeme, auch als Loft- oder Glastürlösung.",
    image: "/images/innentueren/schiebetuer-glas.jpg",
    alt: "Schiebetürsystem aus Glas für Innenräume",
  },
];

const surfaceItems = [
  {
    title: "GREKO",
    text: "Dekorfolien mit versiegelter Oberfläche für wohnliche und preislich attraktive Lösungen.",
  },
  {
    title: "PREMIUM",
    text: "Holzdekore und moderne Oberflächen für Türen mit natürlicher, hochwertiger Wirkung.",
  },
  {
    title: "ST CPL",
    text: "Robuste CPL-Oberflächen für stark genutzte Räume, Familienhäuser und Mietobjekte.",
  },
  {
    title: "AntiFinger",
    text: "Spezielle Beschichtung zur Reduzierung von Fingerabdrücken und sichtbaren Gebrauchsspuren.",
  },
];

const systemItems = [
  "Türflügel mit Falz, ohne Falz oder revers öffnend",
  "Einflügelige und zweiflügelige Türen",
  "Schiebetüren vor der Wand oder in der Wand laufend",
  "Blockzarge, Umfassungszarge, Tunnelzarge und verdeckte Systeme",
  "Breiten häufig in 60, 70, 80, 90 und 100 cm",
  "Glas, Lüftung, Bad-Riegel, Absenkdichtung und verschiedene Bänder",
];

const faqItems = [
  {
    question: "Welche Innentüren passen zu modernen Wohnungen?",
    answer:
      "Für moderne Wohnungen eignen sich schlichte lackierte Türen, UNO Premium, Türen mit ST CPL Oberfläche, Glastüren GRAF oder Loft-Schiebetüren. Die Wahl hängt von Wandfarbe, Boden, Licht und gewünschter Privatsphäre ab.",
  },
  {
    question: "Gibt es Innentüren mit und ohne Falz?",
    answer:
      "Ja. Je nach Serie sind gefälzte, ungefälzte und teilweise revers öffnende Türflügel möglich. Dadurch kann die Tür optisch klassisch oder sehr flächenbündig wirken.",
  },
  {
    question: "Welche Informationen brauchen Sie für ein Angebot?",
    answer:
      "Für den Anfang reichen Maße der Öffnung, gewünschte Türart, Anzahl der Türen, Wandstärke, Öffnungsrichtung, Farbe, Glaswunsch und ein Foto der aktuellen Situation.",
  },
];

const buildJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

function InnentuerenPage() {
  const seoTitle = "Innentüren aus Polen – Modelle, Farben & Schiebetüren";
  const seoDescription =
    "Innentüren aus Polen: Rahmentüren, lackierte Türen, Glastüren, Schiebetüren, Zargen, Oberflächen und Beschläge für Wohnräume.";
  const canonical = `${SITE_URL}/products/innentueren`;

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
        <meta
          property="og:image"
          content={`${SITE_URL}/images/innentueren/hero/innentueren-1.jpg`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </Head>

      <HeaderDiv
        title="Innentüren aus Polen"
        subtitle="Wohnraumtüren, Glastüren und Schiebetüren nach Maß"
        heroSlides={heroSlides}
        ifAnfrage="yes"
      />

      <main>
        <section className="inCtaWrap">
          <div className="inCta">
            <div>
              <p className="inEyebrow">Auswahl, Maße und Ausstattung</p>
              <h2>Innentüren passend zu Wohnung, Haus und Büro planen</h2>
              <p>
                Wir helfen bei Türart, Oberfläche, Zarge, Glas, Griff und
                Öffnungsrichtung. Für ein Angebot reichen zunächst grobe Maße
                und ein paar Fotos.
              </p>
            </div>
            <Link href="/kontakt/anfrageinnentueren" legacyBehavior>
              <a className="inPrimaryLink">Innentüren anfragen</a>
            </Link>
          </div>
        </section>

        <section className="inSection">
          <div className="inSectionHead">
            <p className="inEyebrow">Modelle aus dem Katalog</p>
            <h2>Welche Innentür möchten Sie planen?</h2>
          </div>

          <div className="inDoorGrid">
            {doorTypes.map((item, index) => (
              <article className="inDoorCard" key={item.title}>
                <div className="inDoorImage">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                  />
                </div>
                <div className="inDoorBody">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="inBand">
          <div className="inBandInner">
            <div>
              <p className="inEyebrow">Oberflächen</p>
              <h2>Farben und Dekore für den Innenraum</h2>
              <p>
                Der Katalog bietet viele Holzdekore, moderne Grau- und
                Anthrazittöne, Weißvarianten sowie CPL-Oberflächen für
                stärker genutzte Räume.
              </p>
            </div>
            <div className="inSurfaceGrid">
              {surfaceItems.map((item) => (
                <article className="inSurfaceCard" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="inSection inTwoCol">
          <div>
            <p className="inEyebrow">Systeme</p>
            <h2>Von klassisch bis flächenbündig</h2>
            <p>
              Innentüren können je nach Serie sehr unterschiedlich wirken:
              klassisch mit Falz, ruhig ohne Falz, platzsparend als
              Schiebetür oder besonders reduziert mit verdecktem System.
            </p>
            <ul className="inList">
              {systemItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="inPhotoStack">
            <Image
              src="/images/innentueren/schiebetuer-loft.jpg"
              alt="Vor der Wand laufendes Schiebetürsystem Loft"
              width={784}
              height={436}
              layout="responsive"
              objectFit="cover"
            />
            <Image
              src="/images/innentueren/wohnungseingang.jpg"
              alt="Wohnungseingangstür aus dem Innentüren-Katalog"
              width={830}
              height={477}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </section>

        <section className="inProcess">
          <div className="inSectionHead">
            <p className="inEyebrow">Anfrage</p>
            <h2>So bereiten wir Ihr Angebot vor</h2>
          </div>
          <div className="inStepGrid">
            <article>
              <span>1</span>
              <h3>Türart wählen</h3>
              <p>Rahmentür, lackierte Tür, Glastür, Schiebetür oder Wohnungseingangstür.</p>
            </article>
            <article>
              <span>2</span>
              <h3>Maße & Fotos senden</h3>
              <p>Öffnungsmaße, Wandstärke, Anzahl, Öffnungsrichtung und Fotos genügen für den Start.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Ausstattung klären</h3>
              <p>Oberfläche, Zarge, Glas, Griff, Lüftung, Schloss und Montage werden abgestimmt.</p>
            </article>
          </div>
        </section>

        <section className="inFaq">
          <div className="inSectionHead">
            <p className="inEyebrow">FAQ</p>
            <h2>Häufige Fragen zu Innentüren</h2>
          </div>
          <div className="inFaqList">
            {faqItems.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="inFinalCta">
          <h2>Innentüren für Ihr Projekt anfragen</h2>
          <p>
            Schicken Sie uns Maße, Fotos und Ihre Wunschoptik. Wir bereiten
            daraus eine passende Auswahl vor.
          </p>
          <Link href="/kontakt/anfrageinnentueren" legacyBehavior>
            <a className="inPrimaryLink">Anfrage senden</a>
          </Link>
          <Link href="/tueren" legacyBehavior>
            <a className="inSecondaryLink">Zurück zu Türen</a>
          </Link>
        </section>
      </main>

      <style jsx>{`
        main {
          color: #1d1d1d;
        }

        .inCtaWrap,
        .inSection,
        .inProcess,
        .inFaq,
        .inFinalCta {
          max-width: 1120px;
          margin: 0 auto;
          padding: 20px 16px;
        }

        .inCta {
          align-items: center;
          background: #f6f2ec;
          border-left: 6px solid #d57716;
          display: grid;
          gap: 16px;
          padding: 18px;
        }

        .inCta h2,
        .inSectionHead h2,
        .inBand h2,
        .inTwoCol h2,
        .inProcess h2,
        .inFaq h2,
        .inFinalCta h2 {
          font-size: 26px;
          line-height: 1.15;
          margin: 0;
        }

        .inCta p,
        .inBand p,
        .inTwoCol p,
        .inFinalCta p,
        .inDoorBody p,
        .inSurfaceCard p,
        .inStepGrid p,
        .inFaqList p {
          color: #555;
          line-height: 1.5;
          margin: 8px 0 0;
        }

        .inEyebrow {
          color: #d57716;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .inPrimaryLink,
        .inSecondaryLink {
          display: inline-block;
          font-weight: 700;
          padding: 0.85rem 1rem;
          text-align: center;
          text-decoration: none;
        }

        .inPrimaryLink {
          background: #d57716;
          color: #fff;
        }

        .inSecondaryLink {
          color: #d57716;
        }

        .inSectionHead {
          margin-bottom: 16px;
          text-align: center;
        }

        .inDoorGrid {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
        }

        .inDoorCard,
        .inSurfaceCard,
        .inStepGrid article,
        .inFaqList article {
          background: #fff;
          border: 1px solid #e5e5e5;
        }

        .inDoorCard {
          overflow: hidden;
        }

        .inDoorImage {
          aspect-ratio: 4 / 3;
          background: #f7f7f7;
          position: relative;
        }

        .inDoorBody {
          padding: 14px;
        }

        .inDoorBody h3,
        .inSurfaceCard h3,
        .inStepGrid h3,
        .inFaqList h3 {
          font-size: 19px;
          line-height: 1.2;
          margin: 0;
        }

        .inBand {
          background: #f7f7f7;
          margin-top: 18px;
          padding: 28px 16px;
        }

        .inBandInner {
          display: grid;
          gap: 18px;
          margin: 0 auto;
          max-width: 1120px;
        }

        .inSurfaceGrid {
          display: grid;
          gap: 12px;
          grid-template-columns: 1fr;
        }

        .inSurfaceCard {
          padding: 14px;
        }

        .inTwoCol {
          display: grid;
          gap: 18px;
        }

        .inList {
          margin: 14px 0 0;
          padding-left: 18px;
        }

        .inList li {
          line-height: 1.45;
          margin: 8px 0;
        }

        .inPhotoStack {
          display: grid;
          gap: 12px;
        }

        .inStepGrid,
        .inFaqList {
          display: grid;
          gap: 12px;
        }

        .inStepGrid article,
        .inFaqList article {
          padding: 16px;
        }

        .inStepGrid span {
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

        .inFinalCta {
          text-align: center;
        }

        .inFinalCta .inPrimaryLink,
        .inFinalCta .inSecondaryLink {
          margin-top: 12px;
        }

        @media (min-width: 640px) {
          .inDoorGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .inSurfaceGrid,
          .inStepGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 900px) {
          .inCtaWrap,
          .inSection,
          .inProcess,
          .inFaq,
          .inFinalCta {
            padding: 28px 20px;
          }

          .inCta {
            grid-template-columns: 1fr auto;
            padding: 24px;
          }

          .inCta h2,
          .inSectionHead h2,
          .inBand h2,
          .inTwoCol h2,
          .inProcess h2,
          .inFaq h2,
          .inFinalCta h2 {
            font-size: 34px;
          }

          .inDoorGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .inBandInner,
          .inTwoCol {
            grid-template-columns: 0.9fr 1.1fr;
          }

          .inFaqList {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 380px) {
          .inCta h2,
          .inSectionHead h2,
          .inBand h2,
          .inTwoCol h2,
          .inProcess h2,
          .inFaq h2,
          .inFinalCta h2 {
            font-size: 23px;
          }

          .inDoorBody h3,
          .inSurfaceCard h3,
          .inStepGrid h3,
          .inFaqList h3 {
            font-size: 18px;
          }
        }
      `}</style>
    </Fragment>
  );
}

export default InnentuerenPage;
