const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ');

for(let i = 0; i < input.length; i += 1) {
  console.log(i);
  console.log(input[i] * input[i] % input.length);
}