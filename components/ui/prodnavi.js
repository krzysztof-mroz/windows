import Link from "next/link";

function prodnavi() {
  return (
    <div className="fw9 pv1 tl dt w-100" >
      <div
        className="dtc v-mid tc pa1"
        style={{
          
          textAlign: "center",
          width: "100%",
          marginBottom: "70px",
          zIndex: 999,
          height: "50px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="db">
          
        
          {/* <Link href="/fenster">
            <a className="f6 fw8 bold dim no-underline  db dib pv2 ph3">Fenster</a>
          </Link>
          <Link href="/tueren">
            <a className="f6 fw8 bold dim no-underline   db dib pv2 ph3">
              Haustüren
            </a>
          </Link>
          <Link href="/beschattung">
            <a className="f6 fw8 bold dim no-underline  db dib pv2 ph3">
              Beschattung
            </a>
          </Link> */}

<Link href="/fenster">
      <a className="w3-button w3-sand w3-hover-light-yellow  w3-text-black w3-margin">Fenster</a>
    </Link>
    <Link href="/tueren">
      <a className="w3-button w3-sand w3-hover-light-yellow  w3-text-black w3-margin">
        Haustüren
      </a>
    </Link>
    <Link href="/rolllaeden">
      <a className="w3-button w3-sand w3-hover-light-yellow  w3-text-black w3-margin">
        Rollläden
      </a>
    </Link>

    <Link href="/raffstoren">
      <a className="w3-button w3-sand w3-hover-light-yellow  w3-text-black w3-margin">
        Raffstoren
      </a>
    </Link>

         
          {/*<Link href="/">
            <a className="f6 fw4 dim no-underline db dib pv2 ph3">Sign Up</a>
      </Link>*/}
        </div>

        {/* MOBILE MENU */}

        <div className="dn">
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

export default prodnavi;
