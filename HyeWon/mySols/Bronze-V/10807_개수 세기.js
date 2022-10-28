// https://www.acmicpc.net/problem/10807
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();

const v = input.pop();

const arr = input.toString().split(' ');

let num = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] === v) {
    num += 1;
  }
}
console.log(num);
