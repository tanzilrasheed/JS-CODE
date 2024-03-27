//max in 3 numbers

const input = require("readline-sync");
let a = input.questionInt("enter a number"), 
b = input.questionInt('enter a number'), 
c = input.questionInt('enter a number');
if (a>b) {
  var m = a;
}
else {
  var m = b;
}
if (m>c) {
  console.log(m);
}
else {
  console.log(c);
}
