// https://www.acmicpc.net/problem/2558

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

const aws = a + b;
console.log(aws);
