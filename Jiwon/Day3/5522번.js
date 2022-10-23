const fs = require("fs");
const inputData = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let sum = 0;

inputData.forEach((i) => (sum += i));
console.log(sum);
