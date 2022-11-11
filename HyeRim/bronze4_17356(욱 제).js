const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [a, b] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const M = (b - a) / 400
const answer = 1 / (1 + Math.pow(10, M))
console.log(answer)