const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

const A = N[0].trim().split(' ').map(Number);
const B = N[1].trim().split(' ').map(Number);
const C = N[2].trim().split(' ').map(Number);

function time(X) {
  let [h, m, s] = [0, 0, 0];
  if (X[5] - X[2] >= 0) {
    s = X[5] - X[2];
  } else {
    s = X[5] + 60 - X[2];
    m--;
  }
  if (m + X[4] - X[1] >= 0) {
    m = m + X[4] - X[1];
  } else {
    m = m + X[4] - X[1] + 60;
    h--;
  }
  h = h + X[3] - X[0];
  return console.log([h, m, s].join(' '));
}

time(A);
time(B);
time(C);
