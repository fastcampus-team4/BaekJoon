// https://www.acmicpc.net/problem/25591
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

let a = 100 - input[0];
let b = 100 - input[1];
let c = 100 - (a + b);
let d = a * b;
let q = Math.floor(d / 100);
let r = d % 100;
let n = c + q;
let m = r;
console.log(`${a} ${b} ${c} ${d} ${q} ${r}`);
console.log(`${n} ${m}`);
