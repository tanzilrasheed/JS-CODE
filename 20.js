const input = require('readline-sync');
let N = input.questionInt('enter length for the array:'), inx = 0;
const Arr = [];
while (inx < N)
{
    Arr[inx] = input.questionInt('enter a number:');
    inx++;
}
let M = input.questionInt('enter index num for insertion:');
while (inx > M-1)
{
    Arr[inx] = Arr[inx-1];
    inx--;
}
Arr[M-1] = input.questionInt('enter a value for index '+M+':');
inx = 0;
while (inx <= N)
{
    console.log(Arr[inx]), inx++;
}