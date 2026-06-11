import { Fragment, useState, useEffect, useMemo } from "react";
import Head from 'next/head';
import Image from 'next/image'
import HeaderDiv from "../../components/ui/headerdiv";
import NebeneingangLandingSection from "../../components/NebeneingangLandingSection";
import { getMinGrossPrice, formatEUR } from "../../components/data/nebeneingangPrices";
import ModelsGrid from "../../components/ModelsGrid";

const nebeneingangHeroSlides = [
  {
    src: "/images/nebeneingang/hero/nebeneingang-1.jpg",
    alt: "Nebeneingangstür aus Polen an einer modernen Hausfassade",
    tag: "Nebeneingangstüren nach Maß",
    caption: "Kunststoff oder Aluminium für Keller, Garage und Seiteneingang.",
  },
  {
    src: "/images/nebeneingang/hero/nebeneingang-2.jpg",
    alt: "Moderne Nebeneingangstür mit Glasfeld und seitlichem Hauszugang",
    tag: "Viele Varianten",
    caption: "Farben, Verglasung und Füllungen passend zum Projekt.",
  },
  {
    src: "/images/nebeneingang/hero/nebeneingang-3.jpg",
    alt: "Robuste Nebeneingangstür in dunkler Ausführung",
    tag: "Sicher und robust",
    caption: "Mehrpunkt-Verriegelung und stabile Profile für Ihr Eigentum.",
  },
  {
    src: "/images/nebeneingang/hero/nebeneingang-4.jpg",
    alt: "Nebeneingangstür mit moderner Optik und Glasfüllung",
    tag: "Flache Aluminium-Bodenschwelle",
    caption: "Komfortable Lösung bereits im Standard.",
  },
  {
    src: "/images/nebeneingang/hero/nebeneingang-5.jpg",
    alt: "Nebeneingangstür für Sanierung und moderne Gebäude",
    tag: "Aufmaß und Montage",
    caption: "Beratung für Neubau, Sanierung und Nebenräume.",
  },
  {
    src: "/images/nebeneingang/hero/nebeneingang-6.jpg",
    alt: "Nebeneingangstür aus Polen mit moderner Fassade",
    tag: "Faire Preise aus Polen",
    caption: "Nebeneingangstüren mit schneller Angebotsanfrage.",
  },
];

const NEBENEINGANG_FORM_HREF = "/kontakt/anfragent?modell=07";

const NebeneingangFormCta = () => {
  return (
    <section className="nebCtaWrap" aria-label="Nebeneingangstür Anfrage">
      <div className="nebCtaInner">
        <div>
          <p className="nebCtaEyebrow">Kostenlose Anfrage</p>
          <h2 className="nebCtaTitle">Nebeneingangstür planen lassen</h2>
          <p className="nebCtaText">
            Senden Sie Maße, Fotos oder eine kurze Beschreibung. Wir beraten Sie
            zur passenden Ausführung, auch wenn Sie noch kein konkretes Modell
            ausgewählt haben.
          </p>
        </div>
        <div className="nebCtaActions">
          <a className="nebCtaPrimary" href={NEBENEINGANG_FORM_HREF}>
            Formular öffnen
          </a>
          <a className="nebCtaSecondary" href="#nebeneingang-modelle">
            Modelle ansehen
          </a>
        </div>
      </div>

      <style jsx>{`
        .nebCtaWrap {
          background: #f6f2ec;
          margin: 0 auto;
          padding: 1rem;
        }
        .nebCtaInner {
          background: #fff;
          border-left: 6px solid #d57716;
          display: grid;
          gap: 1rem;
          margin: 0 auto;
          max-width: 1100px;
          padding: 1rem;
        }
        .nebCtaEyebrow {
          color: #b86411;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          margin: 0 0 0.35rem;
          text-transform: uppercase;
        }
        .nebCtaTitle {
          font-size: 1.55rem;
          line-height: 1.15;
          margin: 0;
        }
        .nebCtaText {
          color: #444;
          line-height: 1.5;
          margin: 0.65rem 0 0;
        }
        .nebCtaActions {
          display: grid;
          gap: 0.65rem;
        }
        .nebCtaPrimary,
        .nebCtaSecondary {
          display: block;
          font-weight: 700;
          padding: 0.9rem 1rem;
          text-align: center;
          text-decoration: none;
        }
        .nebCtaPrimary {
          background: #d57716;
          color: #fff;
        }
        .nebCtaSecondary {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.16);
          color: #333;
        }

        @media (min-width: 48rem) {
          .nebCtaWrap {
            padding: 1.25rem 1.5rem;
          }
          .nebCtaInner {
            align-items: center;
            grid-template-columns: minmax(0, 1fr) auto;
            padding: 1.35rem 1.5rem;
          }
          .nebCtaTitle {
            font-size: 1.9rem;
          }
          .nebCtaActions {
            min-width: 220px;
          }
        }
      `}</style>
    </section>
  );
};



function K70Nt() {
    
  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: 1536 > window.innerWidth ? window.innerWidth : 1536,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  
  
  return (


    <Fragment>
      <Head>
        <title>Nebeneingangstür aus Polen – Kunststoff oder Aluminium | Preise & Modelle</title>
        <meta name='description'
              content='Nebeneingangstür aus Polen – Verschiedene Modelle, Farben & Extras.'
        />
         
        <link rel="canonical" href="https://www.polnische-fenster.com/products/k70nt" />
         {/* Open Graph (lepszy CTR przy share) */}
        <meta property="og:title" content="Nebeneingangstür aus Polen – Kunststoff" />
        <meta property="og:description" content="Modelle, Preise, Farben & schnelle Angebotsanfrage." />
        <meta property="og:url" content="https://www.polnische-fenster.com/products/k70nt" />
        <meta property="og:type" content="product" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <HeaderDiv
        title="Nebeneingangstür aus Polen"
        subtitle="Unschlagbare Preise und Modellvielfalt"
        heroSlides={nebeneingangHeroSlides}
        ifAnfrage="yes"
      />

      <NebeneingangFormCta />

      <div id="nebeneingang-modelle">
        <ModelsGrid initialCount={12} maxModel={40}/>
      </div>

      <NebeneingangLandingSection
        hingeImg="/drhahn.png"          
        lockImg="/gusecury.png"         
        drawingImg="/drawing.png"       
        minPriceText="ab 835 €"
      />
      
        
    </Fragment>
  );
}

export default K70Nt;
