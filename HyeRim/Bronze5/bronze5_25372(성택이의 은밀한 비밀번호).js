const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

console.log(input)

for(let i = 1; i < input.length; i += 1) {
  console.log(i);
  const inputLength = input[i].length;
  console.log((inputLength >= 6 && inputLength <= 9) ? 'yes' : 'no')
}
