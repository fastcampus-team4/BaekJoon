const filePath = process.platform === 'linux' ? 0 : './test.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

console.log(a);
console.log(b);
console.log(c);
