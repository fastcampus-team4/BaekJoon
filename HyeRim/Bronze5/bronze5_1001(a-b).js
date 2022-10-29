const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a - b);