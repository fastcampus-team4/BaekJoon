// https://www.acmicpc.net/problem/1247
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
console.log(input);
for (let i = 0; i < 3; i++) {
  let n = input.shift();
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(input.shift());
  }
  let s = arr.reduce((acc, cur) => acc + cur, 0);
  if (s === 0) console.log(0);
  else if (s > 0) console.log('+');
  else if (s < 0) console.log('-');
}
