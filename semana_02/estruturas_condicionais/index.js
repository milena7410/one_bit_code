const valor = prompt("Digite o valor em metros:");

const uni = window.prompt(
  "Digite a opcao em metros para conversao \n opcoes: \nmm \ncm \ndm \ndam \nhm \nkm "
);

const valorFinal = parseFloat(valor);

switch (uni) {
  case "mm":
    alert("o resultado e: " + valorFinal * 1000);
    break;
  case "cm":
    alert("o resultado e: " + valorFinal * 100);
    break;
  case "dm":
    alert("o resultado e: " + valorFinal * 10);
    break;
  case "dam":
    alert("o resultado e: " + valorFinal / 10);
    break;
  case "hm":
    alert("o resultado e: " + valorFinal / 100);
    break;
  case "km":
    alert("o resultado e: " + valorFinal / 1000);
    break;
  default:
    alert("escolha outra opcao de conversao!");
    break;
}
3;
3;
