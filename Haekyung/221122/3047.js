const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [A, B, C] = input[0]
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const res = [];
input[1]
  .split('')
  .forEach((e) =>
    e === 'A' ? res.push(A) : e === 'B' ? res.push(B) : res.push(C)
  );
console.log(res.join(' '));
