// https://www.acmicpc.net/problem/3004
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = [];
const [a, b, c] = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

for (let x of input[1]) {
  if (x === 'A') answer.push(a);
  else if (x === 'B') answer.push(b);
  else if (x === 'C') answer.push(c);
}
console.log(answer.join(' '));
