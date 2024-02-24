const input = require('readline-sync');
var i = 0;
const A = [], B = [], C = [];
//function for taking array from user
function int(a, l) 
{
    while (i < l)
    {
        a[i] = input.questionInt('enter element of array ');
        i++;
    }
}
// taking first and second array
let M = input.questionInt('enter length of first array: ')
int(A, M);
N = input.questionInt('enter length of second array: ');
i = 0;
int(B, N);
//comparing and making a merged array and printing it's elements
i = 0;
var a = 0, b = 0;
while (i < M + N)
while (i < M + N)
{
    if (a < M)
    {
        if (b < N)
        {
            if (A[a] < B[b])
            {
                C[i] = A[a], a++;
            }
            else
            {
                C[i] = B[b], b++;
            }
        }
        else
        {
            C[i] = A[a];
            a++;
        }
    }
    else
    {
        C[i] = B[b], b++;
    }
    console.log(C[i]);
    i++;
}