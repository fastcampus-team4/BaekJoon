// https://www.acmicpc.net/problem/25625
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const x = input[0];
const y = input[1];
if (x > y) {
  console.log(x + y);
} else {
  console.log(y - x);
}
