const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

input.sort((a, b) => a - b)

console.log(input.join(' '))