// https://www.acmicpc.net/problem/2903
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);
let dot = 0;
let num = 2;
// 점의 개수 : 4, 9, 25, 81, ...
// -> 2 ** 2, 3 ** 2, 5 ** 2, 9 ** 2, ...
// 2, 3, 5, 9
//  1, 2, 4, ..., 2의 제곱씩 증가
for (let i = 1; i <= n; i++) {
  num += Math.pow(2, i - 1);
  dot = Math.pow(num, 2);
}
console.log(dot);
