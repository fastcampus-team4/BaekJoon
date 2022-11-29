// https://www.acmicpc.net/problem/5217
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const t = input.shift();
for (let i = 0; i < t; i++) {
  let arr = [];
  for (let j = 1; j < input[i]; j++) {
    for (let k = j; k < input[i]; k++) {
      if (j !== k && j < k && input[i] === j + k) arr.push(`${j} ${k}`);
    }
  }
  console.log(`Pairs for ${input[i]}: ${arr.join(', ')}`);
}
