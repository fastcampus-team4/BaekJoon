// https://www.acmicpc.net/problem/10797
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const carArr = input[1].split(' ').map(Number);
let cnt = 0;

for (let car of carArr) {
  if (n === car) {
    cnt++;
  }
}
console.log(cnt);
