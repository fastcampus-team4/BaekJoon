const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].trim().split(' ').map(Number);
  console.log(`Case ${i}: ${a + b}`);
}
