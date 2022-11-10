let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
let p = input[0];
let apple = input[1][0];
let answer = 0;
for (let i = 0; i < p.length; i++) {
  if (p[i] === apple) {
    answer += i + 1;
  }
}
console.log(answer);
