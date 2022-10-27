// https://www.acmicpc.net/problem/15727
const { format } = require('path');
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const L = Number(input);
const answer = Math.ceil(L / 5);

console.log(answer);
