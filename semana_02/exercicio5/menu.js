let opcao = "";

do {
  opcao = prompt(
    "selecione uma opacao" +
      "\nopcao 1 = pedir" +
      "\nopcao 2 = ver taxa" +
      "\nopcao 3 = horarios" +
      "\nopcao 4 = pagar" +
      "\nopcao 5 = encerrar"
  );

  switch (opcao) {
    case "1":
      alert("ok!");
      break;
    case "2":
      alert("ok!");
      break;
    case "3":
      alert("ok!");
      break;
    case "4":
      alert("ok!");
      break;
    case "5":
      alert("encerrando sistema...." + "\nbye");
      break;
    default:
      alert("opcao invalida");
      break;
  }
} while (opcao !== "5");
