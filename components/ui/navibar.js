import Link from "next/link";

function navibar() {
  return (
    <div className="fw9 pv1 tl dt w-100" >
      <div
        className="dtc v-mid tc pa1"
        style={{
          overflow: "hidden",
          position: "fixed",
          top: 0,
          left: 0,
          textAlign: "center",
          width: "100%",
          marginBottom: "70px",
          zIndex: 999,
          height: "50px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="dn db-l mt2-l">
          <Link href="/">
            <a className="f6 fw4 dim no-underline db dib-l pv2 ph3">
              Polniche-Fenster.Com
            </a>
          </Link>
          <Link href="/">
            <a className="f6 fw4 dim no-underline db dib-l pv2 ph3">Start</a>
          </Link>
          <Link href="/fenster">
            <a className="f6 fw8 bold dim no-underline  db dib-l pv2 ph3">Fenster</a>
          </Link>
          <Link href="/tueren">
            <a className="f6 fw8 bold dim no-underline   db dib-l pv2 ph3">
              Haustüren
            </a>
          </Link>
          <Link href="/beschattung">
            <a className="f6 fw8 bold dim no-underline  db dib-l pv2 ph3">
              Beschattung
            </a>
          </Link>
          <Link href="/howworking">
            <a className="f6 fw4 dim no-underline  db dib-l pv2 ph3">
              Wie funktioniert es
            </a>
          </Link>
          <Link href="/kontakt">
            <a className="f6 fw4 dim no-underline  db dib-l pv2 ph3">Kontakt</a>
          </Link>
          {/*<Link href="/">
            <a className="f6 fw4 dim no-underline db dib pv2 ph3">Sign Up</a>
      </Link>*/}
        </div>

        {/* MOBILE MENU */}

        <div className="dn-l mt2">
          <Link href="/">
            <a className="f6 fw4 dim no-underline   pv2 pb4 pr2">
              {" "}
              <img
                style={{ position: "relative", width: 30, height: 30 }}
                src="/pics/svg/home.svg"
              ></img>
            </a>
          </Link>
          <Link href="/fenster">
            <a className=" dim no-underline pv2 pb4 ph2">
              <img
                style={{ position: "relative", width: 30, height: 30 }}
                src="/pics/svg/window.svg"
              ></img>
            </a>
          </Link>
          <Link href="/tueren">
            <a className="f6 fw4 dim no-underline  pv2 pb4 ph2">
              <img
                style={{ position: "relative", width: 30, height: 30 }}
                src="/pics/svg/door.svg"
              ></img>
            </a>
          </Link>
          <Link href="/beschattung">
            <a className="f6 fw4 dim no-underline  pv2 pb4 ph2">
              <img
                style={{ position: "relative", width: 30, height: 30 }}
                src="/pics/svg/shutter.svg"
              ></img>
            </a>
          </Link>
          <Link href="/howworking">
            <a className="f6 fw4 dim no-underline  pv2 pb4 ph2">
              <img
                style={{ position: "relative", width: 30, height: 30 }}
                src="/pics/svg/howitworks.svg"
              ></img>
            </a>
          </Link>
          <Link href="/kontakt">
            <a className="f6 fw4 dim no-underline  pv2 pb4 ph2">
              <img
                style={{ position: "relative", width: 30, height: 30 }}
                src="/pics/svg/contact.svg"
              ></img>
            </a>
          </Link>
          {/*<Link href="/">
            <a className="f6 fw4 dim no-underline  pv2 pb4 pl2">
              <img
                style={{ position: "relative", width: 30, height: 30 }}
                src="/pics/svg/login.svg"
              ></img>
            </a>
      </Link>*/}
        </div>
      </div>
    </div>
  );
}

export default navibar;
