// https://www.acmicpc.net/problem/25191
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());
const newInput = input[0].split(' ').map(Number);
const a = newInput[0];
const b = newInput[1];

const answer = Math.min(n, Math.floor(a / 2) + b);
console.log(answer);
