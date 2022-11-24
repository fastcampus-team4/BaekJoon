// https://www.acmicpc.net/problem/2959
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
input.sort((a, b) => a - b);
let answer = input[0] * input[2];
console.log(answer);
