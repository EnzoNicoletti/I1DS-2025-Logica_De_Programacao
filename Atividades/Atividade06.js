/****************************************************************
                        Lista de exercícios 06
*****************************************************************/
/*Crie uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem dizendo se ela pode votar no brasil..

Regras para votação no Brasil:
Menores de 16 anos: Não podem votar.
Entre 16 e 17 anos ou acima de 70 anos: O voto é facultativo.
Entre 18 e 70 anos: O voto é obrigatório.
*/
function Pessoa(nome, idade) {
  if (idade < 16) {
    return console.log(nome, "não pode votar no Brasil.");
  } else if (idade >= 18 && idade < 70) {
    return console.log("O voto de", nome, "é obrigatório no Brasil");
  } else {
    return console.log("O voto de", nome, "é facultativo no Brasil.");
  }
}
Pessoa("Enzo", 15);
Pessoa("Selipe", 18);
Pessoa("Carlos", 17);
Pessoa("Raimundo", 82);
Pessoa("Mario", 70);
