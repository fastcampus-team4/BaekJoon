// https://www.acmicpc.net/problem/2783
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const t = input.shift().split(' ').map(Number);
let gimbab = (1000 / t[1]) * t[0];
const n = input.shift();
for (let i = 0; i < n; i++) {
  const arr = input[i].split(' ').map(Number);
  let answer = (1000 / arr[1]) * arr[0];
  gimbab = Math.min(gimbab, answer);
}
console.log(gimbab.toFixed(2));
