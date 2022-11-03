// https://www.acmicpc.net/problem/2742
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const n = Number(input);
let answer = '';
for (let i = n; i >= 1; i--) {
  answer += `${i}\n`;
}
console.log(answer);
