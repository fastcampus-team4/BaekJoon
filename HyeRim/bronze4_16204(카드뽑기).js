const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [N, M, K] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);


console.log(Math.min(M , K) + Math.min(N - M, N - K))