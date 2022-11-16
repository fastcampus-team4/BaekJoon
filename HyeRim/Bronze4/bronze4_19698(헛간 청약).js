const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [N, W, H, L] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const a = Math.floor(W / L)
const b = Math.floor(H / L)
let answer = a * b

console.log(answer < N ? answer : N)