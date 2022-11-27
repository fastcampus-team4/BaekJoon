// https://www.acmicpc.net/problem/3460
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const t = input.shift();
let answer = [];
for (let i = 0; i < t; i++) {
  let n = input[i];
  let b = n.toString(2);
  b;
  for (let j = b.length - 1; j >= 0; j--) {
    if (b[j] === '1') answer.push(Math.abs(j - (b.length - 1)));
  }
}
console.log(answer.join(' '));
