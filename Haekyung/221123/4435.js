const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length - 1; i += 2) {
  const [a, b, c, d, e, f] = input[i].split(' ').map(Number);
  const [g, h, j, k, l, m, n] = input[i + 1].split(' ').map(Number);
  const G = a + b * 2 + 3 * (c + d) + e * 4 + f * 10;
  const S = g + 2 * (h + j + k) + 3 * l + 5 * m + 10 * n;
  if (G > S) console.log(`Battle ${(i + 1) / 2}: Good triumphs over Evil`);
  else if (G === S)
    console.log(`Battle ${(i + 1) / 2}: No victor on this battle field`);
  else console.log(`Battle ${(i + 1) / 2}: Evil eradicates all trace of Good`);
}
