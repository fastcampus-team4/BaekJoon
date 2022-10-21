const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString();
const N = Number(input);
const res = [];
for (i = 1; i <= N; i++) {
  res.push(i);
}
console.log(res.join('\n'));
