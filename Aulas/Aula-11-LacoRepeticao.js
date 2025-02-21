//Laço de repetição - FOR

//O professor te colocou de castigo e pediu para você escrever mil vezes a frase "Eu vou prestar atenção às aulas."

//Escreva todos os números de 1 à 20 usando o comando for
for (let num = 1; num <= 20; num++) {
  console.log(num);
}
console.log("---------------------------------------------------");

//Mostre no console do sistema os números pares entre 1 e 20
for (let i = 1; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}
console.log("---------------------------------------------------");

//Dado um vetor, calcule e exiba o somatório de seus elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("A soma dos números é:", soma);
console.log("---------------------------------------------------");

//Dado um vetor, calcule e exiba a quantidade de pares e ímpares
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
var pares = 0;
var impares = 0;
for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? (pares += 1) : (impares += 1);
}

console.log("Número de pares:", pares);
console.log("Número de impares:", impares);
console.log("---------------------------------------------------");

//Dado um vetor, multiplique seus elementos por 3 com o laço for
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log("Números do vetor:");
console.table(numeros);
var mult = 3;
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= mult;
}
console.log("Vetor multiplicado por 3:");
console.table(numeros);
console.log("---------------------------------------------------");

//Dada uma matriz 2x3, mostre ao usuário todos os seus elementos com as respectivas posições
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
for (let l = 0; l < matriz.length; l++) {
  for (let c = 0; c < matriz[0].length; c++) {
    console.log(`Matriz[${l}][${c}] = ${matriz[l][c]}`);

  }
}

//Laço Repretição - While / Do While