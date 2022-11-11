const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [A, B, C] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);


const answer = parseInt(Math.max((A * B) / C, (A / B) * C))

console.log(answer)