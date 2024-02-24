const input = require('readline-sync');
let N = input.questionInt('enter the length of array: '), i = 0;
const A = [];
while (i < N)
{
    A[i] = input.questionInt('enter a num: ');
    i++;
}
i = 0;
while (i < N)
{
    console.log('>'.repeat(A[i]));
    i++;
}