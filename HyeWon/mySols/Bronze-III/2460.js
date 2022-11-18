// https://www.acmicpc.net/problem/2460
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let num = 0;
let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map(Number);
  num += arr[1] - arr[0];
  max = Math.max(max, num);
}
console.log(max);
