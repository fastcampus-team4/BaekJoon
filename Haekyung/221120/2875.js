const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let [N, M, K] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let team = 0;
while (K > 0) {
  if (N % 2 !== 0) {
    K = K - 1;
    N = N - 1;
  }
  if (N / 2 >= M) {
    N = N - 2;
    K = K - 2;
  } else {
    M = M - 1;
    K = K - 1;
  }
}
team = Math.min(N / 2, M);

console.log(team);
