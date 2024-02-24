/*Take a number N from the user as input and repeatedly find the sum of the digits of the number till you get a single digit. 
Print that digit. Example: 678 -> 6+7+8 = 21 -> 2+1 = 3*/
const input = require('readline-sync');
let N = input.questionInt('enter: '), n = N;
while (N > 9)
{
    n = N, sum = 0;
    while (n > 0)
    {
        sum += n % 10;
        n = Math.floor(n/10);
    }
    N = sum;
}
console.log(N);