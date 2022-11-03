// https://www.acmicpc.net/problem/2752
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const answer = input.sort((a, b) => a - b);

console.log(...answer);
