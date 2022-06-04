/* 2)      Construa uma função para mostrar o pagamento de comissão de vendedores de peças, 
levando-se em consideração que sua comissão será de 5% do total da venda e que você tem os seguintes dados:

a)       Identificação do vendedor //string

b)      Código da peça //number

c)       Preço unitário da peça //number 4 reais

d)      Quantidade vendida //number  2 peças  quantidade vendida * preço = 8 

*/

function payment (){

    let identification = prompt('Identificação do Vendedor: ');
    let codigoPeca = prompt('Código da Peça: ');
    
    let precoPeca = (prompt('Preço da Peça: ').toString().replace(",", "."));
    let conversao = parseFloat(precoPeca);
    let pecaVendida = prompt('Quantidade de peça(s): ');

    let total = conversao * pecaVendida;

    let comissao = total*5/100;
    let comissao1 = comissao.toFixed(2);

    return `${identification}, sua comissão nessa venda foi de R$${comissao1.toString().replace(".", ",")}.`
}
console.log(payment())