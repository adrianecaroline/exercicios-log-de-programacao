/*let variable = 5 ;
let squaredNumber2 = Math.pow(variable,2);
console.log(squaredNumber2);*/

/*1)      Faça uma função que:

a)       Receba 4 (quatro) números

b)      Calcule o quadrado para cada um

c)       Somem todos e

d)      Mostre o resultado*/

function enquadrado (a, b, c, d){
    let num1 = parseFloat(Math.pow(a, 2));
    let num2 = parseFloat(Math.pow(b, 2));
    let num3 = parseFloat(Math.pow(c, 2));
    let num4 = parseFloat(Math.pow(d, 2));

    let soma = num1 + num2 + num3 + num4
    return `O resultado é: ${soma}`
}
console.log(enquadrado(2.1, 8, 25, 7))





