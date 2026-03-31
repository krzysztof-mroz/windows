import React, { useMemo, useState } from "react";
import Image from "next/image";

export default function AluHaustuerenModelsGrid({
  initialCount = 12,
  models = [],
}) {
  const [showAll, setShowAll] = useState(false);

  const visible = useMemo(() => {
    return showAll ? models : models.slice(0, initialCount);
  }, [showAll, models, initialCount]);

  return (
    <section
      aria-label="Modelle Aluminium Haustüren"
      className="mw8 center ph3 ph4-l mt4 mb5"
    >
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
              <Image
                src={m.src}
                alt={`${m.name} Aluminium Haustür`}
                width={220}
                height={220}
                className="modelImg"
              />
            </div>

            <div className="pa2 pa3-l">
              <div className="metaTop">
                <p className="ma0 b modelName">
                  <span>Modell </span>
                  <span className="modelId">{m.baseId}</span>
                </p>
              </div>

              <p className="ma0 mt2 dark-gray modelDesc">
                Moderne Aluminium Haustür
              </p>

              <a
                className="db mt3 f6 link blue"
                href={`/kontakt/anfragehtalu?modell=${encodeURIComponent(
                  m.baseId
                )}`}
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

        .modelCard {
          display: flex;
          flex-direction: column;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .modelCard:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
        }

        .imgBox {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px 10px;
          background: #fff;
          min-height: 240px;
          border-bottom: 1px solid #f1f1f1;
        }

        .modelImg {
          width: auto;
          height: auto;
          max-width: 100%;
          object-fit: contain;
        }

        .metaTop {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .modelName {
          font-size: 16px;
          line-height: 1.2;
          color: #111;
        }

        .modelId {
          color: #0f2d44;
        }

        .modelDesc {
          font-size: 14px;
          line-height: 1.4;
        }

        @media (max-width: 520px) {
          .imgBox {
            min-height: 185px;
            padding: 12px 8px;
          }

          .modelName {
            font-size: 14px;
          }

          .modelDesc {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}