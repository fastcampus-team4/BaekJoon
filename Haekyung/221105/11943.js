const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [A, B] = N[0].split(' ').map(Number);
const [C, D] = N[1].split(' ').map(Number);

console.log(Math.min(A + D, B + C));
