const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();

const res = [];
for (i = 0; i < N / 4; i++) {
  res.push('long');
}
console.log(res.join(' ') + ' ' + 'int');
