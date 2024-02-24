/* 3) N=4
*
* *
* *
* *
* *
* *
*
*/
const input = require('readline-sync');
let N = input.questionInt('enter: '), i = 1;
while (i <= (N*2) - 1) {
    if (i == 1 || i == N*2 - 1) {
        console.log('*');
    }
    else {
        console.log('**');
    }
    i++;
}