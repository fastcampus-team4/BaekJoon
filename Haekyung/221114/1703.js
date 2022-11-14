const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// console.log(input)
const res = [];
for (let i = 0; i < input.length - 1; i++) {
  const tree = input[i].trim().split(' ').map(Number);
  let answer = 1;
  for (let j = 1; j < tree.length; j += 2) {
    answer = answer * tree[j] - tree[j + 1];
  }
  res.push(answer);
}
console.log(res.join('\n'));
