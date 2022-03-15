import Link from "next/link";

function footer() {
    return (

        <div className="flex flex-wrap justify-center  w-100 pa2 tc  ">
         
          <div className="w-100 ba b--moon-gray pa2">
            <img
              className="mh4 mb4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_profine.png"
            ></img>
            <img
              className="mh4 mv4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_aluprof.png"
            ></img>
            <img
              className="mh4 mv4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_ponzio.png"
            ></img>
            <img
              className="mh4 mv4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_winkhaus.png"
            ></img>
            <img
              className="mh4 mv4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_hoppe.png"
            ></img>
            <img
              className="mh4 mt4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_saint_gobain.png"
            ></img>
          </div>

          <div className="w-100 w-30-l  ma2 pa3">
            <h5 className="gray">Produkte</h5>
            <p className="gray f6">
              <Link href="/fenster">
                <a className="f6 fw4 no-underline db   ph3">Fenster</a>
              </Link>
              <Link href="/schuecopvc">
                <a className="f6 fw4 no-underline db   ph3">Schüco Kunststoff Fenster</a>
              </Link>
              <Link href="/koemmerling">
                <a className="f6 fw4 no-underline db   ph3">Kömmerling Kunststoff Fenster</a>
              </Link>
              <Link href="/ponzio">
                <a className="f6 fw4 no-underline db   ph3">Ponzio Aluminium Fenster</a>
              </Link>
              <Link href="/aluprof">
                <a className="f6 fw4 no-underline db   ph3">Aluprof Aluminium Fenster</a>
              </Link>
              <Link href="/schuecoalu">
                <a className="f6 fw4 no-underline db   ph3">Schüco Aluminium Fenster</a>
              </Link>
              <Link href="/hs">
                <a className="f6 fw4 no-underline db   ph3">Schüco Hebe Schiebe Tür</a>
              </Link>
              <Link href="/tueren">
                <a className="f6 fw4 no-underline  db  ph3">Haustüren</a>
              </Link>
              <Link href="/beschattung">
                <a className="f6 fw4 no-underline  db  ph3">Beschattung</a>
              </Link>
              <Link href="/rolllaeden">
                <a className="f6 fw4 no-underline  db  ph3">Rollläden</a>
              </Link>
              <Link href="/raffstoren">
                <a className="f6 fw4 no-underline  db  ph3">Raffstoren</a>
              </Link>
              <Link href="/screenrolls">
                <a className="f6 fw4 no-underline  db  ph3">Screen Rolls</a>
              </Link>
            </p>
          </div>


          <div className="w-100 w-30-l  ma2 pa3">
            <h5 className="gray">Dienstleistungen</h5>
            <p className="gray f6">
              <Link href="/">
                <a className="f6 fw4 no-underline db   ph3">Aufmaß</a>
              </Link>
              <Link href="/">
                <a className="f6 fw4 no-underline  db  ph3">Beratung</a>
              </Link>
              <Link href="/">
                <a className="f6 fw4 no-underline  db  ph3">Vermittlung</a>
              </Link>
              <Link href="/">
                <a className="f6 fw4 no-underline  db  ph3">Montage</a>
              </Link>
            </p>
          </div>

          <div className="w-100 w-30-l  ma2 pa3">
            <h5 className="gray">Über uns</h5>
            <p className="gray f6">
              <Link href="/">
                <a className="f6 fw4 no-underline db   ph3">
                  Wie funktioniert es?
                </a>
              </Link>
              <Link href="/">
                <a className="f6 fw4 no-underline  db  ph3">Über die Firma</a>
              </Link>
              <Link href="/kontakt">
                <a className="f6 fw4 no-underline  db  ph3">Kontakt</a>
              </Link>
            </p>
          </div>
          <div className="tl w-100">
            <p className="gray f7">© 2022. Alle Abbildungen, Texte, Filme und 3d Modelle sind urheberrechtlich geschützt. Unberechtigte Benutztng ist nicht erlaubt. Bei Interesse für die Benutzng der 3d Modelle und Abbildungen bitten wir um Kontakt. </p>
          </div>
        </div>
        );
}

export default footer;