const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

console.log(`${input * 0.78} ${(input * 0.8) + (input * 0.2 * 0.78)}`)