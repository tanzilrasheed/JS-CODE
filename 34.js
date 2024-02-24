const input = require('readline-sync');
let N = input.question('enter an odd number'), i = 0;
const A = [];
let c = 0;
while (i < N)
{
    A[i] = [], i++;
}
i = 0;
var j = (N - 1) / 2, n = 1;
while (n <= (N**2))
{
    if (i < 0)
    {
        i = N - 1;
    }
    if (j >= N)
    {
        j = 0;
    }
    A[i][j] = n;
    if (n % N == 0)
    {
        i++;
    }
    else
    {
        i--, j++;
    }
    n++;
}
console.log(A);