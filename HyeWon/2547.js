// https://www.acmicpc.net/problem/2547
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const t = Number(input.shift());
for (let i = 0; i < t; i++) {
  if (input[i] === '') {
    input.shift();
    continue;
  }
  let n = Number(input.shift());
  let sum = 0n;
  for (let j = 0; j < n; j++) {
    sum += BigInt(input.shift());
  }
  if (sum % BigInt(n) === 0n) console.log('YES');
  else console.log('No');
}
