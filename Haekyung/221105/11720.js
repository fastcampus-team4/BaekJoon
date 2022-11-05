const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(N) {
  const array = N[1].split('').map(Number);
  return array.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(N));
