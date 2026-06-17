import { useEffect, useState } from "react";

const raffstoreSystems = [
  {
    id: "basic",
    family: "Vorbau Jalousie",
    title: "BASIC",
    image: "/images/raffstoren/catalog/basic.webp",
    alt: "BASIC Raffstore mit Aluminiumblende und Führungsschienen",
    text: "BASIC ist ein universelles System für Fassadenjalousien. Es eignet sich für viele Einbausituationen und kann als sichtbare Lösung oder als Unterputzvariante geplant werden.",
    bullets: [
      "Flexible Einstellung von Oberschienen- und Führungshaltern.",
      "Führungen mit Haltern oder monolithische Führungen direkt am Fenster.",
      "Lamellen: C-80, Z-90, C-80F, Z-70 und C-65.",
    ],
    facts: ["Breite 550-6000 mm", "Kasten 200/240/300/350 x 140 mm", "Rechteckiger Aluminiumkasten"],
  },
  {
    id: "raff-i",
    family: "Vorbau Jalousie",
    title: "RAFF-I",
    image: "/images/raffstoren/catalog/raff-i.webp",
    alt: "RAFF-I Vorbau-Jalousie mit Aluminiumkasten",
    text: "RAFF-I ist ein modernes Vorbausystem mit Aluminiumkasten. Der Kasten kann am Sturz oder direkt an der Fassade montiert werden und ist für sichtbare sowie verdeckte Ausführungen geeignet.",
    bullets: [
      "Schnelle Montage über vorbereitete Führungen.",
      "Charakteristisch geprägter Aluminiumkasten.",
      "Optional mit Insektenschutz und Teilung mehrerer Panzer in einem Kasten.",
    ],
    facts: ["Breite 560-6000 mm", "Kasten 200/240/300/350 x 140 mm", "Lamellen: C-80, Z-90, C-80F, Z-70, C-65"],
  },
  {
    id: "raff-e",
    family: "Vorbau Jalousie",
    title: "RAFF-E",
    image: "/images/raffstoren/catalog/raff-e.webp",
    alt: "RAFF-E Fassadenjalousie mit Vorbaukasten",
    text: "RAFF-E wurde für eine einfache Vermessung und effiziente Montage entwickelt. Das System eignet sich für Fassaden, bei denen eine klare Vorbau-Lösung mit Aluminiumkasten gefragt ist.",
    bullets: [
      "Vorbaukasten in sichtbarer oder Unterputzversion.",
      "Aluminiumführungen mit PVC-Einsatz.",
      "Optional mit integriertem Insektenschutz.",
    ],
    facts: ["Breite 560-4000 mm", "Kasten 200/240/300 x 140 mm", "Lamellen: C-80, Z-70, C-80F, C-65"],
  },
  {
    id: "skef",
    family: "Vorbau Jalousie",
    title: "SKEF",
    image: "/images/raffstoren/catalog/skef.webp",
    alt: "SKEF Raffstore mit abgeschrägtem Aluminiumkasten",
    text: "SKEF besitzt einen charakteristischen, um 45 Grad abgeschrägten Kasten. Das System passt gut zu moderner Architektur und klaren geometrischen Fassaden.",
    bullets: [
      "Montage direkt an der Fassade oder in der Fensterrahmennische.",
      "Kasten aus extrudiertem Aluminium.",
      "Optionaler Insektenschutz an der Innenseite des Panzers.",
    ],
    facts: ["Breite 560-4500 mm", "Kasten 180/205 x 140 mm", "Lamellen: C-80, Z-70, C-80F, C-65"],
  },
  {
    id: "elite-xt",
    family: "Aufsatz Jalousie",
    title: "ELITE XT",
    image: "/images/raffstoren/catalog/elite-xt.webp",
    alt: "ELITE XT Aufsatz-Jalousie mit gedämmtem Kasten",
    text: "ELITE XT ist ein Aufsatzsystem mit guten thermischen und akustischen Eigenschaften. Es kann als Bestandteil einer stimmigen All-in-one-Lösung mit Fenstern geplant werden.",
    bullets: [
      "PVC-Kasten als sichtbare oder Unterputzvariante.",
      "Wärmedämmung im Kasten und Konsolen zur Erhöhung der Stabilität.",
      "PVC- oder Aluminiumführungen, optional mit Insektenschutz.",
    ],
    facts: ["Breite 630-4500 mm", "Kasten 240 x 255 mm", "Lamellen: C-80, Z-70, C-80F, C-65"],
  },
  {
    id: "cleverbox",
    family: "Aufsatz Jalousie",
    title: "CLEVERBOX",
    image: "/images/raffstoren/catalog/cleverbox.webp",
    alt: "CLEVERBOX Aufsatz-Jalousie mit Aluminiumführungen",
    text: "CLEVERBOX kombiniert hohe Wärme- und Schalldämmung mit einer kompakten Aufsatzlösung. Das System ermöglicht auch den Einsatz von Z-90-Lamellen für sehr starke Verdunkelung.",
    bullets: [
      "Unterputz-PVC-Kasten in sichtbarer oder verdeckter Ausführung.",
      "Zwei kompatible Aluminiumführungen.",
      "Optionaler integrierter Insektenschutz, außer beim Z-90 Panzer.",
    ],
    facts: ["Breite 560-4500 mm", "Kasten 245 x 255 mm", "Lamellen: C-80, Z-90, C-80F, Z-70, C-65"],
  },
  {
    id: "roka-top-2-shadow",
    family: "Unterputz Jalousie",
    title: "ROKA TOP 2 SHADOW",
    image: "/images/raffstoren/catalog/roka-top-2-shadow.webp",
    alt: "ROKA TOP 2 SHADOW Unterputz-Jalousie mit Kompositkasten",
    text: "ROKA TOP 2 SHADOW ist eine Unterputzlösung mit Neopor- beziehungsweise Styropor-Konstruktion. Sie lässt sich gut mit Putz, WDVS oder Klinker kombinieren.",
    bullets: [
      "Dichter Kompositkasten für Schutz vor Sonne, Wind und Feuchtigkeit.",
      "Schall- und Wärmedämmung entlang des Kastens.",
      "Für ein harmonisches Fassadenbild bei Neubau und Sanierung.",
    ],
    facts: ["Breite 580-6000 mm", "Kasten 300 x 280/300/345/365 mm", "Lamellen: C-80, Z-90, C-80F, Z-70, C-65"],
  },
  {
    id: "skb",
    family: "Unterputz Jalousie",
    title: "SKB",
    image: "/images/raffstoren/catalog/skb.webp",
    alt: "SKB Unterputz-Jalousie mit Styrotherm-Kasten",
    text: "SKB wurde für eine bessere Energiebilanz des Gebäudes entwickelt. Der Kasten aus Styrotherm besitzt sehr gute thermische Eigenschaften und wird vollständig verkleidet.",
    bullets: [
      "Unterputz-Styroporkasten zur vollständigen Integration in die Fassade.",
      "Wärme- und Schalldämmung im Kasten.",
      "Aluminiumführungen für stabile Lamellenführung.",
    ],
    facts: ["Breite 630-3600 mm", "Kasten 260 x 263,6 mm oder 305 x 310,6 mm", "Lamellen: C-80, Z-90, C-80F, Z-70, C-65"],
  },
];

const raffstoreInfoSections = [
  {
    id: "lamellenformen",
    eyebrow: "Lamellen",
    title: "Lamellenformen: C-80, C-80 Flat, Z-90, Z-70 und C-65",
    image: "/images/raffstoren/catalog/lamellenformen.webp",
    alt: "Übersicht der Lamellenformen für Raffstoren",
    text: "Die Form der Lamellen entscheidet über Optik, Verdunkelung, Paketgröße und Lichtlenkung. C-Lamellen sind klassisch und vielseitig, Z-Lamellen bieten eine besonders starke Abdunkelung.",
    bullets: [
      "C-80: beidseitig drehbar und gut für wechselnde Sonnenpositionen.",
      "C-80 Flat: kleine Paketgröße, wenn wenig Platz im Kasten vorhanden ist.",
      "Z-90 und Z-70: hohe Verdunkelung durch spezielle Form und Dichtung.",
      "C-65: bewährte klassische Form mit guter Stabilität.",
    ],
  },
  {
    id: "farben",
    eyebrow: "Farben",
    title: "Farbgestaltung passend zu Fenstern und Fassade",
    image: "/images/raffstoren/catalog/farben-c80.webp",
    alt: "Farbpalette für C-80 Lamellen",
    text: "Führungen, Endleisten und Jalousiekästen können in RAL-Farben lackiert werden. Lamellen werden aus vorlackierten Aluminiumstreifen gefertigt und erhalten zusätzliche Schutzlacke.",
    bullets: [
      "Häufige Farbtöne sind Weiß, Anthrazit, Schwarz, DB 703 und Silbernuancen.",
      "Je nach Lamellenform sind auch Holzoptiken wie Golden Oak oder Turner Oak Malt möglich.",
      "Die Farbauswahl wird immer passend zum gewählten System und Lamellentyp geprüft.",
    ],
  },
  {
    id: "fuehrungen",
    eyebrow: "Führungsschienen",
    title: "Stabile Führungsschienen aus Aluminium oder PVC",
    image: "/images/raffstoren/catalog/fuehrungsschienen.webp",
    alt: "Führungsschienen für Außenjalousien",
    text: "Führungsschienen stabilisieren die Lamellen und sorgen für ruhigen Lauf. In All-in-one-Lösungen kann die Optik der Führungen auf Fenster, Fassade und Kasten abgestimmt werden.",
    bullets: [
      "Aluminiumführungen in passenden RAL-Farben.",
      "Monoblock- und Systemführungen für verschiedene Einbausituationen.",
      "Je nach System sind PVC-Einsätze, seitliche Halter oder verdeckte Führungslösungen möglich.",
    ],
  },
  {
    id: "automatisierung",
    eyebrow: "Automatisierung",
    title: "Motor, Fernbedienung, Sensoren und Smart Home",
    image: "/images/raffstoren/catalog/automatisierung.webp",
    alt: "Steuergeräte und Fernsteuerungen für Raffstoren",
    text: "Erst mit passender Steuerung wird der Raffstore besonders komfortabel. Moderne Antriebe erlauben präzise Lamellenstellung, Szenarien und wetterabhängigen Betrieb.",
    bullets: [
      "Bedienung per Schalter, Fernbedienung, App oder Smart-Home-System.",
      "Szenarien für Sonne, Wind, Anwesenheit und Tageszeiten.",
      "Verfügbare Lösungen unter anderem von Forca, Somfy, Nice, Elero und Geiger.",
    ],
  },
];

function RaffstoreCatalogSections() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <section className="raffstoreCatalog" aria-label="Raffstoren Systeme und technische Informationen">
      <div className="catalogIntro">
        <p className="catalogEyebrow">Systemauswahl</p>
        <h2>Welche Raffstoren passen zu Ihrem Projekt?</h2>
        <p>
          Die Systeme unterscheiden sich vor allem durch Kastenart, Montage,
          Dämmung, verfügbare Lamellen und maximale Breiten. Wählen Sie direkt
          ein System aus oder springen Sie zu den technischen Grundlagen.
        </p>
      </div>

      <nav className="systemTiles" aria-label="Raffstoren Systeme">
        {raffstoreSystems.map((system) => (
          <a className="systemTile" href={`#${system.id}`} key={system.id}>
            <img src={system.image} alt="" loading="lazy" />
            <span>{system.family}</span>
            <strong>{system.title}</strong>
          </a>
        ))}
      </nav>

      <div className="systemSections">
        {raffstoreSystems.map((system) => (
          <article className="systemSection" id={system.id} key={system.id}>
            <div className="systemMedia">
              <img src={system.image} alt={system.alt} loading="lazy" />
            </div>
            <div className="systemContent">
              <p className="catalogEyebrow">{system.family}</p>
              <h3>{system.title}</h3>
              <p>{system.text}</p>
              <ul>
                {system.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="systemFacts">
                {system.facts.map((fact) => (
                  <span key={fact}>{fact}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="technicalGrid">
        {raffstoreInfoSections.map((section) => (
          <article className="technicalCard" id={section.id} key={section.id}>
            <div>
              <p className="catalogEyebrow">{section.eyebrow}</p>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className="technicalImageButton"
              onClick={() => setActiveImage(section)}
              aria-label={`${section.title} vergrößern`}
            >
              <img src={section.image} alt={section.alt} loading="lazy" />
            </button>
          </article>
        ))}
      </div>

      {activeImage && (
        <div
          className="imageModal"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <div className="imageModalInner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="imageModalClose"
              onClick={() => setActiveImage(null)}
              aria-label="Grafik schließen"
            >
              ×
            </button>
            <img src={activeImage.image} alt={activeImage.alt} />
            <p>{activeImage.title}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .raffstoreCatalog {
          margin: 22px auto;
          max-width: 1120px;
          padding: 0 16px;
        }

        .catalogIntro {
          margin: 0 auto 18px;
          max-width: 780px;
          text-align: center;
        }

        .catalogEyebrow {
          color: #b86411;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .catalogIntro h2 {
          color: #171717;
          font-size: 28px;
          line-height: 1.15;
          margin: 0;
        }

        .catalogIntro p:last-child {
          color: #555;
          line-height: 1.55;
          margin: 10px 0 0;
        }

        .systemTiles {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin: 0 0 20px;
        }

        .systemTile {
          background: #fff;
          border: 1px solid rgba(17, 17, 17, 0.12);
          color: #171717;
          display: grid;
          gap: 6px;
          min-height: 168px;
          padding: 10px;
          text-decoration: none;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
        }

        .systemTile:hover,
        .systemTile:focus {
          border-color: rgba(213, 119, 22, 0.76);
          box-shadow: 0 16px 34px rgba(17, 17, 17, 0.08);
          outline: none;
          transform: translateY(-2px);
        }

        .systemTile img {
          align-self: center;
          display: block;
          height: 92px;
          justify-self: center;
          object-fit: contain;
          width: 100%;
        }

        .systemTile span {
          color: #777;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .systemTile strong {
          font-size: 18px;
          line-height: 1.1;
        }

        .systemSections {
          display: grid;
          gap: 14px;
        }

        .systemSection {
          background: linear-gradient(135deg, rgba(17, 17, 17, 0.02), rgba(213, 119, 22, 0.06)), #fff;
          border: 1px solid rgba(17, 17, 17, 0.1);
          display: grid;
          gap: 16px;
          padding: 16px;
          scroll-margin-top: 20px;
        }

        .systemMedia {
          align-items: center;
          background: rgba(255, 255, 255, 0.72);
          display: flex;
          justify-content: center;
          min-height: 220px;
          overflow: hidden;
        }

        .systemMedia img {
          display: block;
          max-height: 300px;
          max-width: 100%;
          object-fit: contain;
        }

        .systemContent h3,
        .technicalCard h3 {
          color: #171717;
          font-size: 24px;
          line-height: 1.12;
          margin: 0;
        }

        .systemContent p,
        .technicalCard p {
          color: #555;
          line-height: 1.55;
          margin: 10px 0 0;
        }

        .systemContent ul,
        .technicalCard ul {
          color: #333;
          line-height: 1.5;
          margin: 12px 0 0;
          padding-left: 18px;
        }

        .systemContent li + li,
        .technicalCard li + li {
          margin-top: 5px;
        }

        .systemFacts {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }

        .systemFacts span {
          background: #171717;
          color: #fff;
          display: inline-flex;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.2;
          padding: 8px 10px;
        }

        .technicalGrid {
          display: grid;
          gap: 14px;
          margin-top: 18px;
        }

        .technicalCard {
          background: #f8f5ef;
          border: 1px solid rgba(213, 119, 22, 0.18);
          display: grid;
          gap: 16px;
          padding: 16px;
          scroll-margin-top: 20px;
        }

        .technicalImageButton {
          align-self: center;
          background: #fff;
          border: 0;
          cursor: zoom-in;
          display: block;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .technicalImageButton:focus {
          outline: 3px solid rgba(213, 119, 22, 0.28);
          outline-offset: 4px;
        }

        .technicalImageButton img {
          background: #fff;
          display: block;
          max-height: 260px;
          max-width: 100%;
          object-fit: contain;
          padding: 10px;
          width: 100%;
        }

        .imageModal {
          align-items: center;
          background: rgba(17, 17, 17, 0.74);
          bottom: 0;
          display: flex;
          justify-content: center;
          left: 0;
          padding: 18px;
          position: fixed;
          right: 0;
          top: 0;
          z-index: 1000;
        }

        .imageModalInner {
          background: #fff;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
          max-height: 92vh;
          max-width: min(1080px, 94vw);
          overflow: auto;
          padding: 18px;
          position: relative;
        }

        .imageModalInner img {
          display: block;
          height: auto;
          max-height: 78vh;
          max-width: 100%;
          object-fit: contain;
          width: auto;
        }

        .imageModalInner p {
          color: #171717;
          font-weight: 800;
          line-height: 1.25;
          margin: 12px 42px 0 0;
        }

        .imageModalClose {
          align-items: center;
          background: #171717;
          border: 0;
          color: #fff;
          cursor: pointer;
          display: flex;
          font-size: 28px;
          height: 42px;
          justify-content: center;
          line-height: 1;
          position: absolute;
          right: 12px;
          top: 12px;
          width: 42px;
          z-index: 2;
        }

        .imageModalClose:hover,
        .imageModalClose:focus {
          background: #d57716;
          outline: none;
        }

        @media (min-width: 620px) {
          .catalogIntro h2 {
            font-size: 34px;
          }

          .systemTiles {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .systemTile {
            min-height: 190px;
          }

          .systemTile img {
            height: 112px;
          }
        }

        @media (min-width: 880px) {
          .raffstoreCatalog {
            padding: 0;
          }

          .systemSection {
            align-items: center;
            gap: 28px;
            grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
            padding: 24px;
          }

          .systemSection:nth-child(even) {
            grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
          }

          .systemSection:nth-child(even) .systemMedia {
            grid-column: 2;
          }

          .systemSection:nth-child(even) .systemContent {
            grid-column: 1;
            grid-row: 1;
          }

          .systemMedia {
            min-height: 330px;
          }

          .systemMedia img {
            max-height: 360px;
          }

          .technicalGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .technicalCard {
            grid-template-columns: minmax(0, 1.1fr) minmax(190px, 0.9fr);
            min-height: 360px;
            padding: 22px;
          }

          .technicalImageButton img {
            align-self: center;
            max-height: 300px;
          }
        }
      `}</style>
    </section>
  );
}

export default RaffstoreCatalogSections;
