/***************************************************** 
                Lista de Exercícios 
*****************************************************/
/*  
1. Realize as seguintes instruções: - Crie uma variável texto e armazene o nome de uma pessoa - Crie uma variável numérica e armazene o ano de nascimento - Escreva "Nome da pessoa" nasceu em "ano de nascimento" - Calcule a idade da pessoa - Escreva "Nome da pessoa" tem "idade" anos 
2. Se um retângulo possui comprimento=12cm e largura=6cm, qual a sua área?  
3. E se adicionarmos uma dimensão altura=5cm, qual seria o volume?  
4. Se temos uma equação 2x² + 3x -1, qual seria o valor de delta?  
5. Um cliente fez um compra no valor de R$ 450,00 e obteve 3% de desconto. 
Qual o valor do desconto e o valor final da compra ?  
6. Um carro viaja por três horas e meia a uma velocidade média de 95 Km/h.  
Calcule a distância percorrida, sabendo que Vmedia = S/T 
*/

// 1.
let nome = "Selipe";
let nascimento = 2006;
let ano = 2025;
console.log(nome, "nasceu em", nascimento + ".");

let idade = ano - nascimento;
console.log(nome, "tem", idade, "anos.");

console.log("-----------------------------------------------------------");

// 2.
let width = 12;
let length = 6;
let area = width * length;
console.log(
  "A área de um retângulo de comprimento",
  width,
  "e largura",
  length,
  "é de:",
  area,
  "cm²"
);

// 3.
let height = 5;
let volume = area * height;
console.log(
  "O volume de um retângulo de comprimento",
  width,
  ", largura",
  length,
  ", e altura de",
  height,
  "é de:",
  volume,
  "cm³"
);

// 4.
console.log("-----------------------------------------------------------");
let a = 2;
let b = 3;
let c = -1;
let delta = b ** 2 - 4 * a * c;
console.log("O valor de delta é de:", delta);

// 5.
console.log("-----------------------------------------------------------");
let valor = 450;
let desconto = 3;
console.log(
  "O valor final da compra foi de:",
  valor - (desconto * valor) / 100,
  "R$"
);

// 6.
console.log("-----------------------------------------------------------");
let Tempo = 3.5;
let vMedia = 95;
console.log("A distância percorrida foi de:", Tempo * vMedia, "Km");
