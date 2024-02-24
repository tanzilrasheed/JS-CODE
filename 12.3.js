const input = require('readline-sync');
let N = input.questionInt('enter a number'), i = 1, e = 0;
function strFn() {
    while (j <= i) {
        str += '*';
        j++;
    }
}
while (i > 0) {
    str = '', j = 1;
    if (i == N) {
        i = 2*N, e = 1;
        strFn();
        console.log(str);
        i = N-1;
    }
    else {
        strFn(j, str);
        console.log(str + ' ' + str)
        if (e == 0) {
            i++;
        }
        else {
            i--;
        }
    }
}