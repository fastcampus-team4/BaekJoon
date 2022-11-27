// https://www.acmicpc.net/problem/3053
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const t = Number(input.shift());

for (let i = 0; i < t; i++) {
  let s = input[i].split(' ');
  let sum = 0;
  for (let x of s) {
    for (let i = 65; i <= 90; i++) {
      if (!x.includes(String.fromCharCode(i))) {
        sum += i;
      }
    }
  }
  console.log(sum);
}
