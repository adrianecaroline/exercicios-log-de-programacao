
function enquadrado (a, b, c, d){
    let num1 = parseFloat(Math.pow(a, 2));
    let num2 = parseFloat(Math.pow(b, 2));
    let num3 = parseFloat(Math.pow(c, 2));
    let num4 = parseFloat(Math.pow(d, 2));

    let soma = num1 + num2 + num3 + num4
    return `O resultado é: ${soma}`
}
console.log(enquadrado(2.1, 8, 25, 7))





