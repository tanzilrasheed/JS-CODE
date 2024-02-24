const input = require("readline-sync");
let N = input.questionInt('enter a number: '),k=0;
// let n = 1;
// let i = 1;
// while (i <= N) {
//     var j = 1, str = ''
//     while (j <= i) {
//         str += n + ' ';
//         n++, j++;
//     }
//     console.log(str)
//     i++;
// }
for (let i=1; i<=N; i++)
{
    ing = '';
    for (let j=0; j<i; j++)
    {
        k+=1
        ing += k
    }
    console.log(ing);
}