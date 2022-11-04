const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();

const cnt = {};
for (i = 97; i < 123; i++) {
  cnt[String.fromCharCode(i)] = 0;
}
for (x of N) {
  cnt[x]++;
}
console.log(Object.values(cnt).join(' '));
