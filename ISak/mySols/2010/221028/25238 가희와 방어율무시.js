const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [a, b] = input;

let defRate = a - (a * b) / 100;

if (defRate >= 100) {
  console.log(0);
} else {
  console.log(1);
}
