// https://www.acmicpc.net/problem/25314
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const N = Number(input);
let answer = '';

for (let i = 0; i < N / 4; i++) {
  answer += 'long ';
}
answer += 'int';

console.log(answer);
