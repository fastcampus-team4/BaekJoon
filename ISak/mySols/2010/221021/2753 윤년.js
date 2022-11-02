const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
let input = require('fs').readFileSync(filePath).toString();

let A = parseInt(input);

function isYoon(A) {
  if (A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)) {
    return 1;
  } else {
    return 0;
  }
}

console.log(isYoon(A));
