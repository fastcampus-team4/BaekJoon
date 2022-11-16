let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map(Number);
let answer = 0;
if (input.length === 4) {
  answer += 20;
} else {
  if (input[0] === 1 && input[1] === 0) {
    answer += 10 + input[2];
  } else if (input[1] === 1 && input[2] === 0) {
    answer += input[0] + 10;
  } else {
    answer = input[0] + input[1];
  }
}
console.log(answer);
