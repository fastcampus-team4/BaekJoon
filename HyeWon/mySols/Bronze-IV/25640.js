// https://www.acmicpc.net/problem/25640
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const mbti = input.shift();
const n = Number(input.shift());

let cnt = 0;
for (let x of input) {
  if (x === mbti) {
    cnt++;
  }
}
console.log(cnt);
