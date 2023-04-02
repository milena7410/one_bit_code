let opcoes = "";
const pi = 3.14;

function areaTriangulo(base, altura) {
  const base = prompt("digite a base:");
  const altura = prompt("digite a base:");
  let resultado = (base * altura) / 2;
}

function areaRetangulo(base, altura) {
  const base = prompt("digite a base:");
  const altura = prompt("digite a base:");
  resultado = (base * altura) / 2;
}

function areaQudrado(lado) {
  const base = prompt("digite a base:");
  const altura = prompt("digite a base:");
  resultado = (base * altura) / 2;
}

function areaTrapezio(base1, base2, altura) {
  const base = prompt("digite a base:");
  const altura = prompt("digite a base:");
  resultado = (base * altura) / 2;
}

function areaCirculo(pi, raio) {
  const base = prompt("digite a base:");
  const altura = prompt("digite a base:");
  resultado = (base * altura) / 2;
}

do {
  opcoes = prompt(
    "=========== MENU ===========\n o que deseja calular:\n" +
      "\n" +
      "1. Area do triangulo\n 2. Area do retangulo\n 3. Area do quadrado\n 4. Area do trapezio\n 5. Area do circulo\n 6. Sair"
  );

  // opcoes
  switch (opcoes) {
    case "1":
      alert(areaTriangulo(resultado));
      break;

    default:
      alert("opcao invalida");
      break;
  }
} while (opcoes !== "6");
