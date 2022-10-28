const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(Number);

let ans = 0;

input.forEach((v, i) => {
  ans += v * v;
});

console.log(ans % 10);
