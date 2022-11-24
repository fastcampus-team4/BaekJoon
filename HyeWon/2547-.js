// https://www.acmicpc.net/problem/2547
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const arr = input.filter((e) => e !== '').map(BigInt);
const t = Number(arr.shift());
let cnt = 0;
for (let i = 0; i < t; i++) {
  let n = arr[cnt];
  let tmp = n;
  cnt++;
  let sum = 0n;
  n += BigInt(cnt);
  while (cnt < n) {
    sum += arr[cnt];
    cnt++;
  }
  if (sum % tmp === 0n) console.log('YES');
  else console.log('No');
}
