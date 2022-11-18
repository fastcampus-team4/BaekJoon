const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const q = input[1].split(' ').map(Number);
let answer = 0;
const res = [];
for (let i = 0; i < input[0]; i++) {
  if (q[i] === 1) answer++;
  else answer = 0;
  res.push(answer);
}
console.log(res.reduce((a, b) => a + b, 0));
