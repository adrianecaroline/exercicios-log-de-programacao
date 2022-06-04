//2

function estoque_Medio (x, y){
    let quantMinima = parseInt(x);
    let quantMaxima = parseInt(y);
    let estoqueMedio = (quantMinima + quantMaxima)/2;

    return estoqueMedio
}
console.log(estoque_Medio(2, 10))