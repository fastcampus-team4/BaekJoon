// https://www.acmicpc.net/problem/25704
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const n = input[0];
const p = input[1];

function discount(n, p) {
  let price = [];
  if (n < 5) price.push(p);
  if (n >= 5) price.push(p - 500);
  if (n >= 10) price.push(p * (1 - 0.1));
  if (n >= 15) price.push(p - 2000);
  if (n >= 20) price.push(p * (1 - 0.25));
  return Math.min(...price);
}

function solution(n, p) {
  let answer = discount(n, p);
  if (answer < 0) answer = 0;
  return answer;
}
console.log(solution(n, p));
