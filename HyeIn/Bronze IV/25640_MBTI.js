let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
let answer = 0;
for (let i = 2; i < input.length; i++) {
  if (input[i] === input[0]) {
    answer++;
  }
}
console.log(answer);
