const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [N, M, K] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(parseInt(K / M), K % M);

// const arr = [];
// let k = 0;
// for (i = 1; i <= N; i++) {
//   let n = [];
//   arr.push(n);
//   for (j = 1; j <= M; j++) {
//     let m = k;
//     n.push(m);
//     k += 1;
//   }
// }

// for (i = 0; i < arr.length; i++) {
//   if (arr[i].includes(K)) {
//     console.log(i, arr[i].indexOf(K));
//   }
// }
