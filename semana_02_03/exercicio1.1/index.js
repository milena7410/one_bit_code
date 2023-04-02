const a = window.prompt("Digite um numero:");
const b = window.prompt("Digite outro numero:");

// transformar
const num1 = parseFloat(a);
const num2 = parseFloat(b);

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;

window.alert(
  "Resultados: \n" +
    "soma: " +
    soma +
    "\n" +
    "subtracao: " +
    subtracao +
    "\n" +
    "multiplicacao: " +
    multiplicacao +
    "\n" +
    "divisao: " +
    divisao
);
