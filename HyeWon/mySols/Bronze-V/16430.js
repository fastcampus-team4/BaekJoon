// https://www.acmicpc.net/problem/16430
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(B - A, B);