const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();
let aS = 0,
  bS = 0;
for (let i = 0; i < n; i++) {
  let arr = input[i].split(' ').map(Number);
  const [a, b] = [arr[0], arr[1]];
  if (a > b) {
    aS++;
  } else if (a < b) bS++;
}
console.log(`${aS} ${bS}`);
