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
      const confirmar = confirm(
        "salvar esse imovel?\n" +
          "\n nome do proprietario: " +
          novoImovel.nomePropietario +
          "\n quantidade de quartos: " +
          novoImovel.qntQuarto +
          "\n quantidade de banheiros: " +
          novoImovel.qntBanheiro +
          "\n garagem: " +
          novoImovel.garagem
      );

      if (confirmar) {
        // adicionando imovel dentro do array
        imoveis.push(novoImovel);
      }
      break;

    case "2": //exibir
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "imovel: " +
            (i + 1) + //para comecar do 1
            "\n" +
            "proprietario: " +
            imoveis[i].nomePropietario +
            "\nquantidade de quarto: " +
            imoveis[i].qntQuarto +
            "\nquantidade de banheiro: " +
            imoveis[i].qntBanheiro +
            "\n garagem: " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("encerrando sistema... bye");
      break;

    default:
      alert("opcao invalida");
      break;
  }
} while (opcoes !== "3");
