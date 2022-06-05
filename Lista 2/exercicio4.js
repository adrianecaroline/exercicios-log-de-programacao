//4 
function recebeNumero (value){
    let numero = value.toString().replace(",", ".");
    let consersao = parseFloat(numero);


    if(consersao >= 0){
        return `O valor ${consersao.toString().replace(".", ",")} é positivo`
    } else{
        return `O valor ${consersao.toString().replace(".", ",")} é negativo`
    }
}
console.log(recebeNumero('344,22'));
