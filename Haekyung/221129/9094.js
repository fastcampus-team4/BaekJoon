const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  const [n, m] = input[i].trim().split(' ').map(Number);
  let cnt = 0;
  for (let b = 1; b < n; b++) {
    for (let a = 1; a < b; a++) {
      if (
        Math.floor((a * a + b * b + m) / (a * b)) ===
        (a * a + b * b + m) / (a * b)
      )
        cnt++;
    }
  }
  console.log(cnt);
}
