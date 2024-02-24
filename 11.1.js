const input = require('readline-sync');
let N = input.questionInt('enter a number: ')
let i = 1;
while (i <= N) {
  var c = 1, st = ''
  while (c <= i) {
    st += '* ', c++;
  }
  console.log(st);
  i++;
}