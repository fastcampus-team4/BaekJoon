// https://www.acmicpc.net/problem/2863
// https://www.acmicpc.net/problem/2566
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

input;
let a = input[0][0];
let b = input[0][1];
let c = input[1][0];
let d = input[1][1];
let arr = [a, b, c, d];
let tmp = 0;
let max = 0;
let location = 0;

for (let i = 0; i < arr.length; i++) {
  if (max < arr[0] / arr[3] + arr[1] / arr[2]) {
    max = arr[0] / arr[3] + arr[1] / arr[2];
    location = i;
  }
  tmp = arr[3];
  arr[3] = arr[1];
  arr[1] = arr[0];
  arr[0] = arr[2];
  arr[2] = tmp;
}
console.log(location);
