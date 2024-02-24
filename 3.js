const input = require('readline-sync');
let a = input.questionInt("enter"), b = input.questionInt("enter"), c = input.questionInt("enter"), d = input.questionInt("enter");
if (a>b) {
  var M = a, Min = b;
}
else {
  var M = b, Min = a;
}
if (c>d) {
  var M1 = c, Min1 = d;
}
else {
  var M1 = d, Min1 = c;
}
if (M1>M) {
  var Min2 = Min1, Min3 = M;
}
else {
  var Min2 = Min, Min3 = M1;
}
if (Min2>Min3) {
  var TM = Min3; 
}
else {
  var TM = Min2;
}
if (TM>Min) {
  console.log(TM);
}
else {
  console.log(Min);
}