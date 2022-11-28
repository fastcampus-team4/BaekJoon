const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const res = [];
for (let i = 0; i < input.length - 1; i++) {
  let [a, b, c] = input[i].trim().split(' ').map(Number);
  if (a === -1) {
    a = c * c - b * b;
    if (a <= 0) {
      res.push(`Triangle #${i + 1}\nImpossible.`);
    } else {
      res.push(`Triangle #${i + 1}\na = ${Math.sqrt(a).toFixed(3)}`);
    }
  } else if (b === -1) {
    b = c * c - a * a;
    if (b <= 0) {
      res.push(`Triangle #${i + 1}\nImpossible.`);
    } else {
      res.push(`Triangle #${i + 1}\nb = ${Math.sqrt(b).toFixed(3)}`);
    }
  } else if (c === -1) {
    c = a * a + b * b;
    res.push(`Triangle #${i + 1}\nc = ${Math.sqrt(c).toFixed(3)}`);
  }
}
console.log(res.join('\n\n'));
