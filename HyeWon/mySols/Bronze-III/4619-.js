// https://www.acmicpc.net/problem/4619
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let x of input) {
  let arr = x.split(' ').map(Number);
  const b = arr[0];
  const n = arr[1];
  if (b === 0 && n === 0) break;
  const root = Math.pow(b, 1 / n);
  const a1 = Math.ceil(root);
  const a2 = Math.floor(root);
  if (b - Math.pow(a1, n) > Math.pow(a2, n) - b) console.log(a1);
  else console.log(a2);
}
