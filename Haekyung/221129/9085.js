const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 2; i < input.length; i += 2) {
  const res = input[i].trim().split(' ').map(Number);
  console.log(res.reduce((a, b) => a + b, 0));
}
