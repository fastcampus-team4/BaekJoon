const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const n = Number(input[0]);
const m = Number(input[1]);

const answer = Math.abs(n - m);
console.log(answer);
