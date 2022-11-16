const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [A, I] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const answer = A * (I - 1) + 1;
console.log(answer);
