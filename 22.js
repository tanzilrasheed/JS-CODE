const input = require('readline-sync');
let N = input.questionInt('enter a number: ');
const A = [0, 1];
const B = [0, 1]
var i = 1;
while (i <= N + 1 && N != 1)
{
    var j = 1, str = '';
    A[i + 1] = 0;
    while (j <= i)
    {
        B[j] = A[j] + A[j - 1];
        str += B[j] + ' ';
        j++;
    }
    console.log(str);
    j = 0;
    while (j <= i)
    {
        A[j] = B[j];
        j++;
    }
    i++;
}
if (N == 1)
{
    console.log('1');
}