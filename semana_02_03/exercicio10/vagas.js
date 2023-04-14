//funcao criar vaga
function criarVaga() {}

//funcao visualizar vaga
function verVaga() {}

//funcao para listar vagas
function listarVagas() {}

//menu
function exibirMenu() {
  return prompt(
    "========= MENU==========\n" +
      "1. Listar vagas disponiveis\n" +
      "2. Criar vaga\n" +
      "3. Visualizar vagas\n" +
      "4. Inscrever candidato a uma vaga\n" +
      "5. Excluir vaga\n" +
      "6. Sair\n"
  );
}

//roda de fato
function executar() {
  let opcoes = "";

  do {
    opcoes = exibirMenu();

    switch (opcoes) {
      case "1":
        break;

      default:
        break;
    }
  } while (condition);
}
