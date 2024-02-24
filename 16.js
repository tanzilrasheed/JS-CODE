const input = require('readline-sync');
let N = input.questionInt('enter: '), n = 2, count = 0;
while (n < N)
{
    var f = 2;
    while (n % f != 0)
    {
        f++;
    }
    if (n == f)
    {
        count++;
    }
    n++;
}
console.log(count);