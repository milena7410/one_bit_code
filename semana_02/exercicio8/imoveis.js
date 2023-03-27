let opcoes = "";
const imoveis = [];

do {
  opcoes = prompt(
    "-> quantidade imoveis: " +
      imoveis.length +
      "\n \n" +
      " 1) salvar\n 2) exibir todos imoveis\n 3) sair"
  );

  switch (opcoes) {
    case "1": //salvar {como um objeto}
      const novoImovel = {};
      novoImovel.nomePropietario = prompt("Nome do proprietario: ");
      novoImovel.qntQuarto = prompt("Quantidade de quartos: ");
      novoImovel.qntBanheiro = prompt("Quantidade de banheiros: ");
      novoImovel.garagem = prompt("Possui garagem? ");

      // melhor interacao com usuario - utilizar confirm?

      // adicionando imovel dentro do array
      imoveis.push(novoImovel);
      break;
    case "2": //exibir
      for (let i = 0; i < imoveis.length; i++) {
        // for (let j = 0; j < imoveis[i].length; j++) {
        //const elemento = imoveis[i][j];
        // alert("listagem de todos imoveis: " + i + "dados: " + j + elemento);
        alert("imovel: " + (i + 1));
      }
      //}
      break;
    case "3":
      alert("encerrando sistema... bye");
      break;

    default:
      alert("opcao invalida");
      break;
  }
} while (opcoes !== "3");
