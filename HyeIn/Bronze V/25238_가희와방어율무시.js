let filePath = process.platform === "linux" ? 0 : "example.txt";
let [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let defence = a - a * (b / 100);

if (a < 100 && b === 0) {
  console.log(1);
} else if (defence < 100 && a >= 100) {
  console.log(1);
} else if (a >= 100) {
  console.log(0);
}
