// https://www.acmicpc.net/problem/1247
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(BigInt);

// ✨ 시간 초과 나옴
// for (let i = 0; i < 3; i++) {
//   let n = input.shift();
//   let sum = 0n;
//   for (let j = 0; j < n; j++) {
//     sum += input.shift()
//   }
//   if (sum === 0n) console.log(0);
//   else if (sum > 0) console.log('+');
//   else if (sum < 0) console.log('-');
// }

let n = 0n;
for (let j = 0; j < 3; j++) {
  let sum = 0n;
  for (let i = n + 1n; i < n + input[n] + 1n; i++) {
    sum += input[i];
  }
  sum === 0n ? console.log('0') : sum > 0 ? console.log('+') : console.log('-');
  n += input[n] + 1n;
}
