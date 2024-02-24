const input = require('readline-sync');
let N = input.questionInt('enter: '), i = N, e = 0;
while (i <= N) {
    if (i == N || i == 1)
    {
        str = '', st = i, e++;
        while (st > 0)
        {
            str += '*', st--;
        }
        console.log(str)
    }
    else
    {
        console.log('**');
    }
    if (e < 2)
    {
        i--;
    }
    else 
    {
        i++;
    }
}