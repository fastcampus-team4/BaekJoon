// https://www.acmicpc.net/problem/7287
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const inputNum = Number(input);

let sum = 0;

for (let i = 1; i <= inputNum; i++) {
  sum += i;
}

console.log(sum);
