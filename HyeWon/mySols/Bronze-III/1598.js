// https://www.acmicpc.net/problem/1598
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const [a, b] = [input[0], input[1]];
const width = Math.abs(parseInt((a - 1) / 4) + 1 - (parseInt((b - 1) / 4) + 1));
const height = Math.abs(((b - 1) % 4) - ((a - 1) % 4));
const answer = width + height;
console.log(answer);
