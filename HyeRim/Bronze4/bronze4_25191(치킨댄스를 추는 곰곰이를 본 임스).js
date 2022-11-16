const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const [A, B] = input[1].split(' ').map(Number);

const chicken = Math.floor((A / 2) + (B / 1))
console.log(Math.min(N, chicken))