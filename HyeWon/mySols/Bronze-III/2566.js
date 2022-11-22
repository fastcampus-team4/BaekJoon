// https://www.acmicpc.net/problem/2566
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

let max = 0;
let x = 0;
let y = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (max < input[i][j]) {
      max = input[i][j];
      x = i;
      y = j;
    }
  }
}
console.log(max);
console.log(x + 1, y + 1);
