// https://www.acmicpc.net/problem/20492
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const N = Number(input);

const answer1 = N * (1 - 0.22);
const answer2 = N * 0.8 + N * (1 - 0.8) * (1 - 0.22);
console.log(answer1, answer2);
