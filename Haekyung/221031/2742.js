const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');
const res = [];
for (i = Number(N); i > 0; i--) {
  res.push(i);
}
console.log(res.join('\n'));
