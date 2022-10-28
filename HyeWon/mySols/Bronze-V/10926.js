// https://www.acmicpc.net/problem/10926
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

console.log(`${input}??!`);
