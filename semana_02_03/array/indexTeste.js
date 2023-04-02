const array = ["milena", "maykon", "claudia", "tiago", "nicolly"];
const familia2 = ["alice", "aghatta"];
console.log(array);

//adicionar elemento no final do array - push
array.push("arthur", "cecilia");
console.log(array);

//adicionar elemento no comeco do array - unshift
array.unshift("shirley");
console.log(array);

// remove ultimo e armazena - pop
let elementoRemovido = array.pop();
console.log(array);
console.log(elementoRemovido);

//remove primeiro elemento e armazena - shift
elementoRemovido = array.shift();
console.log(array);
console.log(elementoRemovido);

//pesquisar por um elemento - includes [boolean]
const contem = array.includes("milena");
console.log(contem);

//pesquisa pelo indice - indexOf
const indice = array.indexOf("nicolly");
console.log(indice);

//cortar - slice
const familia1 = array.slice(2, 5);
console.log(familia1);

//concatenar - concat
const familias = familia1.concat(familia2);
console.log(familias);

//substituir - splice
const substituido = array.splice(indice, 1, "nicolly e nanica");
console.log(array);
console.log(substituido);

//iterar
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log("elemento " + element + " esta na posicao = " + index);
  //console.log(element);
}
