//3

function cotacao (x, y){
    let cotacaoDolar = parseFloat(x);
    let valorDolar = parseFloat(y);

    let reais = cotacaoDolar * valorDolar;

    return reais.toFixed(2)
}
console.log(cotacao(4.77, 50))

