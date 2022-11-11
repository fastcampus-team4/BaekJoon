//https://www.acmicpc.net/problem/11282
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split(' ').map(Number);

const n = input[0];
const answer = String.fromCharCode(n + 44031);
console.log(answer);
