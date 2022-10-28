const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString();

// console.log(input);
const alphabet = [];
for (i = 97; i < 123; i++) {
  alphabet.push(String.fromCharCode(i));
}
// console.log(alphabet);
const res = [];
alphabet.forEach((ele) => {
  // if (input.includes(ele)) {
  res.push(input.indexOf(ele));
  // } else res.push(-1);
});
console.log(...res);
