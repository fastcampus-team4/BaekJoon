// https://www.acmicpc.net/problem/13277
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const res = (A * B).toString();

console.log(res);
