// Messaggio iniziale nella console
console.log("Inizio esecuzione");

// Data corrente
let d = new Date();

// Mostra la data nella console
console.log(d);

// Mostra il giorno del mese
document.getElementById("saluto2").innerHTML += d.getDate();

// Array che conterrà i valori RGB
let colori = [];

function elabora() {

    // Legge il numero inserito
    let numero = Number(document.getElementById("inNumber").value);

    // Legge il testo inserito
    let testo = document.getElementById("inText").value;

    // Mostra il testo nell'output
    document.getElementById("outText2").innerHTML = testo;

    // Pulisce eventuali errori precedenti
    document.getElementById("error").innerHTML = "";

    // Controlla che il numero sia valido
    if (numero >= 0 && numero <= 255) {

        // Aggiunge il numero all'array
        colori.push(numero);

        // Mostra il numero inserito
        document.getElementById("outText").innerHTML =
            "Hai inserito il numero " + numero;

        // Mostra tutti i numeri inseriti
        document.getElementById("outText").innerHTML +=
            "<br>I colori inseriti sono: " + colori.join(", ");

        // Mostra l'array nella console
        console.log(colori);

        // Quando sono presenti 3 valori RGB
        if (colori.length == 3) {

            // Crea il colore RGB
            let newColor = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;

            console.log(newColor);

            // Cambia il colore del testo
            document.getElementById("outText2").style.color = newColor;
        }

    } else {

        // Messaggio di errore
        document.getElementById("error").innerHTML =
            "Inserisci un numero compreso tra 0 e 255";
    }
}

// Funzione di reset
function reset() {

    // Svuota gli input
    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";

    // Ripristina gli output
    document.getElementById("outText").innerHTML = "Output";
    document.getElementById("outText2").innerHTML = "Output2";

    // Ripristina il colore nero
    document.getElementById("outText2").style.color = "black";

    // Svuota il messaggio di errore
    document.getElementById("error").innerHTML = "";

    // Svuota l'array
    colori = [];
}