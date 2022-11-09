// https://www.acmicpc.net/problem/15552
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let t = Number(input[0]);
let answer = '';

for (let i = 1; i <= t; i++) {
  let n = input[i].split(' ');
  answer += Number(n[0]) + Number(n[1]) + '\n';
}

console.log(answer);
