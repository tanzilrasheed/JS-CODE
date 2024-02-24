const input = require('readline-sync');
let N = input.questionInt('enter a number: ');
let i = 1, n = 2, str = '0';
while (i <= N) {
    console.log(str)
    str = '', str += n;
    n *= 2
    i++;
    c = 2;
    while (n != 0 && c <= i) {
        str += n;
        c++;
    }
    n *= 2;
}