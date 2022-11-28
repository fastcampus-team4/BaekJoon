// https://www.acmicpc.net/problem/4806
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
for (let x of input) {
  if (x === '') continue;
  answer++;
}
console.log(answer);
