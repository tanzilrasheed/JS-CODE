const input = require('readline-sync');
let N = input.question('enter a number');
let i = 1, c = 1, e = 0;
while (i <= N) {
    if (i == N) {
        e = 1;
    }
    var j = 1, str = '';
    while (j <= c) {
        str += '*', j++;
    }
    if (e == 0) {
        c += 2;
        i++;
        console.log(str);
    }
    else {
        c -= 2, i--;
        console.log(str);
    }
    if (i == 0) {
        i = N + 1;
    }
}