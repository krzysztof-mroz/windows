import {useRef} from 'react';




function DbTest () {
    const contactRef = useRef();


    function submitHandler(event) {
        event.preventDefault();
        const enteredEmail = contactRef.current.value;
        
        fetch('/api/mongodbtest', {
            method: 'POST',
            body: JSON.stringify( {email: enteredEmail }),
            headers: {
                'Content-Type': 'application/json',
            }
         }).then(response => response.json())
         .then((data) => console.log(data));
         
    }

    return (
        <div>

            <form onSubmit={submitHandler}>
            <input
          ref = {contactRef} type="text"></input>

<button type="submit" data-toggle="tooltip" data-placement="top" title="Nachricht abschicken">Senden</button>


            </form>

        </div>
    )
}

export default DbTest;