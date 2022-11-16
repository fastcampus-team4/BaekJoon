const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [N, M] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);


console.log(Math.floor(Math.min(N, M) / 2));