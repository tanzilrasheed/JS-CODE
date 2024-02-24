const input = require('readline-sync');
let N = input.questionInt('enter a number');
let i = 0;
while (N > 0) {
    var t = N - i, s = ''
    while (t > 0) {
        s += '* ';
        t--;
    }
    console.log(s), N--;
}