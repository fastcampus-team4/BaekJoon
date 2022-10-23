const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ');


let n1 = input[0];
let k1 = n1 * input[1];
let n2 = input[2];
let k2 = n2 * input[3];

console.log(k1 + k2);
