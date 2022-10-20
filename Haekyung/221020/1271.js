const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

console.log(input[0] / input[1] + '\n' + (input[0] % input[1]));
