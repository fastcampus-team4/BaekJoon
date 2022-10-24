const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (i = 1; i <= input[0]; i++) {
  let char = input[i].trim();
  let last = char.length - 1;
  // console.log(last)
  console.log(`${input[i][0]}${input[i][last]}`);
}
