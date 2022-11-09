// https://www.acmicpc.net/problem/15700
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(BigInt);

const n = input[0];
const m = input[1];
const answer = BigInt((n * m) / 2n);
console.log(answer.toString());
