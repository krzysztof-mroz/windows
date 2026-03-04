import React, { useMemo, useState } from "react";
import { getModelGrossPrice, formatEUR } from "./data/nebeneingangPrices";
// ⬆️ jeśli ModelsGrid jest w /components, a data w /data, to ta ścieżka jest OK.
// Jeśli masz inaczej, dopasuj: np. "../../data/nebeneingangPrices"

export default function ModelsGrid({ initialCount = 8, maxModel = 40 }) {
  const [showAll, setShowAll] = useState(false);

  const models = useMemo(() => {
    const arr = [];
    for (let i = 2; i <= maxModel; i++) {
      const id = String(i).padStart(2, "0");
      arr.push({
        id,
        name: `Modell ${id}`,
        gross: getModelGrossPrice(id), // ✅ BRUTTO z data/nebeneingangPrices.js
        src: `/modelle/modell${id}.png`,
      });
    }
    return arr;
  }, [maxModel]);

  const visible = showAll ? models : models.slice(0, initialCount);

  return (
    <section aria-label="Modelle" className="mw8 center ph3 ph4-l mt4">
      <div className="flex items-center justify-between flex-wrap">
        <h2 className="f3 ma0">Modelle</h2>

        <button
          type="button"
          aria-expanded={showAll}
          className="mt2 mt0-l pointer ba b--moon-gray bg-white pa2 br2"
          onClick={() => setShowAll((v) => !v)}
        >
          {showAll ? "Weniger anzeigen" : "Alle Modelle anzeigen"}
        </button>
      </div>

      <div className="modelsGrid mt3">
        {visible.map((m) => (
          <article
            key={m.id}
            className="modelCard ba b--moon-gray br3 overflow-hidden bg-white"
          >
            <div className="imgBox">
              <img
                src={m.src}
                alt={`${m.name} Nebeneingangstür`}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="pa2">
              <div className="flex items-center justify-between">
                <p className="ma0 b">{m.name}</p>
                <p className="ma0 orange b">
                  ab {formatEUR(m.gross)}
                </p>
              </div>

              <a
                className="db mt2 f6 link blue"
                href={`https://www.polnische-fenster.com/kontakt/anfrage?modell=${m.id}`}
              >
                Angebot anfragen →
              </a>
            </div>
          </article>
        ))}
      </div>

      {!showAll && models.length > initialCount && (
        <div className="tc mt3">
          <button
            type="button"
            className="pointer bg-orange white bn pa3 br2"
            onClick={() => setShowAll(true)}
          >
            Alle Modelle ansehen
          </button>
        </div>
      )}

      <style jsx>{`
        /* mobile-first */
        .modelsGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        @media (min-width: 700px) {
          .modelsGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }
        }

        @media (min-width: 1024px) {
          .modelsGrid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
          }
        }

        .imgBox {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 12px 0;
          background: #fff; /* ✅ białe */
        }

        .imgBox img {
          width: 120px; /* ✅ jak chciałeś */
          height: auto;
          object-fit: contain;
          display: block;
        }
      `}</style>
    </section>
  );
}