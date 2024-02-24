const input = require('readline-sync');
let N = input.questionInt('enter a number: '), i = 1, e1 = 0;
while (i > 0) {
    str = '', n = N + 1 - i, c = (N - i)*2 + 1, j = 1, e = 0, str = '';
    while (j <= c) {
        if (j % 2 == 0) {
            str += '_';
            j++;
        }
        if (j == 3) {
            n = N, e = 1;
        }
        str += n
        if (e == 0) {
            n++;
        }
        else {
            n--;
        }
        j ++;
    }
    console.log(str)
    if (i == N || e1 == 1) {
        i--, e1 = 1;
    }
    else {
        i++;
    }
}