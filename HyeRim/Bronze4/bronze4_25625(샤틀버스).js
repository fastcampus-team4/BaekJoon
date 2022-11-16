const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [x, y] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(x > y ? x + y : y - x)