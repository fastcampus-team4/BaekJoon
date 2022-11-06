const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString();

if (input >= 90) {
  console.log('A');
} else if (input >= 80) {
  console.log('B');
} else if (input >= 70) {
  console.log('C');
} else if (input >= 60) {
  console.log('D');
} else {
  console.log('F');
}