// https://www.acmicpc.net/problem/9086
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

// console.log(input[0][input[0].length - 1]); 배열 마지막 인덱스 가져오는 방법

for (let i = 0; i < n; i++) {
  let first_char = input[i][0];
  let last_char = input[i].slice(-1);
  console.log(`${first_char}${last_char}`);
}
