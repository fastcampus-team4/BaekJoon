// https://www.acmicpc.net/problem/10872
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const N = Number(input);

function factorial(n) {
  if (n === 0) {
    return 1;
  } else if (n < 2) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(N));
