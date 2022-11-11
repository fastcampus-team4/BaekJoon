const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const n = require('fs').readFileSync(filePath).toString().trim();

console.log(n);
console.log(1);
