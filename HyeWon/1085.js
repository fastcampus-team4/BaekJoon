//https://www.acmicpc.net/problem/1085
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];

let answer = [];
answer.push(x, y, w - x, h - y);
answer = Math.min(...answer);
console.log(answer);
