import { Fragment, useEffect, useState } from "react";
import BeschattungDiv from "../components/ui/beschattungdiv";
import HeaderContactBar from "../components/ui/headercontactbar";
import Head from "next/head";
import CustomerReview from "../components/ui/referenz";
import { useRouter } from "next/router";

const beschattungHeroSlides = [
  {
    image: "/images/beschattung/hero/rollo-terrasse.webp",
    mobileImage: "/images/beschattung/hero/rollo-terrasse-mobile.webp",
    alt: "Helle Rollläden an einem Wohnhaus mit Terrasse",
    tag: "Rollläden",
    title: "Beschattung für ruhige Sommertage",
    text: "Aufsatz- und Vorbaurollläden schützen vor Sonne, Blicken, Wärmeverlust und Lärm.",
    href: "/rolllaeden",
    cta: "Rollläden ansehen",
  },
  {
    image: "/images/beschattung/hero/raffstore-haus.webp",
    mobileImage: "/images/beschattung/hero/raffstore-haus-mobile.webp",
    alt: "Modernes Haus mit Raffstoren an großen Glasflächen",
    tag: "Raffstoren",
    title: "Licht präzise regulieren",
    text: "Außenjalousien mit C- und Z-Lamellen lenken Tageslicht, ohne den Raum komplett zu schließen.",
    href: "/raffstoren",
    cta: "Raffstoren ansehen",
  },
  {
    image: "/images/beschattung/hero/rollo-familie.webp",
    mobileImage: "/images/beschattung/hero/rollo-familie-mobile.webp",
    alt: "Familie vor einem Haus mit weißen Rollläden",
    tag: "Planung",
    title: "Sonnenschutz passend zum Fenster",
    text: "Wir planen Rollläden, Raffstoren und Screens passend zu Neubau, Sanierung und Fensterwechsel.",
    href: "/kontakt/anfrage",
    cta: "Anfrage starten",
  },
  {
    image: "/images/beschattung/hero/rollo-anthrazit.webp",
    mobileImage: "/images/beschattung/hero/rollo-anthrazit-mobile.webp",
    alt: "Anthrazitfarbener Rollladen an einem modernen Fenster",
    tag: "Sicherheit",
    title: "Mehr Schutz für Fenster und Zuhause",
    text: "Rollläden erhöhen Komfort, Sichtschutz und können je nach System auch den Einbruchschutz unterstützen.",
    href: "/rolllaeden",
    cta: "Zu den Rollläden",
  },
  {
    image: "/images/beschattung/hero/raffstore-terrasse.webp",
    mobileImage: "/images/beschattung/hero/raffstore-terrasse-mobile.webp",
    alt: "Terrasse mit Raffstoren und großen Fenstern",
    tag: "Fassade",
    title: "Moderne Optik für große Glasflächen",
    text: "Raffstoren passen besonders gut zu klarer Architektur, großen Fenstern und variabler Lichtsteuerung.",
    href: "/raffstoren",
    cta: "Zu den Raffstoren",
  },
];

function BeschattungHero() {
  const router = useRouter();
  const [active, setActive] = useState(1);
  const [isJumping, setIsJumping] = useState(false);
  const sliderSlides = [
    beschattungHeroSlides[beschattungHeroSlides.length - 1],
    ...beschattungHeroSlides,
    beschattungHeroSlides[0],
  ];
  const visibleActive = (active - 1 + beschattungHeroSlides.length) % beschattungHeroSlides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIsJumping(false);
      setActive((current) => current + 1);
    }, 5600);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setIsJumping(false);
    setActive(index + 1);
  };

  const previousSlide = () => {
    setIsJumping(false);
    setActive((current) => current - 1);
  };

  const nextSlide = () => {
    setIsJumping(false);
    setActive((current) => current + 1);
  };

  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget) return;

    if (active === beschattungHeroSlides.length + 1) {
      setIsJumping(true);
      setActive(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsJumping(false));
      });
    }

    if (active === 0) {
      setIsJumping(true);
      setActive(beschattungHeroSlides.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsJumping(false));
      });
    }
  };

  const handleCtaClick = (event, href) => {
    event.preventDefault();
    event.stopPropagation();
    router.push(href);
  };

  return (
    <section className="beschattungHero" aria-label="Beschattung mit Rollläden und Raffstoren">
      <div
        className="beschattungHeroTrack"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${active * 100}%)`,
          transition: isJumping ? "none" : undefined,
        }}
      >
        {sliderSlides.map((slide, index) => (
          <article className="beschattungHeroSlide" key={`${slide.image}-${index}`}>
            <picture>
              <source srcSet={slide.mobileImage} media="(max-width: 640px)" />
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 1 ? "eager" : "lazy"}
              />
            </picture>
            <div className="beschattungHeroShade" />
            <div className="beschattungHeroContent">
              <p className="beschattungHeroTag">{slide.tag}</p>
              {index === 1 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
              <p className="beschattungHeroText">{slide.text}</p>
              <a
                className="beschattungHeroCta"
                href={slide.href}
                onClick={(event) => handleCtaClick(event, slide.href)}
              >
                {slide.cta}
              </a>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="beschattungHeroArrow beschattungHeroPrev"
        aria-label="Vorheriges Bild"
        onClick={previousSlide}
      >
        ‹
      </button>
      <button
        type="button"
        className="beschattungHeroArrow beschattungHeroNext"
        aria-label="Nächstes Bild"
        onClick={nextSlide}
      >
        ›
      </button>

      <div className="beschattungHeroDots" aria-label="Beschattung Bilder">
        {beschattungHeroSlides.map((slide, index) => (
          <button
            type="button"
            key={slide.image}
            aria-label={`Bild ${index + 1} anzeigen`}
            aria-current={index === visibleActive ? "true" : undefined}
            className={`beschattungHeroDot ${index === visibleActive ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .beschattungHero {
          background: #111;
          height: clamp(350px, 114vw, 430px);
          margin: 0 auto 18px;
          max-width: 1120px;
          overflow: hidden;
          position: relative;
          width: calc(100% - 24px);
        }

        .beschattungHeroTrack {
          display: flex;
          height: 100%;
          transition: transform 0.68s ease;
          will-change: transform;
        }

        .beschattungHeroSlide {
          flex: 0 0 100%;
          height: 100%;
          min-width: 0;
          overflow: hidden;
          position: relative;
        }

        .beschattungHeroSlide picture,
        .beschattungHeroSlide img {
          display: block;
          height: 100%;
          width: 100%;
        }

        .beschattungHeroSlide img {
          object-fit: cover;
          object-position: center center;
        }

        .beschattungHeroShade {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.74));
          inset: 0;
          position: absolute;
          z-index: 1;
        }

        .beschattungHeroContent {
          bottom: 42px;
          color: #fff;
          left: 16px;
          max-width: min(480px, calc(100% - 32px));
          position: absolute;
          z-index: 2;
        }

        .beschattungHeroTag {
          background: rgba(213, 119, 22, 0.95);
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 9px;
          padding: 7px 9px;
          text-transform: uppercase;
        }

        .beschattungHero h1,
        .beschattungHero h2 {
          font-size: 28px;
          line-height: 1.06;
          margin: 0;
          max-width: 13ch;
        }

        .beschattungHeroText {
          font-size: 14px;
          line-height: 1.38;
          margin: 10px 0 0;
          max-width: 330px;
        }

        .beschattungHeroCta {
          background: #fff;
          color: #171717;
          display: inline-block;
          font-weight: 800;
          margin-top: 14px;
          padding: 11px 14px;
          text-decoration: none;
        }

        .beschattungHeroCta:hover,
        .beschattungHeroCta:focus {
          background: #d57716;
          color: #fff;
          outline: none;
        }

        .beschattungHeroArrow {
          align-items: center;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(0, 0, 0, 0.14);
          color: #111;
          cursor: pointer;
          display: flex;
          font-size: 34px;
          height: 38px;
          justify-content: center;
          line-height: 1;
          position: absolute;
          width: 38px;
          z-index: 3;
        }

        .beschattungHeroPrev {
          bottom: 70px;
          right: 62px;
        }

        .beschattungHeroNext {
          bottom: 70px;
          right: 18px;
        }

        .beschattungHeroDots {
          bottom: 16px;
          display: flex;
          gap: 8px;
          justify-content: center;
          left: 0;
          position: absolute;
          right: 0;
          z-index: 3;
        }

        .beschattungHeroDot {
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(0, 0, 0, 0.18);
          cursor: pointer;
          height: 8px;
          padding: 0;
          transition: background 0.18s ease, width 0.18s ease;
          width: 20px;
        }

        .beschattungHeroDot.active {
          background: #d57716;
          border-color: #d57716;
          width: 34px;
        }

        @media (min-width: 760px) {
          .beschattungHero {
            aspect-ratio: 16 / 9;
            height: clamp(400px, 48vw, 520px);
            max-height: 520px;
            width: 100%;
          }

          .beschattungHeroShade {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.24) 54%, rgba(0, 0, 0, 0.08));
          }

          .beschattungHeroContent {
            bottom: auto;
            left: 56px;
            top: 50%;
            transform: translateY(-50%);
          }

          .beschattungHero h1,
          .beschattungHero h2 {
            font-size: 50px;
          }

          .beschattungHeroText {
            font-size: 19px;
            line-height: 1.48;
            max-width: 520px;
          }

          .beschattungHeroCta {
            margin-top: 22px;
            padding: 13px 18px;
          }

          .beschattungHeroArrow {
            height: 42px;
            top: 50%;
            transform: translateY(-50%);
            width: 42px;
          }

          .beschattungHeroPrev {
            bottom: auto;
            left: 12px;
            right: auto;
          }

          .beschattungHeroNext {
            bottom: auto;
            right: 12px;
          }
        }
      `}</style>
    </section>
  );
}

function BeschattungProfileVideo() {
  return (
    <section className="beschattungVideoWrap" aria-label="Fensterprofil im Schnitt">
      <div className="beschattungVideoText">
        <p className="beschattungVideoEyebrow">Profiltechnik</p>
        <h2>Fensterprofil im Schnitt ansehen</h2>
        <p>
          Der Film bleibt als technische Ergänzung erhalten und steht jetzt
          unter den Beschattungsprodukten.
        </p>
      </div>
      <div className="beschattungVideoFrame">
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
        .beschattungVideoWrap {
          align-items: center;
          background: #f6f2ec;
          display: grid;
          gap: 24px;
          margin: 22px auto 18px;
          max-width: 1120px;
          padding: 24px 16px;
        }

        .beschattungVideoText {
          max-width: 440px;
        }

        .beschattungVideoEyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .beschattungVideoText h2 {
          color: #171717;
          font-size: 28px;
          line-height: 1.12;
          margin: 0;
        }

        .beschattungVideoText p:last-child {
          color: #555;
          line-height: 1.5;
          margin: 10px 0 0;
        }

        .beschattungVideoFrame {
          background: #111;
          overflow: hidden;
        }

        .beschattungVideoFrame video {
          display: block;
          height: auto;
          width: 100%;
        }

        @media (min-width: 840px) {
          .beschattungVideoWrap {
            grid-template-columns: minmax(240px, 0.9fr) minmax(420px, 1.4fr);
            padding: 26px 28px;
          }

          .beschattungVideoText h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}

function Beschattung() {

  // components/RolladenInfo.js
const RolladenInfo = () => {
  return (
    <div className="flex flex-wrap pa4">
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">Rollläden und Raffstoren</h2>
        <p className="lh-copy">
          Unser Sortiment umfasst <span className="b">Aluprof SKT Opoterm Aufsatzrollläden</span> sowie <span className="b">Vorsatzrollläden</span>, die Unterputz oder Überputz montiert werden können, mit verschiedenen Kastenoptionen wie halbrund, viertelrund oder eckig. Unsere Rollläden bieten die Wahl zwischen <span className="b">manueller oder motorisierter Steuerung</span>, auch mit Funkoption.
        </p>
        <p className="lh-copy">
          Wir sind stolz darauf, <span className="b">Somfy Motoren</span> sowie andere Marken anzubieten, die eine reibungslose Funktionalität gewährleisten. Die Lamellen unserer Rollläden sind aus robustem, ausgeschäumtem Aluminium gefertigt.
        </p>
      </div>
      <div className="w-100 w-50-l pa2">
        <h2 className="fl f3 ma1 mt3-l w-100 tc">Screenrolls und mehr</h2>
        <p className="lh-copy">
          Unsere <span className="b">Raffstoren</span> ermöglichen eine stufenlose Regulierung des Tageslichtes, mit der Z90-Variante für volle Beschattung. Die Kästen können sichtbar oder als Unterputzkästen installiert werden. <span className="b">Screenrolls</span> bieten effiziente Materialbeschattung für Ihre Fenster, verwendbar von innen oder von außen, mit kleinen Kästen zwischen 100 mm und 138 mm in eckigen oder halbrunden Ausführungen. 
        </p>
        <p className="lh-copy">
          Standardmäßig mit <span className="b">Motorsteuerung</span> ausgestattet, sind unsere Screenrolls auch für Gruppensteuerungen geeignet. Eine besondere Erwähnung verdient die <span className="b">ZIP-Führung</span> für eine reibungslose Funktion.
        </p>
      </div>
    </div>
  );
};



  return (
    <Fragment>
      <Head>
        <title>Beschattung mit Rollläden, Raffstoren oder Screens</title>
        <meta
          name="description"
          content="Sie beschatten Ihre Innenräume am einfachsten mit unseren Rollläden, Raffstoren oder Screens. Lichteinfallreduktion, Schallschutz und Einbruchschutz."
        />
       
      </Head>
      <HeaderContactBar />
      <BeschattungHero />
      
      <BeschattungDiv />
      
      <RolladenInfo />
      <BeschattungProfileVideo />
      <CustomerReview />
    </Fragment>
  );
}

export default Beschattung;
