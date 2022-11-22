const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = Number(require('fs').readFileSync(filePath).toString());

console.log((input * input * Math.PI).toFixed(6));
console.log((2 * input * input).toFixed(6));
