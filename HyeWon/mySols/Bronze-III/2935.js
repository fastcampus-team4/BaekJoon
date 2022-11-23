// https://www.acmicpc.net/problem/2935
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [a, b] = [BigInt(input[0]), BigInt(input[2])];
const op = input[1];
if (op === '*') console.log((a * b).toString());
else if (op === '+') console.log((a + b).toString());
