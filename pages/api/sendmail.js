async function handler (req, res) {
    if (req.method === 'POST') {
        
    const messageBody = req.body.messageBody;

    if (!messageBody.inputEmail || messageBody.inputEmail == "") { 
      res.status(422).json({message: 'Bitte Kontaktdaten nicht vergessen'});
      return;
      }

      if (!messageBody.inputMessage || messageBody.inputMessage == "") { 
        res.status(422).json({message: 'Bitte Ihre Nachricht nicht vergessen'});
        return;
      }

      try {
        await fetch('https://www.gebolt.de/versand_next.php', {
        method: 'POST',
        body: JSON.stringify(messageBody),
        headers: {'Content-Type': 'application/json'},
        mode: 'no-cors'
    })
    .then((data) => res.status(201).json({message: "Ihre Nachricht wurde geschickt. Danke schön."}));
      } catch(error) {
        res.status(500).json({message: 'Ihre Nachricht wurde nicht geschick, bitte später versuchen'});
      }
      
   
        
        }
    }
    
    export default handler;