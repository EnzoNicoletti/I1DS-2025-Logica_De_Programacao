/**************************************************************************
                Lista de Exercícios 04
***************************************************************************/
// 1. Crie e imprima um vetor com 5 elementos numéricos.
var array = [6, 9, 4, 2, 0];
// 2. Imrpima na tela o 3º elemento do vetor.
console.log("O 3º elemento do vetor é:", array[2]);

// 3. Faça uma cópia do vetor original.
var copia = array.slice();
console.table(copia);

// 4. Altere o conteúdo do vetor cópia para que seus valores sejam o dobro dos valores do vetor original.
copia[0] = array[0] * 2;
copia[1] = array[1] * 2;
copia[2] = array[2] * 2;
copia[3] = array[3] * 2;
copia[4] = array[4] * 2;

// 5. Crie uma matriz 3x3.
var matriz = [
  [9, 8, 1],
  [4, 2, 5],
  [6, 7, 3],
];
// 6. Imprima os valores da diagonal principal.
console.table(matriz);
console.log(
  "A principal diagoal possui:",
  matriz[0][0],
  "|",
  matriz[1][1],
  "|",
  matriz[2][2]
);

console.log(2 + 2 * 4);
