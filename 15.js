const input = require('readline-sync');
let M = input.questionInt('enter: '), N = input.questionInt('enter: ');
while (M <= N)
{
    var d = 1, n = M;
    while (n > 9)
    {
        d++, n = Math.floor(n/10);
    }
    var sum = 0, e = d;
    n = M;
    while (d > 0)
    {
        sum += (n%10)**e, n = Math.floor(n/10), d--;
    }
    if (sum == M)
    {
        console.log(M);
    }
    M++;
}