// https://www.acmicpc.net/problem/4153
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let x of input) {
  let arr = x.split(' ').map(Number);
  arr.sort((a, b) => a - b);
  if (x === '0 0 0') break;
  if (Math.pow(arr[2], 2) === Math.pow(arr[0], 2) + Math.pow(arr[1], 2)) console.log('right');
  else console.log('wrong');
}
