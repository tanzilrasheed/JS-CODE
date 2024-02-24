const input = require('readline-sync');
let N = input.questionInt('for how many numbers you want?: ');
if  (N >= 2) {
    let a = input.questionInt('enter a no.; ');
    var n = 3, max = a;
    var smax = input.questionInt('enter a number: ');
}
else {
    console.log('please enter atleast two numbers ')
}
while (n <= N) {
    let a = input.questionInt('enter one more no.; ')
    if (max > a) {
        if (smax > a) {
        }
        else {
            smax = a;
        }
    }
    else {
        smax = max;
        max = a;
    }
    n++;
}
console.log('second max =', smax);