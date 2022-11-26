const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
let cntA = 0;
let cntB = 0;
for (let i = 1; i < input.length; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  if (A > B) cntA++;
  else if (B > A) cntB++;
}
console.log(cntA, cntB);
