const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

let [N, M, K] = input;

const col = K % M;
const row = parseInt(K / M, 10);
console.log(row, col);
