const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [S, T, D] = require('fs').readFileSync(filePath).toString().trim().split(' ');

console.log((D / (S * 2)) * T)





