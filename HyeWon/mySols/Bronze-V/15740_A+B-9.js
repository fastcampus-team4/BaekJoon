// https://www.acmicpc.net/problem/15740
const { format } = require('path');
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const answer = (A + B).toString();
console.log(answer);
