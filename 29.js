//taking an array as input
const input = require('readline-sync');
let N = input.questionInt('enter length for the array'), i = 0;
const A = [];
while (i < N)
{
    A[i] = input.questionInt('enter element ' + (i + 1) + ' of the array: '), i++;
}
//takinng an input k from user for rotating the array with a gap of K
let K = input.questionInt('enter value of K(to rotate the array with gapp of k): ');
var a = 0;
while (N > 0)
{
    a = a + (K - 1);
    while (a >= N)
    {
        a -= N;
    }
    console.log(A[a]);
    N--;
    var t = a;
    while (t < N)
    {
        A[t] = A[t + 1];
        t++;
    }
}