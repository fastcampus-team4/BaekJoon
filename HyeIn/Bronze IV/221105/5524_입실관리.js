let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().toLowerCase());

let answer = "";
for (let i = 1; i < input.length; i++) {
  answer += input[i] + "\n";
}
console.log(answer);
