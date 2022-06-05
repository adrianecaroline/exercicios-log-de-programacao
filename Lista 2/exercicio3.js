//3 

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
