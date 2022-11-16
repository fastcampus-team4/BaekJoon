// https://www.acmicpc.net/problem/23825
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const n = input[0];
const m = input[1];
const s = Math.floor(n / 2);
const a = Math.floor(m / 2);
if (s === a) {
  console.log(s);
} else {
  if (s > a) {
    console.log(a);
  } else {
    console.log(s);
  }
}
