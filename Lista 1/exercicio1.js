// 1 

function shopping(a, b, x) {
    let codigoPeca = parseInt(a);
    let valorPeca = parseFloat(b);
    let quantPeca = parseInt(x);

    let totalPeca = quantPeca * valorPeca;
    let total = `O código da peça: ${a} \nValor total R$${totalPeca}`;

    return total
}
console.log(shopping(335, 25.50, 2));