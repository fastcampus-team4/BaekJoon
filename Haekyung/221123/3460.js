const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
for (let i = 1; i < input.length; i++) {
  const n = input[i].toString(2);
  const R = n.split('').reverse();
  const res = [];
  R.forEach((e, index) => {
    if (e === '1') res.push(index);
  });
  console.log(res.join(' '));
}
