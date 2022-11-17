// https://www.acmicpc.net/problem/2061
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(BigInt);
// const [K, L] = [input[0], input[1]];
const [K, L] = [BigInt(input[0]), Number(input[1])];
let answer = '';

for (let i = 2n; i < L; i++) {
  if (K % i === 0n) {
    answer = `BAD ${i}`;
    break;
  } else {
    answer = 'GOOD';
  }
}
console.log(answer);
