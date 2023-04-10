function calculo(a, b, operacao) {
  console.log("iniciando calculo...");
  const resultado = operacao(a, b);
  return resultado;
}

//utilizando funcao anonima
console.log(
  calculo(3, 5, function (y, z) {
    return y + z;
  })
);

//========================

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const listaCompras = [
  "desodobrante",
  "tira pelo",
  "gilete",
  "enxaguante bucal",
  "po descolorante",
];

for (let index = 0; index < listaCompras.length; index++) {
  exibirElemento(listaCompras[index], [index], listaCompras);
}

//forEach -> para cada
//listaCompras.forEach(exibirElemento);

//map = cria nova array mapeando uma ja existente

const personagens = [
  { nivel: 10, nome: "Hermione", casa: "Grifinoria", classe: "Trouxa" },
  { nivel: 0, nome: "Harry Potter", casa: "Grifinoria", classe: "Bruxo" },
  { nivel: 6, nome: "Ronny", casa: "Grifinoria", classe: "Mestico" },
  { nivel: 8, nome: "Cedrico", casa: "Grifinoria", classe: "Bruxo" },
  { nivel: 7, nome: "Malfoy", casa: "Sonserina", classe: "Mestico" },
];

//como seria manualmente o map
// const nomes = [];
// for (let index = 0; index < personagens.length; index++) {
//   nomes.push(personagens[index].nome);
// }

//o que ta em laranjado podia ser outro nome!!!
const nomes = personagens.map(function (nome) {
  return nome.nome;
});

// console.log(nomes);
// console.log(personagens);

// filter
// como seria manualmente o filter
// const classes = [];

// for (let index = 0; index < personagens.length; index++) {
//   if (personagens[index].classe === "Trouxa") {
//     classes.push(personagens[index]);
//   }
// }

const classes = personagens.filter(function (tipo) {
  return tipo.classe === "Trouxa";
});

//console.log(classes);

//reduce = transforma o array

const nivelTotal = personagens.reduce(function (valorAcumulado, somaFinal) {
  return valorAcumulado + somaFinal.nivel;
}, 0); //0 e para dizer com quantos o valor acumulado vai iniciar

//console.log(nivelTotal);

//reduce bom para agrupar
const racas = personagens.reduce(function (categorias, tipo) {
  //verificar se o vlr acumulado na chave personagem.classe
  if (categorias[tipo.classe]) {
    categorias[tipo.classe].push(tipo);
  } else {
    categorias[tipo.classe] = [tipo];
  }
  return categorias;
}, {});

console.log(racas);

//sort -> unico que altera o array original (dica: usar slice para criar outro array)
personagens.sort(function (a, b) {
  return a.nivel - b.nivel; //ordem crescente
  //return b.nivel - a.nivel; //ordem descrescente
});

console.log(personagens);
