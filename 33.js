const input = require('readline-sync');
let M = input.questionInt('enter number of rows for array: ');
let N = input.questionInt('enter number of coulumns for array: ')
var i = 0;
const Arr1 = [];
function arrInput(arrName, rowsOfArr, coulumnsOfArr)
{
    while (i < rowsOfArr)
    {
        arrName[i] = [];
        var j = 0;
        while (j < coulumnsOfArr)
        {
            arrName[i][j] = input.questionInt('enter element for row ' + (i + 1) + ' and coulumn ' + (j +1) + ': ');
            j++;
        }
        i++;
    }
}
arrInput(Arr1, M, N);
i = 0;
const Arr2 = [];
arrInput(Arr2, M, N);
i = 0;
const sumArr = [];
while (i < M)
    {
        sumArr[i] = [];
        var j = 0;
        while (j < N)
        {
            sumArr[i][j] = Arr1[i][j] + Arr2[i][j];
            j++;
        }
        i++;
    }
console.log(sumArr);