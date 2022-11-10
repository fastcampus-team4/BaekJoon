// https://www.acmicpc.net/problem/16486
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const d = input[0];
const r = input[1];
const pi = 3.141592;
const answer = 2 * pi * r + 2 * d;
console.log(answer);
