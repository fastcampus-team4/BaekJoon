const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [N, K] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let cnt = 0;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) cnt++;
  if (cnt === K) {
    console.log(i);
    return;
  }
}

if (cnt < K) console.log(0);
