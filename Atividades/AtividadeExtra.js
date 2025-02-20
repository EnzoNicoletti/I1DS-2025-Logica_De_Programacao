/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------ */
const parOuImpar = (numero) => {
  if (numero % 2 == 0) {
    return console.log(numero, "é par");
  } else {
    return console.log(numero, "é ímpar");
  }
};
parOuImpar(200);
console.log("-------------------------------------------------------");
/* 2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.


📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------ */
const tabuadaDo = (numero) => {
  console.log(numero, "x 1 =", numero * 1);
  console.log(numero, "x 2 =", numero * 2);
  console.log(numero, "x 3 =", numero * 3);
  console.log(numero, "x 4 =", numero * 4);
  console.log(numero, "x 5 =", numero * 5);
  console.log(numero, "x 6 =", numero * 6);
  console.log(numero, "x 7 =", numero * 7);
  console.log(numero, "x 8 =", numero * 8);
  console.log(numero, "x 9 =", numero * 9);
  console.log(numero, "x 10 =", numero * 10);
};
tabuadaDo(5);
console.log("-------------------------------------------------------");

/* 3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------*/
console.log("Fatorial de 8: 8! =", 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1);
console.log("-------------------------------------------------------");


/* 4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.


📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
------------------------------------------------------------------------ */
let numeros = [30, 60, 90, 120, 150];
console.log(
  "Soma =",
  numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4]
);
console.log("-------------------------------------------------------");


/* 5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.


📌 Exemplo:
Entrada: 8, 3, 5, 1, 9  
Saída: 1, 3, 5, 8, 9 
------------------------------------------------------------------------ */
let sequencia = [5,1,6,8,2,3,7,9,0,4];
console.table(sequencia);
console.log("-------------------------------------------------------");
console.log("Sequência ordenada em ordem crescente:");
sequencia.sort();
console.table(sequencia);
console.log("-------------------------------------------------------");