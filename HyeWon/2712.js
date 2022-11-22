// https://www.acmicpc.net/problem/2712
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const t = Number(input.shift());

for (let i = 0; i < t; i++) {
  const n = Number(input[i].trim().split(' ')[0]);
  const unit = input[i].trim().split(' ')[1];
  if (unit === 'kg') console.log((n * 2.2046).toFixed(4), 'lb');
  else if (unit === 'l') console.log((n * 0.2642).toFixed(4), 'g');
  else if (unit === 'lb') console.log((n * 0.4536).toFixed(4), 'kg');
  else console.log((n * 3.7854).toFixed(4), 'l');
}
