const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ').map(Number);

const R1 = input[0]
const S = input[1]

const avr = (2 * S) - R1
console.log(avr);
