// https://www.acmicpc.net/problem/1008

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split(' ');
input = ['1', '3'];

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a / b);
