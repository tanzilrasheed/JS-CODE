const input = require('readline-sync');
let num = input.questionInt();
let digit = 1; pNum = 0, temp = num, digPlace = 1;
while (temp>9)
{
  digit++;
  temp = Math.floor(temp/10);
}
temp = num;
while (digit>0)
{
  pNum += (temp%10)*digPlace*10**(digit-1), digit--, temp = Math.floor(temp/10);
}
if (pNum==num) 
{
  console.log('yes');
}
else 
{
  console.log('no')
}