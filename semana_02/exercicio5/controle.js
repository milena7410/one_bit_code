let saldo = parseFloat(prompt("Qual seu saldo?"));
let opcao = "";

do {
  alert("Seu saldo atualmente é de: " + " R$" + saldo);

  opcao = prompt(
    "Opcoes:" +
      "\nOpcao 1 = adicionar dinheiro" +
      "\nOpcao 2 = retirar dinheiro" +
      "\nOpcao 3 = sair"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Qual quantia deseja adicionar?"));
      alert("OK! Quantia adicionada" + "\nSaldo atual:" + "R$" + saldo);
      break;

    case "2":
      saldo -= parseFloat(prompt("Qual quantia deseja retirar?"));
      alert("OK! Quantia retirada" + "\nSaldo atual:" + "R$" + saldo);
      break;

    case "3":
      alert("Saindo... \nbye");
      break;
    default:
      alert("Opcao invalida...");
      break;
  }
} while (opcao !== "3");
