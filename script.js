// Avvio del programma
console.log("Applicazione avviata");

// Data corrente
let d = new Date();

console.log("Data corrente:", d);

// Mostra il giorno corrente
document.getElementById("saluto2").innerHTML += d.getDate();

// Array per memorizzare i valori RGB
let colori = [];

function elabora() {

    console.log("--------------------------------");
    console.log("Pulsante ELABORA premuto");

    // Lettura numero
    let numero = Number(
        document.getElementById("inNumber").value
    );

    // Lettura testo
    let testo =
        document.getElementById("inText").value;

    console.log("Numero inserito:", numero);
    console.log("Testo inserito:", testo);

    // Mostra il testo inserito
    document.getElementById("outText2").innerHTML =
        testo;

    // Controllo validità
    if (numero >= 0 && numero <= 255) {

        console.log("Numero valido");

        // Inserisce il numero nell'array
        colori.push(numero);

        console.log("Array aggiornato:", colori);

        document.getElementById("outText").innerHTML =
            "Hai inserito il numero " + numero;

        document.getElementById("outText").innerHTML +=
            "<br>I colori inseriti sono: " +
            colori.join(", ");

        // Quando vengono inseriti tre valori
        if (colori.length == 3) {

            console.log("Tre valori RGB inseriti");

            let newColor =
                `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;

            console.log("Colore generato:", newColor);

            document.getElementById("outText2").style.color =
                newColor;

            console.log("Colore applicato al testo");
        }

    } else {

        console.log("ERRORE: numero non valido");

        alert(
            "Inserisci un numero compreso tra 0 e 255!"
        );

        // Svuota gli input
        document.getElementById("inNumber").value = "";
        document.getElementById("inText").value = "";

        console.log("Input ripuliti");
    }
}

function reset() {

    console.log("--------------------------------");
    console.log("Pulsante PULISCI premuto");

    // Svuota input
    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";

    // Svuota output
    document.getElementById("outText").innerHTML = "";
    document.getElementById("outText2").innerHTML = "";

    // Ripristina il colore
    document.getElementById("outText2").style.color =
        "black";

    // Svuota errori
    document.getElementById("error").innerHTML = "";

    // Svuota array
    colori = [];

    console.log("Array colori svuotato");
    console.log("Output ripuliti");
    console.log("Reset completato");
}