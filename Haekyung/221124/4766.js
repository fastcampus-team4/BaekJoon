const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let prev = input[0];

for (let i = 1; i < input.length - 1; i++) {
  let cur = input[i];
  console.log((cur - prev).toFixed(2));
  prev = input[i];
}
