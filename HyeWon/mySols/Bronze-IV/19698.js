// https://www.acmicpc.net/problem/19698
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const n = input[0];
const w = input[1];
const h = input[2];
const l = input[3];

const answer = Math.floor(w / l) * Math.floor(h / l);
if (answer <= n) console.log(answer);
else console.log(n);
