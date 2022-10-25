// https://www.acmicpc.net/problem/10871
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const newInput = input.shift().split(' ');

const A = input.toString().split(' ');
const N = Number(newInput[0]);
const X = Number(newInput[1]);

let res = '';
for (let i = 0; i < A.length; i++) {
  if (X > A[i]) {
    res += `${A[i]} `;
  }
}
console.log(res);
