const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let answer = 1;
for (let i = 1; i < input.length; i++) {
  const A = input[i].trim().split(' ').map(Number);
  if (A.indexOf(answer) === 0) answer = A[1];
  else if (A.indexOf(answer) === 1) answer = A[0];
}
console.log(answer);
