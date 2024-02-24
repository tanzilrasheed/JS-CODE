const input = require('readline-sync');
//function to take input in an array
function arrInput (a, b)
{
    while (i < b)
    {
        a[i] = input.questionInt('enter element no. ' + (i + 1) + ': '), i++;
    }
}
//taking input in array
let M = input.questionInt('enter length of first array: ');
const A = [], B = [];
var i = 0;
arrInput(A, M);
i = 0;
let N = input.questionInt('enter length of second array: ')
arrInput(B, N);
//comparing and finding union and intersection
const U = [], I = [];
var a = 0, b = 0, u = 0;
i = 0;
while ((u + i) < M + N)
{
    if (a < M)
    {
        if (b < N)
        {
            if (A[a] < B[b])
            {
                U[u] = A[a], a++;
            }
            else
            {
                U[u] = B[b], b++;
            }
        }
        else
        {
            U[u] = A[a], a++;
        }
    }
    else
    {
        U[u] = B[b], b++;
    }
    if (U[u] == U[u - 1])
            {
                I[i] = U[u], i++;
            }
    else
    {
        u++;
    }
}
// printing union and intersection of both array
M = u, N = i, u = 0, i = 0;
console.log('Union of the two array: ')
while (u < M)
{
    console.log(U[u]);
    u++;
}
console.log('Intersection of the two array:');
while (i < N)
{
    console.log(I[i]);
    i++;
}