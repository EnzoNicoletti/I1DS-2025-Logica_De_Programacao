function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());
//Criando uma função que soma dois valores e retorna o resultado
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5 + 3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6.5, 2.12));

var v1 = 9;
var v2 = 6;
console.log("v1 + v2 =", somar(v1, v2));

//Criando uma função que escreve "Bom dia!"
function bomDia(nome) {
  console.log("Bom dia,", nome,"!");
}

bomDia("Enzo");

//Criando uma função que calcula e retorna o desconto em uma venda
function desconto(valor, valorDesconto){
    return valor * valorDesconto / 100;
}

//console.log("O desconto do produto no valor de R$100,00 é R$", desconto(100));
var totalPedido = 300;
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("-------------------------------------------------------------------------");
console.log("Total do pedido: R$", totalPedido);
console.log("Total dos descontos: R$", totalDesconto);
console.log("Valor líquido: R$", valorFinal);
console.log("-------------------------------------------------------------------------");

//Criando uma função que apresenta pessoas!
const apresentaPessoas = (nomePessoa, idade, cidade) => {
    //Apresento a vocês: "Nome_Pessoa", que tem "XX" anos e mora em "Cidade"
    console.log("Apresento a vocês:", nomePessoa, ", que tem ",idade , "anos e mora em ", cidade);
}

apresentaPessoas("Zuleika", 19,"Brotas");
apresentaPessoas("Pafúncio", 21, "Jaú");
apresentaPessoas("Epaminondas", 16, "Barra Bonita");
