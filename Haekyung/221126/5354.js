const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const answer = [];
for (let i = 1; i < input.length; i++) {
  let res = '';
  for (let j = 0; j < input[i]; j++) {
    if (j === 0) {
      res += '#'.repeat(input[i]) + '\n';
    } else if (j === input[i] - 1) {
      res += '#'.repeat(input[i]);
    } else {
      res += '#' + 'J'.repeat(input[i] - 2) + '#' + '\n';
    }
  }
  answer.push(res.trim());
}

console.log(answer.join('\n\n'));
