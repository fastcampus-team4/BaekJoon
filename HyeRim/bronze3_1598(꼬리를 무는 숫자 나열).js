const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [x, y] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const height = Math.abs(((x - 1) % 4) - ((y - 1) % 4));
const width = Math.abs((Math.floor((x - 1) / 4) - Math.floor((y - 1) / 4)));

console.log(height + width)
