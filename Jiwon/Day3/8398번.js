const { SlowBuffer } = require("buffer");
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();

const number = Number(inputData);
let answer = 0;

for (let i = 1; i <= number; i++) {
  answer += i;
}

console.log(answer);
