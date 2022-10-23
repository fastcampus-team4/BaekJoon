// https://www.acmicpc.net/problem/5339
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('');

let answer = '';

answer += `     /~\\\n`;
answer += `    ( oo|\n`;
answer += `    _\\=/_\n`;
answer += `   /  _  \\\n`;
answer += `  //|/.\\|\\\\\n`;
answer += ` ||  \\ /  ||\n`;
answer += `============\n`;
answer += `|          |\n`;
answer += `|          |\n`;
answer += `|          |`;

console.log(answer);
