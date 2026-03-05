import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Head from "next/head";
import CustomerReview from "../components/ui/referenz";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.polnische-fenster.com";

const categories = [
  {
    title: "Kunststoff Haustüren",
    subtitle: "Dämmstark, pflegeleicht, preislich attraktiv.",
    href: "/tueren/kunststoff-haustueren",
    img: "/images/tueren/Kunststoff_Haustuer.png",
    alt: "Kunststoff Haustür aus Polen – Beispielmodell",
  },
  {
    title: "Aluminium Haustüren",
    subtitle: "Premium-Optik, hohe Stabilität, moderne Designs.",
    href: "/tueren/aluminium-haustueren",
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
    href: "/tueren/innentueren",
    img: "/images/tueren/Innentuer.jpg",
    alt: "Innentür aus Polen – Beispielmodell",
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
    mainEntity: [
      {
        "@type": "Question",
        name: "Warum Türen aus Polen?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Türen aus Polen sind häufig preislich attraktiv und bieten gleichzeitig moderne Systeme, viele Designs und Optionen. Entscheidend sind Konfiguration, Montage und die passende Auswahl für Ihr Projekt.",
        },
      },
      {
        "@type": "Question",
        name: "Was ist besser: Kunststoff oder Aluminium Haustür?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Kunststoff-Haustüren sind oft sehr dämmstark und preislich attraktiv. Aluminium-Haustüren sind besonders stabil, langlebig und modern in der Optik. Die beste Wahl hängt von Budget, Design und Anforderungen ab.",
        },
      },
      {
        "@type": "Question",
        name: "Wofür eignet sich eine Nebeneingangstür?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Nebeneingangstüren eignen sich ideal für Keller, Garage, Hauswirtschaftsraum oder Nebenräume – robust, wetterfest und funktional.",
        },
      },
    ],
  };

  return { itemList, faq };
}

function Tueren() {
  const seoTitle =
    "Türen aus Polen: Haustüren aus Polen (Kunststoff & Aluminium) | Polnische-Fenster.com";
  const seoDescription =
    "Türen aus Polen: Haustüren aus Kunststoff & Aluminium, Nebeneingangstüren und Innentüren. Große Auswahl, moderne Designs, Optionen wie E-Öffner & Fingerprint. Jetzt anfragen.";

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
      />

      {/* NOWA responsywna siatka (zamiast TuerenDiv) */}
      <section className="pa3 pa4-ns">
        <div className="flex flex-wrap justify-center">
          {categories.map((c) => (
            <div key={c.title} className="w-100 w-50-m w-25-l pa2">
              <Link href={c.href} legacyBehavior>
                <a className="db ba b--near-white br3 bg-white overflow-hidden shadow-1 h-100 tuerenCard">
                  <div className="bg-white pa2 tuerenImgWrap">
                    {/* Next.js 12: layout="responsive" => responsywnie, bez błędów */}
                    <Image
                      src={c.img}
                      alt={c.alt}
                      width={900}
                      height={700}
                      layout="responsive"
                      objectFit="contain"
                      priority={c.href === "/tueren/kunststoff-haustueren"}
                    />
                  </div>

                  <div className="pa3">
                    <h2 className="f4 ma0 mb2">{c.title}</h2>
                    <p className="ma0 mid-gray lh-copy">{c.subtitle}</p>
                    <div className="mt3">
                      <span className="tuerenCta">Mehr erfahren →</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>

        <style jsx>{`
          .tuerenCard {
            transition: transform 0.15s ease, box-shadow 0.15s ease;
          }
          .tuerenCard:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
          }
          .tuerenImgWrap {
            /* dzięki temu obraz nie „skacze” */
          }
          .tuerenCta {
            font-weight: 700;
            color: #ff8a00;
          }
        `}</style>
      </section>

      <HouseDoorsInfo />
      <CustomerReview />
    </Fragment>
  );
}

export default Tueren;