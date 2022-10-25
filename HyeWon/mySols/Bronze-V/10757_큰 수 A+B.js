// https://www.acmicpc.net/problem/10757
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const answer = String(A + B);
console.log(answer);
