// https://www.acmicpc.net/problem/4458
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());

for (let i = 0; i < n; i++) {
  let arr = input[i][0].toUpperCase() + input[i].slice(1);
  console.log(arr);
}
