// https://www.acmicpc.net/problem/11720
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split('').map(Number);
let answer = 0;

for (let i = 0; i < n; i++) {
  answer += arr[i];
}
console.log(answer);
