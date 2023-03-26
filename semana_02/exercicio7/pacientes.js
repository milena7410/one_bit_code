let opcoes = "";
const fila = [];

do {
  let paciente = "";
  for (let i = 0; i < fila.length; i++) {
    //corrigir para comecar do 1 ao inves do 0
    paciente += i + 1 + fila[i] + "\n";

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
        alert("o paciente " + consultarPaciente + " sera consultado");
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
