// components/AktionRabatt.js
const AktionRabatt = () => {
    return (
      <div className="ba b--solid bw1" style={{ backgroundColor: '#f5f5dc' }}> {/* Beige Hintergrund */}
       
        <div className="flex flex-column pa3">
          <div className="w-100">
            <h2 className="f3 f2-m f1-l b tc">Mai-Rabattaktion</h2>
            <p className="lh-copy tc">
            Bestellen Sie zwischen 29 April und 12 Mai 2024 und erhalten Sie <span className="b">10% Sonderrabatt</span> auf Salamander und Aluplast Fenster
            </p>
          </div>
          <div className="w-100">
            <p className="lh-copy i f7 tc"> {/* Kleinere Schriftgröße und zentrierter Text */}
              *Diese Aktion gilt nur für Angebote ab dem 29 April 2024
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AktionRabatt;
  

  