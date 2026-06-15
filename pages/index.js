import { Fragment } from "react";
import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import image1 from "/public/living_black_2.jpg";
import image2 from "/public/aws90_rust.jpg";
import Description from "../components/ui/description";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";
import Visualisation from "../components/ui/visualisation";
import ProductLink from "../components/ui/blocks/productlink";
import Carousel from "../components/ui/blocks/carousel"
import CustomerReview from "../components/ui/referenz";



import "react-multi-carousel/lib/styles.css";

const trustItems = [
  {
    icon: "/pics/svg/aufmass.svg",
    title: "Aufmaß vor Ort",
    text: "Wir prüfen Maße und Details direkt am Objekt."
  },
  {
    icon: "/pics/svg/montage.svg",
    title: "Montage nach RAL",
    text: "Fachgerechter Einbau für Neubau und Sanierung."
  },
  {
    icon: "/pics/svg/hersteller.svg",
    title: "Markenprofile",
    text: "Aluplast, Salamander, Gealan, Aluprof und andere"
  },
  {
    icon: "/pics/svg/angebot.svg",
    title: "Faire Angebote",
    text: "Fenster, Türen und Beschattung passend zum Projekt."
  }
];

const popularItems = [
  {
    title: "Fenster",
    text: "Für Altbau und Neubau: Kunststoff/PVC und Aluminium, nach Maß und passend zur Montage geplant.",
    href: "/fenster",
    image: "/living_black_2.jpg",
    alt: "Fenster aus Kunststoff und Aluminium"
  },
  {
    title: "Türen",
    text: "Haustüren und Nebeneingangstüren aus Kunststoff oder Aluminium, mit Seitenteil oder niedriger Schwelle.",
    href: "/tueren",
    image: "/living_ht_black.jpg",
    alt: "Haustür aus Polen"
  },
  {
    title: "Rollläden",
    text: "Aufsatz- und Vorsatzrollläden für Sichtschutz, Wärmeschutz und komfortable Steuerung.",
    href: "/rolllaeden",
    image: "/sk1.jpg",
    alt: "Rollläden für Fenster"
  },
  {
    title: "Raffstoren",
    text: "Raffstoren mit C80 oder Z90 Lamellen für moderne Fassaden und flexible Lichtsteuerung.",
    href: "/raffstoren",
    image: "/raf_z90.jpg",
    alt: "Raffstoren für Sonnenschutz"
  }
];

const processSteps = [
  {
    icon: "/pics/svg/angebot.svg",
    title: "Anfrage senden",
    text: "Sie schicken Maße, Bilder oder erste Wünsche für Fenster, Türen oder Beschattung."
  },
  {
    icon: "/pics/svg/chat.svg",
    title: "Beratung und Aufmaß",
    text: "Wir klären Profile, Farben, Glas, Montage und prüfen bei Bedarf vor Ort."
  },
  {
    icon: "/pics/svg/herstellung.svg",
    title: "Produktion nach Maß",
    text: "Die Elemente werden nach den freigegebenen Details für Ihr Projekt gefertigt."
  },
  {
    icon: "/pics/svg/montage.svg",
    title: "Lieferung und Montage",
    text: "Die Lieferung erfolgt zur Baustelle, die Montage kann nach RAL ausgeführt werden."
  }
];

const faqs = [
  {
    question: "Sind Fenster aus Polen günstiger als Fenster aus Deutschland?",
    answer: "Fenster aus Polen sind oft günstiger, weil Produktion und Beschaffung effizient organisiert sind. Entscheidend bleibt aber die passende Profilwahl, Verglasung, Montage und Beratung für das konkrete Projekt."
  },
  {
    question: "Bieten Sie Aufmaß vor Ort in Deutschland an?",
    answer: "Ja. Auf Wunsch übernehmen wir das Aufmaß vor Ort und prüfen dabei technische Details wie Anschlüsse, Rollläden, Schwellen, Öffnungsrichtungen und Montagesituation."
  },
  {
    question: "Welche Fenstermarken kann ich auswählen?",
    answer: "Im Sortiment sind unter anderem Schüco, Kömmerling, Salamander, Aluplast, Gealan, Aluprof und Ponzio. Die passende Marke hängt von Wärmedämmung, Optik, Budget und Einsatzbereich ab."
  },
  {
    question: "Können Fenster und Türen mit Montage bestellt werden?",
    answer: "Ja. Fenster, Haustüren, Nebeneingangstüren, Hebeschiebetüren, Rollläden und Raffstoren können inklusive Lieferung und Montage angefragt werden."
  },
  {
    question: "Wie starte ich eine Anfrage?",
    answer: "Am einfachsten senden Sie eine Anfrage mit ungefähren Maßen, Bildern oder Plänen. Danach klären wir die passende Lösung und bereiten ein Angebot vor."
  }
];

const heroSlides = [
  {
    image: "/images/home-hero/fenster-1.jpg",
    alt: "Schwarzes Fenster an heller Fassade mit Blick in den Garten",
    tag: "Fenster aus Polen",
    title: "Fenster aus Polen für Ihr Zuhause",
    text: "Kunststoff- und Aluminiumfenster nach Maß, geplant für Neubau und Sanierung in Deutschland.",
    href: "/fenster",
    cta: "Fenster ansehen",
  },
  {
    image: "/images/home-hero/fenster-2.jpg",
    alt: "Modernes schwarzes Fenster in heller Küche mit zwei Frauen",
    tag: "Beratung & Aufmaß",
    title: "Passende Fenster mit Beratung",
    text: "Wir klären Profile, Glas, Farbe, Maße und Montage, damit die Lösung wirklich zum Projekt passt.",
    href: "/kontakt/anfrage",
    cta: "Angebot anfragen",
  },
  {
    image: "/images/home-hero/fenster-3.jpg",
    alt: "Moderne Fassade mit schwarzen Fenstern und Haustür",
    tag: "Neubau & Sanierung",
    title: "Moderne Optik für Fassade und Eingang",
    text: "Fenster, Haustüren und Beschattung abgestimmt auf Architektur, Dämmung und Budget.",
    href: "/fenster",
    cta: "Mehr erfahren",
  },
  {
    image: "/images/home-hero/fenster-4.jpg",
    alt: "Helles Schlafzimmer mit geöffnetem weißen Fenster",
    tag: "Wohnkomfort",
    title: "Mehr Licht, Ruhe und Wärmedämmung",
    text: "Fensterlösungen für angenehmes Wohnen, gute U-Werte und langlebige Technik.",
    href: "/fenster",
    cta: "Mehr erfahren",
  },
  {
    image: "/images/home-hero/fenster-5.jpg",
    alt: "Schwarzes Fenster bei Regen mit Blick in den Garten",
    tag: "Dicht & langlebig",
    title: "Starke Fenster für jedes Wetter",
    text: "Robuste Systeme mit moderner Verglasung, sauberer Abdichtung und fachgerechter Montage.",
    href: "/aufmass",
    cta: "Aufmaß machen",
  },
  {
    image: "/images/home-hero/fenster-6.jpg",
    alt: "Schwarzes Fenster mit Rollladen an einer Hausfassade im Regen",
    tag: "Beschattung",
    title: "Fenster mit Rollläden und Raffstoren",
    text: "Sichtschutz, Sonnenschutz und Komfortsteuerung passend zu Ihren neuen Fenstern.",
    href: "/beschattung",
    cta: "Beschattung ansehen",
  },
  {
    image: "/images/home-hero/tuer-1.jpg",
    alt: "Moderne schwarze Haustür mit Paar vor dem Eingang",
    tag: "Haustüren",
    title: "Premium-Aluminium Haustüren",
    text: "Flügelüberdeckende Haustüren aus Polen, individuell geplant mit Design und Sicherheit.",
    href: "/products/aluminium-haustueren",
    cta: "Türen ansehen",
  },
  {
    image: "/images/home-hero/tuer-2.jpg",
    alt: "Schwarze Haustür an Holzfassade mit Seniorin vor dem Eingang",
    tag: "Alles aus einer Hand",
    title: "Kunststoff-Alu Haustüren",
    text: "Pflegeleichte Haustüren mit attraktiver Optik, guter Dämmung und fairer Planung.",
    href: "/products/kunststoff-alu-haustueren",
    cta: "Türen ansehen",
  },
];

const HomeHero = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState("");
  const sliderSlides = [...heroSlides, heroSlides[0]];
  const visibleActive = active % heroSlides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current >= heroSlides.length ? 1 : current + 1));
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setIsJumping(false);
    setActive(index);
  };
  const previousSlide = () => {
    if (active === 0) {
      setIsJumping(true);
      setActive(heroSlides.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsJumping(false);
          setActive(heroSlides.length - 1);
        });
      });
      return;
    }

    setActive((current) => current - 1);
  };
  const nextSlide = () => {
    setIsJumping(false);
    setActive((current) => (current >= heroSlides.length ? 1 : current + 1));
  };
  const handleHeroTransitionEnd = (event) => {
    if (event.target !== event.currentTarget) return;

    if (active === heroSlides.length) {
      setIsJumping(true);
      setActive(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsJumping(false));
      });
    }
  };
  const handleHeroCtaClick = (event, href) => {
    event.preventDefault();
    event.stopPropagation();
    router.push(href);
  };
  const handleWhatsappSubmit = (event) => {
    event.preventDefault();
    const text = whatsappMessage.trim();
    const url = text
      ? `https://wa.me/4915737448021?text=${encodeURIComponent(text)}`
      : "https://wa.me/4915737448021";

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="homeHeroShell" aria-label="Fenster und Türen aus Polen">
      <div className="homeHeroBrandWrap" aria-label="Kontakt">
        <a href="/" className="homeHeroLogo" aria-label="Polnische-Fenster.com Startseite">
          <img src="/pics/logo_PF.png" alt="Polnische-Fenster.com Logo" />
        </a>
        <div className="homeHeroContact" aria-label="Kontakt">
          <a className="homeHeroMailLink" href="mailto:info@polnische-fenster.com">
            <img src="/pics/svg/briefumschlag.svg" alt="" />
            <span>info@polnische-fenster.com</span>
          </a>
          <form
            className="homeHeroWhatsappCta"
            onSubmit={handleWhatsappSubmit}
            aria-label="WhatsApp Nachricht starten"
          >
            <span className="homeHeroWhatsappText">
              <span>WhatsApp Chat starten</span>
            </span>
            <label className="homeHeroWhatsappInput">
              <textarea
                aria-label="WhatsApp Nachricht"
                value={whatsappMessage}
                onChange={(event) => setWhatsappMessage(event.target.value)}
                rows="3"
                placeholder="Hallo, ich interessiere mich für ..."
              />
            </label>
            <button type="submit" className="homeHeroWhatsappButton">
              <img
                className="homeHeroWhatsappButtonIcon"
                src="/pics/svg/whatsapp.svg"
                alt=""
              />
              WhatsApp öffnen
            </button>
            <img
              className="homeHeroWhatsappMascot"
              src="/images/mascot/monteur-whatsapp.png"
              alt=""
              loading="lazy"
            />
          </form>
        </div>
      </div>

      <div className="homeHeroSliderFrame">
        <div
          className="homeHeroTrack"
          onTransitionEnd={handleHeroTransitionEnd}
          style={{
            transform: `translateX(-${active * 100}%)`,
            transition: isJumping ? "none" : undefined,
          }}
        >
          {sliderSlides.map((slide, index) => (
            <article className="homeHeroSlide" key={`${slide.image}-${index}`}>
              <Image
                className="homeHeroImage"
                src={slide.image}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                sizes="(max-width: 760px) 100vw, 860px"
              />
              <div className="homeHeroShade" />
              <div className="homeHeroContent">
                <p className="homeHeroTag">{slide.tag}</p>
                {index === 0 ? (
                  <h1>{slide.title}</h1>
                ) : (
                  <h2>{slide.title}</h2>
                )}
                <p className="homeHeroText">{slide.text}</p>
                <a
                  href={slide.href}
                  className="homeHeroCta"
                  data-href={slide.href}
                  onClick={(event) => handleHeroCtaClick(event, slide.href)}
                >
                  {slide.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="homeHeroArrow homeHeroPrev"
          aria-label="Vorheriges Bild"
          onClick={previousSlide}
        >
          ‹
        </button>
        <button
          type="button"
          className="homeHeroArrow homeHeroNext"
          aria-label="Nächstes Bild"
          onClick={nextSlide}
        >
          ›
        </button>

        <div className="homeHeroDots" aria-label="Hero Bilder">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.image}
              aria-label={`Bild ${index + 1} anzeigen`}
              aria-current={index === visibleActive ? "true" : undefined}
              className={`homeHeroDot ${index === visibleActive ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .homeHeroShell {
          align-items: stretch;
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
          margin: 0 auto 18px;
          max-width: 1120px;
          padding: 0 12px;
        }

        .homeHeroBrandWrap {
          align-items: center;
          background: #fff;
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: center;
          overflow: visible;
          padding: 8px 0 14px;
        }

        .homeHeroLogo {
          align-items: center;
          background: #fff;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          width: 128px;
        }

        .homeHeroLogo img {
          display: block;
          height: auto;
          width: 100%;
        }

        .homeHeroContact {
          display: grid;
          gap: 12px;
          justify-items: center;
          width: 100%;
        }

        .homeHeroContact a {
          align-items: center;
          color: #171717;
          display: flex;
          font-weight: 800;
          gap: 9px;
          text-decoration: none;
        }

        .homeHeroMailLink {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
          font-size: 13px;
          gap: 7px;
          justify-content: center;
          max-width: 252px;
          padding: 9px 8px;
          text-align: center;
          width: 100%;
        }

        .homeHeroMailLink img {
          flex: 0 0 auto;
          height: 22px;
          width: 22px;
        }

        .homeHeroMailLink span {
          overflow-wrap: anywhere;
          white-space: nowrap;
        }

        .homeHeroWhatsappCta {
          background: transparent;
          border: 0;
          box-shadow: none;
          display: grid;
          gap: 12px;
          justify-items: center;
          min-height: 218px;
          overflow: visible;
          padding: 6px 0 0;
          position: relative;
          width: 100%;
        }

        .homeHeroWhatsappCta::before {
          background: radial-gradient(circle, rgba(37, 211, 102, 0.24), rgba(37, 211, 102, 0) 70%);
          content: "";
          height: 190px;
          pointer-events: none;
          position: absolute;
          right: -34px;
          top: 44px;
          width: 190px;
        }

        .homeHeroWhatsappCta::after {
          display: none;
        }

        .homeHeroWhatsappText {
          display: grid;
          max-width: 210px;
          position: relative;
          text-align: center;
          z-index: 2;
        }

        .homeHeroWhatsappText span {
          font-size: 20px;
          font-weight: 800;
          line-height: 1.08;
        }

        .homeHeroWhatsappInput {
          display: grid;
          max-width: 224px;
          position: relative;
          width: 100%;
          z-index: 2;
        }

        .homeHeroWhatsappInput textarea {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid #d8e6dc;
          color: #171717;
          font: inherit;
          font-size: 12px;
          line-height: 1.32;
          min-height: 78px;
          outline: none;
          padding: 10px 74px 10px 10px;
          resize: vertical;
          width: 100%;
        }

        .homeHeroWhatsappInput textarea:focus {
          border-color: #25d366;
          box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.14);
        }

        .homeHeroWhatsappButton {
          align-items: center;
          background: #25d366;
          border: 1px solid #25d366;
          color: #0f2d19;
          cursor: pointer;
          display: inline-flex;
          font-weight: 800;
          gap: 8px;
          justify-content: center;
          justify-self: center;
          min-width: 206px;
          padding: 11px 14px;
          position: relative;
          z-index: 5;
        }

        .homeHeroWhatsappButton:hover,
        .homeHeroWhatsappButton:focus {
          background: #1fc15c;
          border-color: #1fc15c;
        }

        .homeHeroWhatsappButtonIcon {
          display: block;
          height: 22px;
          width: 22px;
        }

        .homeHeroWhatsappMascot {
          bottom: 38px;
          height: auto;
          pointer-events: none;
          position: absolute;
          right: -18px;
          width: 118px;
          z-index: 4;
        }

        .homeHeroSliderFrame {
          background: #111;
          aspect-ratio: 4 / 3;
          min-height: 0;
          overflow: hidden;
          position: relative;
        }

        .homeHeroTrack {
          display: flex;
          height: 100%;
          transition: transform 0.68s ease;
          will-change: transform;
        }

        .homeHeroSlide {
          flex: 0 0 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        .homeHeroSlide :global(.homeHeroImage) {
          height: 100% !important;
          object-fit: cover !important;
          object-position: center center;
          width: 100% !important;
        }

        .homeHeroShade {
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.22) 48%, rgba(0, 0, 0, 0.1));
          inset: 0;
          position: absolute;
          z-index: 1;
        }

        .homeHeroContent {
          color: #fff;
          max-width: 560px;
          padding: 84px 22px 76px;
          position: relative;
          z-index: 2;
        }

        .homeHeroTag {
          background: rgba(213, 119, 22, 0.94);
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 12px;
          padding: 8px 10px;
          text-transform: uppercase;
        }

        .homeHeroSliderFrame h1,
        .homeHeroSliderFrame h2 {
          font-size: 36px;
          line-height: 1.05;
          margin: 0;
          max-width: 12ch;
        }

        .homeHeroText {
          font-size: 17px;
          line-height: 1.5;
          margin: 14px 0 0;
          max-width: 520px;
        }

        .homeHeroCta {
          background: #fff;
          color: #171717;
          display: inline-block;
          font-weight: 800;
          margin-top: 22px;
          padding: 13px 18px;
          text-decoration: none;
        }

        .homeHeroArrow {
          align-items: center;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.14);
          color: #111;
          cursor: pointer;
          display: flex;
          font-size: 34px;
          height: 42px;
          justify-content: center;
          line-height: 1;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          z-index: 3;
        }

        .homeHeroPrev {
          left: 12px;
        }

        .homeHeroNext {
          right: 12px;
        }

        .homeHeroDots {
          bottom: 16px;
          display: flex;
          gap: 8px;
          justify-content: center;
          left: 0;
          position: absolute;
          right: 0;
          z-index: 3;
        }

        .homeHeroDot {
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(0, 0, 0, 0.18);
          cursor: pointer;
          height: 8px;
          padding: 0;
          transition: background 0.18s ease, width 0.18s ease;
          width: 20px;
        }

        .homeHeroDot.active {
          background: #d57716;
          border-color: #d57716;
          width: 34px;
        }

        @media (min-width: 760px) {
          .homeHeroShell {
            grid-template-columns: 252px minmax(0, 1fr);
            padding: 0;
          }

          .homeHeroSliderFrame {
            aspect-ratio: 4 / 3;
          }

          .homeHeroContent {
            padding: 124px 56px 96px;
          }

          .homeHeroLogo {
            width: 148px;
          }

          .homeHeroBrandWrap {
            padding: 10px 0 18px;
          }

          .homeHeroContact {
            z-index: 4;
          }

          .homeHeroWhatsappCta {
            min-height: 236px;
            padding-top: 10px;
          }

          .homeHeroWhatsappMascot {
            bottom: 38px;
            right: -44px;
            width: 138px;
          }

          .homeHeroSliderFrame h1,
          .homeHeroSliderFrame h2 {
            font-size: 50px;
          }

          .homeHeroText {
            font-size: 19px;
          }
        }

        @media (max-width: 520px) {
          .homeHeroShell {
            padding: 0 12px;
          }

          .homeHeroSliderFrame {
            aspect-ratio: auto;
            min-height: 340px;
          }

          .homeHeroTrack,
          .homeHeroSlide {
            min-height: 340px;
          }

          .homeHeroShade {
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.72));
          }

          .homeHeroContent {
            padding: 30px 16px 46px;
          }

          .homeHeroTag {
            font-size: 11px;
            margin-bottom: 8px;
            padding: 7px 9px;
          }

          .homeHeroLogo {
            margin: 0 auto;
            width: 112px;
          }

          .homeHeroBrandWrap {
            gap: 12px;
            padding: 0;
          }

          .homeHeroContact {
            gap: 10px;
          }

          .homeHeroWhatsappCta {
            min-height: 214px;
            padding: 4px 0 0;
          }

          .homeHeroWhatsappText {
            max-width: 190px;
          }

          .homeHeroWhatsappInput {
            max-width: 224px;
          }

          .homeHeroWhatsappMascot {
            bottom: 39px;
            right: -10px;
            width: 106px;
          }

          .homeHeroSliderFrame h1,
          .homeHeroSliderFrame h2 {
            font-size: 27px;
            max-width: 14ch;
          }

          .homeHeroText {
            font-size: 14px;
            line-height: 1.36;
            margin-top: 10px;
            max-width: 285px;
          }

          .homeHeroCta {
            margin-top: 14px;
            padding: 11px 14px;
          }

          .homeHeroArrow {
            bottom: 70px;
            height: 36px;
            top: auto;
            transform: none;
            width: 36px;
          }

          .homeHeroPrev {
            left: auto;
            right: 60px;
          }

          .homeHeroNext {
            right: 18px;
          }
        }
      `}</style>
    </section>
  );
};

const HomeTopContact = () => {
  return (
    <section className="homeTopContact" aria-label="Kontakt">
      <a href="mailto:info@polnische-fenster.com" className="homeContactItem">
        <img src="/pics/svg/briefumschlag.svg" alt="" />
        <span>info@polnische-fenster.com</span>
      </a>
      <a
        href="https://wa.me/4915737448021"
        className="homeContactItem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/pics/svg/whatsapp.svg" alt="" />
        <span>WhatsApp chat starten</span>
      </a>

      <style jsx>{`
        .homeTopContact {
          align-items: stretch;
          display: none;
          gap: 10px;
          margin: -6px auto 18px;
          max-width: 1120px;
          padding: 0 12px;
        }

        .homeContactItem {
          align-items: center;
          background: #fff;
          border: 1px solid #e4ddd3;
          border-left: 4px solid #d57716;
          color: #1b1b1b;
          display: flex;
          font-weight: 700;
          gap: 10px;
          min-height: 52px;
          padding: 12px 14px;
          text-decoration: none;
        }

        .homeContactItem img {
          flex: 0 0 auto;
          height: 24px;
          width: 24px;
        }

        .homeContactItem span {
          overflow-wrap: anywhere;
        }

        @media (min-width: 640px) {
          .homeTopContact {
            display: none;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
};

const HomeVisualisationSection = () => {
  return (
    <section className="homeVisualWrap">
      <div className="homeVisualHead">
        <h2>Fenster vorab visualisieren</h2>
        <p>
          Probieren Sie Profile und Varianten aus, bevor wir Maße, Glas und
          Montage technisch abstimmen.
        </p>
      </div>
      <Visualisation profil="Aluprof MB 86 SI" showProfiles="yes" />

      <style jsx>{`
        .homeVisualWrap {
          margin: 0 auto;
          max-width: 1120px;
          padding: 26px 16px 8px;
        }

        .homeVisualHead {
          margin: 0 auto 12px;
          max-width: 680px;
          text-align: center;
        }

        .homeVisualHead h2 {
          font-size: 30px;
          line-height: 1.15;
          margin: 0;
        }

        .homeVisualHead p {
          color: #555;
          line-height: 1.5;
          margin: 8px 0 0;
        }
      `}</style>
    </section>
  );
};

const HomeMovieSection = () => {
  return (
    <section className="homeMovieWrap" aria-label="Fenster Video">
      <div className="homeMovieInner">
        <div className="homeMovieText">
          <p>3D Film</p>
          <h2>Fensterprofil in Bewegung ansehen</h2>
          <span>
            Ein kurzer Eindruck vom Aufbau und der Optik moderner Fenstersysteme.
          </span>
        </div>
        <div className="homeMovieFrame">
          <video
            src="/movies/living.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>

      <style jsx>{`
        .homeMovieWrap {
          margin: 0 auto;
          max-width: 1120px;
          padding: 18px 16px 8px;
        }

        .homeMovieInner {
          align-items: center;
          background: #f6f2ec;
          display: grid;
          gap: 18px;
          padding: 18px;
        }

        .homeMovieText p {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .homeMovieText h2 {
          font-size: 26px;
          line-height: 1.15;
          margin: 0;
        }

        .homeMovieText span {
          color: #555;
          display: block;
          line-height: 1.5;
          margin-top: 8px;
        }

        .homeMovieFrame {
          background: #111;
          overflow: hidden;
        }

        .homeMovieFrame video {
          display: block;
          height: auto;
          width: 100%;
        }

        @media (min-width: 820px) {
          .homeMovieInner {
            grid-template-columns: minmax(220px, 0.72fr) minmax(0, 1.28fr);
            padding: 22px 24px;
          }

          .homeMovieText h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};

const TrustBar = () => {
  return (
    <section className="homePageSection pv3">
      <div className="flex flex-wrap justify-center bg-white ba b--black-10">
        {trustItems.map((item) => (
          <div key={item.title} className="w-100 w-50-m w-25-l pa3 flex items-start">
            <img src={item.icon} alt="" className="mr3 mt1" style={{ width: 34, height: 34 }} />
            <div>
              <h2 className="f5 ma0 dark-gray">{item.title}</h2>
              <p className="f6 lh-copy gray ma0 mt2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const PopularProjects = () => {
  return (
    <section className="homePageSection pv4">
      <div className="tc mb3">
        <h2 className="f3 ma0">Was möchten Sie planen?</h2>
        <p className="mid-gray lh-copy ma0 mt2">
          Die wichtigsten Bereiche auf einen Blick.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {popularItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="link dark-gray w-100 w-50-m w-25-l pa2"
          >
            <article className="ba b--black-10 bg-white h-100 shadow-hover">
              <img
                src={item.image}
                alt={item.alt}
                className="db w-100"
                style={{ height: 170, objectFit: "cover" }}
              />
              <div className="pa3 tl bt b--black-10">
                <h3 className="f5 ma0">{item.title}</h3>
                <p className="f6 lh-copy gray mb0">{item.text}</p>
                <span className="dib mt3 f6 b" style={{ color: "#d57716" }}>Mehr erfahren</span>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

const ProcessTimeline = () => {
  return (
    <section className="homePageBand bg-light-gray pv4">
      <div className="homePageSection">
        <div className="tc mb3">
          <h2 className="f3 ma0">So funktioniert es</h2>
          <p className="mid-gray lh-copy ma0 mt2">
            Vom ersten Maß bis zur fertigen Montage bleibt der Ablauf klar.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {processSteps.map((step, index) => (
            <div key={step.title} className="w-100 w-50-m w-25-l pa2">
              <div className="bg-white ba b--black-10 pa3 h-100">
                <div className="flex items-center mb2">
                  <span className="dib tc br-100 white b mr3" style={{ width: 34, height: 34, lineHeight: "34px", backgroundColor: "#d57716" }}>
                    {index + 1}
                  </span>
                  <img src={step.icon} alt="" style={{ width: 30, height: 30 }} />
                </div>
                <h3 className="f5 ma0">{step.title}</h3>
                <p className="f6 lh-copy gray mb0">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeFaq = () => {
  return (
    <section className="homePageSection pv4">
      <h2 className="f3 tc ma0 mb3">Häufige Fragen</h2>
      <div>
        {faqs.map((faq) => (
          <details key={faq.question} className="ba b--black-10 bg-white pa3 mb2">
            <summary className="b pointer">{faq.question}</summary>
            <p className="lh-copy mid-gray mb0">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};




function StartPage() {

  const size = useWindowSize();

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
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

const fenster = [
  <ProductLink linktext="Schüco CT 70 Classic" href="/products/ct70" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/ct70_classic.png"/>,
  <ProductLink linktext="Schüco CT 70 Rondo" href="/products/ct70rondo" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/ct70_rondo.png"/>,
  <ProductLink linktext="Schüco Living MD" href="/products/living" opis="Kunststoff 7 Kammer, 82 mm Einbautiefe" pic="/pics/producticons/living.png"/>,
  <ProductLink linktext="Kömmerling 70 AD" href="/products/k70" opis="Kunststoff 5 Kammer, 70 mm Einbautiefe" pic="/pics/producticons/k70.png"/>,
  <ProductLink linktext="Kömmerling 76 MD" href="/products/k76md" opis="Kunststoff 6 Kammer, 76 mm Einbautiefe" pic="/pics/producticons/k76_md.png"/>,
  <ProductLink linktext="Kömmerling 88 MD" href="/products/k88" opis="Kunststoff 7 Kammer, 88 mm Einbautiefe" pic="/pics/producticons/k88.png"/>,
  <ProductLink linktext="Ponzio PE 68N" href="/products/pe68" opis="Aluminium Ponzio PE 68" pic="/pics/producticons/pe68.png"/>,
  <ProductLink linktext="Ponzio PE 78N" href="/products/pe78" opis="Aluminium Ponzio PE 78" pic="/pics/producticons/pe78.png"/>,
  <ProductLink linktext="Aluprof MB 86 SI" href="/products/mb86" opis="Aluminium Aluprof MB 86" pic="/pics/producticons/mb86.png"/>,
  <ProductLink linktext="Schüco AWS 75 SI" href="/products/aws75" opis="Aluminium Schüco AWS 75" pic="/pics/producticons/aws75.png"/>,
  <ProductLink linktext="Schüco AWS 90 SI" href="/products/aws90" opis="Aluminium Schüco AWS 90" pic="/pics/producticons/aws90.png"/>,
  <ProductLink linktext="Schüco Living Haustür" href="/products/livinght" opis="Kunststoff Haustür, 82 mm Einbautiefe" pic="/pics/producticons/living_ht.png"/>,
  <ProductLink linktext="Kömmerling 88 Haustür" href="/products/k88ht" opis="Kunststoff Haustür, 88 mm Einbautiefe" pic="/pics/producticons/k88_ht.png"/>,
  <ProductLink linktext="Schüco LivingSlide" href="/hs" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_ls_weiss.png"/>,
  <ProductLink linktext="Kömmerling Premidoor 88" href="/hspd" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_pd.png"/>,
  <ProductLink linktext="Vorsatz Raffstoren" href="/products/raf" opis="C80 oder Z90, Unterputz, Überputz" pic="/pics/producticons/raf.png"/>,
  <ProductLink linktext="Aufsatz Rollläden" href="/products/ael" opis="Aluminium Lamellen, Motorsteuerung" pic="/pics/producticons/ael.png"/>,
  <ProductLink linktext="Vorsatz Rollläden SK" href="/products/sk" opis="Aluminium Lamellen, eckiger Kasten" pic="/pics/producticons/vsr_sk.png"/>,
  <ProductLink linktext="Vorsatz Rollläden SKP" href="/products/skp" opis="Aluminium Lamellen, viertelrunder Kasten" pic="/pics/producticons/vsr_skp.png"/>,
  <ProductLink linktext="Vorsatz Rollläden SKO" href="/products/sko" opis="Aluminium Lamellen, halbrunder Kasten" pic="/pics/producticons/vsr_sko.png"/>,
  <ProductLink linktext="Vorsatz Rollläden SP" href="/products/sp" opis="Aluminium Lamellen, Unterputz Kasten" pic="/pics/producticons/vsr_sp.png"/>,
  
]

const tueren = [
  <ProductLink linktext="Schüco CT 70 Nebeneingangstür" href="/products/ct70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_nt.png"/>,
  <ProductLink linktext="Schüco Living Nebeneingangstür" href="/products/livingnt" opis="Kunststoff Tür, 82 mm Einbautiefe" pic="/pics/producticons/living_nt.png"/>,
  <ProductLink linktext="Kömmerling 70 Nebeneingangstür" href="/products/k70nt" opis="Kunststoff Tür, 70 mm Einbautiefe" pic="/pics/producticons/k70_nt.png"/>,
  <ProductLink linktext="Kömmerling 76 Nebeneingangstür" href="/products/k76nt" opis="Kunststoff Tür, 76 mm Einbautiefe" pic="/pics/producticons/k76_nt.png"/>,
  <ProductLink linktext="Kömmerling 88 Nebeneingangstür" href="/products/k88nt" opis="Kunststoff Tür, 88 mm Einbautiefe" pic="/pics/producticons/k88_nt.png"/>,
  <ProductLink linktext="Schüco CT 70 Haustür" href="/products/ct70ht" opis="Kunststoff Haustür, 70 mm Einbautiefe" pic="/pics/producticons/ct70_ht.png"/>,
  <ProductLink linktext="Schüco Living Haustür" href="/products/livinght" opis="Kunststoff Haustür, 82 mm Einbautiefe" pic="/pics/producticons/living_ht.png"/>,
  <ProductLink linktext="Kömmerling 76 Haustür" href="/products/k76ht" opis="Kunststoff Haustür, 76 mm Einbautiefe" pic="/pics/producticons/k76_ht.png"/>,
  <ProductLink linktext="Kömmerling 88 Haustür" href="/products/k88ht" opis="Kunststoff Haustür, 88 mm Einbautiefe" pic="/pics/producticons/k88_ht.png"/>,
  <ProductLink linktext="Schüco LivingSlide" href="/hs" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_ls_weiss.png"/>,
  <ProductLink linktext="Kömmerling Premidoor 88" href="/hspd" opis="Hebe Schiebe, flache Schwelle" pic="/pics/producticons/hs_pd.png"/>,
]



const hebeschiebe = [
  

]

// components/WindowInfo.js
const WindowInfo = () => {
  return (
    <section className="homePageSection pv3">
    <div className="flex flex-wrap">
      <div className="w-100 w-50-l pa2">
        <p className="lh-copy">
          Unsere <span className="b">Kunststoff- und Aluminiumfenster</span> zählen zu den gefragtesten auf dem Markt. Sie überzeugen durch exzellente <span className="b">Wärmedämmung</span>, erkennbar an niedrigen U-Werten, sowie durch ihre <span className="b">Langlebigkeit</span> und <span className="b">Wartungsfreiheit</span>. Bei uns finden Sie genau das, was Sie benötigen – ob Sie nun alte Fenster ersetzen oder ein Energiesparhaus errichten möchten. Mit unserer Unterstützung sichern Sie sich garantiert die <span className="b">KfW-Förderung</span>.
        </p>
        <p className="lh-copy">
          Zusätzlich zu Fenstern führen wir verschiedene <span className="b">Haustüren</span> aus Kunststoff und Aluminium. Wählen Sie aus <span className="b">Eingangstüren, Nebeneingangstüren</span>, Doppelflügeltüren, Haustüren mit Seitenteil, die nach innen oder außen öffnen, sowie Kellertüren oder Schiebetüren für die Terrasse. Unsere <span className="b">Hebeschiebe- und PSK-Türen</span>, inklusive Aufmaß und Montage vor Ort, werden Sie begeistern.
        </p>
      </div>
      <div className="w-100 w-50-l pa2">
        <p className="lh-copy">
          Unser Sortiment umfasst hochwertige <span className="b">Salamander</span>, <span className="b">Aluplast</span>, <span className="b">Gealan</span>, <span className="b">Schüco</span> und <span className="b">Kömmerling Fenster</span> von Profine in Kunststoffausführung sowie <span className="b">Aluprof, Aliplast, Schüco, Reynaers</span> und <span className="b">Ponzio</span> in Aluminium. Auf wunsch gibte es bei uns auch die <span className="b">Holzfenster</span>. Ob bodentiefe Fenster, Fenster mit Sprossen, Kellerfenster oder Schiebefenster – bei uns werden Sie fündig. Wir bieten eine Vielzahl an Sichtschutzgläsern und Farboptionen, wie Anthrazit, DB 703, Mahagoni und viele mehr.
        </p>
        <p className="lh-copy">
          Entdecken Sie auch unsere günstigen <span className="b">Fenster aus Polen</span>. Informieren Sie sich über unsere Auswahl an Fenster- und Türgriffen, flachen Türschwellen, auch für Schiebetüren, sowie über <span className="b">einbruchsichere Fenster und Türen</span>. Wir übernehmen gerne den Einbau, das Abdichten und das Einstellen Ihrer Fenster. Begleiten Sie uns auf dieser wundervollen Reise durch die Welt der Fenster und Türen.
        </p>
        <p className="lh-copy">
          Mehr Infos: <a href="/fenster" className="link orange">Fenster aus Polen</a> und{" "}
          <a href="/tueren" className="link orange">Türen aus Polen</a>.
        </p>
      </div>
    </div>
    </section>
  );
};



 
  return (


    <Fragment>
      <Head>
      <title>Fenster aus Polen in Deutschland kaufen | Polnische-Fenster.com</title>
        <meta
          name="description"
          content="Fenster aus Polen in Deutschland: Kunststoff- und Aluminiumfenster mit Aufmaß, Konfiguration und Montage. Große Auswahl an Schüco, Salamander, Aluprof, Aluplast und vielen Marken – faire Preise und Beratung."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fenster aus Polen in Deutschland kaufen | Polnische-Fenster.com" />
        <meta property="og:description" content="Fenster aus Polen in Deutschland mit Aufmaß, Konfiguration und Montage-Service. Moderne Kunststoff- und Aluminiumfenster zu attraktiven Preisen." />
        <meta property="og:url" content="https://www.polnische-fenster.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Polnische-Fenster.com",
                  url: "https://www.polnische-fenster.com",
                  logo: "https://www.polnische-fenster.com/favicon.ico"
                },
                {
                  "@type": "WebSite",
                  name: "Polnische-Fenster.com",
                  url: "https://www.polnische-fenster.com",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://www.polnische-fenster.com/suche?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.answer
                    }
                  }))
                }
              ]
            })
          }}
        />
        <link rel="canonical" href="https://www.polnische-fenster.com/" />
         
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HomeHero />
      <HomeTopContact />
      <TrustBar />
      <PopularProjects />
      <HomeMovieSection />
     
      <section className="homePageSection pv4">
        <h2 className="f3 tc">Polnische Fenster: Qualität, Preis und Auswahl</h2>
        <p className="lh-copy mid-gray">
          <strong>Fenster aus Polen</strong> sind in Deutschland so beliebt, weil sie ein sehr gutes Preis-Leistungs-Verhältnis
          mit moderner Technik verbinden. Bei Polnische-Fenster.com finden Sie <strong>Kunststofffenster</strong> und
          <strong> Aluminiumfenster</strong> sowie passende <strong>Türen aus Polen</strong> – konfigurierbar nach Maß,
          mit vielen Farben, Verglasungen und Sicherheitsoptionen. Auf Wunsch bieten wir <strong>Aufmaß vor Ort</strong>
          und <strong>Montage</strong>.
        </p>
      </section>
      <ProcessTimeline />
  
  <Description />
 
  <WindowInfo />
  <HomeVisualisationSection />
  <HomeFaq />
  <CustomerReview />



  <div className="homePageSection flex flex-wrap justify-around mb3 tc">
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image1} alt="Kunststofffenster Schüco Living MD" />
        </div>
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image2} alt="Aluminium Fenster Schüco AWS 90" />
        </div>
      </div>

      <div className="homePageSection homeProductCarousel">
      <Carousel show={Math.floor((size.width-50)/186)} title="Unsere Produkte:">      
          {fenster}
      </Carousel>
      </div>
      
     <div className="homePageSection"><WarumDiv /></div>
      <div className="homePageSection"><ActionDiv /></div>
      <style jsx global>{`
        .homePageSection {
          box-sizing: border-box;
          margin-left: auto;
          margin-right: auto;
          max-width: 1120px;
          padding-left: 16px;
          padding-right: 16px;
          width: 100%;
        }

        .homePageBand {
          box-sizing: border-box;
          width: 100%;
        }

        .homeProductCarousel > .flex {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }

        @media (min-width: 760px) {
          .homePageSection {
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>
    </Fragment>
  );
}

export default StartPage;
