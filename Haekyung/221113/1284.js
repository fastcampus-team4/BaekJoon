const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const nums = input[i].trim();
  let sum = nums.length + 1;
  let zero = 0;
  one = 0;
  for (let x of nums) {
    if (x === '0') zero++;
    if (x === '1') one++;
  }
  sum = sum + zero * 4 + one * 2 + (nums.length - zero - one) * 3;
  console.log(sum);
}
