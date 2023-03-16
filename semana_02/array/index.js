const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

console.log(arr);
// adicionar elementos

// push - ao final
arr.push("Milena");
console.log(arr);

// unshift - ao inicio
arr.unshift("Lais");
console.log(arr);

// pop - remove elemento final
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift - remove elemento inicio
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// pesquisa de elememento
// includes
const inclui = arr.includes("Legolas");
console.log(inclui);

// indexOf
const indice = arr.indexOf("Legolas");
console.log(indice);

// cortar e concatenar
// slice
const hobbits = arr.slice(0, 4);
console.log(arr);
console.log(hobbits);
console.log(arr);
