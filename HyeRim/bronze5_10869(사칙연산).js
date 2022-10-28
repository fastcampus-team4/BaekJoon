const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(`${A + B}\n${A - B}\n${A * B}\n${parseInt(A / B)}\n${A % B}`)