let number = prompt("Escolha um numero de 1 ate 20::");

// string para concatenar
let result = "";

for (let i = 1; i <= 20; i++) {
  result += "-" + number + "x" + i + "=" + number * i + "\n";
}
alert("O resultado e: " + number + ":\n\n" + result);
