const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');

// console.log(input);
const newArr = input.map((elem) => elem * elem);
console.log(newArr.reduce((prev, cur) => prev + cur, 0) % 10);
