// https://www.acmicpc.net/problem/2501
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const [n, k] = [input[0], input[1]];

let arr = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) arr.push(i);
}
if (arr.length < k) console.log(0);
else console.log(arr[k - 1]);
