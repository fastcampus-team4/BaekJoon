// https://www.acmicpc.net/problem/2953
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let max = Number.MIN_SAFE_INTEGER;
let idx = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map(Number);
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  if (max < sum) {
    max = sum;
    idx = i + 1;
  }
}
console.log(idx, max);
