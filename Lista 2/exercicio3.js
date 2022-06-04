//3 
/* 
 Sabendo que A=5, B=4 e C=3 e D=6, informe se as expressões abaixo são verdadeiras ou falsas.

a)       (A > C) AND (C <= D)                       

b)      (A + B) > 10 OR (A + B) = (C + D)                 

c)       (A >= C) AND (D >= C)                   

d)      (B > D) AND (A <= C)                     

e)      (D <= A) OR (C >= B)  
*/

function expressoes(){
    let a = 5, b = 4, c = 3, d = 6;
    
    let exp1 = (a > c) && (c <= d);
    let exp2 = (a + b) > 10 || (a + b) == (c + d);
    let exp3 = (a >= c) && (d >= c); 
    let exp4 = (b > d) && (a <= c);
    let exp5 = (d <= a) || (c >= b);
    
    return `${exp1}, ${exp2}, ${exp3}, ${exp4}, ${exp5}`
}
console.log(expressoes()) 