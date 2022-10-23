// https://www.acmicpc.net/problem/2438

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString();

const n = Number(input);
let star = '';

for (let i = 0; i < n; i++) {
  star += '*';
  console.log(star);
}
