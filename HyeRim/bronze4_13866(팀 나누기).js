const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [A, B, C, D] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);


console.log(Math.abs((A + D) - (B + C)))