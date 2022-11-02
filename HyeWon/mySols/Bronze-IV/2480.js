const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');
// console.log(input);
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

let answer = 0;
if (a === b && b === c && a === c) {
  answer = 10000 + a * 1000;
} else if (a !== b && b !== c && a !== c) {
  const sort = input.sort((a, b) => a - b);
  answer = sort.pop() * 100;
} else if (a !== b || b !== c || a !== c) {
  if (a === b || a === c) {
    answer = 1000 + a * 100;
  } else if (b === c) {
    answer = 1000 + b * 100;
  }
}
console.log(answer);
