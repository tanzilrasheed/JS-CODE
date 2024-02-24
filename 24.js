/*Write a program that rotates the elements of a list so that the elements at the first index move
to the second elements at the second index move to the third and so on. The last element moves at
 the first index. (Take array and no_of_rotations from the user)*/



//taking input from user and storing elements in array
const Input = require('readline-sync');
let n = Input.questionInt('enter to total length: '), i = 0;
const A = [];
while (i < n)
{
    A[i] = Input.questionInt('enter element '+ (i + 1) + ':' );
    i++;
}
// taking input for rotation and rotating the array
let r = Input.questionInt('enter no. of rotation: ');
while (r > 0)
{
    var t = A[n - 1];
    i = n - 1;
    while (i > 0)
    {
        A[i] = A[i - 1];
        i--;
    }
    A[0] = t;
    r--;
}
//printing the array
i = 0;
while (i < n)
{
    console.log(A[i]);
    i++;
}