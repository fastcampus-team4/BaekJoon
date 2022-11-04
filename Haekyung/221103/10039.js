const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (i = 0; i < N.length; i++) {
  if (N[i] < 40) {
    N[i] = 40;
  }
}
console.log(N.reduce((acc, cur) => acc + cur, 0) / N.length);
