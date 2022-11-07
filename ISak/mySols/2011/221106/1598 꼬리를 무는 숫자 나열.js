const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const rowColof = (n) => {
  let row, col;

  row = (n - 1) % 4;
  col = parseInt((n - 1) / 4, 10);

  return [row, col];
};

const [r0, c0] = rowColof(input[0]);
const [r1, c1] = rowColof(input[1]);

console.log(Math.abs(r1 - r0) + Math.abs(c1 - c0));
