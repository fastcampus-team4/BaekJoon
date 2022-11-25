// https://www.acmicpc.net/problem/3053
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = 1; // Number(input);
console.log((n * Math.PI).toFixed(6));
