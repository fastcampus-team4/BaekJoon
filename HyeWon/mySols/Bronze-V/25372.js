// https://www.acmicpc.net/problem/25372
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  if (input[i].length >= 6 && input[i].length <= 9) {
    console.log('yes');
  } else {
    console.log('no');
  }
}
