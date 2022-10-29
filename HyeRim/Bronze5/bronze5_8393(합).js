const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

let sum = 0;
for(let i = 1; i <= input; i += 1) {
  sum += i;
}

console.log(sum)