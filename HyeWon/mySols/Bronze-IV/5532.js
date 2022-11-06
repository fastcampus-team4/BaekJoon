// https://www.acmicpc.net/problem/5532
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const L = Number(input.shift()); // 방학 일수
const A = Number(input.shift()); // 국어
const B = Number(input.shift()); // 수학
const C = Number(input.shift()); // 국어 최대로 풀 수 있는 페이지
const D = Number(input.shift()); // 수학 최대로 풀 수 있는 페이지

const korean = Math.ceil(A / C);
const math = Math.ceil(B / D);

let day;
if (korean >= math) {
  day = korean;
} else {
  day = math;
}
const answer = L - day;
console.log(answer);
