const input = require('readline-sync');
let N = input.questionInt('enter total numbers: ');
const A = [];
let inx = 0;
while (inx < N)
{
    A[inx] = input.questionInt(), inx++;
}
let M = input.questionInt('enter index you want to delete: ');
inx = M;
while (inx < N) 
{
    A[inx-1] = A[inx], inx++;
}
inx = 0;
while (inx < N - 1)
{
    console.log(A[inx]);
    inx++;
}