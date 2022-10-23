// https://www.acmicpc.net/problem/1271

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const n = BigInt(input[0]);
const m = BigInt(input[1]);

console.log((n / m).toString());
console.log((n % m).toString());
