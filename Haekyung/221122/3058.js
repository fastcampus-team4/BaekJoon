const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  const array = input[i].trim().split(' ').map(Number);
  const res = [];
  for (let x of array) {
    if (x % 2 === 0) res.push(x);
  }
  console.log(`${res.reduce((a, b) => a + b, 0)} ${Math.min(...res)}`);
}
