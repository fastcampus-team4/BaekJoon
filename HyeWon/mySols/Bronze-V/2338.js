// https://www.acmicpc.net/problem/2338

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const a = BigInt(input[0]);
const b = BigInt(input[1]);

console.log((a + b).toString());
console.log((a - b).toString());
console.log((a * b).toString());
