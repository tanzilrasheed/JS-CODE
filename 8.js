// const input = require('readline-sync');
// let n = input.questionInt('enter a num');
// let i = 2, c = 1;
// while (i <= n) {
//     let j = 2; var e = 0;
//     while (j < i) {
//         if ( i % j != 0) {
//             j++;
//             var e = 0;
//         }
//         else {
//             e = 1;
//             j = i;
//         }
//     }
//     if (e == 0) {
//         console.log(i)
//     }
//     i++;
// }
let input = require('readline-sync');
let N = input.questionInt('enter a number: '), n = 0;
if (N > 0) {
    let a = input.questionInt('enter a number: ');
    var max = a, min = a;
}
n++;
while (n < N) {
    var b = input.questionInt('enter a number: ');
    if (max < b) {
        max = b;
    }
    if (min > b) {
        min = b;
    }
    n++;
}
console.log("max: ", max, "min:", min);
