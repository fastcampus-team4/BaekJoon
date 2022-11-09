const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const n = require('fs').readFileSync(filePath).toString().trim();

// console.log(n);

if (n % 8 === 1) {
  console.log(1);
} else if (n % 8 === 2 || n % 8 === 0) {
  console.log(2);
} else if (n % 8 === 3 || n % 8 === 7) {
  console.log(3);
} else if (n % 8 === 4 || n % 8 === 6) {
  console.log(4);
} else {
  console.log(5);
}
