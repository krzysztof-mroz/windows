import { useState, useEffect } from "react";
import Link from "next/link";
import CTAButton from "./CTAButton";
import AktionRabatt from "./AktionRabatt";
import { useRouter } from 'next/router';

function Header(props) {
  const { title, subtitle, ifAnfrage } = props;
  const router = useRouter();

  const [activeContact, setActiveContact] = useState("phone"); // 'phone' is the default
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: "/pics/werbung_fensterpreis.jpg", alt: "Fenster Preise" },
    { src: "/pics/fenster_eigenschaften.jpg", alt: "Fenster Farben" },
    { src: "/pics/beschattung_werbung.jpg", alt: "Beschattung Rollläden, Raffstoren" },
    { src: "/pics/haustuer_werbung.jpg", alt: "Haustür Kunststoff und Alu" },
  ];

  const slidesMobile = [
    { src: "/pics/werbung_fensterpreis_mobile.jpg", alt: "Fenster Preise" },
    { src: "/pics/fenster_eigenschaften_mobile.jpg", alt: "Fenster Farben" },
    { src: "/pics/beschattung_werbung_mobile.jpg", alt: "Beschattung Rollläden, Raffstoren" },
    { src: "/pics/haustuer_werbung_mobile.jpg", alt: "Haustür Kunststoff und Alu" },
  ];

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]); 

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const setActive = (contactName) => {
    setActiveContact(contactName);
  };

  const contactData = {
    phone: "0800 44 700 99",
    email: "info@polnische-fenster.com",
    whatsapp: "+4915737448021",
  };

  const renderContactData = () => {
    return (
      <div className="db dn-l tc w-100 w3-text-orange">
        {activeContact === "phone" && <p>{contactData.phone}</p>}
        {activeContact === "email" && (
          <p>
            <a className="blue" href={`mailto:${contactData.email}`}>{contactData.email}</a>
          </p>
        )}
        {activeContact === "whatsapp" && (
          <p>
            <a className="green" href={`https://wa.me/${contactData.whatsapp}`} target="_blank">
              {contactData.whatsapp}
            </a>
          </p>
        )}
      </div>
    );
  };

  const handleClick = () => {
    router.push('/kontakt/anfrage');
  };

  return (
    <div className="flex flex-wrap justify-around w-100">
      {/* LOGO */}
      <div className="mt6-l dn db-l w-100 w-20-l tc mv1">
        <img className="mt1 dib" src="/pics/logo_PF.png" alt="Logo"></img>
      </div>

      

      {/* IKONKI I TYTUL STRONY */}
      <div className="w-100 w-50-l fl tc mv1 mh1 ">
     {/* REKLAMY W SLAJDACH:
        <div className="dn db-l hover-w3-border-orange relative">
          <img 
            className="mr1 grow shadow-hover" 
            src={slides[currentSlide].src}
            onClick={handleClick}
            alt={slides[currentSlide].alt}
          />
          <button onClick={handlePrevSlide} className="arrow left-arrow">&#10094;</button>
          <button onClick={handleNextSlide} className="arrow right-arrow">&#10095;</button>
        </div>

        <div className="db dn-l hover-w3-border-orange relative">
          <img 
            className="mr1 grow shadow-hover" 
            src={slidesMobile[currentSlide].src}
            onClick={handleClick}
            alt={slidesMobile[currentSlide].alt}
          />
          <button onClick={handlePrevSlide} className="arrow left-arrow">&#10094;</button>
          <button onClick={handleNextSlide} className="arrow right-arrow">&#10095;</button>
        </div> */}
        <div className={ifAnfrage === 'yes' ? 'dn db-l relative' : ''}>
        <video
        src="./movies/living.mp4" 
        autoPlay 
        loop 
        muted
        playsInline 
        controls={false} 
        style={{ width: "100%", height: "auto" }}
        type="video/mp4"/>
        </div>
           

        <h1 className="fl f2 ma1 mt3-l w-100 tc">{title}</h1>
        <h2 className="fl f4 ma1 w-100 tc">{subtitle}</h2>
      </div>

      {/* DANE KONTAKTOWE DUZY EKRAN */}
      <div className="dn db-l w-100 w-25-l fl tc tl-l mt6 mt1-m f5 w3-text-orange ">
        <div className="w-100 mv1">
          <img
            className="dib mr2"
            style={{ position: "relative", width: 25, height: 25 }}
            src="/pics/svg/anruf.svg"
            alt="Phone"
          />
          <p className="dib">0800 44 700 99</p>
        </div>
        <div className="w-100 mv1">
          <img
            className="dib mr2"
            style={{ position: "relative", width: 25, height: 25 }}
            src="/pics/svg/briefumschlag.svg"
            alt="Email"
          />
          <a className="blue" href="mailto: info@polnische-fenster.com">
            info@polnische-fenster.com
          </a>
        </div>
        <div className="w-100 mv3">
          <img
            className="dib mr2"
            style={{ position: "relative", width: 25, height: 25 }}
            src="/pics/svg/whatsapp.svg"
            alt="WhatsApp"
          />
          <a className="green" href="https://wa.me/4915737448021" target="_blank">
            +4915737448021
          </a>
        </div>
      </div>

      {/* DANE KONTAKTOWE MOBIL */}
      <div className="db dn-l w-50 fl tc f5 w3-text-orange flex">
        <div className="w-33">
          <div className="contact-icon" onClick={() => setActive("phone")}>
            <img
              className="dib mr2"
              style={{ position: "relative", width: 25, height: 25 }}
              src="/pics/svg/anruf.svg"
              alt="Phone"
            />
          </div>
        </div>
        <div className="w-33 ">
          <div className="contact-icon" onClick={() => setActive("email")}>
            <img
              className="dib mr2"
              style={{ position: "relative", width: 25, height: 25 }}
              src="/pics/svg/briefumschlag.svg"
              alt="Email"
            />
          </div>
        </div>
        <div className="w-33 ">
          <div className="contact-icon" onClick={() => setActive("whatsapp")}>
            <img
              className="dib mr2"
              style={{ position: "relative", width: 25, height: 25 }}
              src="/pics/svg/whatsapp.svg"
              alt="WhatsApp"
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
          <Link href="/aluplast">
            <a className="f6 fw4 no-underline db ph3">Aluplast</a>
          </Link>
          <Link href="/schuecopvc">
            <a className="f6 fw4 no-underline db ph3">Schüco</a>
          </Link>
          <Link href="/salamander">
            <a className="f6 fw4 no-underline db ph3">Salamander</a>
          </Link>
          <Link href="/aluprof">
            <a className="f6 fw4 no-underline db ph3">Aluprof</a>
          </Link>
          </p>
        </div>
      </div>
      {ifAnfrage != "yes" && <CTAButton />}
     {/*  <AktionRabatt /> */}
    </div>
  );
}

export default Header;
