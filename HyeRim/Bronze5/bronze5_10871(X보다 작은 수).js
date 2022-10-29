const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split('\n');

const X = Number(input[0].split(' ')[1]);
const A = input[1].split(' ')

console.log(A.filter((x) => x < X).join(' '))