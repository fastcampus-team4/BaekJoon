// https://www.acmicpc.net/problem/14681
const { format } = require('path');
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const x = Number(input[0]);
const y = Number(input[1]);
let answer = 0;

if (x > 0 && y > 0) {
  answer = 1;
} else if (x < 0 && y > 0) {
  answer = 2;
} else if (x < 0 && y < 0) {
  answer = 3;
} else if (x > 0 && y < 0) {
  answer = 4;
}

console.log(answer);
