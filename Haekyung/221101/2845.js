const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [L, P] = N[0].split(' ').map(Number);
const people = L * P;

const res = [];
for (i = 0; i < 5; i++) {
  res.push(N[1].split(' ').map(Number)[i] - people);
}

console.log(...res);
