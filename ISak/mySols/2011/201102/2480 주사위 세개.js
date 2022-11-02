const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

let A = input[0];
let B = input[1];
let C = input[2];

if (A === B && B === C) {
  console.log(10000 + A * 1000);
} else if (A == B) {
  console.log(1000 + A * 100);
} else if (B == C) {
  console.log(1000 + B * 100);
} else if (C == A) {
  console.log(1000 + C * 100);
} else {
  console.log(Math.max(...input) * 100);
}
