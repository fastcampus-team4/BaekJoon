const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

console.log(`${input[1] - input[0]} ${input[1]}`)