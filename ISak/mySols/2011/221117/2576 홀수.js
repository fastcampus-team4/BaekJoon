const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let min = 100;
for (x of input) {
  if (x % 2 === 1) {
    sum += x;
    if (min > x) {
      min = x;
    }
  }
}
if (sum !== 0) {
  console.log(`${sum}\n${min}`);
} else {
  console.log(-1);
}
