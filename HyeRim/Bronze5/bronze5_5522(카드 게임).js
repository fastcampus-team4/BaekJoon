const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let sum = 0;
for(let i = 0; i < input.length; i += 1) {
    sum += Number(input[i]);
}

console.log(sum);