const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

let bin = '0b' + input;
const answer = (BigInt(bin) * 17n).toString(2)

console.log(answer)