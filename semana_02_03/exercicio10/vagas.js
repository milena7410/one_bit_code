const vagas = [];

//funcao criar vaga
function criarVaga() {
  const novaVaga = {};
  novaVaga.nome = prompt("Digite o nome da vaga");
  novaVaga.descricao = prompt("Digite uma descricao sobre a vaga");
  novaVaga.data = prompt("digite uma data limite");

  const confirmar = confirm(
    "deseja salvar essa vaga?\n" +
      "\n nome: " +
      novaVaga.nome +
      "\n descicao: " +
      novaVaga.descricao +
      "\n data: " +
      novaVaga.data
  );

  if (confirmar) {
    vagas.push(novaVaga);
  }
}
//funcao visualizar vaga
function exibirElemento() {
  alert(novaVaga, novaVaga.nome[i]);
}
//funcao para listar vagas

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
        exibirElemento();
        break;

      case "2":
        criarVaga();
        break;

      default:
        break;
    }
  } while (opcoes !== "6");
}
executar();
