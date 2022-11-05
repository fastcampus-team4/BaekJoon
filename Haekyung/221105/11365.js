const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(N) {
  const res = [];
  for (i = 0; i < N.length - 1; i++) {
    res.push(N[i].trim().split('').reverse().join(''));
  }
  return res.join('\n');
}

console.log(solution(N));
