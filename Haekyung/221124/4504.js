const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input[0];
for (let i = 1; i < input.length - 1; i++) {
  if (input[i] % n === 0) console.log(`${input[i]} is a multiple of ${n}.`);
  else console.log(`${input[i]} is NOT a multiple of ${n}.`);
}
