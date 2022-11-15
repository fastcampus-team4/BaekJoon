// https://www.acmicpc.net/problem/1267
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.shift());
let arr = input[0].split(' ').map((e) => Number(e));
let y = 0;
let m = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] % 30 === 0) {
    y += Math.ceil(arr[i] / 30 + 1) * 10;
  } else {
    y += Math.ceil(arr[i] / 30) * 10;
  }
  if (arr[i] % 60 === 0) {
    m += Math.ceil(arr[i] / 60 + 1) * 15;
  } else {
    m += Math.ceil(arr[i] / 60) * 15;
  }
}

if (y === m) console.log(`Y M ${y}`);
else if (y < m) console.log(`Y ${y}`);
else console.log(`M ${m}`);
