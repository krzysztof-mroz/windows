async function handler (req, res) {
    if (req.method === 'POST') {
        
    const anfrageBody = req.body.anfrageBody;

    if (!anfrageBody.email || anfrageBody.email == "") { 
      res.status(422).json({message: 'Bitte Email Adresse ausfüllen', field: 'email'});
      return;
    }

    if (!anfrageBody.message || anfrageBody.message == "") { 
        res.status(422).json({message: 'Bitte Ihre Fensterliste nicht vergessen', field: 'liste'});
        return;
    }

    if (!anfrageBody.message || anfrageBody.name == "") { 
      res.status(422).json({message: 'Bitte Ihren Namen ausfüllen', field: 'name'});
      return;
    }

    if (!anfrageBody.message || anfrageBody.ort == "") { 
      res.status(422).json({message: 'Bitte PLZ angeben', field: 'ort'});
      return;
    }

      try{ 
          await fetch('https://www.gebolt.de/versand_anfrage.php', {
          method: 'POST',
          body: JSON.stringify(anfrageBody),
          headers: {'Content-Type': 'application/json'},
          mode: 'no-cors'
        })
        .then((data) => res.status(201).json({message: "Ihre Anfrage wurde geschickt. Danke schön."}));
      } 
      catch(error) {
        res.status(500).json({message: 'Ihre Nachricht wurde nicht geschick, bitte später versuchen'});
      }


     
        
        }
    }
    
    export default handler;