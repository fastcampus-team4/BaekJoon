// https://www.acmicpc.net/problem/15964
const { format } = require('path');
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

const answer = (A + B) * (A - B);
console.log(answer);
