// https://www.acmicpc.net/problem/14924
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const [s, t, d] = input;

const f = (d / (s * 2)) * t;
console.log(f);
