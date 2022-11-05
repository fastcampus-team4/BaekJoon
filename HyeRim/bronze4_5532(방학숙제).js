const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split('\n').map(Number);

const L = input[0];
const A = input[1];
const B = input[2];
const C = input[3];
const D = input[4];

const lang = Math.ceil(A / C);
const math = Math.ceil(B / D);

console.log(lang > math ? L - lang : L - math)


