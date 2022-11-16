const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const res = [];
for (let i = 0; i < N.length; i++) {
  if (N[i] % 2 === 1) res.push(N[i]);
}
const sum = res.reduce((a, b) => a + b, 0);
const min = Math.min(...res);

if (res.length === 0) console.log(-1);
else console.log(sum + '\n' + min);
