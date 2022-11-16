const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [H, W, N, M] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const a = Math.ceil(H / (N + 1));
const b = Math.ceil(W / (M + 1));

console.log(a * b)