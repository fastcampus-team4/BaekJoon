const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

console.log(input);

const b = BigInt(input[1])
const c = BigInt(input[2])

console.log((b * c).toString())