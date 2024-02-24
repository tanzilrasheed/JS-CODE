const input = require('readline-sync');
let N = input.questionInt('enter a number'), i = 1, e = 0;
function strFn() 
{
    while (n > min) 
    {
        str += n, n--;
    }
    while (n <= N) {
        str += n, n++;
    }
    console.log(str);
}
while (i > 0) {
    if (i == N) {
        e = 1;
    }
    var min = N - (i-1), str = '', n = N;
    strFn();
    if (e == 0) {
        i++;
    }
    else {
        i--;
    }
}