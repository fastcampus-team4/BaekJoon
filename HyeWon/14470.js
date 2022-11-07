// https://www.acmicpc.net/problem/14470
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const a = input[0];
const b = input[1];
const c = input[2];
const d = input[3];
const e = input[4];
let answer = 0;

if (a < 0) {
  answer += Math.abs(a) * c + d + b * e;
} else if (a === 0) {
  answer += d + b * e;
} else {
  answer += (b - a) * e;
}
console.log(answer);
