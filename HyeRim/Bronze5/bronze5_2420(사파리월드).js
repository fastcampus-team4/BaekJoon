const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ');

const a = input[0];
const b = input[1];

console.log(Math.abs(a - b));