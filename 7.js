const input = require('readline-sync');
let N = input.questionInt('enter a number; '), sum = 0, factor = 1;
while (factor < N) {
    if (N % factor == 0) {
        sum += factor, factor++;
    }
    else {
        factor++;
    }
}
if (sum == N) {
    console.log('yes');
}
else {
    console.log('no');
}