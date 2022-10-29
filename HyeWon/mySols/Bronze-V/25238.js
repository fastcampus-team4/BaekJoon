// https://www.acmicpc.net/problem/25238
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const res = (a * (1 - b / 100)).toFixed(2);
console.log(res);

if (res >= 100) {
  console.log(0);
} else {
  console.log(1);
}
