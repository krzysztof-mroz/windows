// components/FruehbucherRabatt.js
const FruehbucherRabatt = () => {
    return (
      <div className="ba b--solid bw1" style={{ backgroundColor: '#f5f5dc' }}> {/* Beige Hintergrund */}
       
        <div className="flex flex-column pa3">
          <div className="w-100">
            <h2 className="f3 f2-m f1-l b tc">Frühbucher-Rabattaktion</h2>
            <p className="lh-copy tc">
            Bestellen Sie bis Ende Januar und erhalten Sie <span className="b">20% Sonderrabatt</span> auf Lieferungen und Installationen vom März bis Mai.
            </p>
          </div>
          <div className="w-100">
            <p className="lh-copy i f7 tc"> {/* Kleinere Schriftgröße und zentrierter Text */}
              *Dieses Angebot gilt nur für Bestellungen mit einer Lieferzeit von mindestens 8 Wochen. Nicht gültig für bestehende Angebote oder Bestellungen.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FruehbucherRabatt;
  

  