// https://www.acmicpc.net/problem/3034
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, w, h] = input.shift().split(' ').map(Number);
const cross = Math.sqrt(w ** 2 + h ** 2);
const arr = input.map(Number);

for (let i = 0; i < n; i++) {
  if (w >= arr[i] || h >= arr[i] || cross >= arr[i]) console.log('DA');
  else console.log('NE');
}
