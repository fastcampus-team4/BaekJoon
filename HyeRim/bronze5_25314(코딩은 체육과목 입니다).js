const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

const n = Number(input);
console.log('long '.repeat(n / 4) + 'int')