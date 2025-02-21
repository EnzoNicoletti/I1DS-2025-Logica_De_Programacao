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
    l == c && console.log(`O item na diagonal ${l},${c} da matriz possúi: ${matriz[l][c]}`);
  }
}
