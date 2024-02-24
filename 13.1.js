const input = require('readline-sync');
let N = input.questionInt('enter: '), i = 1;
while (i <= N) {
    if (i == 1 || i == N) {
        var st = i, str = '';
        while (st > 0) {
            str += '*';
            st--;
        }
        console.log(str);
    }
    else {

        console.log('**');
    }
    i++;
}