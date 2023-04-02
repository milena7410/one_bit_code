const matriz = [
  ["milena", "maykon", "zoro"],
  ["claudia", "tiago", "nicolly", "nanica"],
];
//console.log(matriz[1][0]);

console.table(matriz);

// iterar
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const element = matriz[i][j];
    //console.log("linha: " + i + " coluna: " + j + " " + element);
    //console.log(element);
  }
}
