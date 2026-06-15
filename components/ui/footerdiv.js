import Link from "next/link";

const brandLogos = [
  { src: "/pics/logos/logo_aluplast.png", alt: "Aluplast" },
  { src: "/pics/logos/logo_salamander.png", alt: "Salamander" },
  { src: "/pics/logos/logo_gealan.png", alt: "Gealan" },
  { src: "/pics/logos/logo_aluprof.png", alt: "Aluprof" },
  { src: "/pics/logos/logo_aliplast.png", alt: "Aliplast" },
];

const footerSections = [
  {
    title: "Fenster",
    links: [
      { href: "/fenster", label: "Fenster aus Polen" },
      { href: "/salamander", label: "Salamander Kunststoff Fenster" },
      { href: "/aluplast", label: "Aluplast Kunststoff Fenster" },
      { href: "/gealan", label: "Gealan Kunststoff Fenster" },
      { href: "/schuecopvc", label: "Schüco Kunststoff Fenster" },
      { href: "/koemmerling", label: "Kömmerling Kunststoff Fenster" },
      { href: "/aluprof", label: "Aluprof Aluminium Fenster" },
      { href: "/schuecoalu", label: "Schüco Aluminium Fenster" },
      { href: "/ponzio", label: "Ponzio Aluminium Fenster" },
      { href: "/hs", label: "Schüco Hebe Schiebe" },
      { href: "/hspd", label: "Kömmerling Hebe Schiebe" },
    ],
  },
  {
    title: "Fensterprofile",
    links: [
      { href: "/products/ct70", label: "Schüco CT 70 Classic" },
      { href: "/products/ct70rondo", label: "Schüco CT 70 Rondo" },
      { href: "/products/living", label: "Schüco Living MD" },
      { href: "/products/k70", label: "Kömmerling 70 AD" },
      { href: "/products/k76ad", label: "Kömmerling 76 AD" },
      { href: "/products/k76md", label: "Kömmerling 76 MD" },
      { href: "/products/k88", label: "Kömmerling 88 MD" },
      { href: "/products/mb70", label: "Aluprof MB 70 HI" },
      { href: "/products/mb86", label: "Aluprof MB 86 SI" },
      { href: "/products/aws75", label: "Schüco AWS 75 SI" },
      { href: "/products/aws90", label: "Schüco AWS 90 SI" },
      { href: "/products/pe68", label: "Ponzio PE 68 N" },
      { href: "/products/pe78", label: "Ponzio PE 78 N" },
    ],
  },
  {
    title: "Türen",
    links: [
      { href: "/tueren", label: "Türen Übersicht" },
      { href: "/products/aluminium-haustueren", label: "Aluminium Premium Haustüren" },
      { href: "/products/kunststoff-alu-haustueren", label: "Budgetfreundliche Haustüren" },
      { href: "/products/k70nt", label: "Nebeneingangstüren" },
      { href: "/products/innentueren", label: "Innentüren" },
      { href: "/products/ct70ht", label: "Schüco CT 70 Haustür" },
      { href: "/products/livinght", label: "Schüco Living Haustür" },
      { href: "/products/k76ht", label: "Kömmerling 76 Haustür" },
      { href: "/products/k88ht", label: "Kömmerling 88 Haustür" },
      { href: "/products/ct70nt", label: "Schüco CT 70 Nebentür" },
      { href: "/products/livingnt", label: "Schüco Living Nebentür" },
      { href: "/products/k76nt", label: "Kömmerling 76 Nebentür" },
      { href: "/products/k88nt", label: "Kömmerling 88 Nebentür" },
    ],
  },
  {
    title: "Beschattung",
    links: [
      { href: "/beschattung", label: "Beschattung" },
      { href: "/rolllaeden", label: "Rollläden" },
      { href: "/raffstoren", label: "Raffstoren" },
      { href: "/screenrolls", label: "Screen Rolls" },
      { href: "/products/ael", label: "Aufsatzrollladen" },
      { href: "/products/sk", label: "Vorsatzrollladen SK" },
      { href: "/products/sko", label: "Vorsatzrollladen SKO" },
      { href: "/products/skp", label: "Vorsatzrollladen SKP" },
      { href: "/products/sp", label: "Vorsatzrollladen SP" },
      { href: "/products/raf", label: "Vorsatzraffstoren" },
    ],
  },
  {
    title: "Service",
    links: [
      { href: "/kontakt/anfrage", label: "Anfrage starten" },
      { href: "/aufmass", label: "Aufmaß" },
      { href: "/howworking", label: "Wie funktioniert es?" },
      { href: "/beratung", label: "Beratung" },
      { href: "/montage", label: "Montage" },
      { href: "/vermittlung", label: "Vermittlung" },
      { href: "/kontakt", label: "Kontakt" },
      { href: "/aboutus", label: "Über uns" },
      { href: "/impressum", label: "Impressum" },
    ],
  },
];

function FooterLink({ href, label }) {
  return (
    <Link href={href} legacyBehavior>
      <a className="footerLink">{label}</a>
    </Link>
  );
}

function footer() {
  return (
    <footer className="siteFooter">
      <div className="footerLogos" aria-label="Ausgewählte Profil- und Systempartner">
        {brandLogos.map((logo) => (
          <img
            alt={logo.alt}
            className="footerLogo"
            key={logo.src}
            loading="lazy"
            src={logo.src}
          />
        ))}
      </div>

      <div className="footerColumns">
        {footerSections.map((section) => (
          <nav className="footerColumn" key={section.title} aria-label={section.title}>
            <h5>{section.title}</h5>
            {section.links.map((link) => (
              <FooterLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>
        ))}
      </div>

      <p className="footerCopyright">
        © 2021 - 2026. Alle Abbildungen, Texte, Filme und 3d Modelle sind
        urheberrechtlich geschützt. Bei Interesse für die Benutzung bitten wir
        um Kontakt.
      </p>

      <style jsx global>{`
        .siteFooter {
          color: #686868;
          padding: 10px 0 20px;
          text-align: center;
          width: 100%;
        }

        .footerLogos {
          align-items: center;
          border: 1px solid #d7d7d7;
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          justify-content: center;
          margin: 0 auto 22px;
          padding: 18px 14px;
          width: 100%;
        }

        .footerLogo {
          display: block;
          height: auto;
          max-height: 44px;
          max-width: 160px;
          object-fit: contain;
        }

        .footerColumns {
          display: grid;
          gap: 20px;
          grid-template-columns: 1fr;
          margin: 0 auto;
          width: 100%;
        }

        .footerColumn h5 {
          color: #737373;
          font-size: 18px;
          margin: 0 0 12px;
        }

        .footerLink {
          color: #686868;
          display: block;
          font-size: 14px;
          line-height: 1.35;
          padding: 2px 8px;
          text-decoration: none;
        }

        .footerLink:hover,
        .footerLink:focus {
          color: #d57716;
          text-decoration: underline;
        }

        .footerCopyright {
          color: #777;
          font-size: 12px;
          line-height: 1.5;
          margin: 24px 0 0;
          text-align: left;
        }

        @media (min-width: 640px) {
          .footerColumns {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 980px) {
          .footerColumns {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }

          .footerColumn h5 {
            min-height: 22px;
          }
        }
      `}</style>
    </footer>
  );
}

export default footer;
