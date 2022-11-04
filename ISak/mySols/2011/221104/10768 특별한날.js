const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let [m, d] = input;

let days = m * 30 + d;

if (days > 78) {
  console.log("After");
} else if (days < 78) {
  console.log("Before");
} else {
  console.log("Special");
}
