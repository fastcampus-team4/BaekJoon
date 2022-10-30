const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

const arr = [];
for (i = 0; i < N.length - 1; i++) {
  arr.push(N[i].trim());
}
for (j = 0; j < arr.length; j++) {
  if (arr[j].split(' ')[1] > 17 || arr[j].split(' ')[2] >= 80) {
    console.log(`${arr[j].split(' ')[0]} Senior`);
  } else console.log(`${arr[j].split(' ')[0]} Junior`);
}
