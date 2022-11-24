// https://www.acmicpc.net/problem/3009
// https://www.acmicpc.net/problem/3004
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let x = [];
let y = [];
for (let s of input) {
  let arr = s.split(' ').map(Number);
  x.push(arr[0]);
  y.push(arr[1]);
}
x.sort((a, b) => a - b);
y.sort((a, b) => a - b);

let answerX = x[1] !== x[2] ? x[2] : x[0];
let answerY = y[1] !== y[2] ? y[2] : y[0];
console.log(`${answerX} ${answerY}`);
