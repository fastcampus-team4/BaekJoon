const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(Number);

const a = input[0];
const b = input[1];
console.log(a + b);
