const input = require('readline-sync');
let num = input.questionInt('enter a number: '), f = 2;
while (num % f != 0) {
  f++;
}
if (num == f) {
  console.log('yes, it\'s a prime number');
}
else {
  console.log('not a prime number');
}