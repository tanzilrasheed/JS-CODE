const input = require('readline-sync');
let x = input.questionInt();
let n = input.questionInt();
let s = 0, a = 1, i = n;
while (i > 0) 
{
    s += (x**a)/a, i--, a++;
}
console.log(s);