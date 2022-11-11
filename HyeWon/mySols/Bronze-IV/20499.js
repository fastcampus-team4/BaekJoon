// https://www.acmicpc.net/problem/20499
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('/').map(Number);

const k = input[0];
const d = input[1];
const a = input[2];
if (k + a < d || d === 0) {
  console.log('hasu');
} else {
  console.log('gosu');
}
