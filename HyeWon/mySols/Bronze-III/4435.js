// https://www.acmicpc.net/problem/4435
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const t = Number(input.shift());

let res1 = [];
let res2 = [];

for (let i = 0; i < input.length; i += 2) {
  let arr = input[i].split(' ').map(Number);
  let sum1 = arr[0] * 1 + arr[1] * 2 + arr[2] * 3 + arr[3] * 3 + arr[4] * 4 + arr[5] * 10;
  res1.push(sum1);
}

for (let i = 1; i < input.length; i += 2) {
  let arr = input[i].split(' ').map(Number);
  let sum2 = arr[0] * 1 + arr[1] * 2 + arr[2] * 2 + arr[3] * 2 + arr[4] * 3 + arr[5] * 5 + arr[6] * 10;
  res2.push(sum2);
}

for (let i = 0; i < t; i++) {
  if (res1[i] > res2[i]) console.log(`Battle ${i + 1}: Good triumphs over Evil`);
  else if (res1[i] < res2[i]) console.log(`Battle ${i + 1}: Evil eradicates all trace of Good`);
  else console.log(`Battle ${i + 1}: No victor on this battle field`);
}
