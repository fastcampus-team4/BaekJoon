//https://www.acmicpc.net/problem/25628
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const a = input[0];
const b = input[1];

const answer = Math.min(Math.floor(a / 2), b);
console.log(answer);
