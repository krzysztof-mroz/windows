import { useState} from 'react';

function header(props) {

  const { title } = props;
  const [activeContact, setActiveContact] = useState(null);

  const toggleContact = (contactName) => {
    setActiveContact(activeContact === contactName ? null : contactName);
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
            <img className="mt4 mr1 " src="/pics/ikonki_rund.png"></img>
          </div>
          <h1 className="fl f3 ma1 mt3 w-100 tc">
            { title }
          </h1>
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
        <div className="db dn-l w-60 fl tc tl-l mt3 mt1-m f5 w3-text-orange flex ">
            <div className="w-33 mv1">
              <div className="contact-icon" onClick={() => toggleContact('phone')}>
                <img
                  className="dib mr2"
                  style={{ position: "relative", width: 25, height: 25 }}
                  src="/pics/svg/anruf.svg"
                />
              </div>
              {activeContact === 'phone' && (
                <p className="dib">0800 44 700 99</p>
              )}
            </div>
            <div className="w-33 mv1">
              <div className="contact-icon" onClick={() => toggleContact('email')}>
                <img
                  className="dib mr2"
                  style={{ position: "relative", width: 25, height: 25 }}
                  src="/pics/svg/briefumschlag.svg"
                />
              </div>
              {activeContact === 'email' && (
                <a href="mailto:info@polnische-fenster.com">info@polnische-fenster.com</a>
              )}
            </div>
            <div className="w-33 mv1">
              <div className="contact-icon" onClick={() => toggleContact('whatsapp')}>
                <img
                  className="dib mr2"
                  style={{ position: "relative", width: 25, height: 25 }}
                  src="/pics/svg/whatsapp.svg"
                />
              </div>
              {activeContact === 'whatsapp' && (
                <a href="https://wa.me/4915737448021" target="_blank">+4915737448021</a>
              )}
            </div>
        </div>



      </div>

        );
}

export default header;