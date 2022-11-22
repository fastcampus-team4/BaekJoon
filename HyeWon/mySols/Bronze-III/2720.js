// https://www.acmicpc.net/problem/2720
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const t = input.shift();
let c = 0;
let arr = new Array(4);
for (let i = 0; i < t; i++) {
  c = input[i];
  arr[0] = parseInt(c / 25);
  c = c % 25;
  arr[1] = parseInt(c / 10);
  c = c % 10;
  arr[2] = parseInt(c / 5);
  c = c % 5;
  arr[3] = c;
  console.log(arr.join(' '));
}
