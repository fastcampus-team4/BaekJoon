let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);
let answer = 0;

if (a + b < c * 2) {
  answer += a + b;
} else {
  answer += a + b - c * 2;
}
console.log(answer);
