const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
const b = input[1].split(' ').map(Number);

console.log(a)
console.log(b)

console.log(`${b[0] - a[2]} ${b[1] / a[1]} ${b[2] - a[0]}`)