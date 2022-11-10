// https://www.acmicpc.net/problem/17356
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const a = input[0];
const b = input[1];
const m = (b - a) / 400;
const answer = 1 / (1 + Math.pow(10, m));
console.log(answer);
