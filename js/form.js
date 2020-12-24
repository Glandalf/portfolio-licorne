function sendMessage(auteur, objet, message) {
    fetch(`http://portfolio.coincoin/backend/contact.php?qui=${auteur}&objet=${objet}&message=${message}`)
        .then(response => response.text())
        .then(data => 
            console.log('REPONSE DE COINCOIN: ', data)
        )
}

document.getElementById('send-message').addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log('MON TABLEAU ? ', document.forms[0].elements);
    sendMessage(
        document.forms[0].elements[0].value, 
        document.forms[0].elements[1].value, 
        document.forms[0].elements[2].value);
})