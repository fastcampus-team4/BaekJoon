// https://www.acmicpc.net/problem/2739

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('');

const n = Number(input[0]);
const result = 0;

for (let i = 1; i <= 9; i += 1) {
  let result = n * i;
  console.log(`${n} * ${i} = ${result}`);
}
