const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [x, y, w, h] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const array = [x, w-x, y, h-y];
const answer = Math.min(...array);
console.log(answer)