const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const t = input.shift();
for (let i = 0; i < t; i++) {
  const n = input[i];
  let arr = '';
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (j === 0 || k === 0 || j === n - 1 || k === n - 1) arr += '#';
      else arr += 'J';
    }
    arr += '\n';
  }
  console.log(arr);
}
