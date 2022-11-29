const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const t = input.shift();
for (let i = 0; i < t; i++) {
  let arr = input[i].split(' ').map(Number);
  const [a, b, c, d, e] = [arr[0], arr[1], arr[2], arr[3], arr[4]];
  let sum = (350.34 * a + 230.9 * b + 190.55 * c + 125.3 * d + 180.9 * e).toFixed(2);
  console.log(`$${sum}`);
}
