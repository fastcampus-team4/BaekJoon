let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el.trim()));
let answer = 0;

if (Math.sign(input[0]) === -1) {
  answer += Math.abs(input[0]) * input[2] + input[3] + input[4] * input[1];
} else if (Math.sign(input[0]) === 1) {
  answer += (input[1] - input[0]) * input[4];
}
console.log(answer);
