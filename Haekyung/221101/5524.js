const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');
const res = [];
for (i = 1; i <= N[0]; i++) {
  res.push(`${N[i].trim().toLowerCase()}`);
}
console.log(res.join('\n'));
