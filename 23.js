const input = require('readline-sync');
let N = input.questionInt('enter: '), i = 0;
const A = [], B = [];
while (i < N)
{
    A[i] = input.questionInt('enter element of Array: ');
    B[i] = i;
    i++;
}
i = 0;
while (i < N)
{
    var j = 0, count = 0;
    while (j < N && i == B[i])
    {
        if (A[i] == A[j])
        {
            count++;
            B[j] = i;
        }
        j++;
    }
    if (count > 0)
    {
        console.log(A[i],'-', count)
    }
    i++;
}