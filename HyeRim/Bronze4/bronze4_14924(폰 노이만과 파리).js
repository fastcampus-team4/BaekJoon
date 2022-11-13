const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [B1, B2] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const answer = (BigInt('0b' + B1) * BigInt('0b' + B2)).toString(2)
console.log(answer)



