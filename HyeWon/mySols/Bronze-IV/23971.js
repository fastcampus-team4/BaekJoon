// https://www.acmicpc.net/problem/23971
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const h = input[0]; // 행
const w = input[1]; // 열
const n = input[2];
const m = input[3];

let row = Math.ceil(h / (n + 1));
let column = Math.ceil(w / (m + 1));

const answer = row * column;
console.log(answer);
