const input = require('readline-sync');
//var n is used for number and c for direction of increment NN represents the first index for each N's value
let N = input.questionInt('enter a number: '), i = 0, n = 1, NN = 0;
const A = [];
while (i < N)
{
    A[i] = [], i ++;
}
i = 0;
while (N > 0)
{
    var c = 1;
    while (c < 5)
    {
        i = NN, j = NN;
        while (c == 1 && j < N)
        {
            A[i][j] = n, n++, j++;
        }
        i = NN + 1, j = N - 1
        while (c == 2 && i < N)
        {
            j = N - 1;
            A[i][j] = n, n++, i++;
        }
        i = N - 1, j = N - 2;
        while (c == 3 && j >= NN)
        {
            i = N - 1;
            A[i][j] = n, n++, j--;
        }
        i = N - 2, j = NN;
        while (c == 4 && i > NN)
        {
            j = NN, A[i][j] = n, n++, i--;
        }
        c++;
    }
    N--, NN++;
}
console.log(A);