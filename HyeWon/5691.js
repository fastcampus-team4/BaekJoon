// https://www.acmicpc.net/problem/5691
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let c = 0;
for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map(Number);
  arr.sort((a, b) => a - b);
  let [a, b] = [arr[0], arr[1]];
  if (a === 0 && b === 0) break;
  let diff = b - a;
  c = a - diff;
  console.log(c);
}
