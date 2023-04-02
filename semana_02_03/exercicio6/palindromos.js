alert("DESCOBRINDO PALINDROMOS");
const p = prompt("digite uma palavra::");
let pInvertida = "";

for (let i = p.length - 1; i >= 0; i--) {
  pInvertida += p[i];
}

if (p === pInvertida) {
  alert(p + " e um palindromo");
} else {
  alert(p + " nao e um palindromo\n\n" + p + " nao e igual a" + pInvertida);
}
