const nome = prompt("Qual seu nome?");

// string vazia
let cidades = "";

// contagem
let contagem = 0;

let viagem = prompt("Voce ja visitou alguma cidade?");

while (viagem === "sim") {
  let cidade = prompt("qual nome da cidade?");
  // concatenando as cidades numa string...
  cidades += " - " + cidade + "\n";
  contagem++;
  let viagem = prompt("Voce ja visitou alguma outra cidade?");

  if (viagem === "nao") {
    break;
  }
}

alert(
  nome + " ja visitou: " + contagem + "\ncidades visitadas: " + "\n" + cidades
);
