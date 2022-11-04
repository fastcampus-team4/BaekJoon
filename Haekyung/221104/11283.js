const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();
console.log(N.charCodeAt(0) - 44031);

console.log(String.fromCharCode(1 + 44031));
