// https://www.acmicpc.net/problem/5338
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('');

let answer = '';

answer += `       _.-;;-._\n`;
answer += `'-..-'|   ||   |\n`;
answer += `'-..-'|_.-;;-._|\n`;
answer += `'-..-'|   ||   |\n`;
answer += `'-..-'|_.-''-._|`;

console.log(answer);
