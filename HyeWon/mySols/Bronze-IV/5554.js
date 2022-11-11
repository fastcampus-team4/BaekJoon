// https://www.acmicpc.net/problem/5554
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;
for (let x of input) {
  sum += x;
}
const y = sum % 60;
const x = parseInt(sum / 60);
console.log(x);
console.log(y);
