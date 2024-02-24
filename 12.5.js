const input = require('readline-sync');
let N = input.questionInt('enter a number'), i = 1, e = 0;
function strFn() {
    var x = i - 1, z = N - 2*x, str = '';
    function inFn() {
        while (x > 0) {
            str += 'X', x--;
        }
    }
        inFn();
    while (z > 0) {
        str += 'O', z--;
    }
    x = i -1;
    inFn()
    console.log(str)
    if (e == 0) {
        i++;
    }
    else {
        i--;
    }
}
while (i < (N + 1)/2) {
    strFn();
}
e = 1;
while (i > 0) {
    strFn();
}