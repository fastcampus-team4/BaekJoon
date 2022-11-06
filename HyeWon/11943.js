// https://www.acmicpc.net/problem/11943
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const a = Number(input[0].split(' ').shift());
const b = Number(input[0].split(' ').pop());
const c = Number(input[1].split(' ').shift());
const d = Number(input[1].split(' ').pop());

let answer = a + d > b + c ? b + c : a + d;
console.log(answer);
