const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const T = input[0];
for (i = 1; i <= T; i++) {
  let A = input[i].split(' ').map(Number)[0];
  let B = input[i].split(' ').map(Number)[1];
  console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}
