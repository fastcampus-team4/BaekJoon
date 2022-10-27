const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].trim().split(' ').map(Number);

for(let i = 1; i <= N; i += 1) {
  let A = input[i].split(' ').map(Number);
  let B = input[N + i].split(' ').map(Number);

  let result = [];
  for(let j = 0; j < M; j += 1) {
    result.push(A[j] + B[j]);
  }
  console.log(result.join(' '))
}
