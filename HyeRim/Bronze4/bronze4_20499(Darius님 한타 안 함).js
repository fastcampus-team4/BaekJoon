const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [K, D, A] = require('fs').readFileSync(filePath).toString().trim().split('/').map(Number);

console.log(K + A < D || D === 0 ? "hasu" : "gosu")