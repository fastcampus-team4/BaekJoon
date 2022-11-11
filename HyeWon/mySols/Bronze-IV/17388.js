// https://www.acmicpc.net/problem/17388
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

let min = Number.MAX_SAFE_INTEGER;
const s = input[0];
const p = input[1];
const k = input[2];
if (s + p + k >= 100) {
  console.log('OK');
} else {
  if (s < min) min = s;
  if (p < min) min = p;
  if (k < min) min = k;
  if (min === s) console.log('Soongsil');
  else if (min === p) console.log('Korea');
  else console.log('Hanyang');
}
