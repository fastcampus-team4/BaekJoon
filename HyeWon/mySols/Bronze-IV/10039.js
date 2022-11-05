// https://www.acmicpc.net/problem/10039
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let sum = 0;
for (let x of input) {
  if (x < 40) {
    x = 40;
  }
  sum += x;
}
const answer = parseInt(sum / 5);
console.log(answer);
