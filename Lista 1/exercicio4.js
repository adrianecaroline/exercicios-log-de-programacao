//4
          
function expressoes (){
    let a = 3, b = 7, c = 4;
    
    let exp1 = (a + c) > b;
    let exp2 = b >= (a + 2);
    let exp3 = c == (b - a); 
    let exp4 = (b + a) <= c;
    let exp5 = (c + a) > b;
    
    return `${exp1}, ${exp2}, ${exp3}, ${exp4}, ${exp5}`
}
console.log(expressoes ()) 

