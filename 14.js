const input = require('readline-sync');
let N = input.questionInt('enter for how many numbers you want: '),c = 2, D = input.questionInt('enter 1st number: ');
while (c <= N)
{
    var d = input.questionInt('enter number '+ c + ': ');
    c++;
    while (D % d != 0)
    {
        var r = D % d;
        D = d, d = r;
    }
    D = d;
}
console.log(D);