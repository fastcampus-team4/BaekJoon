// https://www.acmicpc.net/problem/2884
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

let h = input[0];
let m = input[1];
m -= 45;
if (m < 0) {
  m += 60;
  h--;
  if (h === -1) h = 23;
}
console.log(`${h} ${m}`);
