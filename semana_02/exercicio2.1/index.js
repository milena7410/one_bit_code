const n1 = prompt("Digite o nome:");
const ataque = prompt("Poder de ataque:");
const n2 = prompt("Digite o nome de outro personagem");
const vida = prompt("Digite os pontos de vida: ");
const defesa = prompt("Pode de defesa:");
const escudo = prompt("Personagem possui escudo?");

// transformando
const poder_ataque = parseFloat(ataque);
const poder_defesa = parseFloat(defesa);

// regras
if (poder_ataque > poder_defesa) {
  const dano = console.log("Dano = " + " " + (poder_ataque - poder_defesa));
} else if (escudo === "sim") {
  const dano = console.log((poder_ataque - poder_defesa) / 2);
} else if (poder_ataque < poder_defesa) {
  const dano = console.log("Dano = 0");
}

const vida_atualizada = dano - vida;

alert("PERSONAGEM: " + " " + n1 + " " + "\nvida:" + vida_atualizada);
alert("PERSONAGEM: " + " " + n2 + " " + "\nvida:" + vida_atualizada);
