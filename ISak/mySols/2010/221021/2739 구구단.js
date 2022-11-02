const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
let input = require('fs').readFileSync(filePath).toString();

const N = parseInt(input);

for (let i = 1; i < 10; i++) {
  console.log(`${N} * ${i} = ${i * N}`);
}
