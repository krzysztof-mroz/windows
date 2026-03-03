import { Fragment, useState, useEffect, useMemo } from "react";
import Head from 'next/head';
import Image from 'next/image'
import k70ntImage from "../../public/k70_nt_golden_oak.jpg"
import HeaderDiv from "../../components/ui/headerdiv";
import ProductVisualisation from "../../components/ui/productvisualisation"


function ModelsGrid({
  initialCount = 2,
  priceFrom = 835,       // baza do przykładowych cen
  priceStep = 2         // przykładowa różnica między modelami (podmień na realne dane)
}) {
  const [showAll, setShowAll] = useState(false);

  // Generujemy modele 02..40
  const models = useMemo(() => {
    const arr = [];
    for (let i = 2; i <= 40; i++) {
      const id = String(i).padStart(2, "0");
      arr.push({
        id,
        name: `Modell ${id}`,
        // tu później podmienisz na realne ceny z JSON-a
        price: priceFrom + (i - 2) * priceStep,
        src: `/modelle/modell${id}.png`,
      });
    }
    return arr;
  }, [priceFrom, priceStep]);

  const visible = showAll ? models : models.slice(0, initialCount);

  return (
    <section aria-label="Modelle" className="mw8 center ph3 ph4-l mt4">
      <div className="flex items-center justify-between flex-wrap">
        <h2 className="f3 ma0">Modelle</h2>

        <button
          type="button"
          className="mt2 mt0-l pointer ba b--moon-gray bg-white pa2 br2"
          onClick={() => setShowAll(v => !v)}
          aria-expanded={showAll}
        >
          {showAll ? "Weniger anzeigen" : "Alle Modelle ansehen"}
        </button>
      </div>

      <div className="modelsGrid mt3">
        {visible.map((m) => (
          <article key={m.id} className="modelCard ba b--moon-gray br3 overflow-hidden bg-white">
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
                <p className="ma0 orange b">ab {m.price} €</p>
              </div>
              <a
                  href="https://www.polnische-fenster.com/kontakt/anfrage"
                  className="db mt2 f6 link blue"
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

      .imgBox {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 12px 0;
          background: #ffffff;
        }

        .imgBox img {
          width: 120px;        /* 🔥 kluczowe */
          height: auto;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        @media (hover: hover) {
          .imgBox img:hover {
            transform: scale(1.05);
          }
        }
        /* Mobile-first: 2 kolumny */
        .modelsGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        /* Tablet: 3 kolumny */
        @media (min-width: 700px) {
          .modelsGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }
        }

        /* Desktop: 4 kolumny */
        @media (min-width: 1024px) {
          .modelsGrid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
          }
        }

        .imgWrap {
          background: #ffffff;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Hover zoom tylko na urządzeniach z hoverem */
        @media (hover: hover) and (pointer: fine) {
          .modelCard :global(img) {
            transition: transform 180ms ease;
          }
          .modelCard:hover :global(img) {
            transform: scale(1.04);
          }
        }
      `}</style>
    </section>
  );
}

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
      <HeaderDiv title="Nebeneingangstür aus Polen" subtitle="Unschlagbare Preise und Modellvielfalt"/>

      <ModelsGrid initialCount={8} />
      
   
      


      
     
    </Fragment>
  );
}

export default K70Nt;
