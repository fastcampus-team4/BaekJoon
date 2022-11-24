// https://www.acmicpc.net/problem/2985
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const [a, b, c] = [input[0], input[1], input[2]];
if (a + b === c) {
  console.log(`${a}+${b}=${c}`);
} else if (a - b === c) {
  console.log(`${a}-${b}=${c}`);
} else if (a * b === c) {
  console.log(`${a}*${b}=${c}`);
} else if (a / b === c) {
  console.log(`${a}/${b}=${c}`);
} else if (a === b + c) {
  console.log(`${a}=${b}+${c}`);
} else if (a === b - c) {
  console.log(`${a}=${b}-${c}`);
} else if (a === b * c) {
  console.log(`${a}=${b}*${c}`);
} else if (a === b / c) {
  console.log(`${a}=${b}/${c}`);
}
