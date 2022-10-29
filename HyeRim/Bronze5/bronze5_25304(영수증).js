const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const total = Number(input[0])
let sum = 0;

for(let i = 2; i < input.length; i += 1) {
  const a = input[i].split(' ').map(Number);
  sum += a[0] * a[1]; 
}

console.log(total === sum ? 'Yes' : 'No')