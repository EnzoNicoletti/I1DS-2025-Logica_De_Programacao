/**************************************************************
                    Exercícios Vetor Matriz
***************************************************************/
//Crie um vetor que receberá dados de um usuário.
var dados = [];
console.log("Favor informar seu nome:")
dados.push("Enzo");

console.table(dados);

console.log("Informe seu cpf:");
dados.push("420.690.980-50");

console.table(dados);

//Mostre ao usuário os dados e de um bom dia!
console.log("Bom dia",dados[0],"seu CPF é:",dados[1]);
