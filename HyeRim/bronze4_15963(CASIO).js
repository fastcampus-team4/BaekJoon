const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [a, b] = require('fs').readFileSync(filePath).toString().trim().split(' ');

console.log(a === b ? '1' : '0')