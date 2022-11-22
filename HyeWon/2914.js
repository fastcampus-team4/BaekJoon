// https://www.acmicpc.net/problem/2914
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const [a, i] = [input[0], input[1]];
const answer = a * (i - 1) + 1;
console.log(answer);
