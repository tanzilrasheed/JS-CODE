const input = require('readline-sync');
//taking input and creating an array
let N = input.questionInt('enter length of array: '), i = 0;
const  A = [];
while (i < N)
{
    A[i] = input.questionInt('enter element ' + (i + 1) + ' of array: '), i++;
}
//taking input for a number S to make a subarray and printing it
i = 0;
let S = input.questionInt('enter value for S for a contigous subarray; ')
var a = 1;
while (a < N)
{
    var sum = A[i];
    var subArr = [sum], subInx = 1;
    while (sum < 12)
    {
        sum += A[a];
        subArr[subInx] = A[a], a++, subInx++;
    }
    if (sum == S)
    {
        console.log(subArr);
        break;
    }
    i ++;
    a = i + 1;
}