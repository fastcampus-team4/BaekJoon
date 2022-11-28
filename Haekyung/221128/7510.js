const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const res = [];
for (let i = 1; i < input.length; i++) {
  const [a, b, c] = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  if (c * c === a * a + b * b) {
    res.push(`Scenario #${i}:\nyes`);
  } else {
    res.push(`Scenario #${i}:\nno`);
  }
}
console.log(res.join('\n\n'));
