const input = require('readline-sync');
let X = input.questionInt('enter value of X: ');
let N = input.questionInt('enter value of N: '), i = 1, p = 1, sum = 0;
while (i <= N)
{
    var n = p, F = 1;
    while (n > 0)
    {
        F *= n, n--;
    }
    if (i % 2 == 0)
    {
        sum -= (X**p)/F;
    }
    else
    {
        sum += (X ** p)/F;
    }
    p += 2, i++;
}
console.log(sum);