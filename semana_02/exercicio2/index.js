const n1 = window.prompt("Digite o nome do veiculo:");
const vel1 = window.prompt("Digite a velocidade do veiculo:");

const n2 = window.prompt("Digite o nome do veiculo:");
const vel2 = window.prompt("Digite a velocidade do veiculo:");

// tranformar string em numero
const v1 = parseFloat(vel1);
const v2 = parseFloat(vel2);

if (v1 > v2) {
  alert("veiculo" + " " + n1 + " " + "mais rapido");
} else if (v1 < v2) {
  alert("veiculo" + " " + n2 + " " + "mais rapido");
} else if (v1 == v2) {
  alert(n1 + " " + "e" + " " + n2 + " " + "estao na mesma velocidade");
}
