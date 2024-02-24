const input = require('readline-sync');
//taking input from the user and creating an array
let N = input.question('enter size of the array: '), i = 0;
const A = [];
while (i < N)
{
    A[i] = input.questionInt('enter: '), i++;
}
//making a sorted array from max to min
i = 0; while (i < N)
{
    var a = i + 1, max = A[i], m = i;
    while (a < N)
    {
        if (max < A[a])
        {
            max = A[a];
            var m = a;
        }
        a++;
    }
    A[m] = A[i];
    A[i] = max;
    i++;
}
// comparing and printing the pattern
i = 0;
var count = 0;
A[N] = 0;
while (count < N)
{
    count++;
    if (A[i] != A[i + 1])
    {
        var R = A[i] - A[i + 1];
    }
    while (R > 0)
    {
        console.log('* '.repeat(count));
        R--;
    }
    i++;
}