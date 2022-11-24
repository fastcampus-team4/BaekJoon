// https://www.acmicpc.net/problem/2997
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const arr = input.sort((a, b) => a - b);

const d = Math.min(arr[1] - arr[0], arr[2] - arr[1]);

for (let x of arr) {
  let tmp = x;
  if (!arr.includes(tmp + d)) {
    console.log(tmp + d);
    break;
  }
}
