function header(props) {

  const { title } = props;

    return (

        <div className="flex flex-wrap justify-around mb2 w-90 w-100-l">

        {/* LOGO */}
        <div className="w-100 w-20-l  tc mv1">
          <img className="mt1 dib" src="/pics/logo_PF.png"></img>
        </div>

         {/* IKONKI I TYTUL STRONY */}
        <div className="w-100 w-50-l  fl  tc mv1 mh1 ">
          <img className="mt4 mr1 " src="/pics/ikonki_rund.png"></img>
          <h3 className="fl ma1 mt3 w-100 tc">
            { title }
          </h3>
        </div>

        {/* DANE KONTAKTOWE */}
        <div className="w-100 w-25-l fl tc tl-l mt3  f5 w3-text-orange ">
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

      </div>

        );
}

export default header;