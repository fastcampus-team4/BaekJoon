// https://www.acmicpc.net/problem/15726
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

const res1 = Number((a * b) / c);
const res2 = Number((a / b) * c);
const answer = parseInt(Math.max(res1, res2));
console.log(answer);
