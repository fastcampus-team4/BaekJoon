const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = input.reduce((a, c) => a + c, 0);
let [A, B, C] = input;

if (A === 60 && B === 60 && C === 60) {
  console.log("Equilateral");
} else if (sum === 180) {
  if (A === B || B === C || C === A) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}
