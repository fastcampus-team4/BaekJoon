// https://www.acmicpc.net/problem/11283
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const n = input[0];
const answer = n.charCodeAt() - 44031;
console.log(answer);
