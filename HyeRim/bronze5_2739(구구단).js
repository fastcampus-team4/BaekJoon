const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

let num = parseInt(input);

for(let i = 1; i <= 9; i += 1) {
  console.log(`${num} * ${i} = ${num * i}`);
}