const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [H, M, S] = N[0].split(' ').map(Number);
let D = Number(N[1]);
let sum = S + D;
// console.log(sum);
M = M + parseInt(sum / 60);
sum = sum % 60;
H = H + parseInt(M / 60, 10);
M = M % 60;
H = H % 24;
console.log(H, M, sum);
