// https://www.acmicpc.net/problem/14652
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const N = input[0];
const M = input[1];
const K = input[2];

console.log(parseInt(K / M), K % M);
