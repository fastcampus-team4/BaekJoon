const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim();

const answer = String.fromCharCode(Number(input) + 44031)
console.log(answer)
