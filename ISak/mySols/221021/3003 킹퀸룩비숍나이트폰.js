const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const correction = [1, 1, 2, 2, 2, 8];
input = input.map(Number);
let ans_string = '';
for (let i = 0; i < input.length; i++) {
  input[i] = correction[i] - input[i];
  ans_string += `${input[i]} `;
}

console.log(ans_string);
