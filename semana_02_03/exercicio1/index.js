const ano = 2023;
let nome = window.prompt("Insira seu nome:");
let sobrenome = window.prompt("Insira seu sobrenome:");
let estudo = window.prompt("Insira seu campo de estudos:");
let nascimento = window.prompt("Insira o ano do seu nascimento:");
let idade = ano - nascimento;
window.alert(
  "Ola seja bem vindo (a), " +
    nome +
    " " +
    sobrenome +
    " " +
    "\nseu campo de estudos e: " +
    estudo +
    " " +
    "\nIdade: " +
    idade
);
