// https://www.acmicpc.net/problem/3046
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const R1 = Number(input[0]);
const S = Number(input[1]);

const R2 = 2 * S - R1;
console.log(R2);
