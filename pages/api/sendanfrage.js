async function handler (req, res) {
    if (req.method === 'POST') {
        
    const anfrageBody = req.body.anfrageBody;

    if (!anfrageBody.email || anfrageBody.email == "") { 
      res.status(422).json({message: 'Bitte Kontaktdaten nicht vergessen'});
      return;
      }

      if (!anfrageBody.message || anfrageBody.message == "") { 
        res.status(422).json({message: 'Bitte Ihre Nachricht nicht vergessen'});
        return;
        }


      await fetch('https://www.gebolt.de/versand_anfrage.php', {
      method: 'POST',
      body: JSON.stringify(anfrageBody),
      headers: {'Content-Type': 'application/json'},
      mode: 'no-cors'
    })
    .then((data) => res.status(201).json({message: "Ihre Anfrage wurde geschickt. Danke schön."}));
        
        }
    }
    
    export default handler;