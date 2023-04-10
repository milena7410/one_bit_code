//objeto pessoa
let pessoa = {
  nome: "milena",
  sobrenome: "alegre",
  idade: 23,

  //metodo
  mensagemPadrao() {
    console.log("Ola, seja bem vindo(a) " + this.nome + " " + this.sobrenome);
  },
};

console.log(pessoa);
//chamar
pessoa.mensagemPadrao();
