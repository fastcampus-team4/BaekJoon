const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [H1, M1, S1] = input[0].split(':').map(Number);
const [H2, M2, S2] = input[1].split(':').map(Number);
const time1 = H1 * 3600 + M1 * 60 + S1;
const time2 = H2 * 3600 + M2 * 60 + S2;
let H3 = 0,
  M3 = 0,
  S3 = 0;
if (time2 > time1) {
  const time = time2 - time1;
  H3 = Math.floor(time / 3600);
  M3 = Math.floor((time % 3600) / 60);
  S3 = time % 60;
} else {
  const time = 86400 + time2 - time1;
  H3 = Math.floor(time / 3600);
  M3 = Math.floor((time % 3600) / 60);
  S3 = time % 60;
}
console.log(
  `${String(H3).padStart(2, '0')}:${String(M3).padStart(2, '0')}:${String(
    S3
  ).padStart(2, '0')}`
);
