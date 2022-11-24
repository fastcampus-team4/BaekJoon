const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [B, N] = input[i].split(' ').map(Number);
  const root = Math.pow(B, 1 / N);
  const A1 = Math.floor(root);
  const A2 = Math.ceil(root);

  if (B - Math.pow(A1, N) < Math.pow(A2, N) - B) console.log(A1);
  else console.log(A2);
}
