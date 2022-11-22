const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const array = new Array(26).fill().map((_, i) => String.fromCharCode(i + 65));

for (let i = 1; i <= input[0]; i++) {
  const res = [];
  array.forEach((e) => {
    if (input[i].indexOf(e) === -1) res.push(e.charCodeAt());
  });

  console.log(res.reduce((a, b) => a + b, 0));
}
