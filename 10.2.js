const input = require('readline-sync');
let X = input.questionInt('enter valueof X: ');
let N = input.questionInt('enter value of N: '), sum = 0, n = 1, i = 1;
while (i <= N)
{
    if (i % 2 == 0)
    {
        sum -= (X**n)/n;
    }
    else
    {
        sum += (X**n)/n;
    }
    n += 2, i++;
}
console.log(sum);
