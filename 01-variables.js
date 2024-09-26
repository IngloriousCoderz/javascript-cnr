/* qua dentro
ci posso scrivere
quello che mi pare */

console.log("Hello world!"); // stampa un messaggio all'utente

/**
 * Questo commento
 * fa da documentazione
 */

// let age = 42; // dichiarazione + inizializzazione
let age; // dichiarazione
console.log(age);
age = 41; // inizializzazione
console.log(age);
age = 42; // riassegnazione
console.log(age);

// const PI; // inutile dichiarare una costante senza inizializzarla
const PI = 3.14;
console.log(PI);
// PI = 3.1416; // non è possibile assegnare un nuovo valore a una costante

// HOISTING: "innalzamento" della variabile, come se fosse dichiarata in riga 1 (ma inizializzata in riga 27)
var a = 2;
console.log(a);

// SCOPING: la variabile non tiene conto del blocco e viene comunque dichiarata all'inizio del file
{
  var a = 2;

  function func() {
    var a = 2;
  }
}

console.log(1 == 1);
console.log(1 == "1");
console.log(1 === "1");

let b;
let c = null;
console.log(b == null);
console.log(c == null);

console.log(1 != 2);
console.log(1 != "1");
console.log(1 !== "1");

console.log(a != null);
