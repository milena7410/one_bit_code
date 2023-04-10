const pi = 3.14;

//funcoes
function areaTriangulo() {
  const base = prompt("digite a base:");
  const altura = prompt("digite a altura:");
  return (base * altura) / 2;
}

function areaRetangulo() {
  //areaTriangulo()
  const base = prompt("digite a base:");
  const altura = prompt("digite a altura:");
  return base * altura;
}

function areaQudrado() {
  const lado = prompt("digite o lado:");
  return lado * 2;
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt("digite a base maior:"));
  const baseMenor = parseFloat(prompt("digite a base menor:"));
  const altura = prompt("digite a altura:");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo() {
  const raio = prompt("digite o raio:");
  return pi * raio * 2;
}

//funcao pra exibir o menu
function exibirMenu() {
  return prompt(
    "=========== MENU ===========\n o que deseja calular:\n" +
      "\n" +
      "1. Area do triangulo\n" +
      "2. Area do retangulo\n" +
      "3. Area do quadrado\n" +
      "4. Area do trapezio\n" +
      "5. Area do circulo\n" +
      "6. Sair"
  );
}

//funcao para executar
function executar() {
  let opcoes = "";

  do {
    opcoes = exibirMenu();
    let resultado;

    // opcoes
    switch (opcoes) {
      case "1":
        resultado = areaTriangulo();
        break;

      case "2":
        resultado = areaRetangulo();
        break;

      case "3":
        resultado = areaQudrado();
        break;

      case "4":
        resultado = areaTrapezio();
        break;

      case "5":
        resultado = areaCirculo();
        break;

      case "6":
        alert("encerrando sistema.... bye");
        break;

      default:
        alert("opcao invalida");
        break;
    }
    if (resultado) {
      alert("o resultado e: " + resultado);
    }
  } while (opcoes !== "6");
}

//executar
executar();
