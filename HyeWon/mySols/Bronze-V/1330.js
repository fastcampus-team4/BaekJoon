// https://www.acmicpc.net/problem/1330

const filePath = process.platform === 'linus' ? 0 : './input.txt';
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else {
  console.log('==');
}
