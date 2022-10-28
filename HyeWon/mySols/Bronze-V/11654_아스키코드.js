// https://www.acmicpc.net/problem/11654
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

let str = input.toString();
const res = str.charCodeAt();

console.log(res);
