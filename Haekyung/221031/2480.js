const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split(' ');

let a = parseInt(N[0]);
let b = parseInt(N[1]);
let c = parseInt(N[2]);

if ((a == b) & (a != c) || (a == c) & (a != b)) {
  console.log(1000 + a * 100);
} else if ((b == c) & (a != b)) {
  console.log(1000 + b * 100);
} else if ((a == b) & (a == c)) {
  console.log(10000 + a * 1000);
} else {
  console.log(Math.max(a, b, c) * 100);
}
