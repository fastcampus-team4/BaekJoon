const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
console.log(a - b);
