const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [basket1, basket2] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [A, B] = basket1.split(' ').map(Number)
const [C, D] = basket2.split(' ').map(Number)

console.log(A + D >= B + C ? B + C : A + D)