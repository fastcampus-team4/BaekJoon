// https://www.acmicpc.net/problem/5565
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const sum = input.shift();
const answer = sum - input.reduce((acc, cur) => acc + cur, 0);
console.log(answer);
