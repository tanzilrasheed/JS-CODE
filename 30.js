const input = require('readline-sync');
// taking an array as input from the user
let N = input.questionInt('enter lenngth of array: '), i = 0;
const Arr = [];
while (i < N)
{
    Arr[i] = input.questionInt('enter element for the array: ');
    i++;
}
// taking another input from the user and checking if the number is present in array or not and printing yes and no
i = 0;
let n = input.questionInt('enter a number to check if it is prresent in the array or not: ')
while (i < N && Arr[i] != n)
{
    i++;
}
if (i == N)
{
    console.log('no');
}
else
{
    console.log('yes');
}