const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  const yout = input[i].trim().split(' ').map(Number);
  const bae = yout.filter((e) => e === 0).length;
  if (bae === 1) console.log('A');
  else if (bae === 2) console.log('B');
  else if (bae === 3) console.log('C');
  else if (bae === 4) console.log('D');
  else console.log('E');
}
