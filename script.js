// Scrive un messaggio nella console all'avvio del programma
console.log("Inizio esecuzione");

// Crea un oggetto con data e ora correnti
let d = new Date();

// Mostra la data nella console
console.log(d);

// Aggiunge il giorno del mese corrente al contenuto di saluto2
document.getElementById("saluto2").innerHTML += d.getDate();

// Array che conterrà i valori RGB inseriti dall'utente
let colori = [];

function elabora(){

    // Legge il numero inserito e lo converte in Number
    let numero = Number(document.getElementById("inNumber").value);

    // Legge il testo inserito dall'utente
    let testo = document.getElementById("inText").value;

    // Visualizza il testo nell'output
    document.getElementById("outText2").innerHTML = testo;

    // Controlla che il numero sia compreso tra 0 e 255
    if(numero >= 0 && numero <= 255){

        // Inserisce il numero nell'array colori
        colori.push(numero);

        // Mostra il numero inserito
        document.getElementById("outText").innerHTML =
        "Hai inserito il numero " + numero;

        // Mostra tutti i numeri inseriti
        document.getElementById("outText").innerHTML +=
        "<br>I colori inseriti sono: " + colori.join(", ");

        // Visualizza l'array nella console
        console.log(colori);

        // Quando sono stati inseriti 3 valori RGB
        if(colori.length == 3){

            // Crea il colore RGB utilizzando i valori dell'array
            let newColor =
            `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;

            // Imposta il nuovo colore del testo
            document.getElementById("outText2").style.color = newColor;

        }

    } else {

        // Mostra un messaggio di errore se il valore non è valido
        document.getElementById("error").innerHTML =
        "Il numero inserito non va bene";

    }

}

// Funzione per ripristinare lo stato iniziale
function reset(){

    // Svuota il campo numerico
    document.getElementById("inNumber").value = "";

    // Svuota il campo di testo
    document.getElementById("inText").value = "";

    // Ripristina il primo output
    document.getElementById("outText").innerHTML = "Output";

    // Ripristina il secondo output
    document.getElementById("outText2").innerHTML = "Output2";

    // Ripristina il colore del testo a nero
    document.getElementById("outText2").style.color = "black";

    // Svuota l'array dei colori
    colori = [];

}
