// https://www.acmicpc.net/problem/14581
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const answer = `:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`;
console.log(answer);
