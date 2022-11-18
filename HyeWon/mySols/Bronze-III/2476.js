// https://www.acmicpc.net/problem/2476
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let n = Number(input.shift());

let max = Number.MIN_SAFE_INTEGER;
let sum = 0;
for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map(Number);
  if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === arr[2]) sum = 10000 + arr[0] * 1000;
  else if (arr[0] === arr[1]) sum = 1000 + arr[0] * 100;
  else if (arr[1] === arr[2]) sum = 1000 + arr[1] * 100;
  else if (arr[0] === arr[2]) sum = 1000 + arr[2] * 100;
  else sum = Math.max(arr[0], arr[1], arr[2]) * 100;
  max = Math.max(max, sum);
}
console.log(max);
