const input = require('readline-sync');
let N = input.questionInt('enter a binary number: '), i = 0;
var n = N;
const B = [];
d = 0;
while (n > 0)
{
    d++;
    n = Math.floor(n/10);
}
n = N;
i = d - 1;
while (i >= 0)
{
    B[i] = n % 10;
    n = Math.floor(n/10);
    i--;
}
// counting maximum repetition of 1
i = 0;
var max = 0;
while (i < d)
{
    count = 0;
    while (B[i] == 1)
    {
        i++;
        count++;
    }

    if (count > max)
    {
        max = count;
    }
    i++;
}
e = 0;
i  = 0;
while (i < d)
{
    if (B[i] > 1)
    {
        e = 1;
        break;
    }
    i++;
}
if (e == 0)
{
    console.log('maximum number of consecutive \'1\' are : ' + max);
}
else 
{
    console.log('invalid, please re-enter, and enter under 16 digit')
}