const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(BigInt);

let A = input[0];
let B = input[1];
console.log(`${A * B}`);
