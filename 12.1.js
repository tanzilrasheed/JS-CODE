const input = require('readline-sync');
let N = input.question('enter a number');
let i = 1, c = 1;
while (i <= N) {
    var j = 1, str = '';
    while (j <= c) {
        str += '*', j++;
    }
    c += 2;
    i++;
    console.log(str);
}