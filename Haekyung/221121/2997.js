const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(Number);

input.sort((a, b) => a - b);

if (input[2] - input[1] === input[1] - input[0]) {
  if (input[2] * 2 - input[1] <= 100) console.log(input[2] * 2 - input[1]);
  else console.log(input[0] * 2 - input[1]);
} else {
  const min = Math.min(input[2] - input[1], input[1] - input[0]);
  if (input[2] - min === input[1]) console.log(input[1] - min);
  else console.log(input[2] - min);
}
