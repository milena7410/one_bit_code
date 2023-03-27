let fila = [];
let opcoes = "";

do {
  let paciente = "";
  for (let i = 0; i < fila.length; i++) {
    const inicio = i + 1;
    //corrigir para comecar do 1 ao inves do 0
    paciente = inicio + "-" + fila[i] + "\n";

    opcoes = prompt(
      "pacientes:\n" +
        paciente +
        "=================== MENU ======================\n" +
        " 1) NOVO PACIENTE \n 2) CONSULTAR PACIENTE\n 3) SAIR"
    );

    switch (opcoes) {
      case "1":
        let novoPaciente = prompt("digite o nome do paciente: ");
        fila.push(novoPaciente);
        alert(fila);
        break;

      case "2":
        let consultarPaciente = fila.shift();
        //verificar se esta vazio
        if (consultarPaciente) {
          alert("o paciente " + consultarPaciente + " sera consultado");
        } else {
          alert("nao ha pacientes na fila");
        }
        break;

      case "3":
        alert("encerrando sistema... bye");
        break;

      default:
        alert("opcao invalida, tente outra");
        break;
    }
  }
} while (
  //isso roda enquanto a entrada for diferente de 3
  opcoes !== "3"
);
