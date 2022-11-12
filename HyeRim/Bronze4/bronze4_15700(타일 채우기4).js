const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [N, M] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(BigInt);

let answer = BigInt(N * M / 2n);

console.log(answer.toString())
