const input = require('readline-sync');
let a = input.questionInt('enter first number');
let b = input.questionInt('enter second number');
var n = a, d1 = 0;
while (n > 0)
{
    d1++;
    n = Math.floor(n/10);
}
var n = b, d2 = 0;
while (n > 0)
{
    d2++;
    n = Math.floor(n/10);
}
const A = [], B = [], C = [];
var i = d1 - 1, j = d2 - 1, n = a;
while (i >= 0)
{
    A[i] = n % 10, n = Math.floor(n/10), i--;
}
n = b;
while (j >= 0)
{
    B[j] = n % 10, n = Math.floor(n/10), j--;
}
var aInx = d1 - 1, bInx = d2 - 1, i = aInx, j = bInx, c = i + j + 1, d = 0;
while (d <= c)
{
    C[d] = 0, d++;
}
while (a > 0)
{
    A[i] = a % 10, i--, a = Math.floor(a/10);
}
while (b > 0)
{
    B[j] = b % 10, j--, b = Math.floor(b/10);
}
j = bInx;
var carry = 0, z = 1;
while (j >= 0)
{
    i = aInx;
    while (i >= 0)
    {
        n = A[i] * B[j], i--;
    n = C[c] + carry + n, carry = 0;
    if (n > 9)
    {
        carry = Math.floor(n/10), n = n % 10
    }
    C[c] = n, c--;
    }
    while (carry > 0)
    {
        C[c] = carry % 10, carry = Math.floor(carry/10), c--;
    }
    j--;
    z++;
    c = d1 + d2 - z;
}
console.log(C);