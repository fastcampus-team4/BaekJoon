// https://www.acmicpc.net/problem/25377
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());
let min = Number.MAX_SAFE_INTEGER;
let flag = false;

for (let i = 0; i < n; i++) {
  if (input[i].split(' ').map(Number)[0] <= input[i].split(' ').map(Number)[1]) {
    min = Math.min(min, input[i].split(' ').map(Number)[1]);
    flag = true;
  }
}

if (flag === false) console.log(-1);
else console.log(min);
