//prime number

const input = require('readline-sync');
let x = input.questionInt('enter: ');
function prime(x)
{
    for (let i = 2; i <= Math.sqrt(x); i++)
    {
        if (x % i == 0)
        {
            return 'not prime number';
        }
    }
    if(x > 1)
    {
        return 'prime number';
    }
    else
    {
        return 'not prime number';
    }
}
console.log(prime(x));
