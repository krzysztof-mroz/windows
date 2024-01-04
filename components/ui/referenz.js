import React, { useState, useEffect } from 'react';

const CustomerReview = () => {
  

  const customers = [
    {
      images: ['/pics/referenzen/aust.jpg', '/pics/referenzen/aust2.jpg'],
      review: `Ich bin sehr zufrieden mit den Hebe-Schiebe-Anlagen, die ich für mein Haus gekauft habe. Sie sehen super aus und waren echt einfach zu bedienen, sogar für mich. Und der Kundenservice war spitze, haben alles schnell und ohne Stress erledigt. Echt klasse, würde ich wieder kaufen!`,
      name: 'Johann Weber'
    },
    {
      images: ['/pics/referenzen/berlin.jpg'],
      review: `Ich bin sehr zufrieden mit meiner neuen Aluminium Hebe-Schiebe-Anlage, dem Eckfenster und den Kunststofffenstern, einschließlich der Dreieckfenster. Das Aufmaß und die schnelle Lieferung waren für mich besonders vom Vorteil.`,
      name: 'Frau Martens, Berlin'
    },
    {
      images: ['/pics/referenzen/braunschweig.jpg', '/pics/referenzen/braunschweig2.jpg'],
      review: `Die Kunststoff Bogenfenster sind genau so, wie ich es mir vorgestellt habe. Besonders zufrieden bin ich mit der professionellen Montage und der hohen Qualität der Fenster.`,
      name: 'Herr Scheibner, Braunschweig'
    },
    {
      images: ['/pics/referenzen/frankfurt.jpg', '/pics/referenzen/frankfurt2.jpg'],
      review: `Der Austausch meiner Kunststofffenster, einige mit Rollläden und schräge Fenster, verlief hervorragend. Die Beratung war top, ich bin rundum zufrieden.`,
      name: 'Herr Manteas, Frankfurt'
    },
    {
      images: ['/pics/referenzen/offenbach.jpg'],
      review: `Bei der Sanierung meines alten Gebäudes war ich mit dem Ergebnis sehr zufrieden. Die weißen Kunststofffenster sind energiesaprend und sehen gut aus.`,
      name: 'Were Yildiz, Offenbach'
    },
    {
      images: ['/pics/referenzen/ofterdingen.jpg', '/pics/referenzen/ofterdingen2.jpg'],
      review: `Die Schüco Fenster mit Unterputz Rollläden für mein Mehrfamilienhaus waren eine hervorragende Wahl. Tolle Zusammenarbeit, alle Fenster haben perfekt gepasst.`,
      name: 'Herr Nevzat, Ofterdingen'
    },
    {
      images: ['/pics/referenzen/wellen.jpg', '/pics/referenzen/wellen2.jpg'],
      review: `Die großen Flächen meiner neuen Kunststofffenster sind von ausgezeichneter Qualität. Die Monteure waren sehr kompetent und professionell.`,
      name: 'Frau Wintrich, Wellen'
    },
    {
      images: ['/pics/referenzen/reutlingen.jpg', '/pics/referenzen/reutlingen2.jpg'],
      review: `Die neuen bodentiefen Fenster und Außenrollläden sind fantastisch. Ich bin sehr glücklich mit dem Endergebnis. Die beiden Bilder zeigen es.`,
      name: 'Herr Sasmaz, Reutlingen'
    },
    {
      images: ['/pics/referenzen/merzig.png'],
      review: `Die Bestellung meiner neuen Haustür und der Fenster, inklusive der Schrägfenster, lief reibungslos. Ich bin beeindruckt von der guten Kommunikation, schnellen Lieferung und fachgerechten Montage.`,
      name: 'Herr Matthias Lorenz, Merzig'
    }
    // Add more customers here in the same format if needed
  ];
  



  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * customers.length);
    setSelectedCustomer(customers[randomIndex]);
  }, []);

  return (
    <div className="mw8 center ph3 pv4 bg-light-gray">
      <h2 className="f3 ma1 w-100 tc">Unsere Referenz für heute</h2>
      <div className="ba b--black-10 pa3">
        <div className={selectedCustomer.images.length === 1 ? 'center' : 'flex-l flex-wrap'}>
          {selectedCustomer.images.map((image, index) => (
            <div key={index} className={selectedCustomer.images.length === 1 ? 'w-100 pa2 flex justify-center' : 'w-50-l w-100 pa2'}>
              <img src={image} alt={`Image ${index + 1}`} style={{ width: '400px' }}/>
            </div>
          ))}
        </div>
        <div className='f5 lh-copy'>
          {selectedCustomer.review}
        </div>
        <div className="pt3">
          <p className="f6 b">{selectedCustomer.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
