// https://www.acmicpc.net/problem/2475

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

let result = input.map((i) => {
  return i * i;
});

let sum = 0;
for (i = 0; i < result.length; i++) {
  sum += result[i];
}

console.log(i % 10);
