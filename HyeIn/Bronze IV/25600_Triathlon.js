let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
let answer = [];
for (let i = 1; i < input.length; i++) {
  a = input[i][0];
  d = input[i][1];
  g = input[i][2];
  if (a === d + g) {
    answer.push(a * (d + g) * 2);
  } else {
    answer.push(a * (d + g));
  }
}
console.log(Math.max(...answer));
