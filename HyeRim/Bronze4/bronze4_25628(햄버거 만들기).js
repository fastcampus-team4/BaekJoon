const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [A, B] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number)

const bread = Math.floor(A / 2)

console.log(Math.min(bread, B))


