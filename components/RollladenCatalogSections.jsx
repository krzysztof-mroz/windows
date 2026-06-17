import { useEffect, useState } from "react";

const rollladenSystems = [
  {
    id: "sk45",
    family: "Vorbaurollladen",
    title: "SK45",
    image: "/images/rolllaeden/catalog/sk45.webp",
    alt: "Vorbaurollladen SK45 mit abgeschrägtem Kasten",
    text: "SK45 ist ein Vorbaurollladen für neue und bestehende Gebäude. Der um 45 Grad abgeschrägte Kasten wirkt modern und eignet sich für die Montage an der Fassade oder in der Fensternische.",
    bullets: ["Universelle Konstruktion für viele Fenstertypen.", "Kasten, Führungsschienen und Panzer in RAL- oder Aluprof-Farben.", "Optional mit integriertem Insektenschutz."],
    facts: ["Breite bis 4500 mm", "Manuell oder elektrisch", "Panzer PVC 37/52, PA 39/43/52"],
  },
  {
    id: "sk90",
    family: "Vorbaurollladen",
    title: "SK90",
    image: "/images/rolllaeden/catalog/sk90.webp",
    alt: "Vorbaurollladen SK90 mit eckigem Kasten",
    text: "SK90 verbindet die Vorteile eines klassischen Vorbaurollladens mit der Möglichkeit, den Kasten über eine Putzträgerschiene auch verdeckt zu integrieren.",
    bullets: ["Für nahezu jeden Gebäudetyp geeignet.", "Kasten kann als sichtbare oder putzintegrierte Lösung geplant werden.", "Optional mit integriertem Moskitonetz."],
    facts: ["Breite bis 4500 mm", "RAL- und Aluprof-Farben", "Panzer PVC 37/52, PA 39/43/52"],
  },
  {
    id: "skp",
    family: "Vorbaurollladen",
    title: "SKP",
    image: "/images/rolllaeden/catalog/skp.webp",
    alt: "Vorbaurollladen SKP mit halbrundem Kasten",
    text: "SKP hat einen halbrunden Kasten und passt gut zu klassischen Fassaden, älteren Gebäuden und Fensterrahmen mit weicherer Formensprache.",
    bullets: ["Montage an der Fassade oder in der Laibung.", "Abgerundete Revision als gestalterisches Detail.", "Keine Wärmeverluste durch außenliegende Montage."],
    facts: ["Breite bis 4500 mm", "Kasten 137-205 mm", "Optionaler Insektenschutz"],
  },
  {
    id: "sko-p",
    family: "Vorbaurollladen",
    title: "SKO-P",
    image: "/images/rolllaeden/catalog/sko-p.webp",
    alt: "Vorbaurollladen SKO-P mit rundem Aluminiumkasten",
    text: "SKO-P nutzt einen abgerundeten Aluminiumkasten und ist eine robuste Lösung, wenn der Rollladen sichtbar als Fassadenelement wirken darf.",
    bullets: ["Einzigartige, runde Kastenform.", "Kasten, Führungen und Panzer farblich anpassbar.", "Für manuelle und elektrische Bedienung geeignet."],
    facts: ["Breite bis 4500 mm", "Kasten 137-205 mm", "Panzer PVC oder Aluminium"],
  },
  {
    id: "sp-e",
    family: "Unterputzrollladen",
    title: "SP-E",
    image: "/images/rolllaeden/catalog/sp-e.webp",
    alt: "Unterputzrollladen SP-E in der Fassade",
    text: "SP-E ist für Neubauten und Sanierungen gedacht, bei denen der Kasten im Sturz- oder Dämmungsbereich verschwinden soll. Sichtbar bleiben vor allem Panzer und Führungsschienen.",
    bullets: ["Gute Lösung, wenn der Rollladen früh in der Bauplanung berücksichtigt wird.", "Putzträgerschiene standardmäßig 15-105 mm.", "Kasten und Führungen können farblich angepasst werden."],
    facts: ["Breite bis 4500 mm", "Für Passivhäuser geeignet", "Optional mit Insektenschutz"],
  },
  {
    id: "quadbox",
    family: "Unterputzrollladen",
    title: "QuadBox",
    image: "/images/rolllaeden/catalog/quadbox.webp",
    alt: "Unterputzrollladen QuadBox mit verdecktem Kasten",
    text: "QuadBox kann fast vollständig unter der Putzschicht verborgen werden. Je nach Ausführung ist die Revisionsklappe aus Aluminium oder PVC und passt sich gut an Fensterdekore an.",
    bullets: ["Für Neubauten und energetische Sanierung.", "PVC- oder Aluminium-Revisionsklappe wählbar.", "Auch mit BeClever-, RAL- und Profildekorfarben planbar."],
    facts: ["Breite bis 4500 mm", "Kasten 137-205 mm", "Optional mit Insektenschutz"],
  },
  {
    id: "expert-xt",
    family: "Aufsatzrollladen",
    title: "Expert XT",
    image: "/images/rolllaeden/catalog/expert-xt.webp",
    alt: "Aufsatzrollladen Expert XT",
    text: "Expert XT ist ein vielseitiges Aufsatzsystem mit einfacher Montage und Wartung. Adapter für verschiedene Fenstertypen erleichtern die Planung.",
    bullets: ["Für PVC-, Aluminium- und Holzfenster.", "Revision von innen möglich.", "Kasten kann mit integriertem Insektenschutz ausgestattet werden."],
    facts: ["Breite bis 5500 mm", "Kasten 165/185/220 mm", "Panzer PVC 37/52, PA 39/43/52"],
  },
  {
    id: "elite-xt",
    family: "Aufsatzrollladen",
    title: "Elite XT",
    image: "/images/rolllaeden/catalog/elite-xt.webp",
    alt: "Aufsatzrollladen Elite XT",
    text: "Elite XT ist ein universelles System mit einfacher Montage, flexiblen Revisionsvarianten und Eignung für Fenster mit größerer Einbautiefe.",
    bullets: ["Revision von innen oder außen je nach Ausführung.", "Für PVC-, Aluminium- und Holzfenster.", "Optionaler integrierter Insektenschutz."],
    facts: ["Breite bis 5500 mm", "Kasten 175/200/240 mm", "RAL-, AP-, SAL-, GEA-, REH-Farben"],
  },
  {
    id: "exakt-xt",
    family: "Aufsatzrollladen",
    title: "Exakt XT",
    image: "/images/rolllaeden/catalog/exakt-xt.webp",
    alt: "Aufsatzrollladen Exakt XT",
    text: "Exakt XT ist eine optimierte und verstärkte Version eines bewährten Systems. Der klare Aufbau vereinfacht Wartung und Service.",
    bullets: ["Für PVC-, Aluminium- und Holzfenster geeignet.", "Revision von vorne innen.", "Kasten kann von außen verputzt werden."],
    facts: ["Breite bis 5900 mm", "Kasten 155/180/220 mm", "Panzer PVC 37/52, PA 39/43/52"],
  },
  {
    id: "thermo-box",
    family: "Aufsatzrollladen",
    title: "Thermo Box",
    image: "/images/rolllaeden/catalog/thermo-box.webp",
    alt: "Aufsatzrollladen Thermo Box",
    text: "Thermo Box ist auf Schall- und Wärmedämmung ausgelegt. Der Universaladapter erleichtert die Montage auf gängigen Fenstersystemen.",
    bullets: ["Von außen und innen überputzbar.", "Langlebige, austauschbare Einlaufschienen.", "Optional mit integriertem Insektenschutz."],
    facts: ["Breite bis 6300 mm", "Kasten 165/205/245 mm", "Panzer PVC 37, PA 39/43/52"],
  },
  {
    id: "cleverbox-si",
    family: "Aufsatzrollladen",
    title: "Cleverbox Si",
    image: "/images/rolllaeden/catalog/cleverbox-si.webp",
    alt: "Aufsatzrollladen Cleverbox Si",
    text: "Cleverbox Si wurde für gute Energie- und Akustikwerte entwickelt. Mit Neopor und Stahlverstärkung eignet sich das System auch für größere Konstruktionen.",
    bullets: ["Für PVC- und Aluminiumfenster.", "Von außen und innen überputzbar.", "Seitliche Abdeckkappen für eine saubere Optik verfügbar."],
    facts: ["Breite bis 5500 mm", "Kasten 165/205/245 mm", "Panzer PVC 37, PA 39/43"],
  },
  {
    id: "cleverbox-ri",
    family: "Aufsatzrollladen",
    title: "Cleverbox Ri",
    image: "/images/rolllaeden/catalog/cleverbox-ri.webp",
    alt: "Aufsatzrollladen Cleverbox Ri",
    text: "Cleverbox Ri bietet die technischen Vorteile der Cleverbox-Linie, aber mit einer abgerundeten Revision und weicherer Innenoptik.",
    bullets: ["Für PVC- und Aluminiumfenster.", "Revision von unten innen.", "Optional mit integriertem Insektenschutz."],
    facts: ["Breite bis 5500 mm", "Kasten 165/205 mm", "Panzer PVC 37, PA 39/43"],
  },
  {
    id: "opoterm",
    family: "Aufsatzrollladen",
    title: "Opoterm",
    image: "/images/rolllaeden/catalog/opoterm.webp",
    alt: "Aufsatzrollladen Opoterm",
    text: "Opoterm ist ein bewährtes Aufsatzsystem mit sauberer Innenoptik, einfacher Wartung und RENO-Variante für Renovierungsfenster.",
    bullets: ["Für PVC- und Aluminiumfenster.", "Kasten kann innen und außen verputzt werden.", "Seitliche Abdeckkappen und abgerundete Innenplatte möglich."],
    facts: ["Breite bis 5500 mm", "Kasten 175/210/240 mm", "Panzer PVC 37/52, PA 39/43/52"],
  },
  {
    id: "neo-xt",
    family: "Aufsatzrollladen",
    title: "Neo XT",
    image: "/images/rolllaeden/catalog/neo-xt.webp",
    alt: "Aufsatzrollladen Neo XT",
    text: "Neo XT ist für energieeffiziente Gebäude entwickelt. Das System schützt vor Sonneneinstrahlung, Umgebungslärm und unterstützt breite stabile Konstruktionen.",
    bullets: ["Für PVC-, Aluminium- und Holzfenster.", "Sehr gute thermische und akustische Isolierung.", "Variante für Klinkerverbau verfügbar."],
    facts: ["Breite bis 5500 mm", "Kasten 260/290 mm", "Optional mit Insektenschutz"],
  },
  {
    id: "roka-top-2",
    family: "Aufsatzrollladen",
    title: "Roka-Top 2",
    image: "/images/rolllaeden/catalog/roka-top-2.webp",
    alt: "Aufsatzrollladen Roka-Top 2",
    text: "Roka-Top 2 kombiniert Vorteile von Sturz- und Aufsatzsystemen. Styroporkästen sparen Montagezeit und bieten gute akustische sowie thermische Werte.",
    bullets: ["Für Neubauten mit PVC-Fenstern.", "Verstärkte Kastenkonstruktion.", "Drei Ausbauvarianten: Putz, WDVS oder Klinker."],
    facts: ["Breite bis 5500 mm", "Kasten 250/300 mm", "Panzer PVC 37/52, PA 39/43/52"],
  },
  {
    id: "roka-top-2-ex",
    family: "Aufsatzrollladen",
    title: "Roka-Top 2 EX",
    image: "/images/rolllaeden/catalog/roka-top-2-ex.webp",
    alt: "Aufsatzrollladen Roka-Top 2 EX",
    text: "Roka-Top 2 EX erweitert die Roka-Top-2-Linie um eine einfachere Montage und die Möglichkeit eines integrierten Insektenschutzes.",
    bullets: ["Für PVC-, Aluminium- und Holzfenster.", "Verstärkte Kastenkonstruktion.", "Putz-, WDVS- und Klinkervarianten verfügbar."],
    facts: ["Breite bis 5500 mm", "Kasten 250/300 mm", "Optional mit Insektenschutz"],
  },
  {
    id: "roka-top-2-plus",
    family: "Aufsatzrollladen",
    title: "Roka-Top 2 PLUS",
    image: "/images/rolllaeden/catalog/roka-top-2-plus.webp",
    alt: "Aufsatzrollladen Roka-Top 2 PLUS",
    text: "Roka-Top 2 PLUS bietet starke Wärme- und Schalldämmung. Das System wird direkt auf dem Rahmen montiert und kommt ohne zusätzliche Profile zwischen Rahmen und Kasten aus.",
    bullets: ["Für PVC-Fenster.", "Robuste und langlebige Konstruktion.", "Sehr gute akustische und thermische Isolierwerte."],
    facts: ["Breite bis 5500 mm", "Kasten 250/300 mm", "Panzer PVC 37/52, PA 39/43/52"],
  },
  {
    id: "roka-top-2-rg",
    family: "Aufsatzrollladen",
    title: "Roka-Top 2 RG",
    image: "/images/rolllaeden/catalog/roka-top-2-rg.webp",
    alt: "Aufsatzrollladen Roka-Top 2 RG",
    text: "Roka-Top 2 RG ist für Passivhausbau und sehr gute Dämmung ausgelegt. Die Revision liegt außen, der Kasten bleibt nach dem Verputzen innen unsichtbar.",
    bullets: ["Für PVC- und Aluminiumfenster.", "Kombination aus Aufsatz- und Unterputzlösung.", "Viele Kastenausführungen verfügbar."],
    facts: ["Breite bis 5500 mm", "Revision außen", "Panzer PVC 37/52, PA 39/43/52"],
  },
  {
    id: "roka-top-2-rg-ex",
    family: "Aufsatzrollladen",
    title: "Roka-Top 2 RG EX",
    image: "/images/rolllaeden/catalog/roka-top-2-rg-ex.webp",
    alt: "Aufsatzrollladen Roka-Top 2 RG EX",
    text: "Roka-Top 2 RG EX ist die weiterentwickelte RG-Lösung mit einfacher Montage über PVC-Rollladenprofile und hoher Anpassungsfähigkeit an Fenstersysteme.",
    bullets: ["Für PVC-, Aluminium- und Holzfenster.", "Gute akustische und thermische Isolierwerte.", "Kasten in drei Bauarten erhältlich."],
    facts: ["Breite bis 5500 mm", "Revision außen", "Verstärkte Kastenstruktur"],
  },
  {
    id: "styroterm",
    family: "Aufsatzrollladen",
    title: "Styroterm",
    image: "/images/rolllaeden/catalog/styroterm.webp",
    alt: "Aufsatzrollladen Styroterm",
    text: "Styroterm ist für Projekte vor dem Verputzen gedacht. Der Kasten bietet Komfort, gute Dämmung und kann bei Revision von außen innen vollständig unsichtbar bleiben.",
    bullets: ["Für PVC- und Aluminiumfenster.", "Sehr gute akustische und thermische Isolierung.", "Revision von unten innen oder außen."],
    facts: ["Breite bis 3000 mm", "Kasten 260/300 mm", "Optional mit Insektenschutz"],
  },
  {
    id: "sar",
    family: "Einbruchhemmende Rollläden",
    title: "SAR RC2 / RC3",
    image: "/images/rolllaeden/catalog/sar.webp",
    alt: "Einbruchhemmender Rollladen SAR",
    text: "SAR ist ein zertifiziertes einbruchhemmendes System für Vorbau- und Unterputzrollläden. Verstärkte Führungen und Panzerprofile erschweren manuelle Einbruchversuche.",
    bullets: ["Einbruchschutzklasse RC2 mit PE41 oder RC3 mit PE55.", "Patentiertes Verriegelungssystem in Führungen und Endleiste.", "Nur mit elektrischem Antrieb planbar."],
    facts: ["Breite ab 600 mm", "PE41 oder PE55", "RAL- und Aluprof-Farben"],
  },
];

const rollladenInfoSections = [
  {
    id: "sturzkasten",
    eyebrow: "Renovierung",
    title: "Füllung vorhandener Sturzkästen: SDZ und SKN",
    image: "/images/rolllaeden/catalog/sturzkasten.webp",
    alt: "Füllung vorhandener Sturzkästen mit SDZ und SKN",
    text: "Wenn im Gebäude bereits Rollladenkästen vorhanden sind, kann oft nur die Ausstattung erneuert werden. Das spart Eingriffe in die Fassade und erlaubt eine passgenaue Modernisierung.",
    bullets: ["SDZ: für vorhandene Sturzrollläden, bei denen der Rollladen selbst ausgetauscht wird.", "SKN: Panzer mit Elementen zur Selbstmontage für vorhandene Kästen.", "Bedienung manuell, mit Kurbel oder elektrisch möglich."],
  },
  {
    id: "panzer",
    eyebrow: "Panzer",
    title: "Aluminium, PVC und extrudierte Sicherheitsprofile",
    image: "/images/rolllaeden/catalog/panzer.webp",
    alt: "Rollladenpanzer als Fassadendetail",
    text: "Der Panzer beeinflusst Wärmedämmung, Optik, Stabilität und die mögliche Größe des Rollladens. Je nach System kommen ausgeschäumte Aluminiumprofile, PVC-Profile oder extrudierte Sicherheitsprofile zum Einsatz.",
    bullets: ["PA 39, PA 43 und PA 52: ausgeschäumte Aluminiumprofile für viele Standard- und größere Konstruktionen.", "PVC 37 und PVC 52: leise, wetterbeständig und leicht zu reinigen.", "PE 41 und PE 55: extrudierte Aluminiumprofile für einbruchhemmende Systeme."],
  },
  {
    id: "panzerprofile",
    eyebrow: "Profiltypen",
    title: "PA, PVC und PE im Vergleich",
    image: "/images/rolllaeden/catalog/panzer-pa.webp",
    alt: "Technische Übersicht der PA Panzerprofile",
    text: "PA-Profile sind die universellste Lösung. PVC-Profile werden häufig im deutschen Markt eingesetzt. PE-Profile sind die robuste Wahl für zertifizierte Sicherheitsrollläden.",
    bullets: ["PA: leicht, farbbeständig und mit Polyurethanschaum gefüllt.", "PVC: besonders leise und für kleinere bis mittlere Fenster geeignet.", "PE: schwer, widerstandsfähig und pulverbeschichtet."],
  },
  {
    id: "fuehrungen",
    eyebrow: "Führungsschienen",
    title: "Führungsschienen passend zum System",
    image: "/images/rolllaeden/catalog/fuehrungen-vorbau.webp",
    alt: "Führungsschienen für Vorbau- und Unterputzrollläden",
    text: "Führungsschienen stabilisieren den Panzer und bestimmen, wie der Rollladen geführt, verschlossen und optisch eingebunden wird.",
    bullets: ["Vorbau- und Unterputzsysteme nutzen andere Führungsprofile als Aufsatzrollläden.", "Führungen können je nach System lackiert, foliert oder mit speziellen Einsätzen ausgeführt werden.", "Bei Sicherheitsrollläden sind verstärkte Führungen Teil des Einbruchschutzes."],
  },
  {
    id: "aufsatzfuehrungen",
    eyebrow: "Aufsatzsysteme",
    title: "Spezielle Führungen für Aufsatzrollläden",
    image: "/images/rolllaeden/catalog/fuehrungen-aufsatz.webp",
    alt: "Führungsschienen für Aufsatzrollläden",
    text: "Aufsatzrollläden benötigen passende Führungen für Revision, Fenstersystem und Einbausituation. Besonders bei Opoterm, Styroterm, Cleverbox und Roka-Top-Varianten wird die Führung projektspezifisch gewählt.",
    bullets: ["Profile für Revision von innen oder außen.", "Versetzte Führungen für bestimmte Rahmen- und Dämmungsaufbauten.", "Teilungsschienen für größere oder kombinierte Konstruktionen."],
  },
  {
    id: "antriebe",
    eyebrow: "Bedienung",
    title: "Antriebe, Zubehör und Smart-Home-Komfort",
    image: "/images/rolllaeden/catalog/antriebe.webp",
    alt: "Motoren und Zubehör für Rollläden",
    text: "Elektrische Antriebe ersetzen zunehmend klassische Gurt- und Kurbelbedienungen. Sie erhöhen Komfort, schützen den Panzer und lassen sich mit Fernbedienung oder Smartphone steuern.",
    bullets: ["Manuell per Gurt, Seil, Kurbel oder Federmechanismus möglich.", "Motoren mit Hinderniserkennung schützen vor Beschädigungen.", "Marken im Katalog: Forca, Aluprof, Elero, Inel, Rojaflex, Selve, Somfy und Yooda."],
  },
];

function RollladenCatalogSections() {
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
    <section className="rollladenCatalog" aria-label="Rollladen Systeme und technische Informationen">
      <div className="catalogIntro">
        <p className="catalogEyebrow">Systemauswahl</p>
        <h2>Rollladen-Systeme für Neubau, Sanierung und Sicherheit</h2>
        <p>
          Wählen Sie direkt ein System aus: Vorbaurollläden für flexible
          Nachrüstung, Unterputzrollläden für dezente Fassaden und
          Aufsatzrollläden für Neubau, Fensterwechsel und energieeffiziente
          Planung.
        </p>
      </div>

      <nav className="systemTiles" aria-label="Rollladen Systeme">
        {rollladenSystems.map((system) => (
          <a className="systemTile" href={`#${system.id}`} key={system.id}>
            <img src={system.image} alt="" loading="lazy" />
            <span>{system.family}</span>
            <strong>{system.title}</strong>
          </a>
        ))}
      </nav>

      <div className="systemSections">
        {rollladenSystems.map((system) => (
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
        {rollladenInfoSections.map((section) => (
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
        .rollladenCatalog {
          margin: 22px auto;
          max-width: 1120px;
          padding: 0 16px;
        }

        .catalogIntro {
          margin: 0 auto 18px;
          max-width: 800px;
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
          min-height: 164px;
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
          height: 88px;
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
          font-size: 17px;
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
          min-height: 210px;
          overflow: hidden;
        }

        .systemMedia img {
          display: block;
          max-height: 280px;
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
          padding: 0;
          width: 100%;
        }

        .technicalImageButton:focus {
          box-shadow: 0 0 0 3px rgba(213, 119, 22, 0.35);
          outline: none;
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
          background: rgba(17, 17, 17, 0.78);
          cursor: zoom-out;
          display: flex;
          inset: 0;
          justify-content: center;
          padding: 18px;
          position: fixed;
          z-index: 1200;
        }

        .imageModalInner {
          background: #fff;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
          cursor: default;
          max-height: 92vh;
          max-width: min(1040px, 96vw);
          padding: 14px;
          position: relative;
        }

        .imageModalInner img {
          display: block;
          max-height: 78vh;
          max-width: 100%;
          object-fit: contain;
        }

        .imageModalInner p {
          color: #171717;
          font-weight: 800;
          line-height: 1.25;
          margin: 12px 44px 0 0;
        }

        .imageModalClose {
          align-items: center;
          background: #171717;
          border: 0;
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          font-size: 28px;
          height: 42px;
          justify-content: center;
          line-height: 1;
          position: absolute;
          right: 10px;
          top: 10px;
          width: 42px;
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
            min-height: 182px;
          }

          .systemTile img {
            height: 108px;
          }
        }

        @media (min-width: 980px) {
          .rollladenCatalog {
            padding: 0;
          }

          .systemTiles {
            grid-template-columns: repeat(5, minmax(0, 1fr));
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
            max-height: 350px;
          }

          .technicalGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .technicalCard {
            grid-template-columns: minmax(0, 1.1fr) minmax(190px, 0.9fr);
            min-height: 340px;
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

export default RollladenCatalogSections;
