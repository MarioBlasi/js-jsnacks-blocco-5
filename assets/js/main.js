/*Crea un array di 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine*/

// creiamo un array vuoto dove inseriremo le zucchine
let zucchine = [];

// stampiamo l'array di zucchine sulla console
console.log(zucchine);

// creiamo un ciclo for per creare 10 oggetti zucchina
for (let i = 0; i < 10; i++) {
  // generiamo casualmente varietà, peso e lunghezza
  let varieta = "Zucchina " + (i + 1);
  let peso = Math.floor(Math.random() * 300) + 200; // il  peso tra 200g e 400g
  let lunghezza = Math.floor(Math.random() * 20) + 10; // lunghezza tra 10cm e 29cm

  // creiamo l'oggetto e lo aggiungiamo all'array
  zucchine.push({ varieta: varieta, peso: peso, lunghezza: lunghezza });
}

/* utilizziamo la funzione pesoZucchine con lo spread operator per calcolare il peso totale delle zucchine*/

// calcoliamo il peso totale delle zucchine
let pesoTotale = 0;
for (let zucchina of zucchine) {
  pesoTotale += zucchina.peso;
}

// stampiamo il peso totale delle zucchine
console.log("Il peso totale delle zucchine è " + pesoTotale + " grammi");

/*Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b"*/

function otteniamoValori(array, a, b) {
  if (a >= b || b > array.length) {
    alert("i valori non sono validi");
  }
}
