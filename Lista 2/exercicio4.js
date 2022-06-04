//4 
/* 
4)      Construa uma função que receba um número.

a)       Se positivo mostrar a informação de que ele é positivo.

b)      Se for negativo, mostrar a informação de que ele é negativo.
*/

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