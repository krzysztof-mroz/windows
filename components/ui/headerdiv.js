import { useState } from "react";
import Link from "next/link";

function header(props) {
  const { title, subtitle } = props;

  // Use state to track which contact data is active
  const [activeContact, setActiveContact] = useState("phone"); // 'phone' is the default

  // Define a function to set the active contact
  const setActive = (contactName) => {
    setActiveContact(contactName);
  };

  // Define the contact data for each type
  const contactData = {
    phone: "0800 44 700 99",
    email: "info@polnische-fenster.com",
    whatsapp: "+4915737448021",
  };

  // Render the selected contact data
  const renderContactData = () => {
    return (
      <div className="db dn-l tc w-100 w3-text-orange">
        {activeContact === "phone" && <p>{contactData.phone}</p>}
        {activeContact === "email" && (
          <p>
            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
          </p>
        )}
        {activeContact === "whatsapp" && (
          <p>
            <a href={`https://wa.me/${contactData.whatsapp}`} target="_blank">
              {contactData.whatsapp}
            </a>
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-around mb2 w-100">
      {/* LOGO */}
      <div className="dn db-l w-100 w-20-l tc mv1">
        <img className="mt1 dib" src="/pics/logo_PF.png"></img>
      </div>

      {/* IKONKI I TYTUL STRONY */}
      <div className="w-100 w-50-l  fl  tc mv1 mh1 ">
        <div className="dn db-l">
          {/* <img className="mt4 mr1 " src="/pics/ikonki_rund.png"></img> */}
          <img className="mt4 mr1 " src="/pics/alu_sala_add2.jpg"></img>
        </div>

        <div className="db dn-l">
          {/* <img className="mt4 mr1 " src="/pics/ikonki_rund.png"></img> */}
          <img className="mt4 mr1 " src="/pics/alu_sala_add.jpg"></img>
        </div>
        <h1 className="fl f3 ma1 mt3-l w-100 tc">{title}</h1>
        <h2 className="fl f5 ma1 mt3-l w-100 tc">{subtitle}</h2>
      </div>

      {/* DANE KONTAKTOWE DUZY EKRAN */}

      <div className="dn db-l w-100 w-25-l fl tc tl-l mt3 mt1-m f5 w3-text-orange ">
        <div className="w-100 mv1">
          <img
            className="dib mr2"
            style={{ position: "relative", width: 25, height: 25 }}
            src="/pics/svg/anruf.svg"
          />
          <p className="dib">0800 44 700 99</p>
        </div>
        <div className="w-100 mv1">
          <img
            className="dib mr2"
            style={{ position: "relative", width: 25, height: 25 }}
            src="/pics/svg/briefumschlag.svg"
          />
          <a href="mailto: info@polnische-fenster.com">
            info@polnische-fenster.com
          </a>
        </div>
        <div className="w-100 mv3">
          <img
            className="dib mr2"
            style={{ position: "relative", width: 25, height: 25 }}
            src="/pics/svg/whatsapp.svg"
          />
          <a href="https://wa.me/4915737448021" target="_blank">
            +4915737448021
          </a>
        </div>
      </div>

      {/* DANE KONTAKTOWE MOBIL */}
      <div className="db dn-l w-50  fl tc f5 w3-text-orange flex">
        <div className="w-33">
          <div className="contact-icon" onClick={() => setActive("phone")}>
            <img
              className="dib mr2"
              style={{ position: "relative", width: 25, height: 25 }}
              src="/pics/svg/anruf.svg"
            />
          </div>
        </div>
        <div className="w-33 ">
          <div className="contact-icon" onClick={() => setActive("email")}>
            <img
              className="dib mr2"
              style={{ position: "relative", width: 25, height: 25 }}
              src="/pics/svg/briefumschlag.svg"
            />
          </div>
        </div>
        <div className="w-33 ">
          <div className="contact-icon" onClick={() => setActive("whatsapp")}>
            <img
              className="dib mr2"
              style={{ position: "relative", width: 25, height: 25 }}
              src="/pics/svg/whatsapp.svg"
            />
          </div>
        </div>
      </div>
      {renderContactData()}

      <div className="flex justify-center">
        {" "}
        {/* Center the row horizontally */}
        <div className="db dn-l tc w-100 flex b--moon-gray">
        <p className="gray f6 flex">
          <Link href="/schuecopvc">
            <a className="f6 fw4 no-underline  db  ph3">Schüco</a>
          </Link>
          <Link href="/koemmerling">
            <a className="f6 fw4 no-underline  db  ph3">Kömmerling</a>
          </Link>
          <Link href="/ponzio">
            <a className="f6 fw4 no-underline  db  ph3">Ponzio</a>
          </Link>
          <Link href="/aluprof">
            <a className="f6 fw4 no-underline  db  ph3">Aluprof</a>
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default header;
