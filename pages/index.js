import { Fragment } from "react";
import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import image1 from "/public/living_black_2.jpg";
import image2 from "/public/aws90_rust.jpg";
import Description from "../components/ui/description";
import HeaderDiv from "../components/ui/headerdiv";
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
    text: "Schüco, Kömmerling, Aluprof, Salamander und Aluplast."
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

const TrustBar = () => {
  return (
    <section className="mw9 center ph3 pv3">
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
    <section className="mw9 center ph3 pv4">
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
    <section className="bg-light-gray pv4 ph3">
      <div className="mw9 center">
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
    <section className="mw8 center ph3 pv4">
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
  );
};



 
  return (


    <Fragment>
      <Head>
      <title>Fenster aus Polen kaufen – Kunststoff & Aluminium | Polnische-Fenster.com</title>
        <meta
          name="description"
          content="Fenster aus Polen & Türen aus Polen: Kunststoff- und Aluminiumfenster (Schüco, Salamander, Aluprof, Aluplast) mit Aufmaß und Montage. Große Auswahl, faire Preise – jetzt Angebot anfragen."
        />
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
      
      <HeaderDiv title="Fenster aus Polen" subtitle="Kunststoff & Aluminium – mit Aufmaß vor Ort und Montage" />
      <TrustBar />
      <PopularProjects />
     
      <section className="pa3 pa4-ns mw8 center">
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
      
      <Visualisation profil = "Aluprof MB 86 SI" showProfiles = "yes" />    
  
  <Description />
 
  <WindowInfo />
  <HomeFaq />
  <CustomerReview />



  <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image1} alt="Kunststofffenster Schüco Living MD" />
        </div>
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image2} alt="Aluminium Fenster Schüco AWS 90" />
        </div>
      </div>

      <Carousel show={Math.floor((size.width-50)/186)} title="Unsere Produkte:">      
          {fenster}
      </Carousel>
      
     <WarumDiv />
      <ActionDiv /> 
    </Fragment>
  );
}

export default StartPage;
