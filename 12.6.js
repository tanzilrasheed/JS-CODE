const input = require('readline-sync');
let N = input.questionInt('enter: '), i = 1;
while (i <= N) {
    var c = N + 1, n = N + 1 - i, e = 0, str = '';
    while (c > 0) {
        str += n;
        if (n == N + 1 || e == 1) {
            e = 1, n--;
        }
        else {
            n++;
        }
        c--;
    }
    console.log(str);
    i++;
}