// https://www.acmicpc.net/problem/4880
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let x of input) {
  if (x === '0 0 0') break;
  let arr = x.split(' ').map(Number);
  if (arr[1] - arr[0] === arr[2] - arr[1]) console.log(`AP ${arr[2] + arr[2] - arr[1]}`);
  else if (arr[1] / arr[0] === arr[2] / arr[1]) console.log(`GP ${arr[2] * (arr[2] / arr[1])}`);
}
