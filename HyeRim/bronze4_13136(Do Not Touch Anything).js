const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [R, C, N] = require('fs').readFileSync(filePath).toString().trim().split(' ');

const a = Math.ceil(R / N)
const b = Math.ceil(C / N)

console.log(a * b)


