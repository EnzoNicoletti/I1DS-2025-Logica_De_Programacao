/************************************************************
            Lista de Exercícios 07
*************************************************************/
/*
Dada a matriz abaixo, com o laço for, faça um programa em Javascript
que exiba ao usuário os elementos da sua diagonal principal.

|   3   5   8   |
|   1   9   2   |
|   7   1   4   |
*/

var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (let l = 0; l < matriz.length; l++) {
  for (let c = 0; c < matriz[0].length; c++) {
    l == c &&
      console.log(
        `O item na diagonal ${l},${c} da matriz possúi: ${matriz[l][c]}`
      );
  }
}

/*
Dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos por um valor x e exiba ao usuário a matriz antes e após a multiplicação.

|   3   5   8   |
|   1   9   2   |
|   7   1   4   |
*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
var mult = 4;
console.log(`Números da matriz antes da multiplicação:`);
console.table(matriz);
for (let l = 0; l < matriz.length; l++) {
  for (let c = 0; c < matriz[0].length; c++) {
    matriz[l][c] *= mult;
  }
}
console.log(`Números da matriz depois da multiplicação:`);
console.table(matriz);

//Faça um loop FOR onde apresente os números ímpares de 0 a 100
//Não pode ser resolvido com conta ou resto de divisão %.
for (let impar = 1; impar < 100; impar += 2) {
  console.log(impar);
}
