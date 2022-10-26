// https://www.acmicpc.net/problem/11382
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

const res = A + B + C;
console.log(res);
