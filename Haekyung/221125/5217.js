const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 1; i < input.length; i++) {
  let res = '';
  let nums = [];
  for (let j = 1; j < input[i]; j++) {
    for (let k = 1; k < input[i]; k++) {
      if (j + k === input[i] && j < k) {
        nums.push(`${j} ${k}`);
      }
    }
  }
  res = `Pairs for ${input[i]}: ${nums.join(', ')}`;
  console.log(res);
}
