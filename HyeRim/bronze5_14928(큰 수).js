const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim();

const N = BigInt(input);
const num = BigInt(20000303);

console.log((N % num).toString())
