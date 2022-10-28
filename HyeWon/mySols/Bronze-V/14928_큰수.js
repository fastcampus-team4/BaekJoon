// https://www.acmicpc.net/problem/14928
const { format } = require('path');
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const N = BigInt(input);

console.log((N % BigInt(20000303)).toString());
