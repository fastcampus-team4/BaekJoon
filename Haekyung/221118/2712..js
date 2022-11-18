const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

console.log(input);
for (let i = 1; i <= input[0]; i++) {
  const num = Number(input[i].trim().split(' ')[0]);
  const unit = input[i].trim().split(' ')[1];
  if (unit === 'kg')
    console.log(((num * 2.2046 * 10000) / 10000).toFixed(4), 'lb');
  else if (unit === 'l')
    console.log(((num * 0.2642 * 10000) / 10000).toFixed(4), 'g');
  else if (unit === 'lb')
    console.log(((num * 0.4536 * 10000) / 10000).toFixed(4), 'kg');
  else console.log(((num * 3.7854 * 10000) / 10000).toFixed(4), 'l');
}
