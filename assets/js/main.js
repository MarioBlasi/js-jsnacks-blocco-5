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
