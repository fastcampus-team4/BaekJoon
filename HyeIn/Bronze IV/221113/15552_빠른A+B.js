let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" "));
let answer = [];
for (let i = 1; i < input.length; i++) {
  answer.push(Number(input[i][0]) + Number(input[i][1]));
}
console.log(answer.join("\n"));
