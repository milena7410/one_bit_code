let opcoes = "";
const pilha = ["a", "3", "5"];

do {
  alert("as cartas no monte sao: " + pilha);

  opcoes = prompt("1) adicionar carta\n 2) puxar carta\n 3) sair");
  switch (opcoes) {
    case "1":
      let cartaAdicionada = prompt("qual nome da carta a ser adicionada?");
      pilha.unshift(cartaAdicionada);
      break;

    case "2":
      let cartaRetirada = pilha.shift();
      alert("a carta removida foi: " + cartaRetirada);
      break;

    case "3":
      alert("encerrando sistema.... bye");

    default:
      break;
  }
} while (opcoes !== "3");
