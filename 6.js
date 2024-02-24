//program for finding HCF and LCM
const input = require('readline-sync');
let a = input.questionInt('enter a number: '), b = input.question('enter a number: '), D = b, d = a;
while (D % d != 0) {
  var r = D % d;
  D = d, d = r;
}
var HCF = d, LCM = a*b/HCF;
console.log(HCF, LCM);