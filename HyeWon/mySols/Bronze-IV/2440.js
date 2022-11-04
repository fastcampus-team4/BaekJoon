// https://www.acmicpc.net/problem/2440
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const N = Number(input);

for (let i = 0; i < N; i++) {
  let star = '';
  for (let j = N - 1; j >= 0; j--) {
    star += j >= i ? '*' : ' ';
  }
  console.log(star);
}

// sol 2
const num = Number(input);
let result = '';

for (let i = num; i > 0; i--) {
  result += '*'.repeat(i) + '\n';
}

console.log(result);
