const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input);
let res = 1;
for (i = 1; i <= N; i++) {
  res *= i;
}
console.log(res);
