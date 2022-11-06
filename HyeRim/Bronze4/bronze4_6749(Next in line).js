const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split('\n').map(Number);

console.log(input)

const dif = input[1] - input[0]


console.log(input[1] + dif)