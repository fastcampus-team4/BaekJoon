const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [K, D, A] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('/')
  .map(Number);

if (K + A < D || D === 0) {
  console.log('hasu');
} else {
  console.log('gosu');
}
