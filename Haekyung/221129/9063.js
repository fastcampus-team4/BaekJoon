const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let x = [];
let y = [];

for (let i = 1; i < input.length; i++) {
  if (input[0] === 1) {
    console.log(0);
    return;
  }
  const [a, b] = input[i].trim().split(' ').map(Number);

  x.push(a);
  y.push(b);
}
console.log(
  (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
);
