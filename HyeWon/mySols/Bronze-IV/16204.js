// https://www.acmicpc.net/problem/16204s
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const n = input[0];
const m = input[1];
const k = input[2];

let answer = Math.min(m, k) + Math.min(n - m, n - k);
console.log(answer);
