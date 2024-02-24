const input = require('readline-sync');
let N = input.questionInt('enter a number: ');
let i = 1;
while (i <= N) {
    var n = 1, str = '';
    while (n <= i) {
        str += n;
        n++;
    }
    n = i-1
    while (n > 0) {
        str += n, n--;
    }
    console.log(str);
    i++;
}