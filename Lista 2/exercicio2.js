
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
