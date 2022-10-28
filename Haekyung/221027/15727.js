const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const L = require('fs').readFileSync(filePath).toString().trim();

console.log(Math.ceil(L / 5));
