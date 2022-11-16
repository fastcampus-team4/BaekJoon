const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let answer;
let score = 0;
for (let i = 0; i < input.length; i++) {
  let A = input[i].split(' ').map(Number);
  let sum = A.reduce((a, b) => a + b, 0);
  if (sum > score) {
    score = sum;
    answer = i + 1;
  }
}
console.log(answer, score);
