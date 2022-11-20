const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [A, B] = input[0].split(' ').map(Number);
const [C, D] = input[1].split(' ').map(Number);
const caseNum = [A / C + B / D, C / D + A / B, D / B + C / A, B / A + D / C];
let [res, num] = [0, 0];
for (let i = 0; i < caseNum.length; i++) {
  if (caseNum[i] > res) {
    res = caseNum[i];
    num = i;
  }
}
console.log(num);
