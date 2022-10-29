const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [A, B, C] = require('fs').readFileSync(filePath).toString().split(' ').map(Number);

console.log(`${(A + B) % C}\n${((A % C) + (B % C)) % C}\n${(A * B) % C}\n${((A % C) * (B % C)) % C}`)

