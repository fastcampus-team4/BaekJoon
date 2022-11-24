// https://www.acmicpc.net/problem/2965
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const [a, b, c] = [input[0], input[1], input[2]];
const len1 = b - a;
const len2 = c - b;
let answer = 0;
if (len1 > len2) answer = len1;
else answer = len2;
console.log(answer - 1);
