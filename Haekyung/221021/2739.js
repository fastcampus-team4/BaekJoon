const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString();
const N = Number(input);
// console.log(N)
for (i = 1; i <= 9; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
