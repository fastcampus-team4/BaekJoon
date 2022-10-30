// https://www.acmicpc.net/problem/25304
const { log } = require('console');

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const X = Number(input.shift());
const N = Number(input.shift());

const re = input.map((e) => e.trim().split(' '));

let answer = 0;
for (let i = 0; i < re.length; i++) {
  answer += Number(re[i][0]) * Number(re[i][1]);
}

if (X === answer) {
  console.log('Yes');
} else {
  console.log('No');
}
