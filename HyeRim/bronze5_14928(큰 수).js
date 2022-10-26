const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().map(BigInt);

const N = input;
const num = 20000303;

console.log(N % num)
