const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  let res = input[i].split('');
  res.splice(0, 1, res[0].toUpperCase());
  console.log(res.join(''));
}
