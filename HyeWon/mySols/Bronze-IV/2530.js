// https://www.acmicpc.net/problem/2530
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const time = input[0].split(' ').map(Number);
let A = Number(time[0]);
let B = Number(time[1]);
let C = Number(time[2]);
const D = Number(input[1]);

let second = C + D;

B = B + parseInt(second / 60);
second = parseInt(second % 60);

A = A + parseInt(B / 60);

B = parseInt(B % 60);
A = A % 24;

console.log(`${A} ${B} ${second}`);
