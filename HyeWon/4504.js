// https://www.acmicpc.net/problem/4504
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const n = input.shift();
for (let x of input) {
  if (x === 0) break;
  if (x % n === 0) console.log(`${x} is a multiple of ${n}.`);
  else console.log(`${x} is NOT a multiple of ${n}.`);
}
