/*********************************************************************
                        Lista de Exercícios 05
**********************************************************************/
// 1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idade.
function Idade(ano, nascimento){
    return ano - nascimento;
}
console.log("Enzo tem", Idade(2025, 2009), "anos.");
// 2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o veículo faz uma média de 12 Kms/L
function carro(combustivel){
    return 12 * combustivel;
}
var combustivel = 30;
console.log("Um carro com", combustivel,"L de combustível consegue percorrer:", carro(combustivel), "Km");