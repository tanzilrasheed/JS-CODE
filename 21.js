//Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.

//taking input in array:
const input = require('readline-sync');
let N = input.questionInt('enter length of array: '), inx = 0;
const Arr = [];
while (inx < N)
{
    Arr[inx] = input.questionInt('enter:'), inx++;
}
// comparing each element and sorting the array:
inx = 0;
while (inx < N)
{
    t = Arr[inx];
    var min = Arr[inx], c = inx, inx1 = inx +1;
    while (inx1 < N)
    {
        if (Arr[c] > Arr[inx1])
        {
            c = inx1;
        }
        inx1++;
    }
    Arr[inx] = Arr[c];
    Arr[c] = t;
    inx++;
    var count = 1;
}
//programme for counting repition of each element and printing numbers having one or more duplicates
inx = 0, inx1 = inx + 1, count = 1;
while (inx1 < N)
{
    while (Arr[inx] == Arr[inx1])
    {
        count++, inx1++;
    }
        if (count > 1)
    {
        console.log(Arr[inx]);
    }
    inx = inx1, inx1 = inx + 1;
    count = 1;
}