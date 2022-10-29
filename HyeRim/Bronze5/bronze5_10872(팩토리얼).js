const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

let result = 1;

for(let i = 1; i <= input; i += 1) {
  result *= i;
}

console.log(result)